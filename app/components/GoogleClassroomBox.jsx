import Image from "next/image";
import Link from "next/link";

export default function GoogleClassroomBox() {
  return (
    <div className="max-w-5xl mx-auto my-10 p-6 bg-white shadow-lg rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      {/* Coluna da imagem */}
      <div className="w-full flex justify-center">
        <Image
          src="/classroom9.png"
          alt="Google Classroom"
          width={400}
          height={300}
          className="rounded-xl object-contain"
        />
      </div>

      {/* Coluna do texto */}
      <div>
        <h2 className="text-4xl font-semibold text-slate-700 mb-2">
          Duplique o conteúdo no seu Google Sala de Aula
        </h2>
        <p className="text-gray-700 leading-relaxed">
          <Link
            href="https://classroom.google.com/c/NjkxNjE2MjM0Njkw?cjc=4tqsznh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline underline-offset-2 hover:text-blue-800 font-medium"
          >
            Clique aqui
          </Link>{" "}
          para acessar a turma modelo do oitavo ano no Google Sala de Aula, <strong>usando sua conta Google Educacional. </strong> 
          Você poderá fazer uma cópia e a partir dela, poderá customizar seus conteúdos de acordo com as suas turmas. Para acessar conteúdos específicos, vá direto para a aba "Atividades" e selecione de acordo com o capítulo.
        </p>
      </div>
    </div>
  );
}
