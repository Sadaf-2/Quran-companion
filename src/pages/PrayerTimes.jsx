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
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "var(--bg)",
          color: "var(--text)",
        }}
      >
        <h2>Loading Prayer Times...</h2>
      </div>
    );
  }

  const prayers = [
    { name: "🌅 Fajr", time: timings.timings.Fajr },
    { name: "🌄 Sunrise", time: timings.timings.Sunrise },
    { name: "☀️ Dhuhr", time: timings.timings.Dhuhr },
    { name: "🌇 Asr", time: timings.timings.Asr },
    { name: "🌆 Maghrib", time: timings.timings.Maghrib },
    { name: "🌙 Isha", time: timings.timings.Isha },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--text)",
        padding: "50px 20px",
        transition: ".3s",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "var(--primary)",
            fontSize: "45px",
            marginBottom: "10px",
          }}
        >
          🕌 Prayer Times
        </h1>

        <p
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          📍 Rawalpindi, Pakistan
        </p>

        {prayers.map((prayer) => (
          <div
            key={prayer.name}
            style={{
              background: "var(--card)",
              padding: "20px",
              marginBottom: "15px",
              borderRadius: "15px",
              display: "flex",
              justifyContent: "space-between",
              boxShadow: "0 5px 12px rgba(0,0,0,.15)",
            }}
          >
            <h2>{prayer.name}</h2>

            <h2
              style={{
                color: "var(--primary)",
              }}
            >
              {prayer.time}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrayerTimes;