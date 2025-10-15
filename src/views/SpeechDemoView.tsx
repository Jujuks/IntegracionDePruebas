// src/views/SpeechDemoView.tsx
import { useEffect, useState } from "react";

export default function SpeechDemoView() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>("");
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);

  const synth = window.speechSynthesis;

  // Poblar voces al inicio
  useEffect(() => {
    function populateVoices() {
      const allVoices = synth.getVoices();
      const preferred = allVoices.filter((v) =>
        /en-|English/i.test(`${v.lang} ${v.name}`),
      );
      const source = preferred.length ? preferred : allVoices;
      setVoices(source);
      if (source.length && !selectedVoice) {
        setSelectedVoice(source[0].name);
      }
    }

    populateVoices();
    synth.addEventListener("voiceschanged", populateVoices);

    return () => {
      synth.cancel();
      synth.removeEventListener("voiceschanged", populateVoices);
    };
  }, [synth, selectedVoice]);

  // Función para hablar
  const speak = (text: string) => {
    if (!("speechSynthesis" in window)) return;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.voice = voices.find((v) => v.name === selectedVoice) ?? null;

    u.rate = rate;
    u.pitch = pitch;
    u.lang = u.voice?.lang || "en-US";
    synth.speak(u);
  };

  const examples = [
    "She has lived in London for five years.",
    "We have already finished our homework.",
    "By next year, I will have graduated from university.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Text-to-Speech
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Convierte texto a voz usando la Web Speech API
          </p>
          <div className="text-sm text-slate-500 mb-8">
            Si no escuchas audio, prueba en Chrome/Edge y habilita sonido.
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Panel de controles */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Controles de Voz</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Voz */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Voz
                </label>
                <select
                  className="w-full rounded-lg border border-slate-300 bg-white text-slate-800 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={selectedVoice}
                  onChange={(e) => setSelectedVoice(e.target.value)}
                >
                  {voices.map((v) => (
                    <option key={v.name} value={v.name}>
                      {v.name} ({v.lang})
                    </option>
                  ))}
                </select>
              </div>

              {/* Rate */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Velocidad: {rate}x
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.1"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full accent-blue-500"
                />
              </div>

              {/* Pitch */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Tono: {pitch}
                </label>
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="0.1"
                  value={pitch}
                  onChange={(e) => setPitch(Number(e.target.value))}
                  className="w-full accent-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Lista de ejemplos */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Ejemplos de Texto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {examples.map((sentence) => (
                <div
                  key={sentence}
                  className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 hover:bg-slate-100 transition-colors"
                >
                  <span className="text-slate-700 flex-1 mr-4">
                    {sentence}
                  </span>
                  <button
                    onClick={() => speak(sentence)}
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    🔊 Reproducir
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
