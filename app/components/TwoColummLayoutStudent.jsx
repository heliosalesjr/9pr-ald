"use client";
import Image from 'next/image';
import BooksCardStudent from './BooksCardStudent';
import Atividades from './Atividades';


const TwoColumnLayoutStudent = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-700 to-green-300 z-0">
      {/* Imagem de fundo e gradiente */}
     
     

      {/* Logo no canto superior esquerdo */}
      <a
        href="/"
       
        className="absolute top-4 left-4 z-10"
      >
        <Image
          src="/logo-white.png"
          alt="Logo BEĨ"
          width={70}
          height={70}
          className="mx-8"
        />
      </a>
        <div className='pt-16'>
            <h1 className='text-white text-center text-4xl p-4'>Material Didático</h1>
            <p className='text-white text-center text-lg p-4 pb-8'>O Livro do Estudante em formato digital.</p>
            <BooksCardStudent />
            <h1 className='text-white text-center text-4xl p-4'>Formulários das Avaliações</h1>
            <p className='max-w-2xl mx-auto text-white text-center text-lg p-4 pb-8'>Acesse os formulários Google das atividades de acordo com o capítulo desejado, inclusive conteúdo extra criado especialmente para a rede. </p>

            <Atividades className='pb-16'/>
            
        </div>  
      
    </div>
  );
};

export default TwoColumnLayoutStudent;