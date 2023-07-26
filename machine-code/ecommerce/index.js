const main = document.querySelector(".main");
const loader = document.querySelector(".loader");

const setLoading = (check) => {
  if (check) {
    loader.classList.remove("d-none");
    main.classList.add("d-none");
  } else {
    loader.classList.add("d-none");
    main.classList.remove("d-none");
  }
};

const urls = "https://dummyjson.com/products";

const getData = async () => {
  setLoading(true);
  const res = await fetch(urls);
  const data = await res.json();

  let html = "";
  console.log(typeof data.products);
  data.products.forEach((el) => {
    html += `
        <div class="card" >
        <img src=${el.images[0]} alt="" />
        <h4>${el.title}</h4>
        <div class="flex info">
        <button class="btn">add to cart</button>
        <span class="price">${el.price}</span>
        </div>
        </div>
        `;
  });
  main.innerHTML = html;
  setLoading(false);
};

getData();

main.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    console.log(e.target);
  }
});
