import { useState, useRef } from "react";
export default function App() {
  const matrix = new Array(4).fill(0).map(() => new Array(4).fill(0));

  const [grid, setGrid] = useState(matrix);
  const [selectedBox, setSelectedBox] = useState([])
  const SetColor = (i, j) => {
    if (selectedBox.length < 2) {
      console.log(selectedBox)
      selectedBox.push(`${i}${j}`)
      console.log(1)
    }
    else {
      selectedBox.push(`${i}${j}`)
      selectedBox.shift()
      console.log(selectedBox)
      console.log(2)
    }
    
   const zeroGrid = new Array(4).fill(0).map(() => new Array(4).fill(0));
    const newGrid = zeroGrid.map(function (arr) {

      return arr.slice();
    });
    selectedBox.map((k) => { newGrid[k[0]][k[1]] = 1 })

    setGrid(newGrid);

    
  };
  const setText = (i, j) => { };
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
