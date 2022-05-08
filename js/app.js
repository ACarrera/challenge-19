let shoppingCart = [];

function addProduct() {
  let product = prompt("Add Product");
  if (product.trim() == "") {
    Swal.fire("Invalid product");
  } else {
    shoppingCart.push(product);
  }
}
function showCart() {
  Swal.fire({
    title: `Products in Cart \n ✅${shoppingCart.join("\n ✅")} `,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
}
function search() {
  let productToSearch = prompt("What product do you want to search for?");
  if (productToSearch.trim() == "") {
    swal.fire("Invalid Text");
  } else {
    if (shoppingCart.includes(productToSearch) == true) {
      swal.fire("Product Found.");
    } else {
      swal.fire("Product Not Found.");
    }
  }
}
function filterProducts() {
  let productFiltered = prompt("Search Products by cue");
  if (productFiltered.trim() == "") {
    swal.fire("Invalid Text");
  } else {
    let userSearch = shoppingCart.filter((product) =>
      product.includes(productFiltered)
    );
    swal.fire(
      `Products with "${productFiltered}" \n ✅${userSearch.join("\n ✅")}`
    );
  }
}
function remove() {
  let productToRemove = prompt("what product do you want delete?");
  shoppingCart = shoppingCart.filter((product) => product != productToRemove);
  swal.fire(`The product ${productToRemove} has been removed`);
}
