const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const session = require("express-session");
const app = express();
const port = 3000;
app.use(express.static("public"));

// whitelist requests from frontend server
const whitelist = ["http://localhost:8080", "http://localhost:3000"];
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      const error = new Error("Not allowed by CORS");
      error.status = 400;
      callback(error);
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

app.get("/data", (req, res) => {
  fetch("https://api.covid19api.com/summary")
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      res.send(data);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
