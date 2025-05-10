"use client";

import Counter from "./Counter";

interface Props {
  icon: React.ReactNode;
  amount: number;
  title: string;
}
export default function Achivments({ icon, amount, title }: Props) {
  return (
    <div className="flex items-end gap-x-3 ">
      <span className="text-4xl text-gray-300 max-lg:text-2xl">{icon}</span>
      <h1 className="flex flex-col gap-y-2">
        <Counter
          value={amount}
          className="text-2xl  max-lg:text-xl  text-yellow-500"
        />

        <span className="text-sm tracking-wide text-gray-500 dark:text-white">
          {title}
        </span>
      </h1>
    </div>
  );
}
