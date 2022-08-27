let matrix = 
[
 ['a','b','c','d','q','m','p'],
 ['e','f','g','h','r','n','t'],
 ['i','j','k','l','s','o','u'],
]

function findZigZagTraversal(matrix, position){
  const [x,y] = position;
  let rows= matrix.length;
  let cols= matrix[0].length;
  let res = '';
  let _direction = '';

  if(x<rows-1 && y<cols-1){
    _direction = 'downRight'
  }else if(x<rows-1 && y===cols-1){
    _direction = 'downLeft'
  }else if(x===rows-1 && y<cols-1){
    _direction = 'upRight';
  }else{
    _direction = 'upLeft';
  }

  recur(x,y, _direction);

  return res;

  function recur(r, c, direction){
       res+=matrix[r][c];
      //console.log(res)
      if(direction==='upRight'){
        if(r-1>=0 && c+1 < cols){
          return recur(r-1, c+1, 'upRight')
        }else if(r+1 < rows && c+1 < cols){
          return recur(r+1, c+1, 'downRight')
        }else{
          return;
        }

      }else if(direction==='downRight'){
            if(r+1<rows && c+1 < cols){
              return recur(r+1, c+1, 'downRight')
            }else if(r-1>=0 && c+1 < cols){
              return recur(r-1, c+1, 'upRight')
            }else{
              return;
            }
      }else if(direction==='upLeft'){
        if(r-1>=0 && c-1 >=0){
          return recur(r-1, c-1, 'upLeft')
        }else if(r+1< rows && c-1 >=0){
          return recur(r+1, c-1, 'downLeft')
        }else{
          return;
        }
      }else if(direction==='downLeft'){
        if(r+1< rows && c-1 >=0){
          return recur(r+1, c-1, 'downLeft')
        }else if(r-1>=0 && c-1 >=0){
          return recur(r-1, c-1, 'upLeft')
        }else{
          return;
        }
      }
  }
  
}

console.log(findZigZagTraversal(matrix, [2,0]))