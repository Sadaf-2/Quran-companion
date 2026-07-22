import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import duas from "../data/duas";

import {
  addFavorite,
  removeFavorite,
} from "../features/favorites/favoriteSlice";

function Duas() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const favorites = useSelector(
    (state) => state.favorites.items
  );

  const filtered = duas.filter((dua) =>
    dua.title.toLowerCase().includes(search.toLowerCase())
  );

  const copyDua = (text) => {
    navigator.clipboard.writeText(text);
    alert("✅ Dua copied successfully!");
  };

  const toggleFavorite = (dua) => {
    const exists = favorites.some(
      (item) => item.id === dua.id
    );

    if (exists) {
      dispatch(removeFavorite(dua.id));
    } else {
      dispatch(addFavorite(dua));
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--text)",
        padding: "50px 25px",
        transition: "0.3s",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "48px",
            color: "var(--primary)",
            marginBottom: "15px",
          }}
        >
          🤲 Daily Duas
        </h1>

        <p
          style={{
            textAlign: "center",
            marginBottom: "35px",
            fontSize: "18px",
          }}
        >
          Read and learn authentic daily duas.
        </p>

        <div style={{ marginBottom: "25px" }}>
          <input
            type="text"
            placeholder="🔍 Search Dua..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "15px",
              borderRadius: "12px",
              border: "1px solid #ccc",
              background: "var(--card)",
              color: "var(--text)",
              fontSize: "16px",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "30px",
            fontWeight: "bold",
          }}
        >
          <p>📖 Total Duas: {filtered.length}</p>

          <p style={{ color: "#ef4444" }}>
            ❤️ Favorites: {favorites.length}
          </p>
        </div>

        {favorites.length > 0 && (
          <div
            style={{
              background: "var(--card)",
              padding: "25px",
              borderRadius: "18px",
              marginBottom: "35px",
              boxShadow: "0 5px 15px rgba(0,0,0,.15)",
            }}
          >
            <h2
              style={{
                color: "var(--primary)",
                marginBottom: "20px",
              }}
            >
              ❤️ Favorite Duas
            </h2>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              {favorites.map((dua) => (
                <span
                  key={dua.id}
                  style={{
                    background: "var(--primary)",
                    color: "white",
                    padding: "8px 15px",
                    borderRadius: "20px",
                  }}
                >
                  {dua.title}
                </span>
              ))}
            </div>
          </div>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(350px,1fr))",
            gap: "25px",
          }}
        ></div>
                  {filtered.map((dua) => (
            <div
              key={dua.id}
              style={{
                background: "var(--card)",
                borderRadius: "20px",
                padding: "25px",
                boxShadow: "0 5px 15px rgba(0,0,0,.15)",
              }}
            >
              <h2
                style={{
                  color: "var(--primary)",
                  marginBottom: "20px",
                }}
              >
                {dua.title}
              </h2>

              <div
                style={{
                  background: "var(--bg)",
                  padding: "20px",
                  borderRadius: "12px",
                  marginBottom: "20px",
                }}
              >
                <p
                  style={{
                    fontSize: "32px",
                    textAlign: "right",
                    lineHeight: "2",
                  }}
                >
                  {dua.arabic}
                </p>
              </div>

              <h3
                style={{
                  color: "var(--primary)",
                  marginBottom: "10px",
                }}
              >
                🌍 Translation
              </h3>

              <p
                style={{
                  marginBottom: "20px",
                }}
              >
                {dua.translation}
              </p>

              <div
                style={{
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    background: "var(--primary)",
                    color: "white",
                    padding: "8px 15px",
                    borderRadius: "20px",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  📚 {dua.reference}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                }}
              >
                <button
                  onClick={() => copyDua(dua.arabic)}
                  style={{
                    flex: 1,
                    background: "#059669",
                    color: "white",
                    border: "none",
                    padding: "12px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  📋 Copy
                </button>

                <button
                  onClick={() => toggleFavorite(dua)}
                  style={{
                    flex: 1,
                    background: favorites.some(
                      (item) => item.id === dua.id
                    )
                      ? "#ef4444"
                      : "transparent",
                    color: favorites.some(
                      (item) => item.id === dua.id
                    )
                      ? "white"
                      : "#ef4444",
                    border: "2px solid #ef4444",
                    padding: "12px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  {favorites.some((item) => item.id === dua.id)
                    ? "❤️ Favorited"
                    : "🤍 Favorite"}
                </button>
              </div>
            </div>
          ))}
        </div>
              </div>

  );
}

export default Duas;