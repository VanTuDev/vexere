const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// API endpoint to add a new bus
app.post("/api/add-bus", (req, res) => {
  const newData = req.body;

  // Read current data from data.json
  const dataPath = path.join(
    __dirname,
    "T:/Project Vexere/src/components/Card/data.json"
  );
  fs.readFile(dataPath, (err, data) => {
    if (err) {
      console.error("Error reading data.json:", err);
      return res.status(500).send("Internal Server Error");
    }

    let jsonData = JSON.parse(data);

    // Add a new id
    newData.id = jsonData.length + 1;
    jsonData.push(newData);

    // Write updated data to data.json
    fs.writeFile(dataPath, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        console.error("Error writing to data.json:", err);
        return res.status(500).send("Internal Server Error");
      }
      res.status(201).send(newData);
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
