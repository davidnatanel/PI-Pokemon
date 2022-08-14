const { Router } = require('express');
const axios = require('axios');
const {Pokemon,Types} = require('../db');

const router = Router();

async function GetPokemonsApi(){
let Api= await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=12`)

ApiUrl=Api.data.results.map(e=> axios.get(e.url) )

 PokemonDates=await Promise.all(ApiUrl)
   let objApi=PokemonDates.map(e=>  {
    let nue=e.data   

    return {
                id:nue.id,
                name:nue.name,
                weigth:nue.weight,
                height:nue.height,
                hp:nue.stats[0].base_stat,
                attack:nue.stats[1].base_stat,
                defense:nue.stats[2].base_stat,
                speed:nue.stats[5].base_stat,
                types:nue.types.map(e=>e.type.name),
                img:nue.sprites.other.home.front_default,
                gif:nue.sprites.versions['generation-v']['black-white'].animated.front_default,
                gifback:nue.sprites.versions['generation-v']['black-white'].animated.back_default
             
              }} )
              return  objApi }




router.get('/',async (req,res,next)=>{
try {

  let {name}=req.query;

  if(name){
      let pokemonFound;

      pokemonFound= await GetPokemonsApi() 
      pokemonFoundApi=pokemonFound.find(e=>e.name==name)

      if(pokemonFoundApi){
        return res.send(pokemonFoundApi)

      }
      pokemonFound= await Pokemon.findOne({
          attributes: ['id','name', 'hp','attack','defense','speed','height','weight','img','createdInDb'],
          include:{
            attributes:['name'],
            model:Types,
         
          }
            
            ,
          where:{name:name}

      });

      

      let ResultOfApiLocal={
        id:pokemonFound.dataValues.id,
        name:pokemonFound.dataValues.name,
        weigth:pokemonFound.dataValues.weight,
        height:pokemonFound.dataValues.height,
        hp:pokemonFound.dataValues.hp,
        attack:pokemonFound.dataValues.attack,
        defense:pokemonFound.dataValues.defense,
        speed:pokemonFound.dataValues.speed,
        img:pokemonFound.dataValues.img,
        types:pokemonFound.dataValues.Types.map(e=>e.dataValues.name),
        createdInDb:pokemonFound.dataValues.createdInDb



      }

      console.log("2",ResultOfApiLocal);

      
      
      if (ResultOfApiLocal) {return  res.send(ResultOfApiLocal)}
      if (!ResultOfApiLocal) {res.status(404)  }
    
    
    
      
 
   
    
    
    }

let dar= await GetPokemonsApi()

let ApiLocalprueba= await Pokemon.findAll(
  {include:{
    model:Types,
    attributes:['name'],
    through:{
      attributes:[]
    }
  }}
);


let ResultOfApiLocal=ApiLocalprueba.map(e=> {
  let nue =e.dataValues 

  return {
      id:nue.id,
      name:nue.name,
      weigth:nue.weight,
      height:nue.height,
      hp:nue.hp,
      attack:nue.attack,
      defense:nue.defense,
      speed:nue.speed,
      img:nue.img,
      types:nue.Types.map(e=>e.dataValues.name),
      createdInDb:nue.createdInDb

    }} )

  let All=[...ResultOfApiLocal,...dar]
  res.send(All)
    
  } catch (error) {next(error)}}) 



    


router.get('/:idPokemon', async (req,res,next)=>{


  try {
    let {idPokemon}=req.params;

    if(idPokemon){
      
        let dar= await GetPokemonsApi()

        GetPokemonsApiforId=dar.find(e=>e.id==idPokemon)

        if(GetPokemonsApiforId){
          return res.send(GetPokemonsApiforId)

        }
            
        let ApiLocalprueba= await Pokemon.findAll(
          {include:{
            model:Types,
            attributes:['name'],
            through:{
              attributes:[]
            }
          },
          where:{id:idPokemon}}
        );
        
        let ResultOfApiLocal=ApiLocalprueba.map(e=> {
          let nue =e.dataValues 
          console.log(e.dataValues.id )
        
          return {
              id:nue.id,
              name:nue.name,
              weigth:nue.weight,
              height:nue.height,
              hp:nue.hp,
              attack:nue.attack,
              defense:nue.defense,
              speed:nue.speed,
              img:nue.img,
              types:nue.Types.map(e=>e.dataValues.name)
        
            }} )


          if (ResultOfApiLocal) {
         return  res.send(ResultOfApiLocal[0])
            
        }
  

    }
  } catch (error) {
    next(error)
  }



})

router.post('/',async (req,res,next)=>{

try {
    let {name,hp,attack,defense,speed,height,weight,img,types} =req.body;
    let newPokemon=await Pokemon.create({name,hp,attack,defense,speed,height,weight,img,types})

    let Typedb= await Types.findAll({
      where:{name: types }
    })
    
    newPokemon.addTypes(Typedb)


    res.send(newPokemon)
    
} catch (error) {
    next(error)
    
}
  
    
})


router.delete('/',async (req,res,next)=>{

  
     try {
          
     await Pokemon.destroy({where:{createdInDb:true}})

     res.sendStatus(204)
    }      
      catch (error) 
      {next(error)}})



router.delete('/:id',async (req,res,next)=>{
  const {id}=req.params;
  try {
    await Pokemon.destroy(
    {where:{id}})

    res.sendStatus(204)
    } catch (error)
    {next(error)}})





router.put('/:id',async (req,res,next)=>{
  const {id}=req.params;
  try { 
      const PokemonDb= await Pokemon.findByPk(id)
      
      PokemonDb.set(req.body)

      await PokemonDb.save()
    
      res.send(PokemonDb)

    } catch (error) 
      {next(error)}}
      
 )

module.exports = router;
// Model.destroy({
//   where: {
//     // ...
//   }
// })
