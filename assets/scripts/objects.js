const addMovieBtn = document.getElementById("add-movie-btn"); // target the add button
const searchBtm = document.getElementById("search-btn"); // target the search button

const movies = [];

const renderMovies = () => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }

  movieList.innerHTML = ""; // this is clearing the list so its rendering every time there is new item / not ideal

  movies.forEach((movie) => {
    const movieEl = document.createElement("li");
    let text = movie.info.title + " – ";
    for (const key in movie.info) {
      if (key !== "title") {
        text = text + `${key}:${movie.info[key]}`;
      }
    }
    movieEl.textContent = text;
    // movieEl.textContent = movie.info.title;
    // access the properties of that object, chaining multiple property requests
    movieList.append(movieEl);
    // append that movie to the movie list
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random(),
  };
  movies.push(newMovie); // sends the new object to the array movies
  renderMovies();
};

addMovieBtn.addEventListener("click", addMovieHandler);
