export default function App() {
  return (
    <main className="relative w-full h-screen text-black">
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-contain md:bg-cover"
        style={{ backgroundImage: 'url("/bg-entidade.png")' }}
      ></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-widest uppercase max-w-md mx-auto px-4 text-center drop-shadow-sm">
          Você chegou até aqui. Isso é tudo.
        </h1>
      </div>
    </main>
  );
}
