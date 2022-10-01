const express = require("express");


const app = express();


// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type 
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Database is synced.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
  
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Zombie apocalypse." });
});
require("./app/routes/survivors")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});