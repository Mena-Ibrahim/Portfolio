document.addEventListener("DOMContentLoaded", () => {
  const entries = [
    {
      title: "Mena's Italian",
      tags: ["HTML", "CSS", "JS"],
      description:
        "The first website I ever created, inspired by my passion for cooking. It showcases a simple yet modern design, leveraging foundational front-end technologies.",
      siteLink: "https://mena-ibrahim.github.io/Mena-s-Italian/",
      repoLink: "https://github.com/Mena-Ibrahim/Mena-s-Italian-WebSite-Design",
      hasSiteLink: true,
      imgSrc: "Images/Portfolio/Mena's Italian.png",
      imgAlt: "Mena's Italian",
    },
  ];

  const template = (entry) => `
                <div class="work-entry animated-block">
                    <div class="work-entry-text">
                        <div class="work-entry-title">
                            <h1>${entry.title}</h1>
                            <h2>${entry.tags
                              .map((tag) => `<span>${tag}</span>`)
                              .join(" ")}</h2>
                        </div>
                        <div class="work-entry-desc">
                            <p>${entry.description}</p>
                            ${
                              entry.hasSiteLink
                                ? `<a target="_blank" href="${entry.siteLink}" class="link-site">Visit site <i class="fa-solid fa-eye"></i></a>`
                                : ""
                            }
                            <a target="_blank" href="${
                              entry.repoLink
                            }" class="link-repo">Github Repo <i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    <div class="work-entry-img">
                        <img src="${entry.imgSrc}" alt="${entry.imgAlt}" />
                    </div>
                </div>
            `;

  const portfolioSection = document.getElementById("portfolio");
  entries.forEach((entry) => {
    const div = document.createElement("div");
    div.innerHTML = template(entry);
    portfolioSection.appendChild(div);
  });
});
