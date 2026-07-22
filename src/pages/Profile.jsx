import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import { updateProfile } from "../features/profile/profileSlice";



// Validation Schema

const profileSchema = z.object({

  name: z
    .string()
    .min(3, "Name must be at least 3 characters"),


  email: z
    .string()
    .email("Enter valid email"),


  bio: z
    .string()
    .min(10, "Bio must be at least 10 characters"),

});





function Profile() {


  const dispatch = useDispatch();


  const profile = useSelector(
    (state) => state.profile
  );



  const {
    register,
    handleSubmit,
    formState: {
      errors
    }

  } = useForm({

    resolver: zodResolver(profileSchema),

    defaultValues: {

      name: profile.name || "",

      email: profile.email || "",

      bio: profile.bio || "",

    },

  });





  const onSubmit = (data) => {


    dispatch(
      updateProfile(data)
    );


    alert("✅ Profile Updated Successfully");


  };






  return (


    <div
      style={{
        minHeight:"100vh",
        background:"var(--bg)",
        color:"var(--text)",
        padding:"50px 20px",
        transition:"0.3s",
      }}
    >



      <motion.div

        initial={{
          opacity:0,
          y:50,
        }}

        animate={{
          opacity:1,
          y:0,
        }}

        transition={{
          duration:0.5,
        }}


        style={{
          maxWidth:"600px",
          margin:"auto",
          background:"var(--card)",
          padding:"35px",
          borderRadius:"20px",
          boxShadow:"0 5px 15px rgba(0,0,0,.15)"
        }}

      >



        <h1

          style={{
            textAlign:"center",
            color:"var(--primary)",
            fontSize:"40px",
            marginBottom:"30px"
          }}

        >

          👤 My Profile

        </h1>





        <form onSubmit={handleSubmit(onSubmit)}>



          <label>
            Name
          </label>


          <input

            {...register("name")}

            placeholder="Enter your name"

            style={inputStyle}

          />



          {
            errors.name &&

            <p style={errorStyle}>
              {errors.name.message}
            </p>

          }







          <label>
            Email
          </label>


          <input

            {...register("email")}

            placeholder="Enter your email"

            style={inputStyle}

          />



          {
            errors.email &&

            <p style={errorStyle}>
              {errors.email.message}
            </p>

          }








          <label>
            Bio
          </label>



          <textarea

            {...register("bio")}

            placeholder="Write your bio"

            rows="5"

            style={inputStyle}

          />



          {
            errors.bio &&

            <p style={errorStyle}>
              {errors.bio.message}
            </p>

          }







          <motion.button


            whileHover={{
              scale:1.05
            }}


            whileTap={{
              scale:0.95
            }}


            type="submit"


            style={buttonStyle}


          >

            💾 Save Profile


          </motion.button>





        </form>




      </motion.div>



    </div>


  );

}







const inputStyle = {


  width:"100%",


  padding:"14px",


  margin:"10px 0 20px",


  borderRadius:"10px",


  border:"1px solid #ccc",


  background:"var(--bg)",


  color:"var(--text)",


  fontSize:"16px",


};





const errorStyle = {


  color:"red",


  fontSize:"14px",


  marginBottom:"10px",


};





const buttonStyle = {


  width:"100%",


  marginTop:"20px",


  padding:"14px",


  border:"none",


  borderRadius:"12px",


  background:"var(--primary)",


  color:"white",


  fontSize:"18px",


  fontWeight:"bold",


  cursor:"pointer",


};





export default Profile;