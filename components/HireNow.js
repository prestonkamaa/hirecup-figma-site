import Image from "next/image";
import { MdEditNote } from "react-icons/md"; 

export default function HireNow() {
  return (

      <section className=" container mx-auto mt-10 px-6">

        <div className=" grid lg:grid-cols-2">
   
          <div className=" px-6"> 

            <h1 className="text-[#127681] text-lg font-semibold pb-0">
              Get Best Employee
            </h1>
            <h2 className=" font-black text-4xl text-[#F3C623] pt-5">
              Hire Now! 
            </h2> 
            <h1 className=" font-black text-4xl text-[#10375C] max-w-lg pt-3">
              1250+ CV already submitted here
            </h1> 
            <p className="text-[rgba(0,0,0,0.6)] text-lg max-w-lg pt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Vitae sit donec lectus suscipit ultricies rhoncus. Egestas 
              platea in mauris urna gravida odio nam quisque 
            </p>  

            <div className="flex pt-8 items-center"> 
              <button type="button" className="space-x-2 items-center text-white bg-[#F3C623] hover:bg-[#d1aa1e] focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-lg px-10 py-2.5 text-center mr-10 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex">
                  <MdEditNote size="1.5rem"/> <span>Signup Now</span>
              </button> 
            </div> 
            <div className="flex pt-3 items-center"> 
              <p className="text-[#127681] text-base font-bold underline">
                looking for a job?
              </p>
            </div> 
            <div className="flex pt-3 items-center"> 
              <p className="text-[#127681] text-lg font-bold underline">
                Hire Employee
              </p>
            </div> 


            
          </div>
          <div className=" px-6 mx-auto bg-[url('/images/hirenow.png')] bg-no-repeat bg-contain bg-center  ">  
              <div className=" m-5">
                <Image src="/images/people2.png" width="435" height="506" alt="" /> 
              </div>        
          </div>  
    </div>

    </section> 
  )
}
