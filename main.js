// // DOM ---> Document Object Module

// //we can get html tags using getElementsBYTagName//
// const h1 = document.getElementsByTagName("h1")
// console.log(h1);

// //get single perticular element
// const element = document.getElementById("userName")

// //get multiple elements
// const elements = document.getElementsByClassName("items")

// const parenUl = document.getElementById("fruits")
// const li = document.createElement("li")
// li.innerText= "hello from js"

// parenUl.appendChild(li)

// const btn = document.getElementById("btn");
// const drw = document.getElementById("drw");

// btn.addEventListener("click", () => {

//   console.log(randomHex);

// });


const refresh_btn = document.getElementById("refresh-btn")
let allColors = document.querySelector(".colors")

function  randomColorGenarate () {
    allColors.innerHTML = ``; 
    for (let i = 0; i <= 17; i++) {
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        let randomColor = `#${randomHex.padStart(6, "0")}`;
    let allColors = document.querySelector(".colors");
        const li = document.createElement("li");
         li.classList.add("card")

        li.innerHTML = `<div class="color-box" style="background-color:${randomColor};"></div>
        <p class="hexa-code">${randomColor}</p>`;
      
      li.addEventListener("click" , () => copyTOClipboad(li,randomColor))
        allColors.appendChild(li);
      }
      
}

randomColorGenarate()


function copyTOClipboad (emen,hex){
   const colorElement = emen.querySelector(".hexa-code");
   navigator.clipboard.writeText(hex).then(() => {
    colorElement.innerText = "COPIED";
    setTimeout(() => colorElement.innerText =hex , 1000)
   })
 
}


refresh_btn.addEventListener("click" , randomColorGenarate)
