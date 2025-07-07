"use client";

import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// Aqui vai a tipagem
interface Hero2Props {
  badge?: string;
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image: {
    src: string;
    alt: string;
  };
}

// Aqui vai o componente
const HeroSection2 = ({
  badge = "",
  heading = "",
  description = "",
}: Hero2Props) => { // Aqui vai a tipagem
  const textTarget = useRef<HTMLDivElement>(null);

  // aqui vai a animacao
  useEffect(() => {
    if (textTarget.current) {
      gsap.fromTo(
        textTarget.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1 },

      );
    }
  }, []);

  return (
    <section className="mt-26 lg:mt-0 px-6 flex justify-center items-center h-[calc(100vh-64px)]">
      <div className="container ">
        <div className="grid items-center gap-8 lg:grid-cols-2"  >
          <div className="flex flex-col text-left lg:items-start lg:text-left" ref={textTarget} data-log="1">
            {badge && (
              <Badge variant="outline">
                {badge}
                <ArrowUpRight className="ml-2 size-4" />
              </Badge>
            )}
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-4xl lg:w-[100%] box" data-log="0.4" >
              {heading}
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              {description}
            </p>
            {/* <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons.primary && (
                <Button asChild className="w-full sm:w-auto p-7">
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons.secondary && (
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              )}
            </div> */}
          </div>
          <div className="mx-auto flex max-w-3xl flex-col gap-6 rounded-lg border p-10">
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">Nome</Label>
                <Input type="text" id="firstname" placeholder="Nome" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">Sobrenome</Label>
                <Input type="text" id="lastname" placeholder="Sobrenome" />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Numero</Label>
              <Input type="text" id="subject" placeholder="Seu número" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Quantidade de funcionario:</Label>
              <Input type="number" id="message" placeholder="Quantidade"></Input>
            </div>
            <Button className="w-full">Enviar</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection2 };
