import { motion } from "framer-motion";


function About() {


  const features = [
    {
      title: "📖 Holy Quran",
      description:
        "Read all 114 Surahs with Arabic text and English translation.",
    },
    {
      title: "🕌 Prayer Times",
      description:
        "Check daily prayer timings based on your location.",
    },
    {
      title: "🤲 Daily Duas",
      description:
        "Read authentic daily duas with translation and references.",
    },
    {
      title: "📿 Digital Tasbih",
      description:
        "Count your daily dhikr with progress tracking.",
    },
    {
      title: "🧭 Qibla Direction",
      description:
        "Find the direction of the Holy Kaaba.",
    },
    {
      title: "⚡ Fast & Responsive",
      description:
        "Built using React and Tailwind CSS for a modern experience.",
    },
  ];



  const technologies = [
    "React",
    "React Router",
    "Context API",
    "Redux Toolkit",
    "Tailwind CSS",
    "Axios",
    "JavaScript",
    "Vite",
    "REST API",
  ];



  return (

    <div

      style={{
        minHeight:"100vh",
        background:"var(--bg)",
        color:"var(--text)",
        padding:"50px 25px",
      }}

    >


      <div

        style={{
          maxWidth:"1200px",
          margin:"auto",
        }}

      >



        {/* Heading Animation */}

        <motion.div

          initial={{
            opacity:0,
            y:-50
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.8
          }}

          style={{
            textAlign:"center",
            marginBottom:"60px",
          }}

        >


          <h1

            style={{
              fontSize:"48px",
              color:"var(--primary)",
              marginBottom:"20px",
            }}

          >

            ℹ️ About Quran Companion

          </h1>



          <p

            style={{
              lineHeight:"1.8",
            }}

          >

            Quran Companion is a modern Islamic web application that helps
            Muslims read Quran, check prayer times, access daily duas,
            use digital tasbih and find Qibla direction.

          </p>


        </motion.div>





        {/* Features */}


        <h2

          style={{
            color:"var(--primary)",
            fontSize:"34px",
            marginBottom:"30px",
          }}

        >

          ✨ Features

        </h2>




        <div

          style={{
            display:"grid",
            gridTemplateColumns:
            "repeat(auto-fit,minmax(300px,1fr))",
            gap:"25px",
            marginBottom:"60px",
          }}

        >



        {
          features.map((feature,index)=>(


            <motion.div


              key={index}


              initial={{
                opacity:0,
                y:50
              }}


              whileInView={{
                opacity:1,
                y:0
              }}


              viewport={{
                once:true
              }}


              transition={{
                duration:0.5,
                delay:index*0.1
              }}


              whileHover={{
                scale:1.05
              }}


              style={{

                background:"var(--card)",
                padding:"25px",
                borderRadius:"18px",
                boxShadow:
                "0 5px 15px rgba(0,0,0,.15)",

              }}


            >



              <h3

                style={{
                  color:"var(--primary)",
                  marginBottom:"15px",
                }}

              >

                {feature.title}

              </h3>




              <p>

                {feature.description}

              </p>



            </motion.div>


          ))
        }



        </div>
                {/* Technologies */}


        <motion.div


          initial={{
            opacity:0,
            scale:0.8
          }}


          whileInView={{
            opacity:1,
            scale:1
          }}


          viewport={{
            once:true
          }}


          transition={{
            duration:0.6
          }}


          style={{

            background:"var(--card)",
            padding:"30px",
            borderRadius:"20px",
            marginBottom:"50px",

          }}


        >



          <h2

            style={{
              color:"var(--primary)",
              marginBottom:"25px",
            }}

          >

            💻 Technologies Used

          </h2>




          <div

            style={{

              display:"flex",
              flexWrap:"wrap",
              gap:"15px",

            }}

          >



          {

            technologies.map((tech,index)=>(


              <motion.span


                key={index}


                whileHover={{
                  scale:1.1
                }}


                style={{

                  background:"var(--primary)",
                  color:"white",
                  padding:"10px 18px",
                  borderRadius:"20px",
                  fontWeight:"bold",

                }}


              >

                {tech}


              </motion.span>


            ))

          }



          </div>




        </motion.div>







        {/* Developer */}




        <motion.div


          initial={{
            opacity:0,
            y:80
          }}


          whileInView={{
            opacity:1,
            y:0
          }}


          viewport={{
            once:true
          }}


          transition={{
            duration:0.7
          }}



          style={{

            background:"var(--card)",
            padding:"35px",
            borderRadius:"20px",
            textAlign:"center",

          }}


        >





          <motion.h2


            whileHover={{
              scale:1.05
            }}


            style={{

              color:"var(--primary)",
              marginBottom:"20px",

            }}


          >

            👩‍💻 Developer

          </motion.h2>






          <motion.div


            animate={{
              rotate:[0,10,-10,0]
            }}


            transition={{
              duration:2,
              repeat:Infinity
            }}



            style={{

              fontSize:"70px",

            }}


          >

            💚

          </motion.div>






          <h3

            style={{

              fontSize:"28px",

            }}

          >

            Sadaf Iqbal

          </h3>






          <p>

            BS Computer Science (AI)

          </p>




          <p>

            Front-End React Developer

          </p>






          <p

            style={{

              marginTop:"25px",

            }}

          >

            Built with ❤️ using React, Context API,
            Redux Toolkit & Tailwind CSS.

          </p>





        </motion.div>





      </div>


    </div>

  );

}


export default About;