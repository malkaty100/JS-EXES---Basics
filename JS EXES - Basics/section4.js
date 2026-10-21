function reverese(arr){
 let r=arr.length-1,l=0
 console.log('r'+r+'l'+l);
 
 while(r>l){
    let temp=arr[l]
    arr[l]=arr[r]
    arr[r]=temp
    r--
    l++
    console.log('l');
    
 }
 console.log(arr);
 

}
let a=[1,7,4,5,8,2]
reverese(a)