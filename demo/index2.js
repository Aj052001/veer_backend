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
