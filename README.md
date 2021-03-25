# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Jagroop Singh**

Time spent: **3** hours spent in total

Link to project: https://glitch.com/edit/#!/slow-cultured-shake

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] The victory message shows the number of seconds it took to finish the game
- [x] Added lives counter next to Start/Stop button

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://user-images.githubusercontent.com/49300175/112401418-bcde5500-8cc7-11eb-8e9c-90031548be2f.gif)



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
- Stopwatch Tutorial: https://tinloof.com/blog/how-to-build-a-stopwatch-with-html-css-js-react-part-2/
- Styling: https://www.w3schools.com/css/default.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
- While working on this project, a challenge I encountered was setting up the stopwatch. Although calculating the total time to finish the game is not that challenging, the hard part was setting up the clock. It was hard to implement since I had never used the time function in Javascript before. I was able to find several different Javascript time functions online. I decided to use Date.now() function, which returns the current UNIX time. To calculate the total time taken, you can subtract the finish time from the start time. I created a variable to store the time when the player presses the Start button. When the player wins, I calculate the difference between the current time and the time when the Start button was pressed. Since the time is in milliseconds, we have to divide it by 1000 to get the time in seconds. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
- I do not have any web development related questions as I have experience working with ReactJS, Javascript, HTML, and CSS. I am just curious about how to render dynamic content in HTML. With ReactJS, you can use the map function to iterate through the data array. I am not sure how that would work if we were to implement this in plain Javascript. Also, Is there any benefit of using plain Javascript over other web development frameworks like AngularJS or ReactJS? 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
- If I had few more hours to work on this project, I would work on adding a timer. The player would only have a limited amount of time to enter their guess each turn. If the correct answer is not entered within the allocated time, the game ends. I would also create additional difficulty modes. Currently, the player has no option but to play the default mode with 8 sequences. I would add an easy mode with 4 sequences, and a hard more with 12 sequences. I would also add a custom mode option, where the user can enter a custom number of sequences. 



## License

    Copyright Jagroop Singh

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
