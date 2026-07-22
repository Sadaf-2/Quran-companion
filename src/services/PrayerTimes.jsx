import { useEffect, useState } from "react";
import { getPrayerTimes } from "../services/prayerApi";

function PrayerTimes() {
  const [timings, setTimings] = useState(null);

  useEffect(() => {
    loadPrayerTimes();
  }, []);

  const loadPrayerTimes = async () => {
    try {
      const data = await getPrayerTimes("Rawalpindi", "Pakistan");
      setTimings(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!timings) {
    return <h2>Loading Prayer Times...</h2>;
  }

  return (
    <div className="prayer-page">
      <h1>🕌 Prayer Times</h1>

      <h2>{timings.meta.timezone}</h2>

      <div className="prayer-card">
        <p>🌅 Fajr: {timings.timings.Fajr}</p>
        <p>☀️ Sunrise: {timings.timings.Sunrise}</p>
        <p>🌞 Dhuhr: {timings.timings.Dhuhr}</p>
        <p>🌇 Asr: {timings.timings.Asr}</p>
        <p>🌆 Maghrib: {timings.timings.Maghrib}</p>
        <p>🌙 Isha: {timings.timings.Isha}</p>
      </div>
    </div>
  );
}

export default PrayerTimes;