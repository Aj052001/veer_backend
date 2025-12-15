// 🧭 Day 1 – Express.js Setup & First Server
// 🧩 1. What is Express.js?

// Definition:

// Express.js is a fast, unopinionated, and minimal web framework for Node.js that helps you create web servers and APIs easily.

// In Simple Words:
// Node.js can run JavaScript outside the browser, but it doesn’t have built-in tools for handling routes, middleware, or HTTP requests easily.
// 👉 Express provides a clean and simple way to handle these — like routing, middleware, and JSON APIs.

// 💡 2. Why Use Express.js?
// Feature	Description
// ✅ Fast & Minimal	No unnecessary code — you add only what you need.
// 🧱 Easy Routing	Create routes like /users, /products, etc. easily.
// 🔄 Middleware Support	Add custom logic between request and response.
// 💬 JSON API Friendly	Perfect for building RESTful APIs.
// 🔌 Compatible	Works with databases (MongoDB, MySQL, etc.) and frontend frameworks (React, Angular, etc.).
// ⚙️ 3. Installing Node.js & Express
// Step 1: Install Node.js

// Go to 👉 https://nodejs.org

// Download LTS version.

// Check installation:

// node -v
// npm -v


// If both show version numbers, Node.js is installed correctly.

// Step 2: Create a New Folder
// mkdir express-tms
// cd express-tms

// Step 3: Initialize Project
// npm init -y


// This creates a file named package.json (project info & dependencies list).

// Step 4: Install Express
// npm install express


// This installs Express in your project.

// 📁 4. Project Structure

// After installation, your folder will look like this:

// express-tms/
// │
// ├── node_modules/       → contains all dependencies
// ├── package.json        → project metadata
// └── app.js              → your main Express file

// 💻 5. Creating Your First Express App

// Create a file named app.js and add this code 👇

// const express = require("express"); // import express
// const app = express(); // create app instance
// const PORT = 3000; // choose a port

// // define a route
// app.get("/", (req, res) => {
//   res.send("Welcome to Express.js Server!");
// });

// // start the server
// app.listen(PORT, () => {
//   console.log(Server running on port ${PORT});
// });

// ⚡ 6. Running the Server

// In your terminal, run:

// node app.js


// You’ll see:

// Server running on port 3000


// Now open your browser and visit 👉 http://localhost:3000

// Output:

// Welcome to Express.js Server!


// 🎉 Congratulations! You just created your first Express server!

// 🧠 7. Code Explanation
// Line	Description
// const express = require("express")	Imports the Express library.
// const app = express()	Creates an instance of an Express app.
// const PORT = 3000	Defines which port the app will run on.
// app.get("/", …)	Defines a route for HTTP GET requests at /.
// res.send("...")	Sends response text back to the browser.
// app.listen(PORT, …)	Starts the server and listens on given port.
// 🧰 8. Understanding Key Terms
// Term	Meaning
// req	Request object → contains data sent by the client (browser).
// res	Response object → used to send data back to the client.
// app	Main Express application object to define routes and middleware.
// listen()	Starts your Express server.
// 🧪 9. Tasks
// 🧭 Task 1: Basic Output

// Create a new Express app and when someone visits /, send:

// Hello from TMS!

// 💬 Task 2: Add Another Route

// Add another route /about which returns:

// Welcome to TMS Express Learning!


// Example Output:

// http://localhost:3000/ → Hello from TMS!

// http://localhost:3000/about → Welcome to TMS Express Learning!