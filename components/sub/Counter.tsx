import { useEffect, useRef, useState } from "react";
import {
  MotionValue,
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

type Props = {
  value: number;
  direction?: "up" | "down";
  className?: string;
};

export default function Counter({ value, direction = "up", className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [animatedValue, setanimatedValue] = useState(0);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [motionValue, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest: number) => {
        if (ref.current) {
          setanimatedValue(latest.toFixed(0) as any);
        }
      }),
    [springValue]
  );

  return (
    <div
      ref={ref}
      className="flex space-x-3 overflow-hidden rounded  px-2 leading-none text-yellow-500 font-bold text-3xl"
    >
      <Digit place={100} value={animatedValue} />
      <Digit place={10} value={animatedValue} />
      <Digit place={1} value={animatedValue} />
    </div>
  );
}

const fontSize = 30;
const padding = 15;
const height = fontSize + padding;

function Digit({ place, value }: { place: number; value: number }) {
  let valueRoundedToPlace = Math.floor(value / place);
  let animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div style={{ height }} className="relative w-[1ch] tabular-nums">
      {[...Array(10).keys()].map((i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}

function Number({ mv, number }: { mv: MotionValue; number: number }) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;

    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return (
    <motion.span
      style={{ y }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {number}
    </motion.span>
  );
}
