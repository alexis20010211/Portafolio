import AquariusBackground from "./AquariusBackground";
import BackgroundMusic from "./BackgroundMusic";
import bg from "../assets/bg-night.jpg";

export default function BackgroundEffects() {
  return (
    <>
      {/* 🌌 FONDO */}
      <div className="fixed inset-0 -z-10">

        {/* 🖼️ IMAGEN */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover brightness-110 contrast-110"
          style={{ backgroundImage: `url(${bg})` }}
        />

        {/* 🌑 OVERLAY */}
        <div className="absolute inset-0 bg-[#020617]/40 md:bg-[#020617]/50 lg:bg-[#020617]/60" />

        {/* ✨ EFECTO */}
        <div className="absolute inset-0 opacity-10 md:opacity-15">
          <AquariusBackground />
        </div>

        {/* 🌫️ GRADIENTE */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/30 to-[#020617]/80" />
      </div>

      {/* 🎵 Música */}
      <BackgroundMusic />
    </>
  );
}