const express = require("express");
const PORT = 3000;

const app = express();

const cors = require("cors");
app.use(
  cors({
    origin: ["http://127.0.0.1:5500"],
  }),
);

const morgan = require("morgan");
app.use(morgan("dev")); //"dev" = shortcut for ":method :url :status :response-time ms - :res[content-length]" with color code indication

const lessonRoutes = require("./routes/lessonRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use("/", [lessonRoutes, orderRoutes]);

app.use((req, res) => {
  res.status(404).send("Page not found!");
});

app.listen(PORT, () => {
  console.log("Server is listening on port:", PORT);
});
