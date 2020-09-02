//CREATE ARRAY
var movieArray = new Array();

//INSERT MOVIE DATA
movieArray.push({
  movieName: "Wazir",
  actors: "Farhan Akhtar,Amitabh Bachchan,Aditi Rao Hydari",
  date: "8 January 2016",
  directors: "Bejoy Nambiar",
});

movieArray.push({
  movieName: "Arvind Desai Ki Ajeeb Dastaan",
  actors: "Shriram Lagoo, Om Puri",
  date: "5 May 1978",
  directors: "Saeed Akhtar Mirza",
});

movieArray.push({
  movieName: "Khuda Haafiz",
  actors: "Vidyut Jammwal, Annu Kapoor",
  date: "14 Augut 2020",
  directors: "Faruk Kabir",
});

movieArray.push({
  movieName: "Shakuntala Devi",
  actors: "Vidya Balan, Saniya Malhotra",
  date: "31 July 2020",
  directors: "Anu Menon",
});

movieArray.push({
  movieName: "Airlift",
  actors: "Akshay Kumar, Nimrat Kaur",
  date: "22 January 2016",
  directors: "Raja Menon",
});

movieArray.push({
  movieName: "Azhar",
  actors: "Emraan Hashmi, Nargis Fakri, Prachi Desai",
  date: "13 May 2016",
  directors: "Anthony D'Souza",
});

movieArray.push({
  movieName: "Bajirao Mastani",
  actors: "Ranveer Singh, Deepika Padukone, Priyanka Chopra",
  date: "18 December 2015",
  directors: "Sanjay Leela Bhansali",
});

movieArray.push({
  movieName: "Bahubali: The Beginning",
  actors: "Prabhas, Rana Daggubati, Anushka Shetty",
  date: "9 july 2015",
  directors: "S.S. Rajamouli",
});

//GENERATE MOVIE FUNCTION
function generateMovie() {
  //GET A RANDOM NUMBER
  var getRandomNumber = Math.floor(Math.random() * movieArray.length);

  //DISPLAY MOVIE NAME INSIDE DIV
  document.getElementById("movieNameDisplay").innerHTML =
    movieArray[getRandomNumber].movieName;

  document.getElementById("leadActors").innerHTML =
    "<span style='font-weight: 700;'>Lead Actors:</span> " +
    movieArray[getRandomNumber].actors;

  document.getElementById("releaseDate").innerHTML =
    "<span style='font-weight: 700;'>Release Date: </span>" +
    movieArray[getRandomNumber].date;

  document.getElementById("director").innerHTML =
    "<span style='font-weight: 700;'>Directors: </span>" +
    movieArray[getRandomNumber].directors;
}
