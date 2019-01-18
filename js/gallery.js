function activateGallery(){
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo img");
  let aside = document.querySelector("#gallery-info");
  
  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      mainImage.setAttribute("src",thumbnail.dataset.largeVersion);
      mainImage.setAttribute("alt",thumbnail.alt);
      document.querySelector(".current").classList.remove("current");
      thumbnail.parentNode.classList.add("current");
      aside.querySelector(".title").innerHTML = thumbnail.dataset.title;
      aside.querySelector(".description").innerHTML = thumbnail.dataset.description;
    });
  });
}