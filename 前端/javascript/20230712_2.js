let img1 = document.getElementById("image1")
let img2 = document.getElementById("image2")
let thisH1 = document.getElementsByTagName('h1')[0];
let thisP = document.getElementsByTagName('p')[0];

//用event: e回傳值判定
// function mouseIn(e){
//     if (e.target.id == "image1"){
//         thisH1.textContent = "Cup";
//     }
//     else if (e.target.id == "image2"){
//         thisH1.textContent = "Cup Cake";
//     }
// }

//
function mouseIn(){
    // console.log(this);
    if (this.id == "image1"){
        thisH1.textContent = "Cup";
    }
    else if (this.id == "image2"){
        thisH1.textContent = "Cup Cake";
    }
}
function mouseOut(){
    thisH1.textContent = "Out of picture";
    // thisP.textContent = "";
}
function mouseMove(e){
    thisP.textContent = "area : "+e.clientX+", "+e.clientY;
}

img1.addEventListener("mouseover", mouseIn);
img1.addEventListener("mouseout", mouseOut);
img2.addEventListener("mouseover", mouseIn);
img2.addEventListener("mouseout", mouseOut);
window.addEventListener("mousemove", mouseMove);
