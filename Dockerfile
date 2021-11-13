# Dependency stage
FROM node:alpine AS deps
WORKDIR /app
COPY package.json ./
RUN npm install --frozen-lockfile

# Build stage
FROM node:alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

# Run stage
FROM node:alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY ./.env.production.local .
EXPOSE 3000
CMD ["npm", "run", "start"]
