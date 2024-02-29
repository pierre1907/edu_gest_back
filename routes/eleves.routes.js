const express = require('express');
const router = express.Router();
const { addEleve, getEleves, editEleves, deleteEleves, getEleve} = require('../controllers/eleves.controller');

//Liste des eleves
router.get('/', getEleves);

//Eleve par id
router.get('/:id', getEleve);

//Ajout d'un eleve
router.post('/', addEleve );

//Modification d'un eleve
router.put('/:id',editEleves);

//Suppression d'un eleve
router.delete('/:id', deleteEleves);



/*
router.patch('/like-élève/:id', (req, res) => {
    res.json({
        message: `Vous avez liké l'élève avec l'id ${req.params.id}`
    })
});

router.patch('/dislike-élève/:id', (req, res) => {
    res.json({
        message: `Vous n'aimez plus le élève avec l'id ${req.params.id}`
    })
});
*/

module.exports = router;
