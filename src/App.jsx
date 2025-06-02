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

      {/* Texto ENTIDADE */}
      <img
        src="/entidade-texto.png"
        alt="ENTIDADE"
        className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[60vw] max-w-[400px] object-contain z-20 pointer-events-none"
      />

      {/* Pássaros bem mais altos */}
      <img
        src="/passaros-flutuando.png"
        alt="Pássaros"
        className="absolute bottom-[55%] md:bottom-[60%] left-1/2 w-[100vw] max-w-[720px] object-contain z-30 animate-fly pointer-events-none"
      />

      {/* Frase central */}
      <div className="absolute bottom-[65%] md:bottom-[58%] left-1/2 -translate-x-1/2 z-40 px-4">
        <h1 className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-widest uppercase max-w-md text-center drop-shadow-md leading-snug">
          Você chegou até aqui.<br />Isso é tudo.
        </h1>
      </div>
    </main>
  );
}
