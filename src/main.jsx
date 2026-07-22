import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";

import "./styles/theme.css";
import "./index.css";

import { ThemeProvider } from "./context/ThemeContext";
import { store, persistor } from "./app/store";

import ErrorBoundary from "./components/common/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <Provider store={store}>

      <PersistGate
        loading={null}
        persistor={persistor}
      >

        <ThemeProvider>

          <BrowserRouter>

            <ErrorBoundary>

              <Suspense
                fallback={
                  <div
                    style={{
                      minHeight: "100vh",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "24px",
                      fontWeight: "bold",
                      background: "var(--bg)",
                      color: "var(--text)",
                    }}
                  >
                    ⏳ Loading...
                  </div>
                }
              >

                <App />

              </Suspense>

            </ErrorBoundary>

          </BrowserRouter>

        </ThemeProvider>

      </PersistGate>

    </Provider>

  </React.StrictMode>

);