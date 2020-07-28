var express = require('express');

var characterController = require('../controllers/characters-controller');

var router = express.Router();

// Create character
// Route: POST /character/
router.post('/character/', function(req, res, next) {
    characterController.createCharacter(req,res);
});

// Delete character
// Route: DELETE /character/:id
router.delete('/character/:id',function (req,res,next) {
    characterController.deleteCharacter(req,res);
});

// Get character
// Route: GET /character/:id
router.get('/character/:id',function (req,res,next) {
    characterController.getCharacter(req,res);
});

// Update character
// Route: POST /character/:id
router.post('/character/:id',function (req,res,next) {
    characterController.updateCharacter(req,res);
});

// Pagination characters
// Route: GET /character/paginate/:page?
router.get('/character/paginate/:page?',function (req,res,next) {
    characterController.getCharacters(req,res);
});

module.exports = router;
