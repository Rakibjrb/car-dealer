const app = require("./src/app");

require("dotenv").config();
const port = process.env.PORT || 5000;

const main = () => {
  app.listen(port, () => {
    console.log(`[+] server running on : http://localhost:${port}`);
  });
};

main();
