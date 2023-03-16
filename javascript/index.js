//  Selectors
let startButton = document.querySelector(".start");
let LevelNameSpan = document.querySelector(".message .lvl");
let LevelSecondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let wordInput = document.querySelector(".wordinput");
let upcomingWord = document.querySelector(".upcoming-word");
let leftTimeSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .goal");
let scoreTotall = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");
let lastgame = document.querySelector(".lastgame");
let lastgameScoreSpan = document.querySelector(".lastgamescore");
let lastScoreDate = document.querySelector(".lastscoredate");
let beforestarting = document.querySelector(".beforestarting");
let nametext = document.querySelector(".name");
let textbeforestarting = document.querySelector(".textbeforestarting");
let tryAgainButton = document.querySelector(".tryagain");
// Audios
let gemaOverSound = new Audio("audios/gameoversound.wav");
let gemaVictorySound = new Audio("audios/gameVictory.wav");
let clickSound = new Audio("audios/click.wav");
let countdowntimerSound = new Audio("audios/countdowntimer.mp3");
let dynamicArray;
// Array Of Words
const words = [
  "Tree",
  "Fish",
  "Song",
  "Blue",
  "Bird",
  "Book",
  "Time",
  "Rain",
  "Road",
  "Gold",
  "Idea",
  "Leaf",
  "Tree",
  "Fish",
  "Love",
  "Desk",
  "Moon",
  "City",
  "Sand",
  "Fire",
  "Wind",
  "Star",
  "Book",
  "Time",
  "Rain",
  "Road",
  "Gold",
  "Idea",
  "Leaf",
  "Tree",
  "Fish",
  "Song",
  "Blue",
  "Bird",
  "Love",
  "Desk",
  "Moon",
  "City",
  "Sand",
  "Fire",
  "Wind",
  "Star",
  "Book",
  "Time",
  "Rain",
  "Road",
  "Gold",
  "Idea",
  "Leaf",
  "Fish",
  "Bird",
  "Desk",
  "Pain",
  "Mind",
  "Idea",
  "Gold",
  "Tree",
  "Door",
  "Rose",
  "Road",
  "Snow",
  "Moon",
  "Hand",
  "Wave",
  "Song",
  "Star",
  "Fire",
  "Wind",
  "Love",
  "Time",
  "Film",
  "Army",
  "Dark",
  "Leaf",
  "Room",
  "Skin",
  "Book",
  "Blue",
  "Hero",
];
const wordEasy = [
  "Cat",
  "Dog",
  "Car",
  "Toy",
  "Sun",
  "Ice",
  "Hat",
  "Arm",
  "Pen",
  "Fan",
  "Egg",
  "Box",
  "Air",
  "Bar",
  "Bed",
  "Bus",
  "Cup",
  "Day",
  "Ear",
  "Eye",
  "Fox",
  "Gas",
  "Gym",
  "Ham",
  "Hen",
  "Ink",
  "Job",
  "Key",
  "Lap",
  "Leg",
  "Man",
  "Map",
  "Mug",
  "Oak",
  "Oil",
  "Pig",
  "Pin",
  "Pot",
  "Rat",
  "Sky",
  "Tea",
  "Toy",
  "Van",
  "Wax",
  "Web",
  "Wet",
  "Wig",
  "Wow",
  "Zip",
  "Zoo",
  "Ant",
  "Bow",
  "Car",
  "Cod",
  "Cow",
  "Dry",
  "End",
  "Fly",
  "Fog",
  "Fun",
  "Gun",
  "Guy",
  "Hex",
  "Hat",
  "Jam",
  "Joy",
  "Law",
  "Lip",
  "Lob",
  "Low",
  "Mac",
  "Mud",
  "Nap",
  "Net",
  "New",
  "Nut",
  "Pal",
  "Pan",
  "Pod",
  "Pop",
  "Rap",
  "Red",
  "Rib",
  "Rio",
  "Rum",
  "Sad",
  "Sea",
  "Ski",
  "Spy",
  "Sun",
  "Toy",
  "Tea",
  "Top",
  "Two",
  "Van",
  "Vet",
  "War",
  "Wet",
  "Wig",
  "Won",
];

let wordhard = [
  "Bright",
  "Winter",
  "Castle",
  "Beauty",
  "Rocket",
  "Planet",
  "Marvel",
  "Dragon",
  "Coffee",
  "Forest",
  "Spirit",
  "Camera",
  "Travel",
  "Friend",
  "Guitar",
  "Window",
  "Nation",
  "Jungle",
  "Butter",
  "Circus",
  "Pillow",
  "Fossil",
  "Orange",
  "Pelican",
  "Anchor",
  "Potato",
  "Turtle",
  "Marble",
  "Sphere",
  "Cherry",
  "Rocket",
  "Planet",
  "Circus",
  "Dragon",
  "Spirit",
  "Travel",
  "Camera",
  "Winter",
  "Bright",
  "Castle",
  "Forest",
  "Beauty",
  "Guitar",
  "Window",
  "Nation",
  "Jungle",
  "Butter",
  "Pillow",
  "Fossil",
  "Orange",
  "Pelican",
  "Anchor",
  "Potato",
  "Turtle",
  "Marble",
  "Sphere",
  "Cherry",
  "Rocket",
  "Planet",
  "Circus",
  "Dragon",
  "Spirit",
  "Travel",
  "Camera",
  "Winter",
  "Bright",
  "Castle",
  "Forest",
  "Beauty",
  "Guitar",
  "Window",
  "Nation",
  "Jungle",
  "Butter",
  "Pillow",
  "Fossil",
  "Orange",
  "Pelican",
  "Anchor",
  "Potato",
  "Turtle",
  "Marble",
  "Sphere",
  "Cherry",
  "Rocket",
  "Planet",
  "Circus",
  "Dragon",
  "Spirit",
  "Travel",
  "Camera",
  "Winter",
  "Bright",
  "Castle",
  "Forest",
  "Beauty",
  "Guitar",
  "Window",
  "Nation",
  "Jungle",
];

let defaultLevelSeconds = 0;
let defaultLevelName;
let levelbox = document.getElementById("levelbox");
let selectedvalue;
// // Retrieve the last selected value from localStorage
const lastSelectedValue = localStorage.getItem("selectedLevel");
// // If a value was previously stored, set the select element's value to it
if (lastSelectedValue) {
  levelbox.value = lastSelectedValue;
}
// // Add an event listener to the select element to store the selected value in localStorage
levelbox.addEventListener("change", (e) => {
  const selectedValue = e.target.value;
  localStorage.setItem("selectedLevel", selectedValue);
});
window.onload = levelbox.onchange = function () {
  selectedvalue = levelbox.value;
  if (selectedvalue === "Hard") {
    LevelNameSpan.innerHTML = "Hard";
    LevelSecondsSpan.textContent = 5;
    defaultLevelSeconds = 5;
    dynamicArray = wordhard;
    scoreTotall.innerHTML = "";
    scoreTotall.append(wordhard.length);
  } else if (selectedvalue === "Easy") {
    LevelNameSpan.innerHTML = "Easy";
    LevelSecondsSpan.textContent = 8;
    defaultLevelSeconds = 8;
    dynamicArray = wordEasy;
    scoreTotall.innerHTML = "";
    scoreTotall.append(wordEasy.length);
  } else if (selectedvalue === "Normal") {
    LevelNameSpan.innerHTML = "Normal";
    LevelSecondsSpan.textContent = 6;
    defaultLevelSeconds = 6;
    dynamicArray = words;
    scoreTotall.innerHTML = "";
    scoreTotall.append(words.length);
  }
};
let lastLevel = "";
let LevelSecondsSpanTimeTow = document.createTextNode(defaultLevelSeconds);
leftTimeSpan.appendChild(LevelSecondsSpanTimeTow);
// Disable Paste Event
wordInput.onpaste = () => {
  return false;
};
// Start Game
startButton.onclick = function () {
  textbeforestarting.style.display = "flex";
  beforestarting.textContent = defaultLevelSeconds;
  countdowntimerSound.play();
  let beforeStarting = setInterval(() => {
    beforestarting.textContent--;
    if (beforestarting.textContent === "0") {
      textbeforestarting.style.display = "none";
      countdowntimerSound.pause();
      clearInterval(beforeStarting);
      clickSound.play();
      startButton.remove();
      wordInput.focus();
      // Generate word Function
      genWord();
    }
  }, 1000);
  // Clear localStorage
  localStorage.removeItem("lastScoreDate");
  localStorage.removeItem("score");
  // clear lastgame & Remove
  lastgame.textContent = "";
  lastgame.remove();
};
function genWord() {
  // Get Random Word  From Array
  let randomWord =
    dynamicArray[Math.floor(Math.random() * dynamicArray.length)];
  let wordIndex = dynamicArray.indexOf(randomWord);
  dynamicArray.splice(wordIndex, 1);
  // Show The Random Word
  theWord.innerHTML = randomWord;
  // theWord.append(randomWord);
  // Empty Upcoming Word
  upcomingWord.innerHTML = "";
  for (let i = 0; i < dynamicArray.length; i++) {
    // Create Div Element
    let div = document.createElement("div");
    let text = document.createTextNode(dynamicArray[i]);
    div.appendChild(text);
    upcomingWord.appendChild(div);
  }
  // Call Start Play Function
  startPlay();
}
function startPlay() {
  upcomingWord.style.display = "flex";
  leftTimeSpan.innerHTML = defaultLevelSeconds;
  let start = setInterval(() => {
    leftTimeSpan.innerHTML--;
    if (leftTimeSpan.innerHTML === "0") {
      // stop  Timer
      clearInterval(start);
      if (theWord.innerHTML.toLowerCase() === wordInput.value.toLowerCase()) {
        // Empty The Input
        wordInput.value = "";
        // Increase Score
        scoreGot.innerHTML++;
        if (dynamicArray.length > 0) {
          // Call Generate Word Function
          genWord();
        } else {
          gemaVictorySound.play();
          let span = document.createElement("span");
          span.className = "good";
          let spanText = document.createTextNode("Victory");
          tryAgainButton.style.display = "block";

          span.appendChild(spanText);
          finishMessage.appendChild(span);
          upcomingWord.remove();
          //call getLastScore
          getLastScore();
          finishMessage.style.display = "block";
        }
      } else {
        gemaOverSound.play();
        let span = document.createElement("span");
        span.className = "bad";
        let spanText = document.createTextNode("Game Over");
        span.appendChild(spanText);
        finishMessage.appendChild(span);
        // call getLastScore
        getLastScore();
        tryAgainButton.style.display = "block";
        finishMessage.style.display = "block";
      }
    }
  }, 1000);
}
// Last Score Game Date
let dateNow = new Date();
let nowDateDayMonthYear =
  dateNow.getFullYear() + "-" + dateNow.getMonth() + "-" + dateNow.getDate();
// to Store Last Score
let lastgameSocreArray = [];
// to Get Last Score & push to lastgameSocreArray
function getLastScore() {
  let scoreText = scoreGot.textContent;
  lastgameSocreArray.push(scoreText);
  setLastScore();
}
// Set an item in local storage with a key "score" and a value of an array
function setLastScore() {
  localStorage.setItem("score", lastgameSocreArray);
  localStorage.setItem("lastScoreDate", nowDateDayMonthYear);
}
// Retrieve the value  keys from local storage
let getScoreFromLocal = localStorage.getItem("score");
let getnowDateDayMonthYear = localStorage.getItem("lastScoreDate");
if (getScoreFromLocal !== "0") {
  lastgameScoreSpan.append(getScoreFromLocal);
  lastScoreDate.append(getnowDateDayMonthYear);
} else {
  lastgame.remove();
}
// Animate Intro Text
let i = 0;
let gameName = "Welcome to the Typing Speed Test Game!";
let textinterval = setInterval(() => {
  nametext.innerHTML += gameName[i];
  i++;
  if (i === gameName.length) {
    clearInterval(textinterval);
  }
}, 100);
// Try Agin Button
tryAgainButton.addEventListener("click", function () {
  window.location.reload();
});
