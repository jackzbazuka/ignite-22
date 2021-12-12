import PageContainer from "@/components/PageContainer";
import NavContainer from "@/components/NavContainer";
import NavLink from "@/components/NavLink";
import FloatingLogo from "@/components/FloatingLogo";
import Footer from "@/components/footer";
import SponsorsCmp from "@/components/SponsorsCmp";

export default function Sponsors() {
  const container = {
    hidden: {
      opacity: 0.1,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 2,
      },
    },
  };

  return (
    <div className="h-full flex flex-row">
      <NavContainer>
        <NavLink page="home" edge="left" />
        <NavLink page="about" edge="" />
        <NavLink page="events" edge="" />
        <NavLink page="sponsors" edge="right" />
      </NavContainer>
      <PageContainer>
        <FloatingLogo />
        <div className="container">
          <div className="title  ">
            <h1 className=" font-extrabold text-5xl text-center">
              Title Sponsers
            </h1>
            <div className="flex item-center justify-center  p-5">
			<SponsorsCmp title='Geeks for Geeks' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae dolores deserunt ea doloremque natus error, rerum quas
                    odio quaerat nam ex commodi hic, suscipit in a veritatis
                    pariatur minus consequuntur!' url='www.geeksforgeeks.com' imgurl='https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png' />
			<SponsorsCmp title='Canva' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae dolores deserunt ea doloremque natus error, rerum quas
                    odio quaerat nam ex commodi hic, suscipit in a veritatis
                    pariatur minus consequuntur!' url='www.geeksforgeeks.com' imgurl='https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/2b/80/bf/2b80bf51-f1f7-e46c-6f4a-03b745c086c7/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png' />              
               
            </div>
          </div>
          <div className="title ">
            <h1 className=" font-extrabold text-5xl text-center">
              #2 Sponsers
            </h1>
			<div className="flex item-center justify-center  p-5">
			<SponsorsCmp title='Google!' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae dolores deserunt ea doloremque natus error, rerum quas
                    odio quaerat nam ex commodi hic, suscipit in a veritatis
                    pariatur minus consequuntur!' url='www.geeksforgeeks.com' imgurl='https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip' />
			<SponsorsCmp title='Canva' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae dolores deserunt ea doloremque natus error, rerum quas
                    odio quaerat nam ex commodi hic, suscipit in a veritatis
                    pariatur minus consequuntur!' url='www.geeksforgeeks.com' imgurl='https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/2b/80/bf/2b80bf51-f1f7-e46c-6f4a-03b745c086c7/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png' />              
               
            </div>
          </div>
          <div className="title ">
            <h1 className=" font-extrabold text-5xl text-center">
              #3 Sponsers
            </h1>
			<div className="flex item-center justify-center  p-5">
			<SponsorsCmp title='Geeks for Geeks' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae dolores deserunt ea doloremque natus error, rerum quas
                    odio quaerat nam ex commodi hic, suscipit in a veritatis
                    pariatur minus consequuntur!' url='www.geeksforgeeks.com' imgurl='https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png' />
			<SponsorsCmp title='Canva' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae dolores deserunt ea doloremque natus error, rerum quas
                    odio quaerat nam ex commodi hic, suscipit in a veritatis
                    pariatur minus consequuntur!' url='www.geeksforgeeks.com' imgurl='https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/2b/80/bf/2b80bf51-f1f7-e46c-6f4a-03b745c086c7/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png' />              
               
            </div>
          </div>
          <div className="title ">
            <h1 className=" font-extrabold text-5xl text-center">
              #4 Sponsers
            </h1>
          </div>
          <div className="title ">
            <h1 className=" font-extrabold text-5xl text-center">
              #5 Sponsers
            </h1>
          </div>
        </div>
        <Footer />
      </PageContainer>
      <NavContainer>
        <NavLink page="contact" edge="right" />
      </NavContainer>
    </div>
  );
}
