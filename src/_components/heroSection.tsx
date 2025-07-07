"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

// Aqui vai a tipagem
interface Hero1Props {
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
const HeroSection = ({
  badge = "",
  heading = "",
  description = "",
  buttons = {
    primary: {
      text: "",
      url: "",
    },
  },
  image = {
    src: "",
    alt: "",
  },
}: Hero1Props) => { // Aqui vai a tipagem
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
    <section className="z-index bg-cyan-950 px-6 flex justify-center items-center h-[calc(100vh-64px)]">
      <div className="container">
        <div className="grid items-center gap-8  lg:mt-0 lg:grid-cols-2"  >
          <div className=" flex flex-col text-left mt-40 lg:mt-0 lg:items-start lg:text-left" ref={textTarget} data-log="1">
            {badge && (
              <Badge variant="outline" className="text-white">
                {badge}
                <ArrowUpRight className="ml-2 size-4" />
              </Badge>
            )}
            <h1 className=" text-white my-6 text-pretty text-4xl font-bold lg:text-6xl lg:w-[90%] box" data-log="0.4" >
              {heading}
            </h1>
            <p className="text-white mb-8 max-w-xl lg:text-xl">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
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
            </div>
          </div>
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-96 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
