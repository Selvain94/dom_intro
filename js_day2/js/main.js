let gaSelector = document.getElementById("ga");
let gaSelector2 = document.getElementById("ga2");

console.log(gaSelector)
gaSelector.style.color = "red"
console.log(gaSelector.innerText)
gaSelector.innerText = "Ebere loves JS"
console.log(gaSelector.classList)
gaSelector.classList.add("fewd", "malaysia")
console.log(gaSelector.classList)


gaSelector.innerText = "<h4>Hello I am H4 &#10083;</h4>"
gaSelector2.innerHTML = "<p>Hello I am H4</p><p>Hello I am H4 &#10083;</p>"

console.log(document.getElementsByClassName("container")[1])

let selector = document.querySelector("#ga")
console.log(selector)
let selector2 = document.querySelectorAll(".gaClass2")
console.log(selector2[1])
