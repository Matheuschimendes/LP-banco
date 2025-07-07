"use client";

import { HeroSection } from "@/_components/heroSection";
import { HeroSection2 } from "@/_components/heroSection2";
import Header from "../_components/header";



export default function Home() {

  return (
    <main className=" text-gray-900">
      {/* Header */}
      <Header />


      <HeroSection
        badge={"✨ Your Website Builder"}
        heading={"Deixe sua rotina de trabalho mais simples."}
        description={"Centralize toda sua gestão multibenefícios, de pessoas, controle de jornada, despesas e cartão corporativo de forma integrada."}
        buttons={{
          primary: {
            text: "Agende uma demosntração",
            url: "",
          },
        }}
        image={{
          src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
          alt: ""
        }} />

      <HeroSection2
        badge={"FALE COM A FLASH"}
        heading={"Preencha o formulário e simplifique a rotina de trabalho, do RH ao Financeiro"}
        description={"Empresa mais eficiente, estratégica e colaboradores mais satisfeitos com a plataforma da Flash, que integra gestão de benefícios, pessoas e despesas."}
        image={{
          src: "",
          alt: ""
        }} />

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
      </footer>
    </main>
  );
}
