// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var clueHoldTime = 1000; 
var pattern = [2, 5, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var chances = 3;
document.getElementById("livesleft").innerText = chances;
var t = 0

function startGame(){
  //initialize game variables
  progress = 0;
  clueHoldTime = 1000;
  gamePlaying = true;
  chances = 3;
  document.getElementById("livesleft").innerText = chances;
  t = Date.now()
  
  generatesequence(1,5);  // generate random sequence
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  playClueSequence();  
}

function generatesequence(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  for(let i=0; i < 8; i++){
    pattern[i] = Math.floor(Math.random() * (max - min + 1) + min);
  }
}

function stopGame() {
  chances = 3;
  document.getElementById("livesleft").innerText = chances;
  gamePlaying = false;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden"); 
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
  document.getElementById("img"+btn).classList.remove("hidden")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
  document.getElementById("img"+btn).classList.add("hidden")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    clueHoldTime = clueHoldTime - 25;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  var totaltime = Date.now() - t;
  totaltime = totaltime / 1000;
  alert("Game Over. You won! Time Taken: " + totaltime);
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  if(pattern[guessCounter] == btn){
  //Guess was correct!
  if(guessCounter == progress){
    if(progress == pattern.length - 1){
      //GAME OVER: WIN!
      winGame();
    }else{
      //Pattern correct. Add next segment
      progress++;
      playClueSequence();
    }
  }else{
    //so far so good... check the next guess
    guessCounter++;
  }
  }else{
    //Guess was incorrect, increment mistakes
    chances -= 1;
    document.getElementById("livesleft").innerText = chances;
    //GAME OVER if all 3 strikes used
    if (chances == 0){
      loseGame(); 
    }
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 440,
  2: 261.63,
  3: 264.6,
  4: 349.228,
  5: 319.6,
  6: 300.1,
  7: 230.4,
  8: 350.1
}

function playTone(btn,len){ 
  o1.frequency.value = freqMap[btn]
  o2.frequency.value = freqMap[btn + 1]
  o3.frequency.value = freqMap[btn + 3]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone(btn)
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    document.getElementById("img"+btn).classList.remove("hidden")
    o1.frequency.value = freqMap[btn]
    o2.frequency.value = freqMap[btn + 1]
    o3.frequency.value = freqMap[btn + 3]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(btn){
    document.getElementById("img"+btn).classList.add("hidden")
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o1 = context.createOscillator()
var o2 = context.createOscillator()
var o3 = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o1.connect(g)
o1.start(0)
o2.connect(g)
o2.start(0)
o3.connect(g)
o3.start(0)