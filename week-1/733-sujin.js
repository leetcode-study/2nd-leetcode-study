/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const firstColor = image[sr][sc];
    const recursive = (image, sr, sc, firstColor, color) => {
        if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[sr].length 
 || image[sr][sc] !== firstColor || image[sr][sc] === color) {
            return image;
        }
        image[sr][sc] = color;

        recursive(image, sr - 1, sc, firstColor, color);
        recursive(image, sr + 1, sc, firstColor, color);
        recursive(image, sr, sc - 1, firstColor, color);
        recursive(image, sr, sc + 1, firstColor, color);

        return image

    }

    return recursive(image, sr, sc, firstColor, color);
};