//Selecting

const likeCount = document.querySelector(".likeCount");
const likeButton = document.querySelector(".likeButton");
const thumbIcon = document.querySelector(".thumbIcon");

//Making Counter



//Event Listener

let likeCounter = 0;
likeButton.addEventListener("click", () => {
  if (likeButton.classList.contains("liked")) {
    likeButton.classList.remove("liked");
    thumbIcon.style.display = "inline";
    let likeIcon = document.querySelector(".likedIcon");
    likeIcon.classList.remove("fas", "fa-thumbs-up", "icon", "likedIcon");
    localStorage.removeItem("liked")
    const minus = localStorage.getItem("CounterOne") -1;
    const minusText = minus > 1 ? minus + " likes" : minus + "like";
    likeCount.textContent = `${minusText}`;
    localStorage.removeItem("CounterOne")
    return;
  }
  thumbIcon.style.display = "none";
  // <i class="fas fa-thumbs-up"></i>
  const likeIcon = document.createElement("i");
  likeIcon.classList.add("fas", "fa-thumbs-up", "icon", "likedIcon");
  likeButton.classList.add("liked");
  likeButton.append(likeIcon);
  localStorage.setItem("liked" , "true");
  const counterOne = likeCounter+ 1;
  const counterOneText = counterOne > 1 ? counterOne + "likes" : counterOne + "like";
  localStorage.setItem("CounterOne" , counterOne);
  likeCount.textContent = counterOneText;
});

window.addEventListener("load" , () => {
    if(localStorage.getItem("liked") === "true") {
        thumbIcon.style.display = "none";
        // <i class="fas fa-thumbs-up"></i>
        const likeIcon = document.createElement("i");
        likeIcon.classList.add("fas", "fa-thumbs-up", "icon", "likedIcon");
        likeButton.classList.add("liked");
        likeButton.append(likeIcon);
    }
})
