var price = 30;
function greet(){
    var discount = document.getElementById("disc").value;
        if(discount == "MK3BF9"){
        price = price-10
        document.getElementById("discac").innerHTML = "Discount Code Sucesfully Applied! Your price now is:" +price+"p";
    }
    else{
        document.getElementById("discac").innerHTML = "Invalid Discount Code, please try again later or check if you have our latest discount code. Your price is:" +price+"p";
    }
}





