const listItems = document.querySelectorAll(".options-list li");

const checkBoxes = document.querySelectorAll(".custom-checkbox");

listItems.forEach((item, index) => {
  item.addEventListener("click", function () {
    let activeItem = document.querySelector(".options-list li.active");
    let activeCheckbox = document.querySelector(".custom-checkbox.active");
    if (activeItem && activeCheckbox) {
      activeItem.classList.remove("active");
      activeCheckbox.classList.remove("active");
      this.classList.add("active");
      checkBoxes[index].classList.add("active");
    }
  });
});

const projectListItems = document.querySelectorAll(".projects-list li");

projectListItems.forEach((item) => {
  item.addEventListener("click", () => {
    let activeItem = document.querySelector(".projects-list li.active-item");
    if (activeItem) {
      activeItem.classList.remove("active-item");
      item.classList.add("active-item");
    }
  });
});

const projectPopup = document.querySelector(".project-popup");

const popupToggler = document.querySelector(".project-link a");

const closeBtn = document.querySelector(".close");

popupToggler.addEventListener("click", () => {
  projectPopup.classList.add("show");
  document.body.classList.add("no-overflow");
});

closeBtn.onclick = () => {
  projectPopup.classList.remove("show");
  document.body.classList.remove("no-overflow");
};
