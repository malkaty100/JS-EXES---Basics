function oddEven(arr){
let numbers={odd:[],even:[]}
let div23=0
for (let i = 0; i < arr.length; i++) {
    if(arr[i]%2===0){
        numbers["even"].push(arr[i])  
     if(arr[i]%3===0)
        div23++
    }  
    else
        numbers["odd"].push(arr[i])    
   
}
console.log(`numbers odd: ${numbers["odd"]} numbers even: ${numbers["even"]}`);
console.log(`divisable by 2 and 3: ${div23}`);


}
oddEven([4,8,7,15,27,29,38,21,27,6])