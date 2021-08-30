let nomePanino = prompt("Choose how to name your amazing burger!");
if (!nomePanino) {
    alert("Please, insert a valid name");
}   else {
    document.getElementById("burger-name").innerHTML = nomePanino;
}


let bottone = document.getElementById("calculator-button");
let listaIngredienti = document.getElementsByClassName("ingredients");

let discount = document.getElementById("discount-code");
let discountCodes = ["SUMMERSALES", "FALLSALES", "WINTERSALES", "SPRINGSALES"];

bottone.addEventListener("click", function() {
    let prezzoPanino = 50;
    for (let i = 0; i < listaIngredienti.length; i++) {
        if (listaIngredienti[i].checked) {
            prezzoPanino += 10;
        } 
    }   
    
    if (discountCodes.includes(discount.value)) {
        prezzoPanino -= Math.floor(((prezzoPanino * 20) / 100));
    }
    document.getElementById("final-price").innerHTML = prezzoPanino;
})

