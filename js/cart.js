const carts = document.querySelectorAll(".add-cart");

for(let i =0; i < carts.length; i++){
    carts[i].addEventListener("click", () => {
        cartNumbers();
    })
}
function cartNumbers(){
    localStorage.setItem("cartNumbers", 1);
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);

    console.log(productNumbers);
    

    

}