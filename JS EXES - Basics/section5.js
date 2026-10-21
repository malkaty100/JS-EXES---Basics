function cntTypes(arr){
let types={boolean:0,string:0,number:0,object:0},isNull=0
for (let i = 0; i < arr.length; i++) {
       types[typeof(arr[i])]++
       if(arr[i] === null)
        isNull++
}
console.log(types);
console.log(isNull);


}
const a=[45,'gt',78,true,{name:"malka"},null,4548,false,'yyt',[10,78]]
cntTypes(a) 
