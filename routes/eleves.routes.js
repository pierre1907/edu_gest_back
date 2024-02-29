const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Voici les données des élèves !'
    })
});

router.get('/:id', (req, res) => {
    res.json({
        message: 'Voici les données de lélève avec l\'id ' + req.params.id
    })
});


router.post('/', (req, res) => {
    console.log(req.body);
    res.json({
        message: req.body.message
    })
});

router.put('/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.json({
        message: `Vous avez modifié l'élève avec l'id ${req.params.id}`
    })
});

router.delete('/:id', (req, res) => {
    res.json({
        message: `Vous avez supprimé l'élève  avec l'id ${req.params.id}`
    })
});

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


module.exports = router;
