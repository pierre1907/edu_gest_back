const mongoose = require('mongoose');

const eleveSchema = new mongoose.Schema(
    {
        matricule: {
            type: String,
            required: false,
        },
        nom: {
            type: String,
            required: true,
        },
        prenom: {
            type: String,
            required: true,
        },
        genre: {
            type: String,
            enum: ['Masculin', 'Féminin'],
            required: true,
        },
        nationalite: {
            type: String,
            required: true,
        },
        lieu_naissance: {
            type: String,
            required: true,
        },
        date_naissance: {
            type: Date,
            required: true,
        },
        classe: {
            type: String,
            required: true,
        },
        adresse: {
            type: String,
            required: true,
        },
        nom_pere: {
            type: String,
            required: false,
        },
        prenom_pere: {
            type: String,
            required: false,
        },
        telephone_pere: {
            type: String,
            required: false,
        },
        nom_mere: {
            type: String,
            required: false,
        },
        prenom_mere: {
            type: String,
            required: false,
        },
        telephone_mere: {
            type: String,
            required: false,
        },
        photo: {
            type: String,
            required: false,
        },
        auther: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Eleve', eleveSchema);
