import Image from "next/image"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="main flex w-[100vw] bg-[#0a0b0b]">
        <div className="txt w-[60%] m-6 flex items-center justify-center">
          <div className="flex-col flex gap-1">
            <p className=" text-[10px] md:text-xl">Hello i'am</p>
            <p className="md:text-6xl">Vikram <span className="text-pink-400">Prajapat</span></p>
            <p className="md:text-xl text-[10px]">i am Software developer and Programmer</p>
            <Link href="/contact">            <button className="bg-pink-400 cursor-pointer mt-3 w-fit  hover:bg-pink-300 px-5 py-1 md:p-2 rounded-xl text-white">contact</button></Link>

          </div>
        </div>
        <div className="img">
          <Image
            src="/photo.png"   // image ko "public" folder me rakhna hai
            alt="My Photo"
            width={350}
            height={350}
            className="object-cover opacity-95 mask-image"
          />

        </div>
      </div>
      <div className="middle w-[100vw]  bg-[#171d29] h-[50vh] md:h-[60vh] flex justify-center  md:gap-[55px] items-center">
        <div className="img bg-black  rounded-2xl mx-3 md:m-4 md:px-4 ">
          <Image
            src="/photo2.png"   // image ko "public" folder me rakhna hai
            alt="My Photo"
            width={250}
            height={250}
            className="object-cover opacity-95 mask-image"
          />
        </div>

        <div className="txt md:w-[40%] mr-3 w-[65%] flex flex-col items-center justify-center md:text-[15px] flex-wrap  text-[7px] text-center gap-2 md:gap-5">
          <div><p className="font-bold text-2xl mb-1  md:text-5xl">About me</p>
            <p className="text-pink-400  text-[10px] ">Programmer <span className="text-white">&</span> Developer</p> </div>

          <p className="text-gray-400">I am a passionate Software Programmer and Web Developer with a strong interest in building efficient, scalable, and user-friendly applications. I enjoy solving complex problems through clean code and modern technologies.</p>
          <p className="text-gray-400">With hands-on experience in web development, programming, and problem-solving, I focus on writing optimized solutions while keeping usability and performance in mind. I am always eager to learn new technologies, explore innovative ideas, and contribute to impactful projects.</p>
          <Link href="/about"><button className="bg-pink-400 cursor-pointer mt-3 w-fit  hover:bg-pink-300 px-5 p-2 rounded-xl text-white">Learn more</button></Link>
          

        </div>

      </div>
      <div className="service w-[100vw]  md:h-[75vh] bg-[#060b17] flex flex-col items-center justify-center p-3">
        <div className="head font-bold text-2xl md:text-5xl">Our Service</div>
        <div className="card  p-4 md:w-[70%]  flex-wrap flex-col flex md:flex-row items-center gap-6 justify-center h-[100%] md:h-[70%]">
          <div className="card1 gap-2 md:p-4 items-center p-2  md:w-[30%] h-[48%] md:h-[90%]  rounded-2xl flex flex-col bg-[#171d29]">
            <div className="logo text-pink-400 font-bold text-4xl">&lt; / &gt;</div>
            <p>Web developer</p>
            <p className="text-gray-400 text-center">I am a passionate Web Developer skilled in creating modern, responsive, and user-friendly websites. My expertise includes front-end technologies like HTML, CSS, JavaScript</p>
            <Link href="/webd">   <button className="bg-pink-400 cursor-pointer mt-3 w-fit  hover:bg-pink-300 px-3 p-1 rounded-xl text-white">Read more</button></Link>
         
          </div>

          <div className="card1 gap-2 p-2 md:p-4 items-center md:w-[30%] h-[48%] md:h-[90%]   rounded-2xl flex flex-col bg-[#171d29]">
            <div className="logo text-pink-400 font-bold text-3xl">DSA</div>
            <p>Programmer</p>
            <p className="text-gray-400 text-center">I have strong problem-solving skills with a solid foundation in Data Structures and Algorithms.
              I enjoy optimizing solutions for efficiency and tackling complex coding challenges.</p>
                        <Link href="/dsa">   <button className="bg-pink-400 cursor-pointer mt-3 w-fit  hover:bg-pink-300 px-3 p-1 rounded-xl text-white">Read more</button></Link>
          </div>

          <div className="card1 gap-2 p-2 md:p-4 items-center md:w-[30%] h-[48%] md:h-[90%]   rounded-2xl flex flex-col bg-[#171d29]">
            <div className="logo text-pink-400 font-bold text-3xl">Software</div>
            <p>Softawre Engineer</p>
            <p className="text-gray-400 text-center">Skilled in designing and developing scalable, efficient, and reliable software solutions.
              Focused on writing clean code, optimizing performance, and delivering impactful applications.</p>
            <Link href="/software">   <button className="bg-pink-400 cursor-pointer mt-3 w-fit  hover:bg-pink-300 px-3 p-1 rounded-xl text-white">Read more</button></Link>
          </div>

        </div>
      </div>
<footer className="bg-[#171d29] text-gray-300 py-6 mt-10">
  <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-6">
    
    {/* Left - Copyright */}
    <p className="text-sm text-center sm:text-left">
      © {new Date().getFullYear()} - Vikram Prajapat 
    </p>

    {/* Center - Navigation Links */}
    {/* <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
       <Link  className="hover:text-white transition" href="/about">About</Link> 
       <Link  className="hover:text-white transition" href="/skill">Skills</Link> 
       <Link  className="hover:text-white transition" href="/">Projects</Link> 
       <Link  className="hover:text-white transition" href="/contact">Contact</Link> 
    
    </div> */}

    {/* Right - Social Links */}
    <div className="flex space-x-5 justify-center">
      
      {/* Github */}
      <a href="https://github.com/Levarcof" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 
            0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.082-.729.082-.729 
            1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 
            0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.527.117-3.176 
            0 0 1.008-.322 3.3 1.23a11.52 
            11.52 0 013.003-.404c1.018.005 2.044.138 
            3.003.404 2.29-1.552 3.296-1.23 
            3.296-1.23.653 1.649.241 2.873.118 
            3.176.77.84 1.233 1.91 1.233 
            3.22 0 4.61-2.804 5.624-5.475 
            5.922.43.372.823 1.102.823 
            2.222 0 1.606-.015 2.898-.015 
            3.293 0 .32.218.694.825.576C20.565 
            22.092 24 17.594 24 12.297 24 
            5.67 18.627.297 12 .297z"/>
        </svg>
      </a>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 
            6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 
            2.12 4.98 3.5zM.5 8h4V24h-4V8zM8 
            8h3.6v2.3h.05c.5-.95 1.75-2.3 
            3.6-2.3C19.4 8 20 11.3 20 
            15.2V24h-4v-8c0-1.9-.03-4.3-2.6-4.3-2.6 
            0-3 2-3 4.1V24H8V8z"/>
        </svg>
      </a>

      {/* Twitter */}
      <a href="https://x.com/home" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 
            1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.005.959-3.127 
            1.184-.897-.959-2.178-1.555-3.594-1.555-2.717 
            0-4.924 2.206-4.924 4.924 0 .39.045.765.127 
            1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.729-.666 
            1.577-.666 2.475 0 1.708.869 3.216 2.188 
            4.099-.807-.026-1.566-.248-2.229-.616v.062c0 
            2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 
            0-.626-.03-.928-.086.627 1.956 2.444 3.379 4.6 
            3.419-1.68 1.318-3.809 2.105-6.102 
            2.105-.396 0-.788-.023-1.175-.069 
            2.179 1.397 4.768 2.212 7.557 
            2.212 9.054 0 14-7.496 14-13.986 
            0-.21-.006-.423-.016-.634.962-.689 
            1.8-1.56 2.46-2.548l-.047-.02z"/>
        </svg>
      </a>
    </div>
  </div>
</footer>


    </>
  );
}
