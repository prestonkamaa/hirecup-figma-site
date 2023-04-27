import Link from "next/link"
import Image from "next/image"
import { MdMenu } from "react-icons/md" 

export default function Navbar() {
  return (
    <>
      <nav className=" flex items-center pt-6 container mx-auto px-12">
          <div className=" mr-auto">
              <Link href="/">
                  <Image src="/images/headerlogo.png" alt="" width="157" height="34" />
              </Link> 
          </div>
          <div className=" lg:hidden ">
            < MdMenu size="2rem" />
          </div>
          <div className=" flex items-center">
            <div className=" lg:block hidden">
              <div className="flex items-center">
              <ul className=" flex gap-10">
              <li className=" hover:text-[#F3C623]"><Link href="/"><a> Home </a></Link></li>
              <li className=" hover:text-[#F3C623]"><Link href="/about"><a> About </a></Link></li>
              <li className=" hover:text-[#F3C623]"><Link href="/assets"><a> Assets </a></Link></li>
              <li className=" hover:text-[#F3C623]"><Link href="/contact"><a> Contact </a></Link> </li>
              </ul>
              <button className="h-10 px-5 ml-10 text-indigo-100 transition-colors duration-150 bg-[#127681] rounded-lg focus:shadow-outline hover:bg-indigo-800">Sign Up</button>
              </div> 
            </div>
            
          </div>
      </nav>

      {/* Mobile Menu */}

      {/* <section className="mx-3">
        <div className=" flex items-center pb-3 pt-5 ">
          <div className=" mr-auto">
            <Image src="/images/headerlogo.png" alt="" width="157" height="34" />
          </div>
          
          <div className=" ">
            < MdMenu size="2rem" />
          </div>
        </div>
        <div>
            <ul className=" flex-col gap-4 text-white">
            <li className=" bg-[#127681] py-3 rounded-lg"><Link href="/"><a className="pl-5"> Home </a></Link></li>
            <li className=" py-3 rounded-lg"><Link href="/about"><a className="pl-5"> About </a></Link></li>
            <li className=" py-3 rounded-lg"><Link href="/assets"><a className="pl-5"> Assets </a></Link></li>
            <li className=" py-3 rounded-lg"><Link href="/contact"><a className="pl-5"> Contact </a></Link> </li>
          </ul>
          <button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-[#127681] rounded-lg focus:shadow-outline hover:bg-indigo-800">Sign Up</button>

        </div>

      </section> */}
      
    </>
  )
}
