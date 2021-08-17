// // let gaSelector = document.getElementById("ga");
// // let gaSelector2 = document.getElementById("ga2");
// //
// // console.log(gaSelector)
// // gaSelector.style.color = "red"
// // console.log(gaSelector.innerText)
// // gaSelector.innerText = "Ebere loves JS"
// // console.log(gaSelector.classList)
// // gaSelector.classList.add("fewd", "malaysia")
// // console.log(gaSelector.classList)
// //
// //
// // gaSelector.innerText = "<h4>Hello I am H4 &#10083;</h4>"
// // gaSelector2.innerHTML = "<p>Hello I am H4</p><p>Hello I am H4 &#10083;</p>"
// //
// // console.log(document.getElementsByClassName("container")[1])
// //
// // let selector = document.querySelector("#ga")
// // console.log(selector)
// // let selector2 = document.querySelectorAll(".gaClass2")
// // console.log(selector2[1])
//
/**
let btn = document.querySelector("#btn")

btn.addEventListener("click", function(){
    //callback functions
   let box = document.querySelector("#red_box")
    // box.classList.add("move")
    // box.style.backgroundColor = "blue"
    // box.style.position = "absolute"
    // box.style.left= "700px";
    // box.style.width = "100px";
    // box.style.height = "100px";
    // box.style.transition = "all 2s ease-in-out";
    // box.style.transform = "scale(1.1)";

})
//
//
// // function x(string, funct){
// //     if(string == "click"){
// //         funct()
// //     }
// // }

*/

// let inputField = document.querySelector("#text_input")
//
//
// document.querySelector("#text_input").addEventListener("keyup", function (e){
//     // console.log(document.querySelector("#text_input"))
//     // console.log("e without target:", e)
//     console.log("e with target:", e.target)
//     // console.log(e.target.value)
//     if(e.target.value.length > 3) {
//         document.querySelector("#pad")
//             .innerText = "is typing a text..."
//     }
// })
//
// document.querySelector("#send").addEventListener("click", function(e){
//     console.log("in button",e.target)
//     // inputField ==> document.querySelector("#text_input")
//     console.log(document.querySelector("#text_input").value)
//     console.log(inputField.value)
//     document.querySelector("#pad")
//         .innerText = inputField.value
//
//     inputField.value = ""
//
// })

/**
document.querySelector("#text_input").value to get value of input fields
//<button id="sign-1"> + </button>
 <button id="sign-2"> x </button>
 <button id="sign-3"> * </button>
 <button id="sign-4"> - </button>
 *
//  */

// [     ] [] [     ]
// [+] [-] [*] [/]
// [   caculate  ]


document.querySelector("#minus").addEventListener("click", function(){
    document.querySelector("#sign").value = "-"
})

document.querySelector("#plus").addEventListener("click", function(){
    document.querySelector("#sign").value = "+"
})

document.querySelector("#mult").addEventListener("click", function(){
    document.querySelector("#sign").value = "*"
})

document.querySelector("#div").addEventListener("click", function(){
    document.querySelector("#sign").value = "."
})


document.querySelector("#calc").addEventListener("click", function(){
    let sign = document.querySelector("#sign").value
    let num1 = document.querySelector("#num1").value
    let num2 = document.querySelector("#num2").value
    let result = document.querySelector("#output")
    if(sign == "+"){
        result.innerText = parseInt(num1) + parseInt(num2)
    }else if(sign == "-"){
        result.innerText = parseInt(num1) - parseInt(num2)
    }else if(sign == "*"){
        result.innerText = parseInt(num1) + parseInt(num2)
    }else if(sign == "/"){
        result.innerText = parseInt(num1) + parseInt(num2)
    }
})
