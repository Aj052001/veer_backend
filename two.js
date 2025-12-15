// # ==============================
// # 🧭 Day 2 – Routes & HTTP Methods (Express.js)
// # ==============================

// # 🎯 Objective:
// # Learn how to create different API routes in Express using GET, POST, PUT, DELETE.
// # Understand req, res, and how data is exchanged between client and server.

// # ==============================
// # 1️⃣ What is a REST API?
// # ==============================

// # REST (Representational State Transfer) is a way to design APIs.
// # It uses HTTP methods to perform CRUD operations:

// # HTTP Method | Purpose | Example
// # --------------------------------------------
// # GET    | Read data       | Get all users
// # POST   | Create data     | Add a new user
// # PUT    | Update data     | Update existing user
// # DELETE | Remove data     | Delete a user

// # ==============================
// # 2️⃣ Setting up Express project
// # ==============================

// mkdir express-day2
// cd express-day2
// npm init -y
// npm install express

// # Create main file
// cat > app.js


// // ==============================
// // 🧩 Express App: Routes Example
// // ==============================

// const express = require("express");
// const app = express();
// const PORT = 3000;

// // Middleware to parse JSON body
// app.use(express.json());

// // ==============================
// // 📘 Routes (HTTP Methods)
// // ==============================

// // GET - Fetch all users
// app.get("/users", (req, res) => {
//   res.json({ message: "GET all users" });
// });

// // POST - Add new user
// app.post("/users", (req, res) => {
//   res.json({ message: "POST new user" });
// });

// // PUT - Update existing user
// app.put("/users/:id", (req, res) => {
//   res.json({ message: Update user ${req.params.id} });
// });

// // DELETE - Remove user
// app.delete("/users/:id", (req, res) => {
//   res.json({ message: Delete user ${req.params.id} });
// });

// // ==============================
// // 🎯 Start Server
// // ==============================
// app.listen(PORT, () => {
//   console.log(✅ Server running on http://localhost:${PORT});
// });