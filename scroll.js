const container = document.querySelector(".teacher-scrole");

container.addEventListener("wheel", (event) => {
  event.preventDefault(); // Prevent default scrolling
  container.scrollBy({
    left: event.deltaY, // Adjust scroll direction based on wheel movement
    behavior: "smooth", // Smooth animation
  });
});
