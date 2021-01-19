const express = require("express");
const Router = express.Router();

const book = {
   bookname: "Book Backer",
   quantity: "1",
   description: "This is a good test.",
};

const user = {
   firstname: "Prudvi kumar reddy",
   lastname: "Komma reddy",
   email: "prudvikumarreddy.kommareddy@gmail.com",
   address: "H.no: 5-214/1, Flat-no.: 301, Plot-no.: 98&99, Chandranagar, Chintal, Quthbullapur, Hyderabad, Telangana - 500054 ",
};

Router.get("/", async (req, res) => {
   res.render("index");
});

Router.get("/login", async (req, res) => {
   res.render("partials/login");
});

Router.get("/home", async (req, res) => {
   res.render("home", { data: {} });
});

Router.get("/updatebio", async (req, res) => {
   res.render("partials/updatebio", { user: user });
});

Router.get("/addbook", async (req, res) => {
   res.render("partials/addbook");
});

Router.get("/bookupdate", async (req, res) => {
   res.render("partials/bookedit", { book: book });
});

Router.get("/searchresults", async (req, res) => {
   res.render("partials/searchresults", { data: book });
});

module.exports = Router;
