import axios from "axios";

const BASE_URL = "https://api.alquran.cloud/v1";

export const getSurahs = async () => {
  const response = await axios.get(`${BASE_URL}/surah`);

  return response.data.data;
};