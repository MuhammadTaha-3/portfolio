// 



export default function About(){
    return(
        <main   id="about" className=" w-full h-full   flex  justify-start items-center mb-14 md:my-10 max-w-screen-2xl mx-auto ">
                    
                     <div className="w-[90%] bg-yellw-200 flex flex-col md:flex-row  ">
                        {/* left */}
                        {/* <div className=" md:w-[50%] flex justify-center items-start">
                            <Image src={"/banner.png"}
                            alt="hero"
                            className="w-[200px] md:w-[320px]  object-cover object-center  border-[4px] border-teal-800 rounded-3xl"
                            width={100}
                            height={100}
                            ></Image>
                        </div> */}
                        {/* right */}
                        <div className=" md:w-[50%] space-y-4 flex flex-col justify-center md:justify-start items-start pl-5 ">
                        <h1 className=" text-2xl md:text-3xl lg:text-4xl font-serif font-semibold ">About Myself</h1>
                      
                            <p className="text-gray-500">Hi! Welcome to my portfolio. I am a dedicated student at GIAIC,                               currently pursuing a  
comprehensive course in **Artificial Intelligence, Web 3.0, and the Metaverse.**  
My passion lies in technology, and I specialize in areas such as **programming,  
web development, and data analysis.** With a strong foundation in these domains,  
I am always eager to expand my knowledge, stay updated with the latest advancements,  
and explore innovative solutions that drive the future of technology.  

I thrive on challenges and enjoy **collaborating with like-minded individuals**  
who share a passion for learning and innovation. Whether it's building modern web  
applications, working with AI-driven solutions, or diving into the decentralized  
world of Web3, I am always ready to push boundaries and enhance my skills.  

Thank you for visiting my portfolio! I look forward to connecting with others  
who share a curiosity for technology and its limitless possibilities. 🚀</p>
                       
                        </div>
                     </div>
                     
        </main>
    )
}

// complte 