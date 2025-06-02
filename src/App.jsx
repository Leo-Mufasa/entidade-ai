export default function App() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* Fundo para dispositivos desktop */}
      <img
        src="/bg-entidade-desktop.png"
        alt="Fundo Desktop"
        className="absolute inset-0 w-full h-full object-cover hidden sm:block z-0"
      />

      {/* Fundo para dispositivos móveis */}
      <img
        src="/bg-entidade-mobile.png"
        alt="Fundo Mobile"
        className="absolute inset-0 w-full h-full object-cover block sm:hidden z-0"
      />

      {/* Frase central */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <h1 className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-widest uppercase max-w-md text-center drop-shadow-md leading-relaxed">
          Você chegou até aqui.<br />Isso é tudo.
        </h1>
      </div>
    </main>
  );
}
