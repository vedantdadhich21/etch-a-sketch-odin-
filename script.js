//console.log("working")

const container = document.querySelector(".container");

const blocks = document.createElement("div");
blocks.classList.add("blocks");

const grids = document.querySelector("#grid")

createBlocks();

grids.addEventListener("input" ,createBlocks )

function createBlocks(){
   // console.log("i ran")
    let noOfGrid = grids.value;
let height = 720/noOfGrid ;
let width = height;

blocks.style.height = height + "px";
blocks.style.width  = width  + "px";
blocks.style.boxSizing = "border-box";
blocks.style.backgroundColor = "white";
blocks.style.border = "1px solid rgb(232, 232, 232)";

    const boxes = document.querySelectorAll(".blocks");
    boxes.forEach(box => box.remove());

    for(let i =0;i< noOfGrid*noOfGrid;i++){
    container.appendChild(blocks.cloneNode(true));
    }
}
let draw = false;
container.addEventListener("mousedown",()=> draw = true);
document.addEventListener("mouseup",()=> draw = false);


container.addEventListener("mouseover" ,function curr(e){
    if(!draw){
        return;
    }
    e.target.style.backgroundColor = "black";
})

const btn = document.querySelector("button");
btn.addEventListener("mousedown",clearBlocks);
function clearBlocks(){
    const blc = document.querySelectorAll(".blocks");
    blc.forEach((b) => b.style.backgroundColor = "white");
}


