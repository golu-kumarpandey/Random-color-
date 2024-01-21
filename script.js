let arry = ["#e75d7c","#b16cef","#53cca4","#efc84d","#628ef0","#184b73","#883e7f","#ed048b"]
let big_container = document.getElementById("bgContainer")
let conter = 0
big_container.style.backgroundColor = arry[conter]
// function changeColor(){
//     let arrylen = arry.length
    
//     if (conter < arrylen){
//         conter += 1
//         big_container.style.backgroundColor = arry[conter]


//     }else{
//         conter = 0
//         big_container.style.backgroundColor = arry[conter]
//     }
    
// }
function changeColor(){
    let arrylen = arry.length
    let random = Math.floor(Math.random()*arrylen) + 1
    
    conter = random - 1
    
    
    big_container.style.backgroundColor = arry[conter]
    
    
}