import Image from "next/image";  
import { MdOutlineEmail, MdPhoneInTalk  } from "react-icons/md";
import { RiTwitterLine, RiInstagramLine, RiYoutubeLine } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";

export default function Footer() {
  return (
    <>
    <div className=" bg-[#05294B]"> 
      <div className=" grid md:grid-cols-1 lg:grid-cols-4 py-14 container mx-auto text-[#ffffff] px-12">
        <div> 
          <Image src="/images/footerlogo.png" width="157" height="34" alt="" />
        </div>
          
        <div>
          <h1 className=" pb-5 text-xl font-bold">Contact</h1>
          <div className=" flex content-center gap-5 ">
            <p className=" pb-2 text-[#F3C623]"><MdPhoneInTalk size={'1.5em'} /></p>
            <p className=" hover:text-[#F3C623]">+254700000000</p>
          </div>
          <div className=" flex content-center gap-5 ">
            <p className=" pb-2 text-[#F3C623]"><MdOutlineEmail size={'1.5em'} /></p>
            <p className=" hover:text-[#F3C623]">info@developer.com</p>
          </div> 
        </div>

        <div> 
          <h1 className="pb-5 text-xl font-bold">Quick Links</h1>
          <div>
            <p className=" pb-2 hover:text-[#F3C623]">Submit CV</p>
            <p className=" pb-2 hover:text-[#F3C623]">Post Job</p>
            <p className=" pb-2 hover:text-[#F3C623]">HireCup Careers</p>
        </div>
        </div>

        <div> 
          <h1 className="pb-5 text-xl font-bold"> Get In Touch </h1>
          <div> 
            <div className=" flex gap-5 content-center">
              <p className="hover:text-[#F3C623]"><FiFacebook size={'1.5em'} /></p>  
              <p className="hover:text-[#F3C623]"><RiTwitterLine size={'1.5em'} /></p>  
              <p className="text-[#F3C623]"><RiInstagramLine size={'1.5em'} /></p>  
              <p className="hover:text-[#F3C623]"><RiYoutubeLine size={'1.5em'} /></p>  
            </div> 
          </div>
        </div>

          
      </div> 
 
      <div className=" flex flex-wrap mx-auto text-white py-5 px-12">
        <div className=" mr-auto font-normal text-base ">
          &copy; 2022 All rights reserved. <a href="https://dribbble.com/shots/12262440-Figma-Freebie-Hire-Agency-Template" rel="noreferrer" target="_blank">Figma Design Link </a> | <a href="https://github.com/prestonkamaa" rel="noreferrer" target="_blank">Design - @Prestizy</a>
        </div>
        <div className=" flex gap-6 text-base font-bold ">
          <p>Home</p>
          <p>About</p>
          <p>Assets</p>
          <p>contact</p>
        </div>
      </div> 
    </div>
    </>
  )
}
