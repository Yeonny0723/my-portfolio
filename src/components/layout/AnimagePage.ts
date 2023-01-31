import * as a from "../styles/AnimatePage";

/**
 * Random animation pickers
 * @returns random animation component
 */
export const randomPickAnimation = () => {
  const animations = Object.keys(a).filter((el) => el.endsWith("Slide"));
  const idx = Math.floor(Math.random() * animations.length);
  // return a[animations[idx] as keyof typeof a]; // TODO
  return a.LeftSlide;
};
