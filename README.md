# Rock, Paper, Scissors, Lizard, Spock

My goal with this project was to create a front end site where users can play Rock, Paper, Scissors, Lizard, Spock against a computer with randomised choices. I also wanted to create a Home page to explain the rules clearly to the user.

This site is targeted towards people who are fans of the game Rock, Paper, Scissors and want to try a more complex version of the game. It is also targeted towards fans of the Big Bang Theory TV show who discovered the game through the show and wanted to try it for themselves.

## Planning

### Wireframes

For my planning I created wireframes for my Home and Play pages.

![Wireframe of Homepage](assets/documentation/wireframe1.png)

![Wireframe of Play vs Computer page](assets/documentation/wireframe2.png)

I used the wireframes as a template to help me write the HTML and CSS code for each page.

### Flowchart

I also created a flowchart of how the game will work.

![Flowchart of game](assets/documentation/flowchart.png)

I used this flowchart as a template to help me write the JavaScript for the game.

## Existing Features

### Button to navigate to Play vs Computer page

![Button to navigate to Play vs Computer page](assets/documentation/play-nav-button.png)

I added 2 navigation buttons to take you from the Home page to the Play page. I added 1 at the top for people who already know the rules of the game so they can go straight to the Play vs Computer page. I also added 1 at the bottom for the users that scroll through all the content on the page so they can go straight to the Play vs Computer page once they reach the bottom of the page and they don't have to scroll back up to the top.

### Opening Section

![Opening section with list of rules](assets/documentation/list-of-rules.png)

In the opening section I explained to the user what the game is and gave them a list of the rules of the game.

### Diagram explaining rules

![Diagram explaining rules](assets/documentation/diagram-of-rules.png)

I added an image of a diagram explaining the rules of the game below the opening section.

### Video of Sheldon from The Big Bang Theory explaining the game

![Video of Sheldon from The Big Bang Theory explaining the game](assets/documentation/bbt-video-rules.png)

I added this video of Sheldon from The Big Bang Theory explaining the game, as most people who have heard of this game will have heard of it from this TV show. It adds a comedic aspect to my website and I think it will make fans of the show more likely to try the game.

### Play vs Computer page

![Image of the Play vs Computer page](assets/documentation/game.png)

This is an image of the Play vs Computer page. This is the main feature of my website. I designed my game to follow the rules of Rock, Paper, Scissors, Lizard, Spock and allow the user to play against the computer which generates randomised choices.

I added a score tracker displaying both the Player's and Computer's scores. On the left side is the list of options for the player to choose from. Once the player makes their choice the computer will generate a random choice and it will be displayed on the right side. My JavaScript will then determine the winner and display the result at the bottom. The score tracker will then be updated dependant on the result.

## Feature I would've liked to add

### A second computer for the user to play against

I would've liked to add a second computer for the user to play against. This computer wouldn't have had randomised choices and would've instead been programmed to mimic the users choice from the round before. The first computer choice will have of course had to have been a set choice or randomised one as there would be no user choice to mimic. Unfortunately I didn't have the time to add this feature but it's definitely something I would like to add in the future.

## Testing

I tested all of the features and links in my website in the preview page first and then in the deployed version once I had pushed my changes.

I also used the developer tool in chrome to ensure that the website looks and works correctly on different screen sizes. For example:

The main content on my Home page will be pushed down on smaller screen sizes as the logo takes up more lines. This makes the main content visible on all screen sizes.

The game display on my Play vs Computer page will also be pushed down for the same reason and will also become more of a vertical display once the screen size is to narrow to fit the content horizontally.

### Game Testing

I tested all aspects of my game once I attched the JavaScript to my HTML and it was all working as expected with no problems.

### Validator Testing

HTML No errors returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fgabecoletta24.github.io%2FRock-Paper-Scissors-Lizard-Spock%2F)

CSS No errors returned when passing through the official [Jigsaw validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fgabecoletta24.github.io%2FRock-Paper-Scissors-Lizard-Spock%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

JavaScript No errors returned when passing through the official [JS Hint validator](https://jshint.com/)

## Bugs

I had 2 errors in my HTML when I first put it through the validator. 

The first error was that I had a button element within an anchor element. To fix this I had to remove the button element and style the anchor element to look and work like a button.

The second error was that it couldn't find the closing tag to a p element on my home page. This was because I had an ul element within that p element. This was an easy fix as all I had to do was move the closing tag of the p element above the ul element.

## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows: In the GitHub repository, navigate to the Settings tab From the source section drop-down menu, select the Master Branch Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. The live link can be found here - https://gabecoletta24.github.io/Rock-Paper-Scissors-Lizard-Spock/

## Credit

### Content

The content in the opening section of my Home page was taken from [The Big Bang Theory Wiki](https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock)

### Media

I got the image of the diagram of rules from Google images.

The video on my Home page was taken from YouTube.