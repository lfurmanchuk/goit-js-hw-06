const list = document.querySelector("ul");
const items = list.querySelectorAll("li.item");

console.log('Number of categories: ', items.length);

items.forEach((item) => {
    const header = item.querySelector("h2").innerText;
    const length = item.querySelectorAll("li").length;
    console.log('Category: ', header);
    console.log('Elements: ', length);
})