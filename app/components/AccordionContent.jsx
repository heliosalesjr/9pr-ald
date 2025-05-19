'use client';
import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { FaVideo, FaFileAlt } from 'react-icons/fa';

export default function Acc() {
  return (
    <div className='md:py-2 md:p-0 dark:bg-slate-700'>
      <div className='text-center max-w-5xl mx-auto md:py-8'>
        <h1 className="text-4xl font-bold px-8 text-slate-800 dark:text-white">Usando a Plataforma</h1>
        <p className="mt-4 text-lg px-8 text-slate-800 dark:text-white">
          Aprenda a usar nossa plataforma através dos conteúdos disponibilizados abaixo. Lembre-se que a plataforma possui ferramentas específicas de acordo com cada perfil, sendo eles de estudante, educador ou gestor.
        </p>
      </div>

      {/* Accordion for medium screens and above */}
      <div className='max-w-5xl mx-auto hidden md:block'>
        <Accordion defaultExpandedKeys={["1"]}>
          <AccordionItem key="1" aria-label="Vídeo Tutorial" subtitle="Clique para abrir" title="Vídeo Tutorial" className="hover:bg-sky-100 transition-colors duration-200 rounded-lg px-4 font-bold dark:hover:bg-sky-700 py-4 my-4 bg-slate-200">
            <div className='flex justify-center items-center'>
              <iframe src="https://drive.google.com/file/d/1IqaZU0DxJQtXWvQ2Gc8XMLf8rvkqFm8O/preview" width="100%" height="600" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen allow="autoplay; clipboard-read; clipboard-write"></iframe>
            </div>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Caderno do Estudante" subtitle="Clique para abrir" title="Manual de Acesso à Plataforma" className="hover:bg-sky-100 transition-colors duration-200 rounded-lg px-4 font-bold dark:hover:bg-sky-700 py-4 my-4 bg-slate-200">
            <div className='flex justify-center items-center'>
              <iframe src="https://drive.google.com/file/d/1W2qDAF5omndVyFoawPBIX35Y3Es3vDEu/preview" width="100%" height="600" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen allow="autoplay; clipboard-read; clipboard-write"></iframe>
            </div>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Icons for small screens */}
      <div className='block md:hidden text-center mt-8 mb-8 mx-16'>
        <div className='mb-6'>
          <div className="mx-auto mb-2 w-16 h-16 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-full flex items-center justify-center">
            <FaVideo size={30} className="text-white m-4" />
          </div>
          <h1 className="text-xl font-bold text-slate-800 dark:text-white max-w-[140px] mx-auto mb-2">
            Assista ao vídeo tutorial
          </h1>
          <a
            href="https://drive.google.com/file/d/1IqaZU0DxJQtXWvQ2Gc8XMLf8rvkqFm8O/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 hover:underline mb-4"
          >
            Abrir Vídeo
          </a>
        </div>
        <div>
          <div className="mx-auto mb-2 w-16 h-16 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-full flex items-center justify-center">
            <FaFileAlt size={30} className="text-white m-4" />
          </div>
          <h1 className="text-xl font-bold text-slate-800 dark:text-white max-w-[140px] mx-auto mb-2">
            Leia o Manual de acesso à Plataforma
          </h1>
          <a
            href="https://drive.google.com/file/d/1W2qDAF5omndVyFoawPBIX35Y3Es3vDEu/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 hover:underline"
          >
            Abrir Manual
          </a>
        </div>
      </div>

    </div>
  );
}
