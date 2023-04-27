import { MdOutlineFileUpload, MdPhoneInTalk, MdPersonAddAlt } from "react-icons/md"; 

export default function IntroText() {
  return (
    <section className=" container mx-auto my-20  px-6">
        <div className="">
            <h1 className=" mx-auto px-6 lg:max-w-[40rem] text-center font-black text-4xl text-[#10375C]">We may be strong as individuals
            but <span className=" text-[#127681]">together we are invincible</span></h1>

            <div className=" grid lg:grid-cols-3 pt-20  mx-auto lg:max-w-[73rem]">
                <div className=" items-center text-center px-14 pb-5"> 
                    <div className=" mx-auto  bg-[#127681] text-white rounded-full p-2 hover:bg-[#0d525a] focus:outline-none w-20 h-20 flex items-center justify-center">
                        <MdOutlineFileUpload size="2.5rem" /> 
                    </div> 
                    <h2 className=" font-bold text-2xl text-black pt-10 pb-5">Submit your CV</h2> 
                    <p className="text-[rgba(0,0,0,0.6)] text-lg max-w-xs mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit donec lectus</p> 
                </div>  
                <div className=" items-center text-center px-14 pb-5">
                    <div className=" mx-auto  bg-[#F3C623] text-white rounded-full p-2 hover:bg-[#cfa91d] focus:outline-none w-20 h-20 flex items-center justify-center">
                        <MdPhoneInTalk size="2.5rem" /> 
                    </div> 
                    <h2 className=" font-bold text-2xl text-black pt-10 pb-5">Wait for call</h2> 
                    <p className="text-[rgba(0,0,0,0.6)] text-lg max-w-xs mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit donec lectus</p> 
                </div>  
                <div className=" items-center text-center px-14 pb-5">
                    <div className=" mx-auto  bg-[#127681] text-white rounded-full p-2 hover:bg-[#0d525a] focus:outline-none w-20 h-20 flex items-center justify-center">
                        <MdPersonAddAlt size="2.5rem" /> 
                    </div> 
                    <h2 className=" font-bold text-2xl text-black pt-10 pb-5">Get the asset</h2> 
                    <p className="text-[rgba(0,0,0,0.6)] text-lg max-w-xs mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit donec lectus</p> 
                </div>  
            </div>

        </div>



    </section> 
  )
}
