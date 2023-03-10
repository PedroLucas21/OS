let produtos = document.getElementById("menuprodutos")
let produtosbutton = document.getElementById("produtos")
produtosbutton.addEventListener("mouseover", function (e) {
	produtos.style.visibility = "visible";
})
produtos.addEventListener("mouseover", function (e) {
	produtos.style.visibility = "visible";
})
document.addEventListener("mouseout", function (e) {
	produtos.style.visibility = "hidden";
})
console.log("pedro.chato.pt")