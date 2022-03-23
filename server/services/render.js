const axios=require('axios');


const homeRoutes=(req,res)=>{
    //make a get request to /api/users//
    axios.get('http://localhost:3000/api/users/')
    .then(function(response){
        res.render('index',{users:response.data})
    }).catch((err) => {
        res.send(err)
    });

        
}


const add_user=(req,res)=>{
    res.render('add_user')
}

const update_user=(req,res)=>{
    axios.get("http://localhost:3000/api/users",{params:{id:req.query.id}})
    .then(function(userdata){
        res.render("update_user",{user:userdata.data})
      
    })
    .catch(err=>{
        res.send(err);
    })
   
}

module.exports={
    homeRoutes,
    add_user,
    update_user
}