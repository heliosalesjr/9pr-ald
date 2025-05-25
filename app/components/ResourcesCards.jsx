'use client'
import Image from 'next/image'
import Link from 'next/link'

const cards = [
  {
    href: '/professores',
    image: '/teachs.jpg',
    title: 'Material para os Educadores',
    subtitle: 'Acesse livros e atividades exclusivas para facilitar seu ensino.',
  },
  {
    href: '/estudantes',
    image: '/students.png',
    title: 'Material para os Estudantes',
    subtitle: 'Explore conteúdos feitos especialmente para o seu aprendizado.',
  },
]

export default function ResourceCards() {
  return (
    <div className="p-4 md:p-8 z-10 pt-16 md:pt-0">
      {/* Título centralizado com efeito de hover */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-white dark:text-white transition duration-300 hover:text-zinc-200 pt-32 md:pt-4 ">
          Aprendendo a Lidar com Dinheiro
        </h1>
      </div>

      {/* Container dos cards */}
      <div className="flex flex-col md:flex-row gap-6">
        {cards.map((card, index) => (
          <Link
            key={index}
            href={card.href}
            className="group flex-1 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl bg-white dark:bg-zinc-900"
          >
            <div className="flex flex-col h-64 md:h-96">
              {/* Imagem - 2/3 superior */}
              <div className="relative h-2/3 w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 rounded-t-2xl"
                />
              </div>

              {/* Conteúdo de texto - 1/3 inferior */}
              <div className="h-1/3 p-4 flex flex-col justify-center bg-white dark:bg-zinc-900">
                <h2 className="text-lg md:text-2xl font-bold text-gray-800 dark:text-white mb-1">
                  {card.title}
                </h2>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                  {card.subtitle}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
