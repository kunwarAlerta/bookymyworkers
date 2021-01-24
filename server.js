const express = require("express");
const morgan = require("morgan");
const config = require("config");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const http = require("http");
const session=require("express-session");
const flash=require('connect-flash');
const app = express();
const handleErrorsWeb = require("./middleware/errors/handleErrorsWeb");
const connection = require("./db/connection");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(
  session({
    secret: config.secretKey,
    resave: true,
    cookie: { maxAge: config.cookieAge },
    saveUninitialized: true,
  }),
);

app.use(flash());

app.use("/", require("./v1/routes/frontend"));
app.use("/admin", require("./v1/routes/backend"));

app.use(handleErrorsWeb);
app.set("view engine", "ejs");
app.use(express.static('public'))
app.use("/static", express.static(path.join(__dirname, "./uploads/")));

app.use('/profile', express.static(path.join(__dirname, "./uploads/")));
app.use('/services', express.static(path.join(__dirname, "./uploads/")));

const server = http.createServer(app);

server.listen(config.get("port"), async () => {
  console.log(`Node env :${process.env.NODE_ENV}.`);
  console.log(`Server Running on port: ${config.get("port")}.`);
  await connection.mongoDbconnection();
});
