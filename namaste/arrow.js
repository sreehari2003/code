const a = document.createElement("h1");

a.textContent = "Welcome to world";

a.style.color = "red";

document.querySelector("body").innerHTML = a.outerHTML;
