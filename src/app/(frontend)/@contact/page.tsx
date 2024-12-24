
import React from 'react';
import ContactForms from '../_components/_contactForms/ContactForms';
import { siteConfig } from '@/config/site';
import { Link } from '@nextui-org/link';
import { DiscordIcon, GithubIcon, TwitterIcon } from '@/components/icons';
import TextHover from '@/components/Animations/Text/TextHover';
import { FaPhone } from 'react-icons/fa';
import AnimatedElements from '@/components/Animations/AnimatedElements';

const ContactSection = () => {
    return (
        <div className='md:flex  relative justify-between items-center min-h-screen'>
            

           <section className='flex flex-col   gap-4 py-8 md:py-10'>

            <div className=''>
       <h2 className='text-3xl 2xl:text-5xl 2xl:w-96 font-extrabold'><TextHover>Get in touch</TextHover></h2>
            <p>We would love to hear from you</p>

           <div className='space-y-6 my-10'>
           <p className=' text-center flex items-center gap-4'> <span ><FaPhone size={20}/></span> +8801614-654397</p>
            <p> Email: aashekmahmud@gmail.com</p>
            <p> Location: Dhaka,Bangladesh</p>
           </div>



            </div>
   <div className='flex gap-4 items-center'>

        

    {/* link all social media */}
   <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
                  <TwitterIcon size={40} className="text-default-500 " />
                </Link>
                <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
                  <DiscordIcon size={40} className="text-default-500 text-4xl" />
                </Link>
                <Link isExternal aria-label="Github" href={siteConfig.links.github}>
                  <GithubIcon size={40} className="text-default-500 text-4xl" />
                </Link>
   </div>
    </section>
           
           <section >
            <ContactForms/>
           </section>
           <AnimatedElements/>
        </div>
    );
};

export default ContactSection;