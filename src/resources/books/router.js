const express = require("express");

const router = express.Router();

const books = [
  {
    id: 1,
    title: "1984",
    type: "fiction",
    author: "George Orwell"
  },
  {
    id: 2,
    title: "Life of Pi",
    type: "fiction",
    author: "Yann Martel"
  },
  {
    id: 3,
    title: "How to Win Friends and Influence People",
    type: "non-fiction",
    author: "Dale Carnegie"
  },
  {
    id: 4,
    title: "The Lean Startup",
    type: "non-fiction",
    author: "Eric Reis"
  }
];

router.get("/", (req, res) => {
  console.log("here");
  res.json({ books });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const parsedId = parseInt(id)
  const book = books.find((book) => book.id === parsedId);

  res.json({ book });

})

router.get("/type/:type",(req, res) => {
  const { type } = req.params;
  const newBooks = books.filter((book) => book.type.toLowerCase() === type.toLowerCase());

  res.json({ newBooks });
})

router.post("/", (req, res) =>{
  const bookToCreate = {
    ...req.body
  }

  bookToCreate.id = books.length + 1;

  books.push(bookToCreate);

  console.log("post book", books);

  res.json(bookToCreate);

})

module.exports = router;

/* curl -X POST -H "Content-Type: application/json" \
-d '{"type": "fiction", "title": "linuxize@example.com", "author": "Theunis"}' \
http://localhost:3030/books/

*/
