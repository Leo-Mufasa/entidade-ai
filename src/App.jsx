export default function App() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* Fundo aquarela */}
      <img
        src="/bg-aquarela.png"
        alt="Fundo"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Pássaros no topo centralizado */}
      <img
        src="/passaros.png"
        alt="Pássaros"
        className="absolute top-24 md:top-28 left-1/2 -translate-x-1/2 w-[90vw] max-w-[600px] object-contain z-10 pointer-events-none"
      />

      {/* Corrente central inferior */}
      <img
        src="/corrente.png"
        alt="Corrente"
        className="absolute bottom-28 md:bottom-32 left-1/2 -translate-x-1/2 w-[90vw] max-w-[700px] object-contain z-20 pointer-events-none"
      />

      {/* Texto ENTIDADE fixo no rodapé */}
      <img
        src="/entidade-texto.png"
        alt="ENTIDADE"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[60vw] max-w-[400px] object-contain z-30 pointer-events-none"
      />

      {/* Frase no centro inferior, entre corrente e pássaros */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 px-4">
        <h1 className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-widest uppercase max-w-md text-center drop-shadow-md">
          Você chegou até aqui. Isso é tudo.
        </h1>
      </div>
    </main>
  );
}
