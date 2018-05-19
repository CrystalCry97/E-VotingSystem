const mongoose = require('mongoose');

const CandidateSchema = mongoose.Schema({
    cName:{
        type: String,
        require: true
    },
    cEmail:{
        type: String,
        require: true
    },
    cMatric:{
        type: String,
        require: true
    },
    cClass:{
        type: String,
        require: true
    },
    cOrganization:{
        type: String,
        require: true
    },
    cPosition:{
        type: String,
        require: true
    },
    cPassword:{
        type: String,
        require: true
    }
});

const Candidate = module.exports = mongoose.model('Candidate', CandidateSchema);