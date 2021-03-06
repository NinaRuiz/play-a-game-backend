const mongoose = require('mongoose');
const {Schema} = mongoose;

const characterSchema = new Schema({
    player_name: String,
    character_name: String,
    profession: String,
    title: String,
    birth_place: String,
    mental_health: String,
    sex: String,
    age: Number,
    FUE: Number,
    DES: Number,
    INT: Number,
    CON: Number,
    APA: Number,
    POD: Number,
    TAM: Number,
    COR: Number,
    EDU: Number,
    idea: Number,
    luck: Number,
    knowledge: Number,
    miths_cthulhu: Number,
    damage_bonus: Number,
    magic: Number,
    sanity: Number,
    habilities: {
        antropology: {type: Number, default: 1},
        arqueology: {type: Number, default: 1},
        art: {type: Number, default: 5},
        martial_arts: {type: Number, default: 1},
        astronomy: {type: Number, default: 1},
        biology: {type: Number, default: 1},
        book_search: {type: Number, default: 5},
        locksmith: {type: Number, default: 1},
        quackery: {type: Number, default: 5},
        occult_sciences: {type: Number, default: 5},
        drive_car: {type: Number, default: 20},
        drive_machine: {type: Number, default: 1},
        accounting: {type: Number, default: 10},
        credit: {type: Number, default: 15},
        law: {type: Number, default: 5},
        discover: {type: Number, default: 25},
        discretion: {type: Number, default: 10},
        disguise: {type: Number, default: 1},
        electricity: {type: Number, default: 10},
        riding: {type: Number, default: 5},
        listening: {type: Number, default: 25},
        dodge: {type: String, default: 'DESx2'},
        pharmacology: {type: Number, default: 1},
        physics: {type: Number, default: 1},
        photography: {type: Number, default: 10},
        geology: {type: Number, default: 1},
        history: {type: Number, default: 20},
        natural_history: {type: Number, default: 10},
        throw_something: {type: Number, default: 25},
        own_language: {type: String, default: 'EDUx5'},
        mechanics: {type: Number, default: 20},
        medicine: {type: Number, default: 5},
        miths: {type: Number, default: 0},
        swimming: {type: Number, default: 25},
        hide: {type: Number, default: 15},
        hide_out: {type: Number, default: 10},
        job: {type: Number, default: 5},
        orient: {type: Number, default: 10},
        other_language: {type: Number, default: 1},
        persuasion: {type: Number, default: 15},
        pilot: {type: Number, default: 1},
        first_aid: {type: Number, default: 30},
        psychoanalysis: {type: Number, default: 1},
        psychology: {type: Number, default: 5},
        chemistry: {type: Number, default: 1},
        bargain: {type: Number, default: 5},
        jump: {type: Number, default: 25},
        follow_trails: {type: Number, default: 10},
        climb: {type: Number, default: 40},
    },
    others_abilities: [],
    firearms: {
        machine_gun: {type: Number, default: 15},
        short_gun: {type: Number, default: 20},
        shotgun: {type: Number, default: 30},
        rifle: {type: Number, default: 25},
        submachine_gun: {type: Number, default: 15},
    },
    other_arms: [],
    attacks: {
        butting: {type: Number, default: 1},
        kick: {type: Number, default: 1},
        catch: {type: Number, default: 1},
        punch: {type: Number, default: 1}
    },
    other_attacks: [],
    private_data: {
        home: String,
        description: String,
        family_friends: String,
        ep_crazy: String,
        injuries: String,
        scars: String
    },
    character_story: String,
    incomings: {
        annual_income: Number,
        savings: Number,
        money: Number,
        properties: String,
        immovables: String,
        equipment: [],
        found_beings: [],
    },
    miths_books: [],
    magic_objects: [],
    magic_spells: []
});

const model = mongoose.model('character', characterSchema);

module.exports = model;
