const express = require("express");

const router = express.Router();

const films = [
  {
    id: 1,
    title: "Bonnie and Clyde",
    director: "Arthur Penn"
  },
  {
    id: 2,
    title: "Reservoir Dogs",
    director: "Quentin Tarantino"
  },
  {
    id: 3,
    title: "Inception",
    director: "Christopher Nolan"
  },
  {
    id: 4,
    title: "Django Unchained",
    director: "Quentin Tarantino"
  }
];

router.get("/", (req, res) => {
  const response = { films }
  res.json(response);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const parsedId = parseInt(id)
  const film = films.find((film) => film.id === parsedId);

  res.json({ film });

})

router.get("/director/:name",(req, res) => {
  const { name } = req.params;
  const parsedName = name.replace("-", " ");
  const newFilms = films.filter((film) => film.director.toLowerCase() === parsedName.toLowerCase());

  res.json({ newFilms })
})

router.post("/", (req, res) =>{
  const filmToCreate = {
    ...req.body
  }

  filmToCreate.id = films.length + 1;

  films.push(filmToCreate);

  console.log("post film", films);

  res.json(filmToCreate);

})

module.exports = router;



/* curl -X POST -H "Content-Type: application/json" 
-d '{"title": "linuxize", "director": "linuxize@example.com"}' 
http://localhost:3030/films/

*/