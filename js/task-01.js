const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryNameText = category.firstElementChild.textContent;
  const categoryItemsLength = category.querySelectorAll("li").length;
  console.log(`Category: ${categoryNameText}
  Elements: ${categoryItemsLength}`);
});

