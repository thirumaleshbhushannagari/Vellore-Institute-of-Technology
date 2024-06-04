// sidebar functionality
(function () {
  const hamburger = document.querySelector(".hamburger");
  const sidebarCloseButton = document.querySelector(".close-button");
  const sidebarContainer = document.querySelector(".sidebar-container");

  const updateAccessiblityChecks = function (sidebarOpening) {
    const sidebarLinks = [
      ...document.querySelectorAll(".sidebar-links .nav-link"),
    ];
    sidebarLinks.forEach((eachLink) => {
      eachLink.setAttribute("tabIndex", sidebarOpening ? 0 : -1);
    });
    document
      .querySelector(".sidebar-container .logo-section a")
      .setAttribute("tabIndex", sidebarOpening ? 0 : -1);
  };
  const openSidebar = function () {
    sidebarContainer.classList.add("show-sidebar");
    updateAccessiblityChecks(true);
  };
  const closeSidebar = function () {
    sidebarContainer.classList.remove("show-sidebar");
    updateAccessiblityChecks(false);
  };
  hamburger.addEventListener("click", openSidebar);
  sidebarCloseButton.addEventListener("click", closeSidebar);
  updateAccessiblityChecks(false);
})();

// sticky sidebar
(function () {
  const navbarContainer = document.querySelector(".nav-container");
  window.addEventListener("scroll", function () {
    let targetNumber = this.innerWidth >= 992 ? 70 : 50;
    if (this.scrollY >= targetNumber) {
      navbarContainer.classList.add("sticky-nav");
    } else {
      navbarContainer.classList.remove("sticky-nav");
    }
  });
})();

// const container = document.querySelector(".hamburger");
// console.log(container);

// const closebutton = document.querySelector(".close-button");
// console.log(closebutton);

// const sidebar = document.querySelector(".sidebar-container");
// console.log(sidebar);

// const openSidebar = () => {
//   sidebar.classList.add("show-sidebar");
// //   console.log(closebutton.classList);
// };

// const closeSidebar = ()=>{
//     sidebar.classList.remove("show-sidebar")
// }

// container.addEventListener("click", openSidebar);
// closebutton.addEventListener("click", closeSidebar);
