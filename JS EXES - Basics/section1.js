function swap(a,b,){
a+='.'+b
b=a.split('.')
a=b.pop();
console.log(`a: ${a} b: ${b}`);}
let a='some string',b='other string'

swap(a,b)
