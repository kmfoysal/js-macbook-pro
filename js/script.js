// Main function 
function updateExtra(extraItem, setCost){
    const addExtra = document.getElementById(extraItem);
    addExtra.innerText = setCost;

    calculateTotalPrice();
}

// Function for get extra cost 
function getExtraCost(extraCostId) {
  let getExtraCharge = document.getElementById(extraCostId);
  let extraCost = parseInt(getExtraCharge.innerText);
  return extraCost;  
}

// Calculate Total Cost
function calculateTotalPrice(){
  let totalWithExtraMemory = getExtraCost("extra-memory-cost");
  let totalWithExtraStorage = getExtraCost("extra-storage-cost");
  let totalWithdeliveryCharge = getExtraCost("delivery-charge");

  const bestPrice = 1299;

  let totalPrice = parseInt(
    bestPrice + totalWithExtraMemory + totalWithExtraStorage + totalWithdeliveryCharge
  );

  // Update Total Price
  document.getElementById("total-price").innerText = totalPrice;
  document.getElementById("discounted-total").innerText = totalPrice;

  return totalPrice;

}

// // Apply Cupon Code 
function applyCupon(promo){
  
  let inputPromo = document.getElementById("promo-input").value;
  
  const successMsg = document.getElementById("success-msg");
  const failMsg = document.getElementById("fail-msg");

  if (inputPromo == promo.toUpperCase()) {
    successMsg.style.display = "flex";
    failMsg.style.display = "none";

  // Set Total After Discount 
    document.getElementById("discounted-total").innerText = parseFloat(
      calculateTotalPrice() - calculateTotalPrice() * 0.2); 
  } 
  else {
    failMsg.style.display = "flex";
    successMsg.style.display = "none";
  }
}

// Handle Event For Memory 
document.getElementById("default-memory").addEventListener
('click', function(){
    updateExtra("extra-memory-cost", 0);   
});

document.getElementById("extra-memory").addEventListener
("click", function () {
  updateExtra("extra-memory-cost", 180); 
});

//Handle Event For Storage
document.getElementById("default-storage").addEventListener
("click", function () {

    updateExtra("extra-storage-cost", 0); 

  });

  document.getElementById("extra-storage").addEventListener
  ("click", function () {

          updateExtra("extra-storage-cost", 100); 

    });

    document.getElementById("extra-large-storage").addEventListener
    ("click", function () {

            updateExtra("extra-storage-cost", 180); 

      });

    // Handle Event For Delivery   
    document.getElementById("free-delivery").addEventListener
    ("click", function () {
        updateExtra("delivery-charge", 0);
      });

      document.getElementById("cost-delivery").addEventListener("click", function () {
          updateExtra("delivery-charge", 20);
        });

    // Handle Event For Promo Code   
    document.getElementById("apply-promo").addEventListener
    ("click", function () {
         
         applyCupon("stevekaku");
         document.getElementById("promo-input").value = '';

      });