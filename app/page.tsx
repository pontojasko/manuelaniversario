// app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [showSpecialButton, setShowSpecialButton] = useState(false);
  const [isAugust15, setIsAugust15] = useState(false);
  const [message, setMessage] = useState('');

  // useEffect para verificar a data ao carregar a página
  useEffect(() => {
    // verifica a data de hoje no fuso horário do brasil
    const now = new Date();
    const options = { timeZone: 'America/Sao_Paulo' };
    const today = now.toLocaleDateString('pt-br', options);

    // verifica se a data é 15 de agosto de 2025
    if (today === '15/08/2025') {
      setIsAugust15(true);
    }
  }, []);

  const handleShowDate = () => {
    const now = new Date();
    const today = now.toLocaleDateString('pt-br');

    // se for dia 14 ou 15, mostra o botão especial
    if (today === '14/08/2025' || today === '15/08/2025') {
      setShowSpecialButton(true);
    } else {
      // caso contrário, mostra a data em uma mensagem na tela
      setMessage(`hoje é ${today}`);
      // a mensagem desaparece após 3 segundos
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  };

  const handleGoToSpecialPlace = () => {
    // navega para a próxima página
    window.location.href = '/special';
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

      <div className="w-full max-w-sm border border-white p-8 text-center bg-pink-800 bg-opacity-70 backdrop-blur-sm">
        
        {/* imagem central */}
        <div className="flex justify-center mb-6">
          <Image
            src="/amordaminhavida.png"
            alt="imagem central"
            width={200}
            height={200}
            className="border border-white"
          />
        </div>

        <div className="mb-8">
          <h1 className="text-xl font-bold">
            {isAugust15 ? 'FELICIDADES!' : 'aniversario manuela'}
          </h1>
          <p className="mt-2 text-sm">
            clique no botao abaixo e dependendo tera uma grande surpresa
          </p>
        </div>

        {/* caixa de mensagem no lugar do alert */}
        {message && (
          <div className="mt-4 p-2 bg-red-600 text-white text-center">
            {message}
          </div>
        )}

        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={handleShowDate}
            className="w-full px-4 py-2 border border-white bg-gray-600 hover:bg-gray-700 active:bg-gray-800"
          >
            que dia é hoje?
          </button>
          
          {showSpecialButton && (
            <button
              onClick={handleGoToSpecialPlace}
              className="w-full px-4 py-2 border border-red-600 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white"
            >
              OMG É O ANIVERSARIO DA MANUELA???
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
