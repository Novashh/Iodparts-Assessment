// @ts-nocheck

var ProductTotal = document.getElementById("product-total");
var ShippingCharge = document.getElementById("shipping-charge");
var TotalCartAmount = document.getElementById("total-cart-amt");

const decreaseNumber = (incdec, itemprice) => {
  var itemval = document.getElementById(incdec);
  var itemprice = document.getElementById(itemprice);

  if (itemval.value <= 0) {
    itemval.value = 0;
    alert("Negative quantity not allowed");
  } else {
    itemval.value = parseInt(itemval.value) - 1;
    itemprice.innerHTML = parseInt(itemprice.innerHTML) - 1500;
    ProductTotal.innerHTML = parseInt(ProductTotal.innerHTML) - 1500;
    ShippingCharge.innerHTML = parseInt(ShippingCharge.innerHTML) - 50;
    TotalCartAmount.innerHTML =
      parseInt(ProductTotal.innerHTML) + parseInt(ShippingCharge.innerHTML);
  }
};

const increaseNumber = (incdec, itemprice) => {
  var itemval = document.getElementById(incdec);
  var itemprice = document.getElementById(itemprice);

  if (itemval.value >= 5) {
    itemval.value = 5;
    alert("Max 5 items allowed");
  } else {
    itemval.value = parseInt(itemval.value) + 1;
    itemprice.innerHTML = parseInt(itemprice.innerHTML) + 1500;
    ProductTotal.innerHTML = parseInt(ProductTotal.innerHTML) + 1500;
    ShippingCharge.innerHTML = parseInt(ShippingCharge.innerHTML) + 50;
    TotalCartAmount.innerHTML =
      parseInt(ProductTotal.innerHTML) + parseInt(ShippingCharge.innerHTML);
  }
};

//------------------- Second Card Product price------------>

const decreasePrice = (incdec, itemprice) => {
  var itemval = document.getElementById(incdec);
  var itemprice = document.getElementById(itemprice);
  if (itemval.value <= 0) {
    itemval.value = 0;
    alert("Negative quantity not allowed");
  } else {
    itemval.value = parseInt(itemval.value) - 1;
    itemprice.innerHTML = parseInt(itemprice.innerHTML) - 600;
    ProductTotal.innerHTML = parseInt(ProductTotal.innerHTML) - 600;
    ShippingCharge.innerHTML = parseInt(ShippingCharge.innerHTML) - 50;
    TotalCartAmount.innerHTML =
      parseInt(ProductTotal.innerHTML) + parseInt(ShippingCharge.innerHTML);
  }
};

const increasePrice = (incdec, itemprice) => {
  var itemval = document.getElementById(incdec);
  var itemprice = document.getElementById(itemprice);

  if (itemval.value >= 5) {
    itemval.value = 5;
    alert("Max 5 items allowed");
  } else {
    itemval.value = parseInt(itemval.value) + 1;
    itemprice.innerHTML = parseInt(itemprice.innerHTML) + 600;
    ProductTotal.innerHTML = parseInt(ProductTotal.innerHTML) + 600;
    ShippingCharge.innerHTML = parseInt(ShippingCharge.innerHTML) + 50;
    TotalCartAmount.innerHTML =
      parseInt(ProductTotal.innerHTML) + parseInt(ShippingCharge.innerHTML);
  }
};

//----------------------- Second Page / Chekout page Js---------------------------------------

const form = document.querySelector("form");
const button = document.getElementById("submit");

button.addEventListener("click", function (e) {
  e.preventDefault();

  if (form.checkValidity()) {
    alert("Thank you for your order”! We will process it shortly.");
  } else {
    alert("Please complete all required fields.");
  }
});
