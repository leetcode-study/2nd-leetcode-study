const floodFill = function (image, sr, sc, color) {
  const newImage = image.map((v) => [...v]);
  let checkArr = Array(image.length)
    .fill(0)
    .map(() => new Array(image[0].length));
  newImage[sr][sc] = color;
  function dfs(row, col, img, color) {
    if (
      row < 0 ||
      row > image.length - 1 ||
      col < 0 ||
      col > image[0].length - 1
    ) {
      return;
    }
    // 북

    if (
      row - 1 >= 0 &&
      !checkArr[row - 1][col] &&
      img[row - 1][col] === img[row][col]
    ) {
      newImage[row - 1][col] = color;
      checkArr[row - 1][col] = 1;
      console.log("check", checkArr);
      dfs(row - 1, col, img, color);
    }
    // 서
    if (
      col - 1 >= 0 &&
      !checkArr[row][col - 1] &&
      img[row][col - 1] === img[row][col]
    ) {
      newImage[row][col - 1] = color;
      checkArr[row][col - 1] = 1;

      dfs(row, col - 1, img, color);
    }
    // 남
    if (
      row + 1 < image.length &&
      !checkArr[row + 1][col] &&
      img[row + 1][col] === img[row][col]
    ) {
      newImage[row + 1][col] = color;
      checkArr[row + 1][col] = 1;

      dfs(row + 1, col, img, color);
    }
    // 동
    if (
      col + 1 < image[0].length &&
      !checkArr[row][col + 1] &&
      img[row][col + 1] === img[row][col]
    ) {
      newImage[row][col + 1] = color;
      checkArr[row][col + 1] = 1;

      dfs(row, col + 1, img, color);
    }
    return;
  }
  dfs(sr, sc, image, color);
  return newImage;
};
console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);

const floodFill2 = (image, sr, sc, newColor, firstColor = image[sr][sc]) => {
  // handle if the coordinate is out of bounds
  // or if it is already the new color
  // or if it's not from the original color we're trying to change
  // image[sr][sc] !== firstColor는 중심 컬러의 동서남북 컬러 중에 중심 컬러와 다른 것은 바로 image를 리턴하게 해줌
  // 예를 들어 111 111 101 이 있고 [1,1]이 중심 컬러일때 남쪽에 있는 0은 중심 컬러와 다르기때문에 dfs를 돌릴 필요가 없으므로 바로
  // 리턴해줌
  if (
    sr < 0 ||
    sc < 0 ||
    sr >= image.length ||
    sc >= image[sr].length ||
    image[sr][sc] !== firstColor ||
    image[sr][sc] === newColor
  ) {
    return image; // return image as-is
  }

  image[sr][sc] = newColor;

  floodFill(image, sr + 1, sc, newColor, firstColor);
  floodFill(image, sr - 1, sc, newColor, firstColor);
  floodFill(image, sr, sc + 1, newColor, firstColor);
  floodFill(image, sr, sc - 1, newColor, firstColor);

  // return modified image
  return image;
};
const arr = [
  [1, 2],
  [1, 2, 3],
];
const arr1 = [
  [1, 2],
  [1, 2, 3],
];
const arr2 = arr1.map((v) => [...v]);
arr2[1][1] = 5;
console.log(arr1);
