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

let inputField = document.querySelector("#text_input")
inputField.addEventListener("keyup", function (e){
    // console.log(document.querySelector("#text_input"))
    console.log("e without target:", e)
    console.log("e with target:", e.target)
    // console.log(e.target.value)
    if(e.target.value.length > 3) {
        document.querySelector("#pad")
            .innerText = "is typing a text..."
    }
})

