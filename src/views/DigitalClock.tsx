import { DigitalClock } from "../components/DigitalClock";

export default function DigitalClockView() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Reloj Digital</h1>
      <DigitalClock />
    </div>
  );
}