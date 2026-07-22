import axios from "axios";

const BASE_URL = "https://api.alquran.cloud/v1";

// Get all Surahs
export const getSurahs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/surah`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching surahs:", error);
    return [];
  }
};

// Get Single Surah (Arabic + English)
export const getSurah = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/surah/${id}/editions/quran-uthmani,en.asad`
    );

    return {
      arabic: response.data.data[0],
      translation: response.data.data[1],
    };
  } catch (error) {
    console.error("Error fetching surah:", error);
    return null;
  }
};