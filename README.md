# Mixed Messages

## Premise
In this project, you’ll build a message generator program that outputs a new, random message every time a user runs the program. Your program should showcase basic JavaScript syntax and programming concepts. You’re welcome to take the project in a couple of different forms, like an astrology generator, inspirational message, or nonsensical jokes. To make your program truly random, the message that it outputs should be made up of at least three different pieces of data. Take what you know of JavaScript syntax so far to build the program and customize it to your liking.

## Project Objectives:
- Build a message generator program using JavaScript
- Use Git version control
- Use command line
- Develop locally on your computer

## Prerequisites:
- JavaScript
- Git and GitHub
- Command line

---

## Code Explanation

![Screenshot of tarot project!](https://github.com/osita-igwe/16.Project-mixedMessages/blob/main/tarot_screenshot.png) <br>
[Click Here For Webpage](https://js-h3waay.stackblitz.io/)

This project attempts to simulate a 3 card spread tarot card reading. The project begins with the creation of an 78 element array (<b>tarotInterpretations</b>). Each element in the array is an object which holds the data of a tarot card. Credit to [@dariusk](https://github.com/dariusk/corpora/blob/master/data/divination/tarot_interpretations.json) for providing the tarot card objects used in this project. Through a series of functions, 3 tarot card objects are randomly selected from the array, and 3 moods are also randomly selected. The moods will determine the meaning of the selected cards. A final function (<b>messageBuilder</b>) takes the data previously collected and through string interpolation composes a message that will be presented to the user. The user can refresh the page to receive a new reading
