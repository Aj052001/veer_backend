// # ==============================
// # 🧭 Day 4 – Route & Query Parameters (Express.js)
// # ==============================

// # 🎯 Objective:
// # Learn how to use dynamic routes with parameters (:id)
// # and query parameters (?key=value).
// # Understand the difference between req.params and req.query.

// # ==============================
// # 1️⃣ What are Parameters in Routes?
// # ==============================

// # 👉 Parameters allow us to pass dynamic values in the URL.
// # Example:
// # http://localhost:3000/user/10
// # Here '10' is a route parameter (:id)

// # ==============================
// # 2️⃣ What are Query Parameters?
// # ==============================

// # 👉 Query parameters are used to send optional information in a URL.
// # They start after a "?" and are written as key=value pairs.
// # Example:
// # http://localhost:3000/user/10?name=Ajay
// # 'name=Ajay' is a query parameter.

// # ==============================
// # 🔍 Difference between Route & Query Parameters
// # ==============================

// # | Type              | Example URL                              | Accessed by        |
// # |-------------------|------------------------------------------|--------------------|
// # | Route Parameter   | /user/:id → /user/101                    | req.params.id      |
// # | Query Parameter   | /user/:id?name=Ajay                      | req.query.name     |

// # ==============================
// # 3️⃣ Setup Project
// # ==============================

// mkdir express-day4
// cd express-day4
// npm init -y
// npm install express

// # Create main file
// cat > app.js







// // ==============================
// // 🧩 Express App – Route & Query Params
// // ==============================

// const express = require("express");
// const app = express();
// const PORT = 3000;

// // Middleware
// app.use(express.json());

// // ==============================
// // 📘 Example Route
// // ==============================

// // URL Example: http://localhost:3000/user/101?name=Ajay

// app.get("/user/:id", (req, res) => {
//   const { id } = req.params;      // Route parameter
//   const { name } = req.query;     // Query parameter

//   res.json({
//     message: "User Info Retrieved",
//     userId: id,
//     userName: name || "No name provided"
//   });
// });

// // ==============================
// // 📘 Another Example
// // ==============================
// // Multiple route parameters: /book/:category/:bookid

// app.get("/book/:category/:bookid", (req, res) => {
//   const { category, bookid } = req.params;
//   res.json({
//     category,
//     bookid,
//     info: "Dynamic multiple params working fine!"
//   });
// });

// // ==============================
// // 🎯 Start Server
// // ==============================
// app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
// });





// # ==============================
// # 4️⃣ Run the Server
// # ==============================

// node app.js

// # Output:
// # ✅ Server running on http://localhost:3000

// # ==============================
// # 5️⃣ Test Routes
// # ==============================

// # Example 1: Route + Query
// # http://localhost:3000/user/10?name=Ajay
// # Response:
// # {
// #   "message": "User Info Retrieved",
// #   "userId": "10",
// #   "userName": "Ajay"
// # }

// # Example 2: Only route param
// # http://localhost:3000/user/10
// # Response:
// # {
// #   "message": "User Info Retrieved",
// #   "userId": "10",
// #   "userName": "No name provided"
// # }

// # Example 3: Multiple route params
// # http://localhost:3000/book/novel/7
// # Response:
// # {
// #   "category": "novel",
// #   "bookid": "7",
// #   "info": "Dynamic multiple params working fine!"
// # }

// # ==============================
// # 6️⃣ Explanation
// # ==============================

// # req.params → used for values in URL path
// # req.query  → used for optional key=value after '?'

// # Example:
// # For URL → /user/5?name=Ajay
// # req.params.id = 5
// # req.query.name = "Ajay"

// # ==============================
// # 🧪 TASKS
// # ==============================

// # Task 1️⃣:
// # Create route /product/:pid
// # Show both product ID and optional category from query.

// # Example:
// # http://localhost:3000/product/501?category=Mobile
// # Output:
// # {
// #   "pid": "501",
// #   "category": "Mobile"
// # }

// # Hint:
// # const { pid } = req.params;
// # const { category } = req.query;

// # Task 2️⃣:
// # Add one more route /city/:cityname
// # If query ?country=India is provided, show both.
// # Otherwise, only show city name.

// # Example:
// # http://localhost:3000/city/Jaipur?country=India
// # Output:
// # { "city": "Jaipur", "country": "India" }

// # http://localhost:3000/city/Mumbai
// # Output:
// # { "city": "Mumbai", "country": "Not provided" }

// # ==============================
// # 🏁 Summary (End of Day 4)
// # ==============================
// # ✅ Learned difference between route and query parameters
// # ✅ Accessed req.params and req.query
// # ✅ Created dynamic routes
// # ✅ Completed /product and /city exercises