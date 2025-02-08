// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsArr = moviesArray.map((movie) => movie.director);
  return directorsArr.filter(
    (value, position) => directorsArr.indexOf(value) === position
  );
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) return 0;
  const moviesByStSp = moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return moviesByStSp.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  let vaildScore = moviesArray
    .map((movie) => movie.score)
    .filter((score) => typeof score === "number" && !isNaN(score));

  const sumScore = vaildScore.reduce(
    (sumScore, current) => sumScore + current,
    0
  );

  const averageScore =
    Math.round((sumScore / moviesArray.length + Number.EPSILON) * 100) / 100;

  return averageScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  if (dramaMovies.length === 0) return 0;

  const sumDrama = dramaMovies.reduce(
    (sumScore, currentMovie) => sumScore + currentMovie.score,
    0
  );

  const averageScore =
    Math.round((sumDrama / dramaMovies.length + Number.EPSILON) * 100) / 100;

  return averageScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const filteredByYears = moviesArray.filter(
    (value, position) => moviesArray.indexOf(value) === position
  );

  return filteredByYears.sort((currentMovie, nextMovie) => {
    if (currentMovie.year > nextMovie.year) return 1;
    if (currentMovie.year <= nextMovie.year) return -1;
    return 0;
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const movies = moviesArray.map((movie) => movie.title);

  const orderAlph = movies.sort((currentMovie, nextMovie) => {
    if (currentMovie > nextMovie) return 1;
    if (currentMovie < nextMovie) return -1;
    return 0;
  });

  return orderAlph.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((movie) => {
    let hours = 0,
      minutes = 0;
    const parts = movie.duration.split(" ");

    if (parts[0].includes("h")) hours = +parts[0].replace("h", "");

    if (parts.length > 1 && parts[1].includes("min"))
      minutes = +parts[1].replace("min", "");

    return { ...movie, duration: hours * 60 + minutes };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;

  const groupedByYear = moviesArray.reduce((accumulator, movie) => {
    if (!accumulator[movie.year]) {
      accumulator[movie.year] = [];
    }

    accumulator[movie.year].push(movie);
    return accumulator;
  }, {});

  const averageScores = Object.entries(groupedByYear).map(([year, values]) => {
    const avgScore =
      values.reduce((sumScore, current) => sumScore + current.score, 0) /
      values.length;
    return { year: Number(year), avgScore };
  });

  const maxAverageScore = averageScores.reduce((maxScore, currentScore) =>
    currentScore.avgScore > maxScore.avgScore ? currentScore : maxScore
  );

  return `The best year was ${maxAverageScore.year} with an average score of ${maxAverageScore.avgScore}`;
}
