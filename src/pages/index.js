import Image from "next/image.js";
import home1 from "../assets/images/home1.jpg";


export default function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center bg-gray-50 h-screen" >
      <div className="pt-38 pl-48">
      <h1 className="font-sans text-6xl font-bold">Blogs</h1>
      <p className="pt-10">Welcome to our website, your go-to destination for finding the perfect apartment!<br/>
       Whether you're looking for a cozy studio, a spacious family flat, or a luxury penthouse,<br/>
       we offer a diverse range of listings tailored to suit your needs. With user-friendly search<br/>
       tools, detailed property descriptions, and high-quality images, we make it easy for you to<br/>
       explore, compare, and choose your next home. Start your journey with us today and find an <br/>
       apartment that fits your lifestyle and budget!</p>
       <div className="pt-2">
       <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">
        Explore Apartments
       </button>
       </div> 
    </div>

  <div className=" "> 
  <img 
      src={home1} 
      width={215}
            height={30}
            alt="building image"
          />
     
     
  </div>
    </div>
  );
}
