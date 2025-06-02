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
        className="absolute bottom-60 md:bottom-72 left-1/2 -translate-x-1/2 w-[130vw] max-w-[1100px] object-contain z-10 animate-vibrate pointer-events-none"
      />

      {/* Pássaros mais baixos que antes */}
      <img
        src="/passaros-flutuando.png"
        alt="Pássaros"
        className="absolute bottom-[45%] md:bottom-[48%] left-1/2 w-[100vw] max-w-[720px] object-contain z-30 animate-fly pointer-events-none"
      />

      {/* Frase central (mais abaixo, maior, mais espaçosa) */}
      <div className="absolute bottom-[40%] md:bottom-[32%] left-1/2 -translate-x-1/2 z-40 px-4">
        <h1 className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-widest uppercase max-w-xl text-center drop-shadow-md leading-relaxed">
          Você chegou até aqui.<br />Isso é tudo.
        </h1>
      </div>
    </main>
  );
}
