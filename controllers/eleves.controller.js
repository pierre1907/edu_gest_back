const ElevesModel = require('../models/eleve.model');

module.exports.getEleves = async (req, res) => {
    const eleves = await ElevesModel.find();
    res.status(200).json(eleves);
}

module.exports.getEleve = async (req, res) => {
    const eleve = await ElevesModel.findById(req.params.id);
    if(!eleve){
        return res.status(404).json({
            message: 'L\'élève est introuvable !'
        })
    }
    await ElevesModel.findById(req.params.id)
    res.status(200).json(eleve);

}

module.exports.addEleve = async (req, res)=> {
    if(!req.body){
        return res.status(400).json({
            message: 'Le message est obligatoire, merci d\'en ajouter',
        })
    }
    const eleve = await ElevesModel.create({
        matricule: req.body.matricule,
        nom: req.body.nom,
        prenom: req.body.prenom,
        genre: req.body.genre,
        nationalite: req.body.nationalite,
        lieu_naissance: req.body.lieu_naissance,
        date_naissance: req.body.date_naissance,
        classe: req.body.classe,
        adresse: req.body.adresse,
        nom_pere: req.body.nom_pere,
        prenom_pere: req.body.prenom_pere,
        telephone_pere: req.body.telephone_pere,
        nom_mere: req.body.nom_mere,
        prenom_mere: req.body.prenom_mere,
        telephone_mere: req.body.telephone_mere,
        photo: req.body.photo,
        auther: req.body.auther,
    })
    res.status(200).json({
        message: 'L\'élève a été ajouté avec succès !',
        data: eleve,
    });


};

module.exports.editEleves = async (req, res) => {
    const eleve = await ElevesModel.findById(req.params.id)
    if(!eleve){
        return res.status(404).json({
            message: 'L\'élève est introuvable !'
        })
    }
    const updatedEleve = await ElevesModel.findByIdAndUpdate(
        eleve,
        req.body,
        {new: true}
    )

    res.status(200).json({
        message: 'L\'élève a été modifié avec succès !',
        data: updatedEleve
    })



}

module.exports.deleteEleves = async (req, res) => {
    const eleve = await ElevesModel.findById(req.params.id)
    if(!eleve){
        return res.status(404).json({
            message: 'L\'élève est introuvable !'
        })
    }
    await ElevesModel.findByIdAndDelete(req.params.id)
    res.status(200).json({
        message: 'L\'élève '+ req.params.id+ ' a été supprimé avec succès !'
    })
}


