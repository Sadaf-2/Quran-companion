import axios from "axios";

const BASE_URL = "https://api.aladhan.com/v1";

export const getDuas = async () => {
  const response = await axios.get(`${BASE_URL}/hijriCalendarByCity?city=Rawalpindi&country=Pakistan&method=2`);

  return response.data.data;
};