type Props = {
  image: string;
  question: string;
  options: string[];
  selected: string;
  answer: string;
  answered: boolean;
  onSelect: (value: string) => void;
};

export default function QuestionCard({
  image,
  question,
  options,
  selected,
  answer,
  answered,
  onSelect,
}: Props) {
  return (
    <>
      <img
        src={image}
        alt={question}
        className="gambar-soal"
      />

      <h2 className="question">
        {question}
      </h2>

      <div className="options">
        {options.map((item) => {
          let cls = "option";

          if (answered) {
            if (item === answer) cls += " benar";
            else if (item === selected) cls += " salah";
          }

          return (
            <button
              key={item}
              className={cls}
              disabled={answered}
              onClick={() => onSelect(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
}