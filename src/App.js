import { useState, useRef } from "react";
export default function App() {
  const matrix = new Array(4).fill(0).map(() => new Array(4).fill(0));

  const [grid, setGrid] = useState(matrix);

  const SetColor = (i, j) => {
    const newGrid = grid.map(function (arr) {
      return arr.slice();
    });

    newGrid[i][j] ? (newGrid[i][j] = 0) : (newGrid[i][j] = 1);
    setGrid(newGrid);

    // setText(i, j);
  };
  const setText = (i, j) => {};
  return (
    <div className="App">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,60px)",
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, j) => (
            <div
              onClick={() => SetColor(i, j)}
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: grid[i][j] ? "red" : "blue",
                border: "1px solid black",
              }}
            ></div>
          ))
        )}
      </div>
    </div>
  );
}
