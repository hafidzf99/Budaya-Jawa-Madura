export type Piece = {
  id: string;
  image: string;
};

export async function sliceImage(
  imageSrc: string,
  rows = 2,
  cols = 2
): Promise<Piece[]> {

  return new Promise((resolve) => {

    const img = new Image();

    img.src = imageSrc;

    img.onload = () => {

      // Ukuran puzzle akhir (selalu persegi)
      const puzzleSize = 800;

      const canvas = document.createElement("canvas");

      canvas.width = puzzleSize;
      canvas.height = puzzleSize;

      const ctx = canvas.getContext("2d");

      if (!ctx) {
        resolve([]);
        return;
      }

      // Background putih
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, puzzleSize, puzzleSize);

      // Hitung skala agar seluruh gambar masuk
      const scale = Math.min(
        puzzleSize / img.width,
        puzzleSize / img.height
      );

      const drawWidth = img.width * scale;
      const drawHeight = img.height * scale;

      const offsetX = (puzzleSize - drawWidth) / 2;
      const offsetY = (puzzleSize - drawHeight) / 2;

      ctx.drawImage(
        img,
        offsetX,
        offsetY,
        drawWidth,
        drawHeight
      );

      const pieceSize = puzzleSize / cols;

      const pieces: Piece[] = [];

      let id = 1;

      for (let y = 0; y < rows; y++) {

        for (let x = 0; x < cols; x++) {

          const pieceCanvas = document.createElement("canvas");

          pieceCanvas.width = pieceSize;
          pieceCanvas.height = pieceSize;

          const pieceCtx = pieceCanvas.getContext("2d");

          if (!pieceCtx) continue;

          pieceCtx.drawImage(

            canvas,

            x * pieceSize,
            y * pieceSize,
            pieceSize,
            pieceSize,

            0,
            0,
            pieceSize,
            pieceSize

          );

          pieces.push({

            id: String(id++),

            image: pieceCanvas.toDataURL("image/png"),

          });

        }

      }

      resolve(pieces);

    };

  });

}