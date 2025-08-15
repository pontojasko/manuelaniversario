// app/special/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function SpecialPage() {
  // estado para controlar o texto da mensagem
  const [message, setMessage] = useState(
    `Oi meu amor! Venho aqui por meio deste humilde blog digital te dar os meus mais sinceros parabéns....
Nossa querido... Parabéns por que?...
E eu te respondo...
Porque hoje é o seu aniversario.
O melhor dia do ano....

Amor, parabéns!!! Feliz aniversário, é imensuravel o tanto de gratidão que tenho por você ser essa pessoa que me FORNECE doses GIGANTESCAS de amor todos os dias.

Eu amo o jeito em que você sempre se declara pra mim, eu amo o jeito bonitinho que você fica quando está a ficar fofinha, eu amo como você sente
saudades de mim mesmo antes de eu ir embora da sua casa. Eu amo o jeito que você se veste,
Eu amo como você não consegue ficar brava com ninguém. Eu amo me sentir inspirado na forma que você lida com a vida.
Acima de tudo, eu amo amar mais a vida!

Nunca imaginei que fosse encontrar uma pessoa tão boa quanto você.
Sempre me pego agradecendo por você existir.
Te amo :)

Estou morrendo de saudades de você, mas esse tempo longe vai passar rapidinho, e a gente nem vai ver.
Que eu possa acompanhar mais UM MILHÃO DE aniversários (GRAÇAS A DEUS presencialmente, pra poder te dar presentinhos fisicos e carinhos mais fisicos ainda hihi)

Enfim. Te amo muito mesmo meu amor, sou grato por você existir na minha vida tanto, que você não sabe o quanto.

No seu aniversario de 18 anos vou ter que fazer um software inteiro.
`
  );

  // estado para controlar a visibilidade do botão secreto
  const [showSecretButton, setShowSecretButton] = useState(false);

  // função para mudar o texto e mostrar o botão secreto
  const handleLoveClick = () => {
    setMessage('eu te amoooooooooooooooooooooooo maisssssssssssss AO INFINITO HAHAHAHAHAHA');
    setShowSecretButton(true);
  };

  // função para redirecionar para o link do segredo
  const handleSecretClick = () => {
    window.location.href = 'https://youtu.be/aBXGGkluSnc?si=iuWfi5nqFQp2ka1Z&t=37';
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
            DE HEITOR JASKO A MANUELA CRISPINO
          </h1>
        </div>

        {/* texto que será alterado pelo botão */}
        <div className="w-full p-4 mb-8 bg-pink-900 bg-opacity-50 border border-white text-white whitespace-pre-line text-left">
          {message}
        </div>

        {/* botão 'eu te amo' */}
        <button
          onClick={handleLoveClick}
          className="w-full px-4 py-2 border border-white bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold"
        >
          eu te amo
        </button>

        {/* botão secreto que aparece condicionalmente */}
        {showSecretButton && (
          <button
            onClick={handleSecretClick}
            className="w-full mt-4 px-4 py-2 border border-white bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-bold"
          >
            segredo
          </button>
        )}
      </div>
      <style jsx global>{`
        body {
          font-family: 'Comic Sans MS', 'Comic Sans', sans-serif;
        }
      `}</style>
    </main>
  );
}
