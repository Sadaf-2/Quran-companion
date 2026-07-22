import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";


function Tasbih() {


  const [count, setCount] = useLocalStorage(
    "tasbihCount",
    0
  );


  const [target, setTarget] = useLocalStorage(
    "tasbihTarget",
    33
  );


  const [dhikr, setDhikr] = useLocalStorage(
    "tasbihDhikr",
    "SubhanAllah"
  );



  const progress = Math.min(
    (count / target) * 100,
    100
  );



  return (

    <div
      style={{
        minHeight:"100vh",
        background:"var(--bg)",
        color:"var(--text)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:"40px",
        transition:".3s",
      }}
    >


      <div
        style={{
          background:"var(--card)",
          width:"100%",
          maxWidth:"450px",
          borderRadius:"20px",
          padding:"35px",
          boxShadow:"0 5px 20px rgba(0,0,0,.15)",
        }}
      >


        <h1
          style={{
            textAlign:"center",
            color:"var(--primary)",
            fontSize:"40px",
            marginBottom:"10px",
          }}
        >
          📿 Digital Tasbih
        </h1>


        <p
          style={{
            textAlign:"center",
            marginBottom:"25px",
          }}
        >
          Keep track of your daily Dhikr.
        </p>



        <select
          value={dhikr}
          onChange={(e)=>{

            setDhikr(e.target.value);
            setCount(0);

          }}

          style={{
            width:"100%",
            padding:"12px",
            borderRadius:"10px",
            background:"var(--bg)",
            color:"var(--text)",
            marginBottom:"20px",
          }}

        >

          <option>
            SubhanAllah
          </option>

          <option>
            Alhamdulillah
          </option>

          <option>
            Allahu Akbar
          </option>

          <option>
            La ilaha illallah
          </option>


        </select>



        <h2
          style={{
            textAlign:"center",
            color:"var(--primary)",
            marginBottom:"25px",
          }}
        >
          {dhikr}
        </h2>



        <div
          style={{
            width:"220px",
            height:"220px",
            margin:"0 auto",
            borderRadius:"50%",
            border:"10px solid var(--primary)",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            marginBottom:"30px",
          }}
        >


          <span
            style={{
              fontSize:"60px",
              fontWeight:"bold",
              color:"var(--primary)",
            }}
          >
            {count}
          </span>


        </div>
                <label
          style={{
            fontWeight:"bold",
          }}
        >
          🎯 Select Target
        </label>



        <select
          value={target}
          onChange={(e)=>{

            setTarget(Number(e.target.value));
            setCount(0);

          }}

          style={{
            width:"100%",
            padding:"12px",
            borderRadius:"10px",
            background:"var(--bg)",
            color:"var(--text)",
            marginTop:"10px",
            marginBottom:"25px",
          }}

        >

          <option value={33}>
            33
          </option>

          <option value={99}>
            99
          </option>

          <option value={100}>
            100
          </option>


        </select>




        {/* Progress */}

        <div
          style={{
            width:"100%",
            height:"16px",
            background:"#d1d5db",
            borderRadius:"20px",
            overflow:"hidden",
          }}
        >

          <div
            style={{
              width:`${progress}%`,
              height:"100%",
              background:"var(--primary)",
              transition:".3s",
            }}
          >

          </div>

        </div>




        <p
          style={{
            textAlign:"center",
            marginTop:"15px",
            fontWeight:"bold",
            color:"var(--primary)",
          }}
        >

          {Math.round(progress)}% Completed

        </p>





        {/* Buttons */}


        <div
          style={{
            display:"flex",
            gap:"15px",
            marginTop:"30px",
          }}
        >



          <button
            onClick={()=>{

              if(count < target){

                setCount(count + 1);

              }

            }}

            style={{
              flex:1,
              background:"#059669",
              color:"white",
              border:"none",
              padding:"14px",
              borderRadius:"10px",
              cursor:"pointer",
              fontWeight:"bold",
            }}

          >

            ➕ Count

          </button>




          <button

            onClick={()=>setCount(0)}

            style={{
              flex:1,
              background:"#ef4444",
              color:"white",
              border:"none",
              padding:"14px",
              borderRadius:"10px",
              cursor:"pointer",
              fontWeight:"bold",
            }}

          >

            🔄 Reset

          </button>



        </div>






        {/* Completed Message */}


        {
          count === target && (

            <div
              style={{
                marginTop:"30px",
                background:"var(--bg)",
                border:"2px solid var(--primary)",
                borderRadius:"12px",
                padding:"20px",
                textAlign:"center",
              }}
            >

              <h2
                style={{
                  color:"var(--primary)",
                }}
              >

                🎉 Mubarak!

              </h2>


              <p>
                You completed your Tasbih target.
              </p>


            </div>

          )
        }





      </div>


    </div>


  );

}


export default Tasbih;