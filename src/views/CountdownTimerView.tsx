import CountdownTimer from "../components/CountdownTimer";

export default function CountdownTimerView() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Contador Regresivo</h1>
      <CountdownTimer />
    </div>
  );
