const express = require(`express`)
const cors = require(`cors`)

const app = express()

app.use(express.json())
app.use(cors())

const {
    getMovies,
    addMovie,
    updateMovie,
    deleteMovie
} = require(`./controller`)

app.get(`/movies`, getMovies)
app.post(`/movies`, addMovie)
app.put(`/movies/:id`, updateMovie)
app.delete(`/movies/:id`, deleteMovie)





app.listen(4000, console.log(`Server up on 4000`))