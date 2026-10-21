function filter(arr){
let newA=[],compares=0
for (let i = 0; i < arr.length; i++) {
    compares++
   if(arr[i]>100)
    newA.push(arr[i])    
}
console.log(newA);

}
let a=[14,84,35,126,789,12,45,18,452]
filter(a)