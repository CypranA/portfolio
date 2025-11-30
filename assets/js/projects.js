// assets/js/projects.js
// Self-contained: renders projects directly without fetching JSON

const projects = [
  {
    "title": "Master Thesis — Data-Driven Financial Inclusion",
    "url": "https://github.com/CypranA/Master-Thesis-Data-Driven-Financial-Inclusion",
    "description": "Repository for code and analysis related to my master's thesis on \"Leveraging Big Data Analytics For Enhancing Financial Inclusion in Nigeria and Other Developing Economies. Includes scripts, notebooks, and models for analyzing financial inclusion data, assessing impact, and addressing challenges. University: CBS International Business School",
    "tech": ["Python","R","SQL","Pandas","Statistics"],
    "image": "images/placeholder-feature.svg",
    "featured": true
  },
  {
    "title": "Cyclistic Bike Share Project",
    "url": "https://github.com/CypranA/Cyclistic-Bike-Share-Project",
    "description": "Cyclistic Bike-Share Analysis: Utilized Python for data analysis and Power BI for visualization to reveal usage differences between casual riders and members, guiding marketing strategies for conversion.",
    "tech": ["Python","SQL","Tableau","Data Analysis"],
    "image": "images/placeholder-thumb.svg",
    "featured": true
  }
];

(function(){
  const featuredEl = document.getElementById('featured');
  const postsList = document.getElementById('posts-list');

  featuredEl.innerHTML = '';
  postsList.innerHTML = '';

  const featured = projects.filter(p=>p.featured).slice(0,2);
  if(featured.length===0 && projects.length>0) featured.push(projects[0]);

  featured.forEach(p=>{
    featuredEl.insertAdjacentHTML('beforeend', `
      <article class="post featured">
        <header class="major">
          <h2><a href="${p.url}" target="_blank">${p.title}</a></h2>
          <p>${p.description}</p>
          <div class="tech-tags">${p.tech.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
        </header>
        <a href="${p.url}" target="_blank" class="image main"><img src="${p.image}" alt="${p.title} image"/></a>
        <ul class="actions special"><li><a h
