/**
 * Link- https://leetcode.com/problems/flood-fill/
 * 
Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let stack = [[sr,sc]];
    let color = image[sr][sc];
    if(color  === newColor) return image;
    while(stack.length){
        let [x,y] = stack.pop();
        if(x>0 && image[x-1][y] === color){ // top
            stack.push([x-1,y]);
        }
        if(y<image[0].length-1 && image[x][y+1] === color){
            stack.push([x,y+1]); // right
        }
         if(x<image.length-1 && image[x+1][y] === color){
            stack.push([x+1,y]); // bottom
        }
         if(y>0 && image[x][y-1] === color){
            stack.push([x,y-1]); // left
        }
        image[x][y]= newColor;
    }
    return image;
};