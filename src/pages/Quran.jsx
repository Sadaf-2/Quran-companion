import { 
  useEffect, 
  useState, 
  useMemo, 
  useCallback 
} from "react";

import { Link } from "react-router-dom";

import { getSurahs } from "../services/quranApi";



function Quran() {


  const [surahs, setSurahs] = useState([]);

  const [search, setSearch] = useState("");





  // useCallback
  const loadSurahs = useCallback(async()=>{


    try {


      const data = await getSurahs();

      setSurahs(data);



    } catch(error){


      console.error(
        "Error fetching surahs:",
        error
      );


    }


  },[]);






  useEffect(()=>{


    loadSurahs();


  },[loadSurahs]);









  // useMemo
  const filteredSurahs = useMemo(()=>{


    return surahs.filter((surah)=>

      surah.englishName
      .toLowerCase()
      .includes(
        search.toLowerCase()
      )

    );


  },[surahs,search]);









  return (


    <div className="quran-page">


      <h1>
        📖 Quran Surahs
      </h1>





      <input

        type="text"

        placeholder="Search Surah..."

        value={search}

        onChange={(e)=>
          setSearch(e.target.value)
        }

      />







      <div className="surah-container">


        {
          filteredSurahs.map((surah)=>(


            <Link

              key={surah.number}

              to={`/surah/${surah.number}`}

              style={{
                textDecoration:"none",
                color:"inherit",
              }}

            >


              <div className="surah-card">


                <h2>

                  {surah.number}. {surah.englishName}

                </h2>



                <p>

                  {surah.name}

                </p>



                <span>

                  {surah.revelationType}

                </span>



              </div>


            </Link>


          ))
        }



      </div>




    </div>


  );

}



export default Quran;