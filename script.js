console.log("hello world");
console.log("Hello World");
let moveElement = () => { 
    let tag = document.getElementsByTagName('a');

//    tag[0].className = "move1"
//    tag[1].className = "move2"
//    tag[2].className = "move3"
//    tag[3].className = "move4"
//    tag[4].className = "move5"
//    tag[5].className = "move6"
//    tag[6].className = "move7"
//    tag[7].className = "move8"
let tagclassname = tag[0].classList.value;
console.log(tagclassname);

if(tagclassname == 'move1'){ 
      tag[0].className = ""
   tag[1].className = ""
   tag[2].className = ""
   tag[3].className = ""
   tag[4].className = ""
   tag[5].className = ""
   tag[6].className = ""
   tag[7].className = ""
}
else{ 
    tag[0].className = "move1"
       tag[1].className = "move2"
       tag[2].className = "move3"
       tag[3].className = "move4"
       tag[4].className = "move5"
       tag[5].className = "move6"
       tag[6].className = "move7"
       tag[7].className = "move8"
}
}
document.getElementById('pliusi').addEventListener("click", moveElement)