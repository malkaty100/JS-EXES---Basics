let family = { parents: {}, children: [ {name: "Ali"}, {name: "Lea"}, {name: "Mona"} ] };
function thirdChild(family){
  console.log(`the name third child: ${family["children"][2]["name"]}`);
  console.log('siblings names:');
  let siblings=""
  for (let i = 0; i < family["children"].length; i++) {
    if(i!=2)
    siblings+=family["children"][i]["name"]+" ";

  }
  console.log(siblings);
  

  
    
}
thirdChild(family)