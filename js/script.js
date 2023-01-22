const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");

// tabs menu event listener

tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

function onTabClick(e) {
  // deactive all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-blue-600",
      "border-b-4",
      "md:border-b-0"
    );
  });

  // hide all panels
  panels.forEach((panel) => panel.classList.add("hidden"));

  // activate a new tab and panel based on the target

  e.target.classList.add("border-blue-600", "border-b-4");
  const classString = e.target.getAttribute("data-target");
  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
}

var tabss = document.querySelectorAll(".flex button");
tabss.forEach(function (tab) {
  tab.addEventListener("click", function () {
    tabss.forEach(function (t) {
      t.classList.remove("text-indigo-600");
    });
    this.classList.add("text-indigo-600");
    var tabId = this.getAttribute("id");
    var tabContent = document.querySelectorAll(".hidden");
    tabContent.forEach(function (tc) {
      tc.classList.add("hidden");
    });
    var selectedTab = document.getElementById(tabId.replace("tab", "content"));
    selectedTab.classList.remove("hidden");
  });
});

const tabTitle = document.querySelector(".tabTitle");
const tabContent = document.querySelector(".tabContent");

tabTitle.addEventListener("click", function () {
  tabContent.classList.toggle("hidden");
});
