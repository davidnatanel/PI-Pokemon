const { default: axios } = require('axios');
const { Router } = require('express');
const {Types} = require('../db');
const router = Router();

router.get('/',async (req,res,next)=>{
try {
    
    let TipesApi =await axios.get(`https://pokeapi.co/api/v2/type/`)


    Tip =TipesApi.data.results.map(e=>   {return{type:e.name }}    )

    Tip.forEach((element) => {
        Types.findOrCreate({
            where:{
                name:element.type
            }
        })

        
    });

    let ApiLocal= await Types.findAll();
    
    res.send(ApiLocal)
} catch (error) {
next(error)
}

    
})



module.exports = router;
