'use strict';

const populations = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

let totalPopulation = 0;
let numberOfCountries = 0;

for (const population of populations) {

  const countryPopulation = +population.textContent.split(',').join('');

  totalPopulation += countryPopulation;
  numberOfCountries++;
}

const averageResult = totalPopulation / numberOfCountries;

average.textContent = Math.round(averageResult).toLocaleString();
total.textContent = totalPopulation.toLocaleString();
