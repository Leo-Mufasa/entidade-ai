export default function App() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* Fundo aquarela */}
      <img
        src="/bg-aquarela.png"
        alt="Fundo"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Pássaros */}
      <img
        src="/passaros.png"
        alt="Pássaros"
        className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none"
      />

      {/* Corrente */}
      <img
        src="/corrente.png"
        alt="Corrente"
        className="absolute bottom-0 w-full object-contain z-20 pointer-events-none"
      />

      {/* Texto ENTIDADE */}
      <img
        src="/entidade-texto.png"
        alt="ENTIDADE"
        className="absolute bottom-2 w-full object-contain z-30 pointer-events-none"
      />

      {/* Frase no centro */}
      <div className="relative z-40 flex items-center justify-center h-full px-4">
        <h1 className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-widest uppercase max-w-md text-center drop-shadow-md">
          Você chegou até aqui. Isso é tudo.
        </h1>
      </div>
    </main>
  );
}
