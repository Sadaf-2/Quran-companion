import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getSurah } from "../services/quranApi";

function SurahDetail() {
  const { id } = useParams();

  const [surah, setSurah] = useState(null);

  useEffect(() => {
    loadSurah();
  }, [id]);

  const loadSurah = async () => {
    try {
      const data = await getSurah(id);
      setSurah(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!surah) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="surah-detail">
      <Link to="/quran">⬅ Back to Quran</Link>

      <h1>{surah.arabic.englishName}</h1>

      {surah.arabic.ayahs.map((ayah, index) => (
        <div key={ayah.number} className="ayah-card">
          <h3>Ayah {index + 1}</h3>

          <p
            style={{
              fontSize: "28px",
              direction: "rtl",
              textAlign: "right",
              marginBottom: "15px",
            }}
          >
            {ayah.text}
          </p>

          <p>{surah.translation.ayahs[index].text}</p>
        </div>
      ))}
    </div>
  );
}

export default SurahDetail;