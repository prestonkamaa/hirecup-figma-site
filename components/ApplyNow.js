import Image from "next/image";
import { MdOutlineFileUpload } from "react-icons/md"; 

export default function ApplyNow() {
  return (
    <section className=" container mx-auto px-6">
      
      <div className=" grid lg:grid-cols-2">
        {/* <div className=" px-6 mx-auto bg-[url('/images/applynoow.png')]">  */}

        <div className=" px-6 mx-auto bg-[url('/images/applynoow.png')] bg-no-repeat bg-center bg-contain">
            <div className=" mt-4"><Image src="/images/people1.png" width="446" height="520" alt="" /> 
            {/* <Image src="/images/applynoow.png" width="520" height="464" alt="" />  */}</div>
        </div> 
        <div className=" py-20  grid px-6 ">
            <h1 className="text-[#F3C623] text-lg font-semibold pb-0">
              Get Best Employee
            </h1>
          <h2 className=" font-black text-4xl text-[#127681] pt-5">
            Apply Now! 
          </h2> 
          <h1 className=" font-black text-4xl text-[#10375C] lg:max-w-xs pt-3">
            520+ company searching for you 
          </h1> 
          <p className="text-[rgba(0,0,0,0.6)] text-lg lg:max-w-lg pt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vitae sit donec lectus suscipit ultricies rhoncus. Egestas 
            platea in mauris urna gravida odio nam quisque 
          </p>  

          <div className="grid lg:grid-cols-2 pt-8 items-center"> 
            <div>
              <button type="button" className=" w-52 space-x-2 items-center text-white bg-[#127681] hover:bg-[#0e5a63] focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-lg px-10 py-2.5 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex">
                  <MdOutlineFileUpload size="1.5rem"/> <span>Upload CV</span>
              </button>
            </div>
            <div>
              <p className="text-[#127681] text-lg font-bold underline ">
                looking for an employee?
              </p>
            </div>
          </div>

          {/* <div className="flex gap-10 pt-8 items-center"> 
            <button type="button" className="space-x-2 items-center text-white bg-[#127681] hover:bg-[#0e5a63] focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-lg px-10 py-2.5 text-center  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex">
                <MdOutlineFileUpload size="1.5rem"/> <span>Upload CV</span>
            </button>
            
            <p className="text-[#127681] text-lg font-bold underline">
              looking for an employee?
            </p>
          </div> */}


  




        </div>
      </div>

    </section> 
  )
}
