const express = require("express");
const PORT = 3000;

const app = express();

const cors = require("cors");
app.use(
  cors({
    origin: "nothing_for_now_since_the_frontend_isn't_hosted_yet",
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
