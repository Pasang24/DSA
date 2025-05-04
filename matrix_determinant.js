// function to calculate the determinant of a matrix;
function determinant(
  matrix,
  row = matrix?.length || 0,
  column = matrix[0]?.length || 0
) {
  if (row === 1 && column === 1) {
    return matrix[0][0];
  }

  let deter = 0;
  for (let i = 0; i < column; i++) {
    let subMatrix = [];
    for (let j = 1; j < row; j++) {
      let subMatrixRow = [];
      for (let k = 0; k < column; k++) {
        if (k === i) continue;
        subMatrixRow.push(matrix[j][k]);
      }
      subMatrix.push(subMatrixRow);
    }
    deter =
      deter +
      (-1) ** i * matrix[0][i] * determinant(subMatrix, row - 1, column - 1);
  }

  return deter;
}

console.log(
  determinant([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  determinant([
    [5, 2, 8],
    [0, 4, -6],
    [1, 3, 9],
  ])
);
