const Character = require('../schemas/character');

// Create character
// Route: POST /character/
const createCharacter = (req, res) =>{
    try{
        // Define variables
        const {
            player_id, character_name, profession, title, birth_place, mental_health, sex, age, FUE, DES, INT, CON,
            APA, POD, TAM, COR, EDU, idea, luck, knowledge, miths_cthulhu, damage_bonus, magic, sanity, abilities,
            other_abilities, firearms, other_arms, attacks, other_attacks, private_data, character_story, incomings,
            miths_books, magic_objects, magic_spells
        } = req.body;

        Character.create({
            player_id: player_id,
            character_name: character_name,
            profession: profession,
            title: title,
            birth_place: birth_place,
            mental_health: mental_health,
            sex: sex,
            age: age,
            FUE: FUE,
            DES: DES,
            INT: INT,
            CON: CON,
            APA: APA,
            POD: POD,
            TAM: TAM,
            COR: COR,
            EDU: EDU,
            idea: idea,
            luck: luck,
            knowledge: knowledge,
            miths_cthulhu: miths_cthulhu,
            damage_bonus: damage_bonus,
            magic: magic,
            sanity: sanity,
            abilities: abilities,
            others_abilities: other_abilities,
            firearms: firearms,
            other_arms: other_arms,
            attacks: attacks,
            other_attacks: other_attacks,
            private_data: private_data,
            character_story: character_story,
            incomings: incomings,
            miths_books: miths_books,
            magic_objects: magic_objects,
            magic_spells: magic_spells
        });

        res.send({
            status: 'OK',
            message: 'Character created'
        })

    }catch (e) {
        res.send({
            status: 'ERROR',
            message: e.message
        })
    }
};

// Delete character
// Route: DELETE /character/:id
const deleteCharacter = (req, res) =>{
    const characterId = req.params.id;

    Character.findByIdAndRemove(characterId, function (err, characterRemoved) {
        if(err){
            res.send({
                status: 'ERROR',
                message: err.message
            })
        }else{
            if(!characterRemoved){
                return res.send({
                    status: 'NOT_FOUND',
                    message: 'User not found'
                })
            }else{
                res.send({
                    status: 'OK',
                    message: characterRemoved
                })
            }
        }
    } );
};

// Get character
// Route: GET /character/:id
const getCharacter = (req, res) =>{
    // Declare variables
    const characterId = req.params.id;

    // Find profile by id
    Character.findById(characterId, function (err, characterFound) {
        if(err){
            res.send({
                status: 'ERROR',
                message: err.message
            });
        }else{
            if(!characterFound){
                return res.send({
                    status: 'ERROR',
                    message: 'User not found'
                });
            }else{
                res.send({
                    status: 'OK',
                    message: characterFound
                });
            }
        }
    });
};

// Update character
// Route: POST /character/:id
const updateCharacter = (req, res) =>{
    const characterId = req.params.id;
    const update = req.body;

    Character.findByIdAndUpdate(characterId, update, (err, characterUpdated)=> {
        if(err){
            return res.send({
                status: 'ERROR',
                message: err.message
            });
        }else {
            if (!characterUpdated) {
                return res.send({
                    status: 'ERROR',
                    message: 'User not found'
                });
            } else {
                res.send({
                    status: 'OK',
                    message: characterUpdated
                });
            }
        }
    });
};

// Pagination characters
// Route: GET /character/paginate/:page?
const getCharacters = (req, res) =>{
    const page = req.params.page;
    const playerId = req.profile._id;
    const itemsPerPage = 6;

    Character.find({player_id: playerId}).paginate(page, itemsPerPage, (err, characters, total) => {
        if(err){
            return res.send({
                status: 'ERROR',
                message: err.message
            });
        } else {
            if(!characters){
                return res.send({
                    status: 'ERROR',
                    message: 'There isn\'t any characters'
                });
            }else{
                return res.send({
                    pages: total,
                    notebooks: characters
                });
            }
        }
    });
};

module.exports = {
    createCharacter,
    deleteCharacter,
    getCharacter,
    updateCharacter,
    getCharacters
};
