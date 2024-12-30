// Get divs
const div1 = document.getElementById("result-table-container__item1");
const div2 = document.getElementById("result-table-container__item2");
const div3 = document.getElementById("result_statistics_box");

document
  .getElementById("result_wrapper__cnt--part1_btn1")
  .addEventListener("click", () => {
    div1.classList.add("active");
    div2.classList.remove("active");
    div3.classList.remove("active");
  });

document
  .getElementById("result_wrapper__cnt--part1_btn2")
  .addEventListener("click", () => {
    div1.classList.remove("active");
    div2.classList.add("active");
    div3.classList.remove("active");
  });

document
  .getElementById("result_statistics-btn")
  .addEventListener("click", () => {
    div1.classList.remove("active");
    div2.classList.remove("active");
    div3.classList.add("active");
  });
