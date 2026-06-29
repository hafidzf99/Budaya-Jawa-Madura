import { useEffect, useState } from "react";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import type { DragEndEvent } from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

import PuzzlePiece from "./PuzzlePiece";

import { sliceImage } from "../utils/sliceImage";
import type { Piece } from "../utils/sliceImage";

type Props = {
  image: string;
  onComplete: () => void;
};

function shuffle<T>(array: T[]) {

  const arr = [...array];

  do {

    for (let i = arr.length - 1; i > 0; i--) {

      const j = Math.floor(Math.random() * (i + 1));

      [arr[i], arr[j]] = [arr[j], arr[i]];

    }

  } while (
    arr.every((item, index) => (item as Piece).id === String(index + 1))
  );

  return arr;

}

export default function PuzzleBoard({

  image,

  onComplete,

}: Props) {

  const [pieces, setPieces] = useState<Piece[]>([]);
  const [finished, setFinished] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor)
  );

  useEffect(() => {

    async function loadPuzzle() {

      const result = await sliceImage(image);

      setPieces(shuffle(result));

      setFinished(false);

    }

    loadPuzzle();

  }, [image]);

  function handleDragEnd(event: DragEndEvent) {

    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = pieces.findIndex(
      p => p.id === active.id
    );

    const newIndex = pieces.findIndex(
      p => p.id === over.id
    );

    const newPieces = arrayMove(
      pieces,
      oldIndex,
      newIndex
    );

    setPieces(newPieces);

    const selesai = newPieces.every(
      (p, i) => p.id === String(i + 1)
    );

    if (selesai && !finished) {

      setFinished(true);

      setTimeout(() => {

        onComplete();

      }, 1200);

    }

  }

  return (

    <>

      <DndContext

        sensors={sensors}

        collisionDetection={closestCenter}

        onDragEnd={handleDragEnd}

      >

        <SortableContext

          items={pieces.map(p => p.id)}

          strategy={rectSortingStrategy}

        >

          <div className="board">

            {pieces.map(piece => (

              <PuzzlePiece

                key={piece.id}

                id={piece.id}

                image={piece.image}

              />

            ))}

          </div>

        </SortableContext>

      </DndContext>

      {

        finished && (

          <div

            style={{

              marginTop:20,

              background:"#4CAF50",

              color:"#fff",

              padding:15,

              borderRadius:12,

              fontWeight:"bold",

              fontSize:24,

            }}

          >

            🎉 Hebat!

          </div>

        )

      }

    </>

  );

}