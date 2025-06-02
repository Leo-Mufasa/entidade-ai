import './birds.css';

export default function App() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* Fundo universal para todas as telas */}
      <img
        src="/bg-aquarela.png"
        alt="Fundo completo"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Pássaros animados flutuando */}
      <img
        src="/passaros-flutuando.png"
        alt="Pássaros"
        className="absolute bottom-[48%] left-1/2 w-[110vw] max-w-[900px] object-contain z-30 animate-fly pointer-events-none"
      />

      {/* Frase central */}
      <div className="absolute bottom-[55%] md:bottom-[38%] left-1 -translate-x-1/2 z-40 px-4">
        <h1 className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-widest uppercase max-w-md text-center drop-shadow-md leading-relaxed">
          Você chegou até aqui.<br />Isso é tudo.
        </h1>
      </div>
    </main>
  );
}
