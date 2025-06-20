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
  const section1Text = document.createElement("section");
  section1Text.className = "analysis-text";
  section1Text.innerHTML = `
    <h3>Overview</h3>
    <p>This project explores San Francisco's apartment rental trends using public data from DataSF. The dashboard provides a high-level overview of rent prices, apartment characteristics, and neighborhood patterns. The dataset includes apartment size, rent estimates, building age, and basic amenities, allowing for a multi-faceted look into the housing market. To build this dashboard, I preprocessed geospatial data using Mapshaper, formatted longitude/latitude coordinates, and cleaned inconsistent address fields to support mapping in Power BI.</p>
    <p>While the dataset provides interesting insights, it's important to note that it only includes units that have been reported to the city. As a result, some smaller or unregistered properties may not be captured in the data. Nonetheless, the analysis is designed to give users a visual and interactive entry point to better understand how housing varies by neighborhood, bedroom count, and construction era.</p>
    
  `;
  wrapper.appendChild(section1Text);
  wrapper.appendChild(overview);
  
  const rent_by_apt_size = document.createElement("img");
  rent_by_apt_size.src = "../img/sf_rental_analysis02.png";
  rent_by_apt_size.alt = "Screenshot of Power BI report";
  rent_by_apt_size.classList.add("project-image");
  
  const section2Text = document.createElement("section");
  section2Text.className = "analysis-text";
  section2Text.innerHTML = `
    <h3>Rent by Apartment Size</h3>
    <p>This scatterplot visualizes the relationship between average rent and average square footage across San Francisco neighborhoods, grouped by apartment type. Each dot represents a specific apartment size (e.g. studio, 1-bedroom) within a neighborhood, rather than individual listings, allowing for a cleaner and more interpretable view.</p>
    <p>The data is aggregated at the neighborhood level due to privacy constraints in the source dataset, and to avoid cluttering the visual with thousands of overlapping points. Users can hover over any point to reveal detailed averages, and filter by apartment size using the buttons above.</p>
    <p>This layout makes it easy to spot price anomalies—for example, luxury studios in South Beach exceeding the rent of 3-bedroom units in outer districts. The KPI cards across the top summarize the citywide average rent for each apartment type, offering a helpful point of comparison.</p>
  `;
  
  wrapper.appendChild(section2Text);
  wrapper.appendChild(rent_by_apt_size);
  
  const apt_by_decade = document.createElement("img");
  apt_by_decade.src = "../img/sf_rental_analysis03.png";
  apt_by_decade.alt = "Screenshot of Power BI report";
  apt_by_decade.classList.add("project-image");
  const section3Text = document.createElement("section");
  section3Text.className = "analysis-text";
  section3Text.innerHTML = `
  <h3>Apartment Type by Decade Built</h3>
  <p>This ribbon chart explores the evolution of apartment construction over time. The x-axis shows decades, and each ribbon represents a bedroom category. The width and height of the ribbons indicate how frequently each unit type appeared in new construction during that decade. The ribbon’s rank position updates dynamically for each decade, revealing shifts in housing priorities and building patterns.</p>
  <p>For instance, studio apartments dominated builds in the early 20th century, while more recent decades saw an increase in 2+ bedroom units. Construction peaked in the 1920s and 1960s but dropped off sharply during other periods. The chart helps identify historic trends and shifts in housing demand and city planning. While it’s not a complete picture—due to potential underreporting—it still paints a meaningful view of how San Francisco's housing stock developed over time.</p>
  `;
  wrapper.appendChild(section3Text);
  wrapper.appendChild(apt_by_decade);
  
  const shape_map = document.createElement("img");
  shape_map.src = "../img/sf_rental_analysis04.png";
  shape_map.alt = "Screenshot of Power BI report";
  shape_map.classList.add("project-image");
  const section4Text = document.createElement("section");
  section4Text.className = "analysis-text";
  section4Text.innerHTML = `
  <h3>Rent by Neighborhood Map</h3>
  <p>This is the most interactive and exploratory section of the report. Users can toggle between a choropleth map, a classic map, and an aerial map of San Francisco. Each map is shaded by average rent per neighborhood, with deeper colors representing higher prices. A list to the left ranks neighborhoods from most to least expensive, and clicking a neighborhood filters the map accordingly. Users can also filter by apartment type using the buttons at the top of the page.</p>
  <p>This tab was designed to let users explore patterns in spatial rent distribution. For instance, downtown and waterfront areas tend to be the most expensive, while western and southern neighborhoods are more affordable. One note: due to limitations in geographic aggregation, some neighborhoods (like Haight Ashbury or Hayes Valley) may not appear on the shape map. If a filter returns no result, users are encouraged to switch to the standard or aerial map view. This section provides flexibility to examine housing costs across the city and discover patterns that align with accessibility, transit, and housing density.</p>
  `;
  wrapper.appendChild(section4Text);
  wrapper.appendChild(shape_map);
  

  
  // Power BI report
  const section5Text = document.createElement("section");
  section5Text.className = "analysis-text";
  section5Text.innerHTML = `
  <h3>Interactive Power BI File</h3>
  <p> Below is the embedded Power BI report that brings this analysis to life. Users can interact with filters, maps, and visuals to explore San Francisco apartment trends in more depth—ranging from rent distributions to apartment age and neighborhood comparisons. </p>
  <p>⚠️ Please note: due to current permissions, you'll need to log in to view the live report. I'm actively working on a more open-access solution, but in the meantime, you can still explore the full analysis above through detailed screenshots and commentary. </p>
  `;
  wrapper.appendChild(section5Text);
  const iframe = document.createElement("iframe");
  iframe.src = "https://app.powerbi.com/reportEmbed?reportId=4f7b1420-e295-486a-bef5-ef471e754a39&autoAuth=true&ctid=36481d33-2ec0-4d2c-b97c-df94bd5ec140";
  iframe.width = "100%";
  iframe.height = "1000px";
  
  iframe.classList.add("power_bi");
  iframe.allowFullScreen = true;
  wrapper.appendChild(iframe);

  app.appendChild(wrapper);
});