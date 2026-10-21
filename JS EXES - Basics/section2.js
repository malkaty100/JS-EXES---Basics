const mat=[['a','b','e','x','A'],['a','C','e','x','A'],['x','b','X','x','A'],['a','b','X','x','A'],['a','b','e','x','X']]
function findX(mat){
let cnt=0
for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
          if(mat[i][j]==='x'){
            console.log(`x row: ${i} col: ${j}`);
            cnt++
        }
            
    }
}
return cnt;
}
console.log(`founded ${findX(mat)} x`);
