const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const themeBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

function showTab(tabId) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((content) => {
    content.classList.remove("active");
  });

  // Remove active class from all tabs
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  // Show selected tab content
  document.getElementById(tabId).classList.add("active");

  // Add active class to clicked tab
  event.target.classList.add("active");
}

function viewAllActivities() {
  alert("This would navigate to a complete gallery page with all activities!");
}

// Add click event to gallery items
document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", function () {
    const title = this.querySelector("h3").textContent;
    alert(`Clicked on: ${title}\nThis would open a detailed view or lightbox!`);
  });
});

// Add keyboard navigation
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
    const tabs = document.querySelectorAll(".tab");
    const activeTab = document.querySelector(".tab.active");
    const currentIndex = Array.from(tabs).indexOf(activeTab);

    let newIndex;
    if (e.key === "ArrowLeft") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
    } else {
      newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
    }

    tabs[newIndex].click();
  }
});
