async function load() {
    // First, fetch events from the Google Apps Scripts API
    const response = await fetch('https://script.google.com/macros/s/AKfycbxNPefy1kGkCnSB7pV9eeWvWyExkrQn5lKCxHo_IX3m4qOEb1cYluFoy0RCduSXhtLTmw/exec');
  
    const movies = await response.json();
    const moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = '';
  
    // loop through movies and render them on the page
    for (let movie of movies) {
      moviesContainer.innerHTML += `
        <div class="card card-side max-w-2xl max-h-80 bg-base-100 shadow-xl">
  
        <figure class="w-1/3"><img src="${movie.Image}" alt="${movie.Title}" /></figure>
        <div class="card-body w-2/3">
          <a id="movie-link" href="${movie.Link}">
            <h2 class="card-title">${movie.Title}</h2>
          </a>
          <ul class="movie-details flex justify-start">
            <li class="year">${movie.Year}</li> &nbsp;&nbsp;
            <li class="length">${movie.Length}</li>
          </ul>
          <span class="rating">Rating: ${movie.Rating}</span>
          <p class="description overflow-auto">${movie.Description}</p>
          <div class="card-actions justify-end">
            <a class="btn btn-primary" href="${movie.Link}" target="_blank">See
              More</a>
          </div>
        </div>
      </div>
      `
    }
  
    console.log({ movies })
  }
  
  load();
  