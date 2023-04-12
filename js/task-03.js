const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector(".gallery");
// const fragment = document.createDocumentFragment();

// images.forEach(({ url, alt }) => {
//   const itemGalleryEl = document.createElement("li");
//   const imageEl = document.createElement("img");
//   itemGalleryEl.appendChild(imageEl);
//   imageEl.src = url;
//   imageEl.alt = alt;
//   imageEl.width = 400;
//   imageEl.height = 225;
//   fragment.appendChild(itemGalleryEl);
// });
// galleryEl.appendChild(fragment)

const markup = images
  .map(({url, alt}) => `<li class="list-item"><img src = ${url} alt = ${alt}></li>`)
  .join("");

galleryEl.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");