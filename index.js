// Q1. Create a variable called `denzel` - that can't be redeclared - and assign it the string 'please denzel, help me'
const denzel = 'please denzel, help me';

// Q2. Use the variable `actor` to create a new variable called `inspirational` that is assigned the string "Is Denzel Washington an inspirational actor?"
const actor = 'Denzel Washington';

const inspirational = `Is ${actor} an inspirational actor?`;

// Q3  Create an object called `family` and give it the following properties:
// family has been `married` on "1983" (Number)
// family is not `presidentOfTheUnitedStates` (boolean)
// family has `children` called "John David", "Katia", "Olivia" and "Malcolm" (array of strings)
const family = {
  married: '1983',
  presidentOfTheUnitedStates: false,
  children: ["John David", "Katia", "Olivia", "Malcolm"]
};

// Q4. Change
// * the `name` stage to "A Raisin in the Sun"
// * the `year` stage to "2014"
// by using the dot notation
const stage = {
  'name': 'Fences',
  'year': '2010'
};

stage.name = "A Raisin in the Sun";
stage.year = "2014";

// Q5. Change the `movie` "glory" to "Training Day" using square bracket notation
const awards = {
  'movie': 'glory'
};

awards['movie'] = "Training Day";

// Q6. Create an object called "earlywork"
// The key should be the movie name and the value the release year
// Movies are
// * Carbon Copy (1981)
// * A Soldier Story (1984)
// * Power (1986)
// * Cry Freedom (1987)
// * For Queen and Countryy (1988)
const earlywork = {
  'Carbon Copy': '1981',
  'A Soldier Story': '1984',
  Power: '1986',
  'Cry Freedom': '1987',
  'For Queen and Countryy': '1988'
};

// Q7. Return a new array from `debaters` with all item in uppercase
const debaters = ['we do', 'what we have to do', 'in order to do', 'what we want to do'];
const debatersUppercase = debaters.map(val => val.toUpperCase());

// Q8. Using this array.
// Do the following 5 steps
const directors = ['spikelee', 'ridleyscott', 'zemeckis'];

// 1. add "tonyscott" value to the end of `directors` array
directors.push("tonyscott");

// 2. remove "spikelee" value and store it in a variable called firstDirector
const firstDirector = directors.shift();

// 3. add "himself" value to the start of `directors` array
directors.unshift("himself");

// 4. remove "ridleyscott" value from the array and store it in a variable called secondDirector
const secondDirector = directors.splice(1, 1);

// 5. let 'zemeckis' in the array but put a copy of it on a variable called thirdDirector
const thirdDirector = directors[1];

// Q9. Write the function `duplicate` that return the expected result
console.log(duplicate(['Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child']));
// ❯ ['Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child', 'Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child']

const duplicate = (arr) => {
  return [...arr, ...arr]
};

// Q10. Refactor the current ES5-style function `police` in ES6-style.
const police = (names) => names.map(name => `${name} I am the police`);

const quotes = ['You will never see the light of... ', 'I run shit around here ', 'King Kong aint got shit on me '];

console.log(police(chorus));
 // ❯ ['You will never see the light of... I am the police', 'I run shit around here I am the police', 'King Kong aint got shit on me I am the police'];


// Q11. Related to the https://www.tvmaze.com/people/66167/denzel-washington link
// What's the query selector to get all Cast Credits titles (Live with Kelly & Ryan, The Late Show with Stephen Colbert...).
document.querySelectorAll('#credits strong a');

// Q12. Related to the https://www.tvmaze.com/people/66167/denzel-washington link
// How many http requests are performed to render the page?
// 188 requests

// Q13. Related to the following api call with "curl"
// ❯ curl "http://api.tvmaze.com/people/6616"
// Could you describe and explain the response?

// We are performing a GET http request to the given URL, it returns a json object, with the infos of Zach Shirey

// Q14. Refactor the following codebase with a promise notation
fs.readFile(filePath, function (err, data) {
  return new Promise((resolve, reject) => {
    if (err) {
      // handle the error, the return is important here
      // so execution stops here
      return reject(err)
    }
    // use the data object
    resolve(data)
  })
});

// Q15. Refactor the following codebase with async/await notation
const request = async () => {
  const response = await fetch('http://api.tvmaze.com/search/people?q=denzel+washington')
  const data = await response.json()

  const { person } = data[0]
  const { id } = person

  const res = await fetch(`http://api.tvmaze.com/people/${id}/castcredits?embed=show`);
  console.log(await res.json())
};

// Q16. Give me at least 3 memorable websites that engage to continue (because of nice UX/UI AND avoid to give me facebook, airbnb etc...)
//https://www.xxii.fr/
//https://www.nurturedigital.com/
//https://www.ikonpass.com/

// Q17. Describe an ESILV project that you worked on that you’re proud of?
//Python Project : Seoul-Bike-Location
//This project consists in the final project of the course "Python for Data Analysis" being part of our degree at ESILV. We were given a dataset to work with.
//The goal of this project was to explore and analyse the dataset by applying tools and skills acquired along the course.
//We used Jupyter Notebook to visualize our data and then used some Machine Learning models in order to make predictions.


// Q18. Describe an ESILV project that you worked on that you’re not so proud of?
// C# Project : Monopoly
//This project consists of coding an easy version of the Monopoly game. I'm not so proud of it because the project seemed way too easy to do and was way too simplified.

// Q19. What are some things you like about the developer tools you use?
// I find it beautiful that everyone has its own approach of a problem and that nowadays tools make it possible for anyone to code their own way.

// Q20. Last question: could you explain me - in your terms - why the title of the course is "Web Application Architecture(s)" and not "Web Application Architecture"?
// The title of this course is Web Application Architectures with an S to Architecture because we were told during the first class that there was no rightful way and not a single way to code a web application :
//many big companies nowadays all use web applications and they all have their own achitecture, yet it still works and is efficient.