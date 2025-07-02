"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Header from "../_components/header";

export default function Home() {

  return (
    <main className="bg-white text-gray-900">
      {/* Header */}
      <Header />

      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src="/Section.png" // Altere esse path para o caminho real do seu banner
          alt="Banner Flash"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className=" flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl">
            Flash: uma nova forma de cuidar da sua equipe
          </h1>
          <p className="mt-4 text-lg max-w-xl">
            Flexibilidade, controle e tecnologia para transformar sua gestão de pessoas.
          </p>
          <Button className="mt-6 bg-pink-500 hover:bg-pink-600">Fale com um especialista</Button>
        </div>

      </section>

      {/* <section className="bg-pink-50 py-16 px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Preencha o formulário e simplifique a rotina de trabalho do RH ao Financeiro
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li><strong>30 mil</strong> empresas</li>
            <li><strong>1,5 milhão</strong> de usuários</li>
            <li><strong>13 bilhões</strong> em benefícios pagos</li>
          </ul>
        </div>
        <Card className="p-6">
          <CardContent>
            <h3 className="text-xl font-medium mb-4">Descubra nossas soluções</h3>
            <form className="space-y-3">
              <Input placeholder="Nome completo" />
              <Input type="email" placeholder="Email corporativo" />
              <Input placeholder="Nome da empresa" />
              <Input type="tel" placeholder="Telefone" />
              <Button className="w-full bg-70489D text-white hover:bg-pink-600">Enviar</Button>
            </form>
          </CardContent>
        </Card>
      </section>

      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Gerencie benefícios, pessoas e despesas com praticidade
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Centralize tudo em um só lugar e ofereça a melhor experiência para RH,
          financeiro e colaboradores.
        </p>
      </section>

      <section className="py-20 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            O software com tudo o que RH, Financeiro e colaboradores precisam
          </h3>
          <ul className="text-gray-700 space-y-3">
            <li><strong>Gestão eficiente:</strong> Organize tudo em um só lugar.</li>
            <li><strong>Controle centralizado:</strong> Tenha mais visibilidade e segurança.</li>
            <li><strong>Rotina simplificada:</strong> Elimine tarefas manuais.</li>
          </ul>
          <Button className="mt-6 bg-pink-500 text-white">Saiba mais</Button>
        </div>
        <Image
          src="/images/software-screenshot.png"
          alt="Flash Software"
          width={600}
          height={400}
          className="rounded-xl shadow-lg"
        />
      </section>

      <section className="bg-pink-100 py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Quem ama <span className="text-pink-500">Flash</span>, ama resultados
        </h2>
        <Button className="mb-6 bg-pink-500 text-white">Ver histórias</Button>
        <Image
          src="/images/testimonial.png"
          alt="Depoimento de cliente"
          width={400}
          height={300}
          className="mx-auto rounded-xl"
        />
      </section>

      <section className="py-20 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Parcerias da Flash</h2>
        <p className="text-gray-700 max-w-lg mx-auto mb-6">
          Conecte-se a uma rede de soluções e leve mais benefícios para sua equipe.
        </p>
        <Button className="bg-pink-500 text-white">Quero me conectar</Button>
      </section>

      <section className="bg-pink-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          A Flash fazendo a diferença para empresas e colaboradores
        </h2>
        <Button className="mb-6 bg-pink-500 text-white">Ver todos</Button>
        <Card className="max-w-xl mx-auto">
          <CardContent className="p-6">
            <p className="italic">“Foi super fácil integrar a Flash na nossa operação e os colaboradores adoram os benefícios flexíveis.”</p>
            <p className="mt-4 font-medium">Viviane, Gerente de RH</p>
          </CardContent>
        </Card>
      </section>

      <section className="py-20 px-6 text-center">
        <h2 className="text-xl font-semibold mb-2">Ficou com alguma dúvida?</h2>
        <p className="text-gray-700 mb-4">Confira as perguntas mais frequentes</p>
        <Button className="bg-pink-500 text-white">Ver respostas</Button>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="font-semibold mb-2">Produto</h3>
            <ul className="text-sm space-y-1">
              <li>Gestão de Benefícios</li>
              <li>Gestão de Pessoas</li>
              <li>Gestão de Despesas</li>
              <li>Cartão Flash</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Sobre</h3>
            <ul className="text-sm space-y-1">
              <li>Quem somos</li>
              <li>Blog</li>
              <li>Carreiras</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Atendimento</h3>
            <ul className="text-sm space-y-1">
              <li>Central de ajuda</li>
              <li>Fale conosco</li>
              <li>Ouvidoria</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Redes sociais</h3>
            <ul className="text-sm space-y-1">
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </footer> */}
    </main>
  );
}
