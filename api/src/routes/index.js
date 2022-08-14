const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const  PokemonRouter  = require('./Pokemon.router.js');
const  TypeRouter  = require('./Type.router.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/pokemons',PokemonRouter)
router.use('/types',TypeRouter)

router.post('/admin',(req,res,next)=>{
    const {user,password} =req.body;
    console.log(user,password)
 try {
    if(!user, !password)return res.send({msg:"Fail"})
    if(user == 'david' && password == "12345")return res.send({msg:"true"})


    
 } catch (error) {
    console.log(error);
 }
})



module.exports = router;
