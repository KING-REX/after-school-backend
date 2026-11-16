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
app.use(morgan("dev"));

app.listen(PORT, () => {
	console.log("Server is listening on port:", PORT);
});
