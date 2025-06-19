import { renderHeader } from "./components/renderHeader.js";

window.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  app.appendChild(renderHeader());
  app.classList.add("project_nav");

  // Wrapper to match main page margins
  const wrapper = document.createElement("div");
  wrapper.classList.add("container");


  const header = document.createElement("h1");
  header.textContent = "SF Apartment Rental Analysis";
  header.className = "page-header";
  wrapper.appendChild(header);

  const writeup = document.createElement("section");
  writeup.className = "analysis-text";
  writeup.innerHTML = `
    <h2>Analysis & Observations</h2>
    <p>This Power BI analysis explores apartment rental trends in San Francisco using open data. It includes insights on average rent, unit types, vacancy durations, and construction dates by neighborhood and district.</p>
    <p>I used Mapshaper to create a custom shape map and normalized geospatial data to align with Power BI's formatting needs. My goal was to build something both exploratory and informative for users looking to understand the housing landscape better.</p>
    `;
  wrapper.appendChild(writeup);

  const overview = document.createElement("img");
  overview.src = "../img/sf_rental_analysis01.png";
  overview.alt = "Screenshot of Power BI Analysis Overview ";
  overview.classList.add("project-image");
  wrapper.appendChild(overview);
  
  const rent_by_apt_size = document.createElement("img");
  rent_by_apt_size.src = "../img/sf_rental_analysis02.png";
  rent_by_apt_size.alt = "Animated screenshot of Power BI report";
  rent_by_apt_size.classList.add("project-image");
  wrapper.appendChild(rent_by_apt_size);

  const apt_by_decade = document.createElement("img");
  apt_by_decade.src = "../img/sf_rental_analysis03.png";
  apt_by_decade.alt = "Animated screenshot of Power BI report";
  apt_by_decade.classList.add("project-image");
  wrapper.appendChild(apt_by_decade);

  const shape_map = document.createElement("img");
  shape_map.src = "../img/sf_rental_analysis04.png";
  shape_map.alt = "Animated screenshot of Power BI report";
  shape_map.classList.add("project-image");
  wrapper.appendChild(shape_map);
  
  const map = document.createElement("img");
  map.src = "../img/sf_rental_analysis05.png";
  map.alt = "Animated screenshot of Power BI report";
  map.classList.add("project-image");
  wrapper.appendChild(map);
  
  // Power BI report
  const iframe = document.createElement("iframe");
  iframe.src = "https://app.powerbi.com/reportEmbed?reportId=4f7b1420-e295-486a-bef5-ef471e754a39&autoAuth=true&ctid=36481d33-2ec0-4d2c-b97c-df94bd5ec140";
  iframe.width = "300px";
  iframe.height = "300px";
  
  iframe.classList.add("power_bi");
  iframe.allowFullScreen = true;
  wrapper.appendChild(iframe);

  app.appendChild(wrapper);
});