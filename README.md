# Frontend React Test

Hello! Thank you for taking the time to try out FrontEnd React test. The goal of this test is to help us assess your coding, UI, HTML and CSS skills.

Though the test is using [create-react-app](https://github.com/facebook/create-react-app) to help you get started faster, feel more than free to add any particular technique or algorithm at any point, which you think might enrich the overall quality of the end result.

Please complete the test promptly, however you should **engineer the test as you would in a production app**, we would like to assess all your skills!

_Note: While we love open source here at Artio, please do not create a public repo with your test in! This challenge is only shared with people interviewing, and for obvious reasons we'd like it to remain this way._

### Instructions

1.  Clone this repo.
2.  Create a new `dev` branch.
3.  Plan, Code, commit, repeat! (We won't be looking at the time each task took, but we'd love to see your train of thought reflected in the development timeline through various commits).
4.  When finished, write clear instructions and an explanation for your solution.
5.  Create a Pull-Request to the `master` branch of this repo.
6.  After creating your pull request please send the link via email to our HR department in order for us to start the reviewing process.

Tips on How to Tackle the test:

1.  Schedule a specific time to tackle the test
2.  Be well rested and choose a quiet place with no interruptions
3.  Read the instructions and requirements carefully, and feel free to ask any questions.
4.  Identify technical decisions you need to make and sketch out an initial plan.
5.  Organize your tasks in a todo list or a Trello board
6.  Start coding and commit often!
7.  [KISS, DRY and YAGNI](https://www.itexico.com/blog/software-development-kiss-yagni-dry-3-principles-to-simplify-your-life)
8.  Enrich the code with comments and include clear instructions!

### Exercise:

In this test we will build a multiple country telephone input component, the following should be true for this component

- User must be able to search for a country by name
- The component must have a mask according to the rules of the country that was selected
- The component must accept only numeric values.
- The component must receive a value that is just a string (example: for a user who chose Brazil (.55) and typed 48999999999 must send +5548999999999)

#### DESIGN:

- [Design link](https://xd.adobe.com/view/70c2b9dc-81e8-4622-a759-b68c44ec5888-2591/)

### FAQ:

0.  Are there any minimal requirements for npm and node?

| Package | Version |
| ------- | ------- |
| npm     | >= 5    |
| node    | >= 8    |

1.  Do I need to start the project from scratch?
    The repo is already set up using [create-react-app](https://github.com/facebook/create-react-app) to help you get started faster.

2.  Can I use create-react-app `eject`?
    Please avoid `eject`ing create-react-app, we want to review your test without going through thousands of lines of the boilerplate's code.

3.  What language can I use in the test?
    You should write your test in english, this covers Components, variable names, comments...

4.  What programming language can I use in the test?
    You must write your test in TypeScript.

5.  Can I use a CSS/UI framework?
    Component libraries like Bootstrap UI or Material UI should be avoided.

6.  Can I use a utility package like lodash?
    Using utility packages should be avoided.

7.  What should I use for CSS?
    You should use a pre-processor (SCSS).

8.  Should I write unit tests?
    Please add tests for the things you judge to be the most important.

_P.S: We'll automatically format the code before every commit using prettier. We want to focus the review in business logic, patterns and architecture decisions rather than styling._

### Evaluation Criteria:

#### Overarching Criteria:

- Clear instructions to run the app
- the app must run
- the code is well-structured

#### Resilience:

- The app has unit tests (Tip: focus on functionality and behavior)
- Tests and ESLint need to pass

#### Features:

- A list of countries should appear as a dropdown list when the user interacts with the component
- The user must be able to search for a country in the list of countries.
- Only number values will be accepted in the input

#### UI:

- Your component is responsive.

#### Accessibility

- Your app should be accessible and usable by keyboard users (eg.
  They're able to rate recipes and navigate your app). Tip: Using
  semantic HTML is usually enough.

Good luck, and have fun!
