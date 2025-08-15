// app/special/page.tsx
'use client';

import Image from 'next/image';

export default function SpecialPage() {
  const handleGoBack = () => {
    window.location.href = '/'; 
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-4 text-white">
      {/* background com imagem local */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/retro-background.jpg"
          alt="background retro"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="w-full max-w-sm border border-white p-8 text-center bg-pink-400 bg-opacity-70 backdrop-blur-sm">
        
        <div className="mb-8">
          <h1 className="text-xl font-bold">
            feliz aniversario, manuela!
          </h1>
        </div>
        
        {/* texto estático para a mensagem */}
        <div className="w-full p-4 mb-8 bg-pink-900 bg-opacity-50 border border-white text-white whitespace-pre-line text-left">
          digite aqui sua mensagem especial, heitor.
          aqui é o lugar para o seu texto fixo.
        </div>

        <button
          onClick={handleGoBack}
          className="w-full px-4 py-2 border border-white bg-gray-600 hover:bg-gray-700 active:bg-gray-800"
        >
          voltar para o início
        </button>
      </div>
    </main>
  );
}
