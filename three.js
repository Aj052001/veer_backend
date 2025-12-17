// # ==============================
// # 🧭 Day 3 – Middleware & Static Files (Express.js)
// # ==============================

// # 🎯 Objective:
// # Learn what middlewares are, how to create them,
// # understand global vs custom middlewares,
// # handle errors, and serve static files (HTML, CSS, JS).

// # ==============================
// # 1️⃣ What is Middleware?
// # ==============================

// # 👉 Middleware is a function that runs BETWEEN the request and the response.
// # It can modify, log, validate, or stop requests before sending response.

// # Example Flow:
// # Client → Request → Middleware → Route Handler → Response

// # ==============================
// # 2️⃣ Setup Project
// # ==============================

// mkdir express-day3
// cd express-day3
// npm init -y
// npm install express

// # Create main file
// cat > app.js




// // ==============================
// // 🧩 Express App – Middleware & Static Files
// // ==============================

// const express = require("express");
// const app = express();
// const PORT = 3000;

// // ==============================
// // 🧱 1. Custom Middleware
// // ==============================

// // This middleware logs each request method and URL
// app.use((req, res, next) => {
//   console.log(`Request: ${req.method} ${req.url}`);
//   next(); // move to next middleware or route
// });

// // ==============================
// // 🧱 2. Global Middleware Example
// // ==============================
// // You can also use built-in middlewares like express.json()

// app.use(express.json());

// // ==============================
// // 🧱 3. Routes
// // ==============================

// app.get("/", (req, res) => {
//   res.send("Welcome to Middleware Example!");
// });

// app.get("/about", (req, res) => {
//   res.send("This is the About Page!");
// });

// // ==============================
// // 🧱 4. Error Handling Middleware
// // ==============================

// // Custom error handler (should be at bottom)
// app.use((err, req, res, next) => {
//   console.error("Error found:", err.stack);
//   res.status(500).send("Something broke on the server!");
// });

// // ==============================
// // 🧱 5. Serving Static Files
// // ==============================
// // Create a folder named 'public' in your project directory
// // Place your index.html, style.css, etc. there

// app.use(express.static("public"));

// // Example: accessing http://localhost:3000/index.html
// // will show the file from /public/index.html

// // ==============================
// // 🎯 Start Server
// // ==============================
// app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
// });





// # ==============================
// # 3️⃣ Run the Server
// # ==============================

// node app.js

// # Output:
// # ✅ Server running on http://localhost:3000

// # Visit:
// # http://localhost:3000/       → "Welcome to Middleware Example!"
// # http://localhost:3000/about  → "This is the About Page!"

// # Terminal Logs:
// # Request: GET /
// # Request: GET /about

// # ==============================
// # 4️⃣ Understanding Middleware Flow
// # ==============================

// # Every time a request is made:
// # 1️⃣ app.use() middleware runs
// # 2️⃣ It logs the method & URL
// # 3️⃣ next() passes control to the next route
// # 4️⃣ Route sends response to client

// # ==============================
// # 5️⃣ Error-Handling Middleware
// # ==============================

// # Used to catch runtime errors.
// # It must have all four parameters (err, req, res, next).
// # Example:
// # app.use((err, req, res, next) => {
// #   console.log("Error:", err.message);
// #   res.status(500).send("Server Error!");
// # });

// # ==============================
// # 6️⃣ Serving Static Files
// # ==============================

// # Create a folder named "public"
// mkdir public

// # Inside it, create a simple HTML file
// cat > public/index.html





// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>TMS Static Page</title>
// </head>
// <body>
//   <h1>Welcome to TMS Express Training 🚀</h1>
//   <p>This page is served using express.static()</p>
// </body>
// </html>




// # Now visit:
// # http://localhost:3000/index.html
// # You’ll see the HTML page served directly by Express.

// # ==============================
// # 🧪 TASKS
// # ==============================

// # Task 1️⃣:
// # Create a middleware that logs every route call with timestamp.
// # Example output in terminal:
// # Request: GET /about | Time: 2025-12-14T16:25:43.212Z

// # Hint:
// # console.log(`Request: ${req.method} ${req.url} | Time: ${new Date().toISOString()}`);

// # Task 2️⃣:
// # Create a public/ folder and serve:
// # - index.html  → Home page
// # - about.html  → About TMS page
// # Make sure both can be accessed through:
// # http://localhost:3000/index.html
// # http://localhost:3000/about.html

// # ==============================
// # 🏁 Summary (End of Day 3)
// # ==============================
// # ✅ Learned what middleware is
// # ✅ Created custom and global middlewares
// # ✅ Implemented error-handling middleware
// # ✅ Served static files using express.static()
// # ✅ Completed logging and static file tasks




// ################################


const express = require("express");
const app = express();
const PORT = 3000;

// ✅ Global Middleware (built-in)
app.use(express.json()); // parse JSON body

// ✅ 1. Logging Middleware
app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url} | Time: ${new Date().toISOString()}`);
  next();
});

// ✅ 2. Custom Middleware – Check if Admin
function checkAdmin(req, res, next) {
  const isAdmin = req.headers["x-admin"]; // e.g., x-admin: true
  if (isAdmin === "true") {
    next(); // allow request
  } else {
    res.status(403).send("❌ Access denied! Admins only.");
  }
}

// ✅ Route 1 – Get Students
app.get("/students", (req, res) => {
  res.send([
    { id: 1, name: "Ajay", course: "Node.js" },
    { id: 2, name: "Riya", course: "React" },
  ]);
});

// ✅ Route 2 – Add Student (with validation middleware)
function validateStudent(req, res, next) {
  const { name, course } = req.body;
  if (!name || !course) {
    return res.status(400).send("❌ Missing 'name' or 'course'");
  }
  next(); // data is valid
}

app.post("/students/add", validateStudent, (req, res) => {
  const { name, course } = req.body;
  res.send(`✅ Student ${name} added to ${course} course.`);
});

// ✅ Route 3 – Admin Only
app.get("/admin", checkAdmin, (req, res) => {
  res.send("👑 Welcome Admin! You have full access.");
});

// ✅ Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Error caught:", err.message);
  res.status(500).send("Something went wrong on the server!");
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});



// ########################################################################################


// next() kya hai?

// next() ek function hota hai jo Express har middleware ko deta hai.
// Jab aap next() ko call karte ho, tab Express ko bolte ho:

// "Mera kaam yahan tak ho gaya — ab control next middleware ya route handler ko de do."

// ⚙️ Example 1 – Without next()
// app.use((req, res) => {
//   console.log("Middleware me hu");
//   // next() nahi likha
// });


// ➡️ Is case me:

// Request aayegi,

// Middleware chalega,

// Lekin next() nahi likha — to Express wahi ruk jaayega 😅

// Route handler tak kabhi nahi jaayega (browser “loading…” me atka rahega).

// ⚙️ Example 2 – With next()
// app.use((req, res, next) => {
//   console.log("Request received");
//   next(); // Move to next middleware or route
// });

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });


// ➡️ Flow:

// Request → Middleware aaya

// Middleware → “Request received” print kiya

// next() → Express ko bola “ab next route handle kar le”

// Route / execute hua

// Response: “Hello World!”

// ⚙️ Example 3 – Multiple Middlewares
// app.use((req, res, next) => {
//   console.log("1️⃣ Logging middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("2️⃣ Authentication check");
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("✅ Request reached route");
// });

// 🔄 Flow:
// Client → Middleware 1 → next() → Middleware 2 → next() → Route → Response


// Terminal output:

// 1️⃣ Logging middleware
// 2️⃣ Authentication check

// ⚙️ Example 4 – Error Handling me next(err)

// Agar middleware me koi error aaye, to aap next(err) likh ke Express ko error bhej sakte ho:

// app.use((req, res, next) => {
//   try {
//     throw new Error("Something went wrong!");
//   } catch (err) {
//     next(err); // send error to error-handling middleware
//   }
// });

// // Error-handling middleware (special type)
// app.use((err, req, res, next) => {
//   console.error("Error found:", err.message);
//   res.status(500).send("Server Error!");
// });




// Normal middleware
// app.use((req, res, next) => {
//   try {
//     throw new Error("Something went wrong!");
//   } catch (err) {
//     next(err); // send error to error-handling middleware
//   }
// });

// // Error-handling middleware (special type)
// app.use((err, req, res, next) => {
//   console.error("Error found:", err.message);
//   res.status(500).send("Server Error!");
// });
// 🔍 Step-by-Step Explanation
// 🧱 Step 1 – First Middleware Runs
// js
// Copy code
// app.use((req, res, next) => {
//   try {
//     throw new Error("Something went wrong!");
//   } catch (err) {
//     next(err);
//   }
// });
// Ye ek normal middleware hai jo har request ke liye run hota hai.

// throw new Error("Something went wrong!") ek artificial error generate karta hai (jaise koi bug aa gaya ho).

// catch (err) block me hum us error ko Express ke control me dene ke liye next(err) call karte hain.

// ⚡ next(err) ka matlab hai — “Express, ye error handle kar, mujhe nahi karna.”

// 🧱 Step 2 – Error-Handling Middleware Trigger Hota Hai
// js
// Copy code
// app.use((err, req, res, next) => {
//   console.error("Error found:", err.message);
//   res.status(500).send("Server Error!");
// });
// Jab bhi next(err) call hota hai, Express normal middlewares ko skip karke direct error-handling middleware par jump karta hai.

// Error-handling middleware special type ka hota hai — isme 4 parameters hote hain:
// (err, req, res, next)

// Ye automatically Express ko batata hai ki:

// “Mujhe error handle karna hai.”

// ⚙️ Step 3 – Response Sent to Client
// console.error("Error found:", err.message);
// → Terminal me print hota hai:

// javascript
// Copy code
// Error found: Something went wrong!
// res.status(500).send("Server Error!");
// → Client ko response milta hai:

// arduino
// Copy code
// Server Error!
// Status code 500 ka matlab hota hai → “Internal Server Error”.