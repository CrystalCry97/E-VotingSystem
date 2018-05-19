const express = require('express');
const router= express.Router();
const bcrypt= require('bcrypt');

const Candidate = require('../models/candidates');

//retrieving candidates
router.get('/candidates',(req,res,next)=>{
    Candidate.find(function(err,candidates){
        res.json(candidates);
    });
});

//add candidates
router.post('/candidate',(req,res,next)=>{
    let newCandidate= new Candidate({
        cName:req.body.cName,
        cEmail:req.body.cEmail,
        cMatric:req.body.cMatric,
        cClass:req.body.cClass,
        cOrganization:req.body.cOrganization,
        cPosition:req.body.cPosition,
        cPassword:bcrypt.hashSync('req.body.cPassword', 10)
    });


    newCandidate.save((err,candidate)=>{
        if(err){
            res.json({msg: 'Failed to add candidate'});
        }
        else{
            res.json({msg: 'Candidate added successfully'});
        }
    });
});

//delete candidates
router.delete('/candidate/:id',(req,res,next)=>{
    Candidate.remove({_id: req.params.id}, function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

module.exports = router; 