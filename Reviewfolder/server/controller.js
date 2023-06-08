const movies = [
    {
        title: `interstellar`,
        watched: false
    },
    {
        title: `Fantastic Four`,
        watched: false
    },
    {
        title: `Across the Spider-Verse`,
        watched: false
    }
]

module.exports = {
    getMovies: (req,res) => {
        res.status(200).send(movies)
    },
    addMovie: (req,res) => {
        movies.push(req.body)
        res.status(200).send(movies)
    },
    updateMovie: (req,res) => {
        let {id} = req.params
        id = parseInt(id)
        movies[id].watched = !movies[id].watched
        res.status(200).send(movies)
    },
    deleteMovie: (req,res) => {
        let {id} = req.params
        movies.splice(+id,1)
        res.status(200).send(movies)
    }
}