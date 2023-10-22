// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render("movies/movies", { movies });
    })

    .catch((error) => {
      next(error);
    });
});
router.get("/movies/create", (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render("movies/new-movie", { celebrities: celebrities });
    })

    .catch((error) => {
      next(error);
    });
});

router.post("/movies/create", (req, res, next) => {
  const { title, genre, plot, cast } = req.body;

  Movie.create({ title, genre, plot, cast })

    .then((movies) => {
      res.redirect("/movies");
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/movies/:id", (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .populate("cast")
    .then((movie) => {
      console.log(movie);
      res.render("movies/movie-details", { movie });
    })
    .catch((error) => {
      next(error);
    });
});

router.post("/movies/:id/delete", (req, res, next) => {
  const { id } = req.params;

  Movie.findByIdAndRemove(id)

    .then((deleteMovie) => {
      res.redirect("/movies");
    })

    .catch((error) => {
      next(error);
    });
});

router.get("/movies/:id/edit", (req, res, next) => {
  const { id } = req.params;

  Movie.findOne({ _id: id })
    .then((oneMovie) => {
      Celebrity.find()
        .then((celebrities) => {

          celebrities.map((celebrity) => {
            if (oneMovie.cast.includes(celebrity._id)) {
              celebrity.selected = "selected";
            } else {
              celebrity.selected = "";
            }
          });
          
          res.render("movies/edit-movie", { oneMovie, celebrities });
        })

        .catch((error) => next(error));
    })

    .catch((error) => next(error));
});

router.post("/movies/:id/edit", (req, res, next) => {
  const { title, genre, plot, cast } = req.body;
  const { id } = req.params;

  Movie.findByIdAndUpdate(id, { title, genre, plot, cast }, { new: true })
    .then((editMovie) => {
      res.redirect(`/movies/${editMovie._id}`);
    })
    .catch((error) => next(error));
});

module.exports = router;
