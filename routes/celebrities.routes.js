// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here

router.get("/celebrities/create", (req, res, next) => {
  res.render("celebrities/new-celebrity");
});

router.post("/celebrities/create", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })

    .then((celebrity) => {
      res.redirect("/celebrities");
    })
    .catch((error) => res.render("celebrities/new-celebrity"));
});

router.get("/celebrities", (req, res, next) => {
  const allCelebrities = Celebrity.find()
    // console.log(allCelebrities);

    .then((allCelebrities) => {
      res.render("celebrities/celebrities", { allCelebrities });
    })

    .catch((error) => {
      next(error);
    });
});

module.exports = router;
