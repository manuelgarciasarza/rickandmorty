const axios = require("axios");
const URL ="https://rickandmortyapi.com/api/character/"


function getCharById (req, res) {
    const { id } = req.params;

    axios(`${URL}${id}`).then(({ data }) => {
        if(data.error){
            return res.status(404).send(data.error)
        }
        
        const character = {
            id: Number(data.id),
            name: data.name,
            status: data.status,
            species: data.species,
            origin: data.origin,
            image: data.image,
            gender: data.gender,
        }
        return res.status(200).json(character);
    }).catch((axiosError) => {
        return res.status(500).send(axiosError.message)
    })
}

module.exports = {
    getCharById
}