import Image from 'next/image'
import { MdArrowForward } from "react-icons/md";
import { MdArrowBack } from "react-icons/md";

export default function Testimonials() {
  return ( 

    <section className=" container mx-auto px-6 py-20">
      
      <div className=" grid lg:grid-cols-2">
        <div className="  px-6 mx-auto">  
            <Image src="/images/testimonial.png" width="499" height="506" alt="" /> 
        </div> 
        <div className=" py-20 px-6 place-items-start ">
            <h1 className="text-[#127681] text-lg font-bold">
              Saidur Zaman Saimo <br />
              <span className="text-[#10375C] text-base font-bold leading-3">
              Manager, Aflame Company</span>
            </h1> 
          <h1 className=" font-black text-4xl text-[#10375C] lg:max-w-md pt-3">
            I got my best employee from this platform who working great in my company. Really it was boom for us
          </h1>  

          <div className="flex pt-8 items-center"> 
            
            <button type="button" className="space-x-2 items-center text-white bg-[#F4F6FF] hover:bg-[#dbdde6] focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold text-lg px-5 py-5 text-center mr-5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex">
              <MdArrowBack className=" text-[#10375C]" />
            </button>          
            <button type="button" className="space-x-2 items-center text-white bg-[#F3C623] hover:bg-[#e2b81d] focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold text-lg px-5 py-5 text-center mr-5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex">
              <MdArrowForward className=" text-[#10375C]" />
            </button>  
          </div> 
        </div>
      </div>

    </section>  
  )
}
