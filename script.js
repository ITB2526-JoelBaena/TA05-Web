// ACCORDION ON HOME PAGE
const boxes = document.querySelectorAll(".project-box");
const isIndexPage = document.body.classList.contains("index-page");

if (isIndexPage) {
  boxes.forEach(box => {
    box.addEventListener("click", () => {
      boxes.forEach(b => {
        if (b !== box) b.classList.remove("active");
      });
      box.classList.toggle("active");
    });
  });
} else {
  boxes.forEach(box => {
    box.addEventListener("click", () => {
      box.classList.toggle("active");
    });
  });
}

// CONTACT FORM VALIDATION
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", e => {
    if (!form.checkValidity()) {
      e.preventDefault();
      alert("Please fill out all fields correctly.");
    }
  });
}

// FILTER MENU
const filterButtons = document.querySelectorAll(".filter-menu button");
const allProjects = document.querySelectorAll(".project-box");

const categoryTitles = {
  networks: document.querySelector(".networks-title"),
  systems: document.querySelector(".systems-title"),
};

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-filter");
    const target = btn.getAttribute("data-target");

    if (target && target !== "#all") {
      document.querySelector(target).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    allProjects.forEach(project => {
      if (category === "all" || project.classList.contains(category)) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });

    Object.keys(categoryTitles).forEach(cat => {
      if (category === "all" || cat === category) {
        categoryTitles[cat].style.display = "block";
      } else {
        categoryTitles[cat].style.display = "none";
      }
    });
  });
});
