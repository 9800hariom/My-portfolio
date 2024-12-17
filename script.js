
const hamburger = document.querySelector(".hamburger")
const closenav = document.querySelector(".close-nav")
const sidebar = document.querySelector(".navmenu")
// console.log(hamburger,closenav,sidebar)

hamburger.addEventListener("click",()=>{
    sidebar.style.right = "0%"
    
    
})
closenav.addEventListener("click",()=>{
    sidebar.style.right = "-100%"
})

const texts = ["Hello, I am", "a Web Developer", "a Designer", "a Coder"];
const typingSpeed = 150; // Speed of typing (milliseconds per character)
const eraseSpeed = 100; // Speed of deleting (milliseconds per character)
const delayBeforeErase = 1500; // Wait before erasing the text
const delayBeforeNewText = 500; // Wait before starting the next text

let textIndex = 0; // Index of current text
let charIndex = 0; // Index of current character
let isDeleting = false; // Flag to indicate typing or deleting
const autoTypeElement = document.getElementById("autoType");

function typeAnimation() {
  const currentText = texts[textIndex]; // Get current text
  if (isDeleting) {
    // Deleting characters
    autoTypeElement.textContent = currentText.substring(0, charIndex--);
  } else {
    // Typing characters
    autoTypeElement.textContent = currentText.substring(0, charIndex++);
  }

  // Adjust the speed of typing and erasing
  let delay = isDeleting ? eraseSpeed : typingSpeed;

  // If typing is complete
  if (!isDeleting && charIndex === currentText.length) {
    delay = delayBeforeErase; // Pause before erasing
    isDeleting = true;
  }
  // If deleting is complete
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length; // Move to the next text
    delay = delayBeforeNewText;
  }

  setTimeout(typeAnimation, delay);
}

// Start the animation
typeAnimation();