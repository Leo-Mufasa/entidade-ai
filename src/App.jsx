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

      {/* Corrente fixa no rodapé */}
      <img
        src="/corrente.png"
        alt="Corrente"
        className="absolute bottom-10 md:bottom-16 left-1/2 -translate-x-1/2 w-[90vw] max-w-[700px] object-contain z-10 pointer-events-none"
      />

      {/* Texto ENTIDADE */}
      <img
        src="/entidade-texto.png"
        alt="ENTIDADE"
        className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[60vw] max-w-[400px] object-contain z-20 pointer-events-none"
      />

      {/* Pássaros animados flutuando */}
      <img
        src="/passaros-flutuando.png"
        alt="Pássaros"
        className="absolute bottom-[48%] left-1/2 w-[70vw] max-w-[500px] object-contain z-30 animate-fly pointer-events-none"
      />

      {/* Frase central */}
      <div className="absolute bottom-[35%] md:bottom-[38%] left-1/2 -translate-x-1/2 z-40 px-4">
        <h1 className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-widest uppercase max-w-md text-center drop-shadow-md leading-relaxed">
          Você chegou até aqui.<br />Isso é tudo.
        </h1>
      </div>
    </main>
  );
}
