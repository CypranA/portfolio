// assets/js/projects.json
// Loads projects.json and renders featured projects and project list into the homepage

(async function(){
  async function loadJSON(path){
    const res = await fetch(path);
    if(!res.ok) throw new Error('Failed to load ' + path);
    return res.json();
  }

  function createFeaturedCard(p){
    return `
      <article class="post featured">
        <header class="major">
          <h2><a href="${p.url}" target="_blank">${p.title}</a></h2>
          <p>${p.description}</p>
          <div class="tech-tags">${p.tech.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
        </header>
        <a href="${p.url}" target="_blank" class="image main"><img src="${p.image}" alt="${p.title} image"/></a>
        <ul class="actions special"><li><a href="${p.url}" target="_blank" class="button large">View Project</a></li></ul>
      </article>
    `;
  }

  function createPostCard(p){
    return `
      <article>
        <header>
          <h2><a href="${p.url}" target="_blank">${p.title}</a></h2>
        </header>
        <a href="${p.url}" target="_blank" class="image fit"><img src="${p.image}" alt="${p.title} image"/></a>
        <p>${p.description}</p>
        <div class="tech-tags">${p.tech.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
        <ul class="actions special"><li><a href="${p.url}" target="_blank" class="button">View project</a></li></ul>
      </article>
    `;
  }

  try{
    const data = await loadJSON('projects.json');
    const featuredEl = document.getElementById('featured');
    const postsList = document.getElementById('posts-list');

    // Clear default
    featuredEl.innerHTML = '';
    postsList.innerHTML = '';

    // Featured: take up to 2 featured projects
    const featured = data.filter(p=>p.featured).slice(0,2);
    if(featured.length===0 && data.length>0){
      featured.push(data[0]);
    }

    featured.forEach(p=>{
      featuredEl.insertAdjacentHTML('beforeend', createFeaturedCard(p));
    });

    // Other projects
    data.forEach(p=>{
      // skip if included in featured
      if(featured.some(f=>f.url===p.url)) return;
      postsList.insertAdjacentHTML('beforeend', createPostCard(p));
    });
  }catch(err){
    console.error('Error loading projects:', err);
  }
})();
