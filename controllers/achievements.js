const router = require('express').Router();
const achievements = require('../models/achievements');

router.post('/',(req,res)=>{
    if(req.body){
        const data = new achievements(req.body);
        data.save((err,saved)=>{
            if(err) res.status(500).send({status:false,response:'internal server error'})
            else res.send({status:true,response:saved})
        })
    }
    else res.status(400).send({status:false,response:'please send data to save'})
})

router.get('/',(req,res)=>{
    achievements.find()
    .exec((err,result)=>{
        if(err) res.status(500).send({status:false,response:'internal server error'})
        else res.send({status:true,response:result}) 
    })
})

router.get('/:id',(req,res)=>{
    achievements.findById(req.params.id)
    .exec((err,result)=>{
        if(err) res.status(500).send({status:false,response:'internal server error'})
        else res.send({status:true,response:result}) 
    })
})

router.put('/:id', (req,res)=>{
    achievements.findByIdAndUpdate(req.params.id,req.body)
    .exec((err,result)=>{
        if(err) res.status(500).send({status:false,response:'internal server error'})
        else res.send({status:true,response:result}) 
    })
})

router.delete('/:id', (req,res)=>{
    achievements.findByIdAndRemove(req.params.id)
    .exec((err,result)=>{
        if(err) res.status(500).send({status:false,response:'internal server error'})
        else res.send({status:true,response:result}) 
    })
})

module.exports = router;