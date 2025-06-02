export default function App() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* Fundo aquarela */}
      <img
        src="/bg-aquarela.png"
        alt="Fundo"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Corrente fixa no rodapé */}
      <img
        src="/corrente.png"
        alt="Corrente"
        className="absolute bottom-16 md:bottom-24 left-1/2 -translate-x-1/2 w-[90vw] max-w-[700px] object-contain z-10 pointer-events-none"
      />

      {/* Pássaros acima da corrente, como se emergissem */}
      <img
        src="/passaros.png"
        alt="Pássaros"
        className="absolute bottom-[40%] md:bottom-[42%] left-1/2 -translate-x-1/2 w-[70vw] max-w-[500px] object-contain z-20 pointer-events-none"
      />

      {/* Texto ENTIDADE no rodapé, fixo abaixo da corrente */}
      <img
        src="/entidade-texto.png"
        alt="ENTIDADE"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[60vw] max-w-[400px] object-contain z-30 pointer-events-none"
      />

      {/* Frase entre corrente e pássaros */}
      <div className="absolute bottom-[28%] md:bottom-[30%] left-1/2 -translate-x-1/2 z-40 px-4">
        <h1 className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-widest uppercase max-w-md text-center drop-shadow-md">
          Você chegou até aqui. Isso é tudo.
        </h1>
      </div>
    </main>
  );
}
