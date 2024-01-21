const container = document.querySelector('.container');
const URL = 'https://html.com/wp-content/uploads/very-large-flamingo.jpg'

function loadImages(numImages = 10){
  let i = 0;
  while(i < numImages) {
    const img = document.createElement("img");
    img.src = URL;
    img.height = 500;
    img.width = 500;
    container.appendChild(img);
    i++
  }
}

loadImages();

document.addEventListener("scroll", () => {
  if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    loadImages();
  }
})
