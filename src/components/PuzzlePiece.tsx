import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type Props = {
  id: string;
  image: string;
};

export default function PuzzlePiece({
  id,
  image,
}: Props) {

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
  });

  const style = {

    transform: CSS.Transform.toString(transform),

    transition:
      transition ??
      "transform .18s ease",

    touchAction: "none" as const,

    cursor: isDragging
      ? "grabbing"
      : "grab",

    opacity: isDragging
      ? .92
      : 1,

    zIndex: isDragging
      ? 999
      : 1,

    boxShadow: isDragging

      ? "0 22px 45px rgba(0,0,0,.30)"

      : "0 8px 18px rgba(0,0,0,.18)",

    border: isDragging

      ? "4px solid #FFD54F"

      : "4px solid white",

    transformOrigin: "center",

    scale: isDragging
      ? "1.08"
      : "1",

    filter: isDragging

      ? "brightness(1.08)"

      : "brightness(1)",

    backgroundImage: `url(${image})`,

    backgroundSize: "cover",

    backgroundPosition: "center",

    backgroundRepeat: "no-repeat",

  };

  return (

    <div

      ref={setNodeRef}

      {...attributes}

      {...listeners}

      className="piece"

      style={style}

    />

  );

}