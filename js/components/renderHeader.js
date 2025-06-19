export function renderHeader() {
  const nav = document.createElement("nav");
  nav.id = "navbar";

  const container = document.createElement("div");
  container.classList.add("container");

  const ul = document.createElement("ul");

  ul.innerHTML = `
    <li>
      <h1>
        <i class="fa-solid fa-chevron-down"></i>
        T-yler J
      </h1>
    </li>
    <li><a href="/#projects">Projects</a></li>
    <li><a href="/#about">About</a></li>
    <li><a href="/#contact">Contact</a></li>
    <li>
      <a href="https://www.linkedin.com/in/t-ylerJ/" target="_blank">
        <span class="fa-brands fa-linkedin" style="color: #95deff;"></span> LinkedIn
      </a>
    </li>
    <li>
      <a href="/docs/resume.pdf" download="tyler_johnson_resume">Resume</a>
    </li>
  `;

  container.appendChild(ul);
  nav.appendChild(container);
  return nav;
}