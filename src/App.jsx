import './birds.css';
import './corrente.css';

export default function App() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* Fundo aquarela */}
      <img
        src="/bg-aquarela.png"
        alt="Fundo completo"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Corrente com vibração, maior e mais alta */}
      <img
        src="/corrente.png"
        alt="Corrente"
        className="absolute bottom-40 md:bottom-52 left-1/2 -translate-x-1/2 w-[120vw] max-w-[1000px] object-contain z-10 animate-vibrate pointer-events-none"
      />

      {/* Pássaros mais altos */}
      <img
        src="/passaros-flutuando.png"
        alt="Pássaros"
        className="absolute bottom-[38%] md:bottom-[42%] left-1/2 w-[100vw] max-w-[720px] object-contain z-30 animate-fly pointer-events-none"
      />

      {/* Frase ajustada */}
      <div className="absolute bottom-[57%] md:bottom-[50%] left-1/2 -translate-x-1/2 z-40 px-4">
        <h1 className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-widest uppercase max-w-md text-center drop-shadow-md leading-snug">
          Você chegou até aqui.<br />Isso é tudo.
        </h1>
      </div>
    </main>
  );
}
