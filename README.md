# Joke API Website

This is a simple web application built with Express.js and Axios that fetches jokes from the JokeAPI based on the user's input. The application allows users to enter the  name  of some thing and receive a joke related to that  name.

## Features

- Fetches jokes from the JokeAPI.
- Displays the joke based on user input.
- Handles single and two-part jokes.
- Simple and user-friendly interface.
- Error handling for API requests.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v20.12.1 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. Clone the repository:

   git clone https://github.com/your-username/joke-api-website.git

2. Navigate to the project directory:

   cd joke-api-website

3. Install the dependencies:
   
   npm install


### Running the Application

1. Start the server:

   nodemon index.js
                                                                                                                                                                                                     
3. Open your web browser and visit http://localhost:3000.



### Project Structure

joke-api-website/
├── public/
│   └── css/
│       └── styles.css
├── views/
│   └── index.ejs
├── index.mjs
├── package.json
├── package-lock.json
└── Readme.md


•	public/css/styles.css: Contains the CSS for styling the application.
•	views/index.ejs: The EJS template for rendering the home page.
•	index.mjs: The main server file that sets up the Express server and handles API requests.
•	package.json: Contains metadata about the project and its dependencies.
•	package-lock.json: Automatically generated file that describes the exact tree that was generated.
•	Readme.md: The file you're currently reading, which provides an overview and setup instructions for the project.

### Usage
1.	Open the application in your browser.
2.	Enter your name in the input field.
3.	Click the "Get Joke" button.
4.	The application will fetch and display a joke containing your name.


### Example
1.	To fetch a joke for the name "Car":
2.	Open the application in your browser at http://localhost:3000.
3.	Enter "Car" in the input field.
4.	Click the "Get Joke" button.
5.	The application will display a joke containing "Car".


### Built With
•	Express.js - The web framework used.
•	Axios - HTTP client for making requests.
•	EJS - Templating engine for rendering HTML.



