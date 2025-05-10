interface Props {
  text: String;
}

export default function Heading({ text }: Props) {
  return (
    <h1 className="text-3xl sm:text-2xl font-bold text-gray-600 mb-14 self-start headerSections dark:text-white">
      {text}
    </h1>
  );
}
