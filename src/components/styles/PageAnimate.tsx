import { motion } from "framer-motion";
import { IAnimateChild } from "./types";

type distance = 100 | -100 | 0;

type IMove = IAnimateChild & {
  initialX?: distance;
  initialY?: distance;
  exitX?: distance;
  exitY?: distance;
};

const Move = ({
  children,
  initialX,
  initialY,
  exitX,
  exitY,
}: IMove): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0, x: initialX, y: initialY }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: exitX, y: exitY }}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};

export const MoveLeft = ({ children }: IAnimateChild): JSX.Element => {
  return (
    <Move initialX={100} initialY={0} exitX={-100} exitY={0}>
      {children}
    </Move>
  );
};

export const MoveRight = ({ children }: IAnimateChild): JSX.Element => {
  return (
    <Move initialX={-100} initialY={0} exitX={100} exitY={0}>
      {children}
    </Move>
  );
};

export const MoveUp = ({ children }: IAnimateChild): JSX.Element => {
  return (
    <Move initialX={100} initialY={0} exitX={-100} exitY={0}>
      {children}
    </Move>
  );
};
