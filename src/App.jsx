export default function App() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* Fundo aquarela */}
      <img
        src="/bg-aquarela.png"
        alt="Fundo"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Corrente rebaixada */}
      <img
        src="/corrente.png"
        alt="Corrente"
        className="absolute bottom-10 md:bottom-16 left-1/2 -translate-x-1/2 w-[90vw] max-w-[700px] object-contain z-10 pointer-events-none"
      />

      {/* Pássaros elevados */}
      <img
        src="/passaros.png"
        alt="Pássaros"
        className="absolute bottom-[48%] md:bottom-[50%] left-1/2 -translate-x-1/2 w-[70vw] max-w-[500px] object-contain z-20 pointer-events-none"
      />

      {/* Texto ENTIDADE fixo no rodapé */}
      <img
        src="/entidade-texto.png"
        alt="ENTIDADE"
        className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[60vw] max-w-[400px] object-contain z-30 pointer-events-none"
      />

      {/* Frase central com contraste e posicionamento refinado */}
      <div className="absolute bottom-[35%] md:bottom-[38%] left-1/2 -translate-x-1/2 z-40 px-4">
        <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-widest uppercase max-w-md text-center drop-shadow-md">
          Você chegou até aqui. Isso é tudo.
        </h1>
      </div>
    </main>
  );
}
