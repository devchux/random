import { useRef, useState } from "react";

export const useApp = () => {
  const [random, setRandom] = useState(0);
  const appRef = useRef();
  const numberRef = useRef();

  function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const onLoad = () => {
    const preloader = document.querySelector(".preloader");

    preloader.classList.add("fade-out");

    setTimeout(() => {
      preloader.style.display = "none";
      appRef.current.classList.add("fade-in");
    }, 3000);
  };

  const onClick = () => {
    numberRef.current.classList.remove("fade-in");
    numberRef.current.classList.add("fade-out");
    const num = getRandomArbitrary(1, 100);
    setTimeout(() => {
      setRandom(num);
      numberRef.current.classList.remove("fade-out");
      numberRef.current.classList.add("fade-in");
    }, 3000);
  };
  return {
    onLoad,
    appRef,
    numberRef,
    onClick,
    random,
  };
};
