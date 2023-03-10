import React, { useState, useEffect } from "react";
const words = [
  "|| श्रीमद्भगवद्गीता ||",
  "|| Bhagavat Gita ||",
  "|| श्रीमद्भगवद्गीता ||",
];

const TypingEffect = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length - 1 && subIndex === words[index].length) {
      return;
    }

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const randomNum = Math.random() * 350;

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
      setBlink(true);
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(`${randomNum}`)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 750);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return <>{`${words[index].substring(0, subIndex)}${blink ? " _" : " "}`}</>;
};

export default TypingEffect;
