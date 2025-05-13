import { motion } from "framer-motion";
import Image from "next/image";
import Git from "remixicon-react/GithubLineIcon";
import ExternalLink from "remixicon-react/LinkIcon";

interface Data {
  name: string;
  url: string;
  desc: string;
  tech: (string | undefined)[];
  deploy: string;
  git: string;
}
export default function ProjectCard({
  data: { desc, name, tech, url, deploy, git },
  index,
}: {
  data: Data;
  index: number;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border-2 border-stone-100 bg-white shadow-md transition-all  hover:-translate-y-1 hover:shadow-xl dark:border-stone-800 ">
      <Image
        src={url}
        alt="image"
        width={500}
        height={400}
        className="w-full aspect-[16/9] object-cover duration-700 ease-in-out scale-100 blur-0"
      />
      {/* data */}
      <div className=" border-t border-stone-200 px-5 py-8 dark:border-stone-700 dark:bg-zinc-900 ">
        <h2 className="text-2xl font-semibold wrap-anywhere text-gray-600 dark:text-white">
          {name}
        </h2>
        <p className="bodyText text-gray-500 text-justify first-letter:ml-2 dark:text-white">
          {desc}
        </p>
      </div>
      {/* links */}
      <div className="flex  justify-around items-center w-full md:p-2 border-t border-stone-200 dark:border-stone-700 dark:bg-zinc-700 dark:text-white">
        <a href={`${git}`}>
          <Git className="size-9 hover:text-amber-400 transition-all hover:-translate-y-1 active:translate-0" />
        </a>
        <a href={`${deploy}`}>
          <ExternalLink className="size-9 hover:text-amber-400 transition-all hover:-translate-y-1 active:translate-0" />
        </a>
      </div>
    </div>
  );
}
