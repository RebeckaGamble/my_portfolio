type Direction = "left" | "right" | "up" | "down";
type TransitionType = "spring" | "tween" | "inertia" | string;

export const slideIn = (
  direction: Direction,
  type: TransitionType,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

export const fadeInUpVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const getFadeInUpMotion = (inView: boolean) => ({
  initial: "hidden",
  animate: inView ? "show" : "hidden",
  variants: fadeInUpVariant,
});
