export default function App() {
  return (
    <main className="flex items-center justify-center h-screen text-black relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-80 z-0" style={{ backgroundImage: 'url("/bg-entidade.png")' }}></div>
      <div className="text-center z-10">
        <h1 className="text-2xl md:text-4xl font-semibold tracking-widest uppercase">
          Você chegou até aqui. Isso é tudo.
        </h1>
      </div>
    </main>
  );
}
