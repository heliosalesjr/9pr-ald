"use client";
import Image from 'next/image';
import ResourceCards from './ResourcesCards';

const TwoColumnLayout = () => {
  return (
    <div className="relative h-[95vh] flex items-center justify-center bg-gradient-to-br from-yellow-700 to-green-300 z-0">
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
      
      <ResourceCards className="z-100"/>
    </div>
  );
};

export default TwoColumnLayout;





