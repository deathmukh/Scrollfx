import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white  rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div class="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-arial text-2xl">
            Hello, I am Deathmukh
          </h1>
          <p className="text-gray-500">Welcome to my portfolio</p>
          <p className="mt-3">I know:</p>
          <ul className="leading-9">
            <li>How to code</li>
            <li>How to learn</li>
            <li>How to deliver</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-arial text-2xl">
            Here are my skills
          </h1>
          <p className="mt-3">
            <b>Frontend</b>
          </p>
          <ul className="leading-9">
            <li>ReactJS</li>
            <li>AngularJS</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
          </ul>
          <p className="mt-3">
            <b>Backend</b>
          </p>
          <ul className="leading-9">
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>NestJS</li>
            <li>PostgreSQL</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-arial text-2xl">
           I don't pick up calls hehehe
          </h1>

          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            📞123123123
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
