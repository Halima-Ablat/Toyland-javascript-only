import { products } from "../data/products.js";

let productsHTML = "";

products.forEach((product) => {
  productsHTML += ` <div class="crochet mt-3 text-center col-lg-3 col-md-4 col-sm-12">
          <img
            class="image-fluid rounded mb-3"
            src="${product.image}"
            alt="${product.name}"
          />
          <div>${"⭐".repeat(product.rating)}</div>
          <p class="crochet-info">${product.name}</p>
          <p class="crochet-info">$${(product.priceCents / 100).toFixed(2)}</p>
        
         <button class="shop-btn" onclick="viewProduct('${product.id}')">Shop now</button>
        </div>`;
});

// console.log(productsHTML);

document.querySelector(".js-products-grid").innerHTML = productsHTML;



window.viewProduct =  function viewProduct(productId){
  window.location.href=`single_product.html?id=${productId}`;
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxGmVgsymx36_iZwKeCBRZp83obY5CTioN0M3v4MuTUZE-c_qFU4IZMMepikXjWRJZBiQ/exec";
const form = document.forms["submit-to-google-sheet"];

const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      message.innerHTML = "Message sent successfully!";
      setTimeout(function () {
        message.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
