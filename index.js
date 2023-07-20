document.getElementById("toggleSidebar").addEventListener("click", function () {
  const aside = document.querySelector("aside");
  const button = document.getElementById("toggleSidebar");

  // Toggle the sidebar
  if (aside.classList.contains("closed")) {
    aside.classList.remove("closed");
    button.classList.add("open");
  } else {
    aside.classList.add("closed");
    button.classList.remove("open");
  }
});
