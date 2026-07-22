import { useEffect, useState } from "react";

function Qibla() {
  const [location, setLocation] = useState("Detecting location...");
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude.toFixed(4),
          lng: position.coords.longitude.toFixed(4),
        });

        setLocation("Current Location Found ✅");
      },
      () => {
        setLocation("Location permission denied");
      }
    );
  }, []);

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
          maxWidth: "900px",
          margin: "0 auto",
          background: "var(--card)",
          borderRadius: "20px",
          padding: "40px",
          textAlign: "center",
          boxShadow: "0 5px 20px rgba(0,0,0,.15)",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            color: "var(--primary)",
            marginBottom: "10px",
          }}
        >
          🧭 Qibla Direction
        </h1>

        <p
          style={{
            marginBottom: "40px",
          }}
        >
          Find the direction of the Holy Kaaba.
        </p>

        {/* Compass */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              border: "12px solid var(--primary)",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "10px",
                color: "red",
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              N
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "10px",
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              S
            </div>

            <div
              style={{
                position: "absolute",
                left: "10px",
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              W
            </div>

            <div
              style={{
                position: "absolute",
                right: "10px",
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              E
            </div>

            <div
              style={{
                fontSize: "80px",
              }}
            >
              🕋
            </div>
          </div>
        </div>

        {/* Location */}

        <div
          style={{
            background: "var(--bg)",
            padding: "25px",
            borderRadius: "15px",
            marginBottom: "30px",
          }}
        >
          <h2
            style={{
              color: "var(--primary)",
              marginBottom: "20px",
            }}
          >
            📍 Your Location
          </h2>

          <p>{location}</p>

          {coords && (
            <>
              <p style={{ marginTop: "15px" }}>
                <strong>Latitude:</strong> {coords.lat}
              </p>

              <p>
                <strong>Longitude:</strong> {coords.lng}
              </p>
            </>
          )}
        </div>

        {/* Kaaba */}

        <div
          style={{
            background: "var(--bg)",
            padding: "25px",
            borderRadius: "15px",
          }}
        >
          <h2
            style={{
              color: "var(--primary)",
              marginBottom: "15px",
            }}
          >
            🕋 Holy Kaaba
          </h2>

          <p>
            The Kaaba is located in Masjid al-Haram, Makkah,
            Saudi Arabia.
          </p>

          <p
            style={{
              marginTop: "20px",
            }}
          >
            Allow location permission to calculate the
            Qibla direction.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Qibla;