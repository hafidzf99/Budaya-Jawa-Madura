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
    transition,
    touchAction: "none" as const,
    cursor: isDragging ? "grabbing" : "grab",
    zIndex: isDragging ? 100 : 1,
    opacity: isDragging ? 0.9 : 1,
  };

  return (

    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="piece"
      style={style}
    >

      <img
        src={image}
        alt=""
        draggable={false}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          pointerEvents: "none",
          userSelect: "none",
          objectFit: "cover",
        }}
      />

    </div>

  );

}