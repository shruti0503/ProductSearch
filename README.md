# ProductSearch

```markdown
# React Shopping App with Text-to-Speech 🛒🔊
[VideoLink](https://drive.google.com/file/d/1XM5x5qBAlBFwF-QRVpoaykdXHNrdfn9c/view?usp=sharingurl)

This is a simple React application that allows you to search for products using the SerpDog Google Shopping API,
 and receive the product title and price. It also provides text-to-speech functionality using the Web Speech API. 📦📢


## Features 🌟🔥

- Product search using SerpDog Google Shopping API. 🛍️🔍

- Displaying product title and price. 📜💰

- Text-to-speech functionality for reading out the product information. 📢🗣️

- Error handling for API requests. ❌🚫

- This project uses the SerpDog API for product search.
For more information, visit [SerpDog](https://serpdog.io/). 🙌💼

- Text-to-speech functionality is implemented using the Web Speech API. 🗣️🤖


## Prerequisites 📋

Before running the application, make sure you have the following:

1. Node.js and npm installed on your system. 📏📦

2. API key for the SerpDog API. You can get it by signing up at [SerpDog](https://serpdog.io/). 🔑🔒

3. Set up a backend server to make API requests. You can use the provided Express.js server in the 'app.js' file. Don't forget to replace `process.env.API_KEY` with your SerpDog API key. 🌐🔌

4. Configure your backend URL in the React application. Update the `backendURL` in the 'Main.js' file to point to your backend server. 🚀🛠️

## Getting Started 🚀

1. Clone this repository to your local machine. 🧬👥

2. Install the required dependencies for both the server and the React application:

   ```
   # In the project root directory, install server dependencies
   cd server
   npm install

   # Install React application dependencies
   cd client
   npm install
   ```

3. Start the Express.js server:

   ```
   # In the 'server' directory
   npm start
   ```

4. Start the React application:

   ```
   # In the 'client' directory
   npm start
   ```

5. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to use the application. 🌐🕸️

## Using the Application 📲🔍

1. Enter the name of the product you want to search for in the input field and click the "Search" button. 🔍🔎

2. The application will make an API request to SerpDog using your API key and display the product's title and price. 💼📦

3. Click the "Speak" button to have the product information read out loud using text-to-speech functionality. 🔊🔉

Happy shopping! 🛒🎉
```
