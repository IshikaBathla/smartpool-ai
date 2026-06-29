console.log("Server file started");
require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Inside app.listen");
    console.log(`Server running on port ${PORT}`);
});