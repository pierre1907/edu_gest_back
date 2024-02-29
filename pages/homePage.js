'use strict'

const { readFile } = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(readFile);

const READ_FILE_OPTIONS = 'utf8';
const index_url = '/Users/eliakimksi/Desktop/node js/edu_gest_back/index.html';

module.exports= async () => {
    // recuperer le contenu de index html
    const contenu= await readFileAsync(index_url, READ_FILE_OPTIONS);

    // retourner index html
    return contenu;

}
