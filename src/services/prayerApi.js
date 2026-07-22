import axios from "axios";

const BASE_URL = "https://api.aladhan.com/v1";

export const getPrayerTimes = async (city, country) => {
  const response = await axios.get(
    `${BASE_URL}/timingsByCity?city=${city}&country=${country}`
  );

  return response.data.data;
};