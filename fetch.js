// Function to fetch and append content from another HTML file
function loadContent() {
  fetch("albumPromo.html")
    .then((response) => response.text())
    .then((data) => {
      const contentContainer = document.getElementById("imported-content");
      contentContainer.innerHTML += data; // Appends the content
    })
    .catch((error) => {
      console.error("Error loading content:", error);
    });
}

// Infinite Scroll: Load content when the user reaches near the bottom of the page
document.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  // If the user has scrolled to the bottom, load more content
  if (scrollPosition >= pageHeight - 100) {
    // 100px from the bottom
    loadContent();
  }
});

// Initially load content when the page is loaded
document.addEventListener("DOMContentLoaded", loadContent);
