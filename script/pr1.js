const modelMatrix = ({R, T, S, V}, sequence) => {
  const angleRad = R * Math.PI / 180;
  const rotate = [
      [Math.cos(angleRad), -Math.sin(angleRad), 0],
      [Math.sin(angleRad), Math.cos(angleRad), 0],
      [0, 0, 1]
  ];

  const translate = [
    [1, 0, T[0]],
    [0, 1, T[1]],
    [0, 0, 1]
  ];

  const scale = [
    [S[0], 0, 0],
    [0, S[1], 0],
    [0, 0, 1]
  ];

  const matrixMult = (matrix, vector) => {
    const multedMatrix = [];

    for (let i = 0; i < 3; i++) {
      multedMatrix[i] = Number(
        (matrix[i][0] * vector[0] + matrix[i][1] * vector[1] + matrix[i][2] * vector[2])
          .toFixed(2)
      );
    }

    return multedMatrix;
  };

  let result = [ ...V, 1];

  for (let i = 0; i < sequence.length; i++) {
    switch (sequence[i]) {
      case 'R':
        result = matrixMult(rotate, result);
        break;
      case 'T':
        result = matrixMult(translate, result);
        break;
      case 'S':
        result = matrixMult(scale, result);
        break;
      default:
        throw new Error('Please, enter valid data');
    }
  }
  return result;
};

const inMatrixVariant2j = {
  S: [1, 2.2],
  R: 12.6,
  T: [2, 2],
  V: [3, 2]
};

const inMatrixVariant2k = {
  S: [1.3, 1.2],
  R: 36.4,
  T: [1, 1],
  V: [3, 2]
};

const inMatrixVariant3j = {
  S: [1.5, 2.7],
  R: 15,
  T: [2, 2],
  V: [6, 2]
};

const inMatrixVariant3k = {
  S: [1, 3.2],
  R: 51,
  T: [3, 2],
  V: [6, 2]
};

console.log(
  'Варіант 2 j:' + `[${modelMatrix(inMatrixVariant2j, 'SRT')}]` + `\n`,
  'Варіант 2 k:', `[${modelMatrix(inMatrixVariant2k, 'SRT')}]` + `\n`,
  'Варіант 3 j:', `[${modelMatrix(inMatrixVariant3j, 'SRT')}]` + `\n`,
  'Варіант 3 k:', `[${modelMatrix(inMatrixVariant3k, 'SRT')}]` + `\n`,
);
