const Character = require('../schemas/character');

// Create character
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
const deleteCharacter = (req, res) =>{

};

// Get character
const getCharacter = (req, res) =>{

};

// Update character
const updateCharacter = (req, res) =>{

};

// Pagination characters
const getCharacters = (req, res) =>{

};
