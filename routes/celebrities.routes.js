// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here

router.get("/celebrities/create", (req, res, next) => {
  res.render("celebrities/new-celebrity");
});

router.post("/celebrities/create", (req, res, next) => {
  const { name, occupution, catchPhrase } = req.body;

  Celebrity.create({ name, occupution, catchPhrase })

    .then((celebrity) => {
      res.redirect("/celebrities");
    })
    .catch((error) => res.render("celebrities/new-celebrity"));
});

module.exports = router;
