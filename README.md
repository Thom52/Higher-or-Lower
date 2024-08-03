
<p align="center"><img src="/assets/images/responsive.png" alt="drawing" width="800"/></p>


# Introduction
# Higher or Lower
### Introduction - A game to test your luck, if you dare? Is the next roll of the dice higher or lower? Only you know that, so take the plunge and put your luck on the line...

### Project Purpose - This project is designed to be an engaing and interactive experience putting the users luck up against the device they are playing it on, be it mobile or computer screen. 




# Features 

**Rules Box**

  - This feature quickly explains how the game works, quickly giving the users all the information required to interact with the page.

  <details><summary>Rules Box Screenshot</summary>

  <p align="center"><img src="assets/documentation/rules.webp" alt="Rules box" width=""/></p>

  </details>

<hr> 

**Dice Image**

  - This feature uses JavaScript to update the dice area div with an image of a dice that correlates to the number randomly created by the rollDice() functtion.

  - It rolls automatically upon site load and has a animation that creates the look of a dice rolling.

  - More engaging and better visually than just a number appearing. 
  

  <details><summary>Dice Screenshot</summary>

  <p align="center"><img src="assets/documentation/dice-feature.webp" alt="dice face" width="200" /></p>

  </details>

<hr> 

**Higher or Lower function**

  - The main area of user interaction on the page. User either selects the higher or lower button depending on the current number on the dice.

  - The game then rolls another dice and will inform you if you were correct or incorrect.

  <details><summary>Higher or Lower Screenshot</summary>

  <p align="center"><img src="assets/documentation/higher-lower.webp" alt="drawing" width="600"/></p>

  </details>

<hr> 

**Score Feature**

  - A dynamically changing score counter that either increases correct or incorrect guesses depending on if the user was correct or incorrect.

  - A fun bit of engagement for the user to try and keep their correct score higher than their incorrect score.

  <details><summary>Score Screenshot</summary>

  <p align="center"><img src="assets/documentation/scores.webp" alt="drawing" width="600"/></p>

  </details>


<hr> 

**Message Feature**

  - This feature displays a message on the screen in the game area giving the user a congratulations or a better luck next time message depending on if their guess was correct or incorrect.

  - Also has a message that flashes if the new number rolled was the same as the previous. This doesn't count as a right or wrong and instead asks the user to roll again.

  <details><summary>Message Screenshot</summary>

  <p align="center"><img src="assets/documentation/message.webp" alt="Rules box" width=""/></p>

  </details>

<hr> 


## Future Features
While the current version of the project is fully functional, I have some features planned for future updates that I would like to implement:

1. **Difficulty Choice**:
   - Adding a d10 (ten sided dice) and a d20 (twenty sided dice) to the page that the user can select. Each dice representing a difficulty spike. d6 = easy, d10 = medium, d20 = hard.
2. **Rolling Animations**:
   - Add the rolling animation to every dice roll, not just the first one of the page load.
3. **Sound effects**:
   - Add dice rolling sound effects when the dice roll onto the screen. Further increasing the fun and engagement of the game.
4. **Optional game mode**:
   - Add an optional game mode where you click a button to activate it, but if you get a guess wrong, the game resets. A game mode designed to see how long you can go for.


<hr>

## Manual Testing 

#### Features Testing

|  Feature |  Action | Effect |
|---|---|---|
|Higher Button|Click|Rolls dice and checks to see if the new number is higher than the previous. If so, increments correct score.|
|Lower Button|Click|Rolls dice and checks to see if the new number is lower than the previous. If so, increments incorrect score.|


<hr>

#### Lighthouse

**Introduction**
This report presents the results of Lighthouse testing conducted to assess the performance, accessibility, best practices, SEO, and PWA compliance of Higher or Lower.

**Test Execution**
Lighthouse tests were executed using the Brave's browser's DevTools.

**Test Metrics**
- Performance Score: 81
- Accessibility Score: 93
- Best Practices Score: 92
- SEO Score: 92

**Detailed Results**
- **Performance**: The website's performance score is 81, indicating good overall performance. However, there is room for improvement to further optimize loading times.
- **Accessibility**: The website excels in accessibility, with a score of 93, indicating strong adherence to accessibility standards. Minimal accessibility issues were detected.
- **Best Practices**: The website follows best practices with a score of 92. There are minor areas for improvement, particularly in script loading.
- **SEO**: SEO performance is strong, with a score of 92. The website has well-optimized meta tags and structured data markup.

**Areas for Improvement**
- Performance can be enhanced by optimizing resource loading and reducing unnecessary requests.
- Continue monitoring accessibility to maintain a high standard and address any emerging issues.
- Best practices can be further improved by optimizing script loading and code splitting.
- Maintain and regularly update meta tags and structured data markup to ensure strong SEO performance.

**Visuals**

<p align="center"><img src="https://res.cloudinary.com/dugnokxox/image/upload/v1692960667/Screenshot_2023-08-25_at_11.50.29_cfmkxt.png" alt="drawing" width="800"/></p>

<hr>

#### Browsers

**Supported Browsers and Devices**
Our web application is officially tested and supported on the following browsers and devices:
- Google Chrome (latest version)
- Mozilla Firefox (latest version)

**Responsiveness Testing**
We conduct manual responsiveness testing on Chrome and Firefox to ensure a seamless user experience.

**Test Results**

| Device/Screen Size  | Chrome Performance | Firefox Performance |
|----------------------|--------------------|---------------------|
| Desktop (1920x1080) | Describe performance and issues on Chrome | Describe performance and issues on Firefox |
| Laptop (1366x768)   | Describe performance and issues on Chrome | Describe performance and issues on Firefox |
| Tablet (iPad)       | Describe performance and issues on Chrome | Describe performance and issues on Firefox |
| Mobile (iPhone X)   | Describe performance and issues on Chrome | Describe performance and issues on Firefox |

**Known Issues**
- [List any known responsiveness issues or limitations]

**Recommendations**
If you encounter any responsiveness issues, we recommend:
- Updating your browser to the latest version.
- Trying an alternative device or screen size for optimal viewing.

<hr>

#### Screen Sizes testing

**Introduction**
This section provides an overview of how our web application [Website Name] performs across different screen sizes.

**Supported Screen Sizes**
Our web application is designed to be responsive and adapt to various screen sizes. Below are the screen sizes we have tested:

| Screen Size     | Description             |
|-----------------|-------------------------|
| Desktop         | 1920x1080 pixels        |
| Laptop          | 1366x768 pixels         |
| Tablet (iPad)   | 768x1024 pixels (portrait) and 1024x768 pixels (landscape) |
| Mobile (iPhone) | 375x812 pixels (iPhone X, portrait) and 812x375 pixels (iPhone X, landscape) |

**Testing Results**

| Screen Size     | Test Results           |
|-----------------|------------------------|
| Desktop         | Describe performance and issues on different browsers |
| Laptop          | Describe performance and issues on different browsers |
| Tablet (iPad)   | Describe performance and issues on different browsers |
| Mobile (iPhone) | Describe performance and issues on different browsers |

<hr> 

#### Bugs Resolved


**Introduction**
This section provides a summary of bugs that have been identified, reported, and subsequently resolved in [Website Name].

**Bug Tracking**
Below is a summary of resolved bugs:

| Bug ID | Bug Description | Status |
|--------|-----------------|--------|
| #001   | Describe the bug and its impact on the user experience. | Resolved |
| #002   | Describe the bug and its impact on the user experience. | Resolved |
| #003   | Describe the bug and its impact on the user experience. | Resolved |
| #004   | Describe the bug and its impact on the user experience. | Resolved |
| #005   | Describe the bug and its impact on the user experience. | Resolved |

**Bug Details**
Here are the details of the resolved bugs:

**Bug #001**
- **Description**: Describe the bug and the steps to reproduce it.
- **Resolution**: Explain how the bug was resolved, including any code changes or fixes.
- **Impact**: Discuss the impact of this bug on users and the importance of the fix.

**Bug #002**
- **Description**: Describe the bug and the steps to reproduce it.
- **Resolution**: Explain how the bug was resolved, including any code changes or fixes.
- **Impact**: Discuss the impact of this bug on users and the importance of the fix.

**Bug #003**
- **Description**: Describe the bug and the steps to reproduce it.
- **Resolution**: Explain how the bug was resolved, including any code changes or fixes.
- **Impact**: Discuss the impact of this bug on users and the importance of the fix.

**Bug #004**
- **Description**: Describe the bug and the steps to reproduce it.
- **Resolution**: Explain how the bug was resolved, including any code changes or fixes.
- **Impact**: Discuss the impact of this bug on users and the importance of the fix.

**Bug #005**
- **Description**: Describe the bug and the steps to reproduce it.
- **Resolution**: Explain how the bug was resolved, including any code changes or fixes.
- **Impact**: Discuss the impact of this bug on users and the importance of the fix.

<hr>

#### Bugs Unresolved(if applicable)

| Bug ID | Bug Description | Status |
|--------|-----------------|--------|
| #001   | Describe the bug and its impact on the user experience. | Unesolved |
| #002   | Describe the bug and its impact on the user experience. | Unesolved |
| #003   | Describe the bug and its impact on the user experience. | Unesolved |
| #004   | Describe the bug and its impact on the user experience. | Unesolved |
| #005   | Describe the bug and its impact on the user experience. | Unesolved |
<hr>

#### Validator Testing 
- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-running-2.0%252Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css)



## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Main Branch
  - Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://code-institute-org.github.io/love-running-2.0/index.html 


## Credits 

In this section you need to reference where you got your content, media and extra help from. 
It is common practice to use code from other repositories and tutorials, however, it is important to be very specific about these sources to avoid plagiarism. 

You can break the credits section up into Content and Media, depending on what you have included in your project. 

#### Content 

- The text for the Home page was taken from Wikipedia Article A
- The development of this project was aided by the following YouTube tutorials:

| Tutorial Title      | Creator/Channel Name | Description                                          |
|---------------------|-----------------------|------------------------------------------------------|
| [Tutorial Title 1](link-to-tutorial) | [Creator/Channel Name 1] | How this tutorial helped you.             |
| [Tutorial Title 2](link-to-tutorial) | [Creator/Channel Name 2] | How this tutorial contributed to your project. |

- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

#### Media

The following images used in this project are sourced from Unsplash and are used under their respective licenses:
