
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





const btn = document.getElementById("btn");
const drw =  document.getElementById("drw")



    btn.addEventListener("click",() => {
        drw.classList.toggle("active")
      console.log("ok")
    })

    event.preventDefault()