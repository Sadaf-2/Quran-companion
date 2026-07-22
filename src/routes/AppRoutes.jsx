import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "../components/ProtectedRoute";

const Home = lazy(() => import("../pages/Home"));
const Quran = lazy(() => import("../pages/Quran"));
const SurahDetail = lazy(() => import("../pages/SurahDetail"));
const PrayerTimes = lazy(() => import("../pages/PrayerTimes"));
const Duas = lazy(() => import("../pages/Duas"));
const Tasbih = lazy(() => import("../pages/Tasbih"));
const Qibla = lazy(() => import("../pages/Qibla"));
const About = lazy(() => import("../pages/About"));
const Profile = lazy(() => import("../pages/Profile"));

const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));

const NotFound = lazy(() => import("../pages/NotFound"));

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="quran" element={<Quran />} />

        <Route path="surah/:id" element={<SurahDetail />} />

        <Route path="prayer-times" element={<PrayerTimes />} />

        <Route path="duas" element={<Duas />} />

        <Route path="tasbih" element={<Tasbih />} />

        <Route path="qibla" element={<Qibla />} />

        <Route path="about" element={<About />} />

        {/* Protected Route */}
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Authentication Routes */}
        <Route path="login" element={<Login />} />

        <Route path="signup" element={<Signup />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;