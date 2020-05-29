export async function fetchProducts() {
  fetch("http://localhost:8080/products")
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    });
}
