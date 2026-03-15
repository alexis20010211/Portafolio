import { useRef, useEffect, useState } from "react";
import musicaSuave from "../assets/musica-suave.mp3";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.15); // volumen inicial

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume; // actualizar volumen
    if (isPlaying) {
      audio.play().catch(() => {}); // previene errores de autoplay
    } else {
      audio.pause();
    }
  }, [isPlaying, volume]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        zIndex: 1000,
        background: "#111827",
        padding: "10px",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <audio ref={audioRef} loop>
        <source src={musicaSuave} type="audio/mpeg" />
        Tu navegador no soporta audio.
      </audio>

      {/* Botón de reproducir/pausar */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="bg-indigo-500 text-white px-3 py-1 rounded-lg hover:bg-indigo-600 transition"
      >
        {isPlaying ? "🔊 Pausar" : "▶️ Reproducir"}
      </button>

      {/* Slider de volumen */}
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        className="w-24"
      />
    </div>
  );
}
