const pool = require("./config/db");
const app = require("./app");
const PORT = 3000;
pool.connect()
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => {
    console.error("Database Connection Failed");
    console.error(err);
  });
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});