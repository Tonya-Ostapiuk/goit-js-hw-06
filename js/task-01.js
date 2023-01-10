const totalCatg = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCatg.length}`);

const arreyCatg = [...totalCatg]
  .map(
    categories => `Category: ${categories.children[0].textContent}
    Elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(arreyCatg);


