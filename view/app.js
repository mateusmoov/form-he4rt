const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

mongoose
  .connect(
    "mongodb+srv://moov:batata123@form-heart.og2bq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  )
  .then(() => console.log("Tudo certo meu patrão"))
  .catch((err) =>
    console.log("Aconteceu alguma merda ai meu patrão, se liga " + err)
  );

// Create a data schema

const registerForm = {
  email: String,
  password: String,
};

const Note = mongoose.model("Note", registerForm);

app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "..", "public", "register.html"))
);

app.use(express.static(path.join(__dirname, "..", "/public")));

app.post("/", (req, res) => {
  let newNote = new Note({
    email: req.body.useremail,
    password: req.body.userpassword,
  });
  newNote.save();
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Tudo certo meu chefe");
});
