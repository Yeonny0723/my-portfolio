import * as a from "../styles/PageAnimate";

const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};

interface Animation {
  MoveLeft: "MoveLeft";
  MoveRight: "MoveRight";
  MoveUp: "MoveUp";
}

export const pickRandomAnimation = () => {
  const animationLst = Object.keys(a);
  const idx = getRandomInt(animationLst.length);
  const pick = animationLst[idx] as keyof Animation;
  return a[pick];
};
