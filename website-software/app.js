const pageDetails = {
  overview: ["Overview", "Your business workspace, prepared for setup."],
  customers: ["Customers", "Customer records will be implemented in a later development stage."],
  projects: ["Projects", "Project tracking and site progress will be implemented in a later development stage."],
  quotations: ["Quotations", "Quotation creation, approval, and history will be implemented in a later development stage."],
  orders: ["Orders", "Order management will be implemented in a later development stage."],
  invoices: ["Invoices", "Invoices and payment records will be implemented in a later development stage."],
  inventory: ["Inventory", "Materials and stock management will be implemented in a later development stage."],
  reports: ["Reports", "Business reports and analytics will be implemented in a later development stage."]
};

const title = document.getElementById("pageTitle");
const subtitle = document.getElementById("pageSubtitle");
const breadcrumb = document.getElementById("breadcrumbPage");
const panelTitle = document.getElementById("panelTitle");
const panelCopy = document.getElementById("panelCopy");
const metricGrid = document.getElementById("overviewMetrics");
const moduleGrid = document.getElementById("moduleGrid");

function openPage(key) {
  const details = pageDetails[key] || pageDetails.overview;
  title.textContent = details[0];
  breadcrumb.textContent = details[0];
  subtitle.textContent = details[1];
  panelTitle.textContent = key === "overview" ? "Software modules" : details[0] + " module";
  panelCopy.textContent = key === "overview"
    ? "Choose a module from the left navigation. Each module will be implemented and tested separately before it is connected to real business data."
    : "This module is part of the planned software. Its screens, permissions, data model, and validation will be built and tested before it is connected to live business records.";
  metricGrid.hidden = key !== "overview";
  moduleGrid.hidden = key !== "overview";
  document.querySelectorAll(".nav-item").forEach(button => {
    const active = button.dataset.page === key;
    button.classList.toggle("active", active);
    button.setAttribute("aria-current", active ? "page" : "false");
  });
  document.getElementById("sidebar").classList.remove("open");
}

document.querySelectorAll(".nav-item").forEach(button => {
  button.addEventListener("click", () => openPage(button.dataset.page));
});

document.getElementById("menuButton").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("open");
});
