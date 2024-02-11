const app = require("./src/app");
const connectDB = require("./src/db/db");

require("dotenv").config();
const port = process.env.PORT || 5000;

const main = async () => {
  await connectDB();

  app.listen(port, () => {
    console.log(`[+] server running on : http://localhost:${port}`);
  });
};

main();
