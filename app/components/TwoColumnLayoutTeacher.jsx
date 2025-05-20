"use client";
import Image from 'next/image';
import BooksCard from './BooksCard';
import Atividades from './Atividades';
import GoogleClassroomBox from './GoogleClassroomBox';


const TwoColumnLayoutTeacher = () => {
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

      <a
              href="/"
             
              className="absolute top-4 right-4 z-10"
            >
              <Image
                src="/seed_h.png"
                alt="Logo SEED"
                width={150}
                height={70}
                className="mx-8"
              />
            </a>

        <div className='pt-16'>
            <h1 className='text-white text-center text-4xl p-4'>Material Didático</h1>
            <p className='text-white text-center text-lg p-4 pb-8'>Acesse os livros didáticos do nono ano para o educador e alunos.</p>
            <BooksCard />
            <h1 className='text-white text-center text-4xl p-4'>Formulários das Atividades</h1>
            <p className='max-w-2xl mx-auto text-white text-center text-lg p-4 pb-8'>Acesse os formulários Google das atividades de acordo com o capítulo desejado, inclusive conteúdo extra criado especialmente para esse ambiente digital.</p>

            <Atividades />
            <GoogleClassroomBox />
        </div>  
      
    </div>
  );
};

export default TwoColumnLayoutTeacher;