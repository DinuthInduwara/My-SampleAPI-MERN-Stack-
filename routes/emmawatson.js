const router = require("express").Router();
let details = require("../modles/details");


router.route("/add").post((req,res) =>{
    console.log('amo amo aded');
    const year = Number(req.body.year)
    const placeOrEvent = req.body.placeOrEvent
    const ids = req.body.ids

    const newS = new details({
        year,
        placeOrEvent,
        ids
    })
    newS.save().then(()=>{
        res.json("Details aded")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route('/delete/:year').delete(async (req,res) =>{
    let Year = Number(req.params.year)

    await details.findOneAndDelete(Year).then(()=>{
        res.status(200).send({status:"successful Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error with user Delete", error:err.message});
    })
})

router.route('/get/:year').get(async (req,res)=>{
    let Year = Number(req.params.year)
    const det = await details.findOne({Year})
    .then((detail)=>{
        res.status(200).send({status:"user fetched", detail})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error with user Get", error:err.message});
    })
})

router.route('/').get((req,res) =>{
    details.find({}).then((events)=>{
        res.send(events)
    }).catch((err)=>{
        console.log(err)
    })
})





module.exports = router;