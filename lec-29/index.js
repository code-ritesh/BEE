const {PrismaClient} = require("./generated/prisma");
let prisma= new PrismaClient();

async function addUser(email,name){
    // User user= new User("","");
    //user.save()
    const newUser= await prisma.user.create({
        data:{
            email:email,
            name:name
        }

    }) 
    return "User added"  
}



async function getUser(email){
    let user= await prisma.user.findUnique({
        where:{
            email:email
        }
    })
    return user
}






async function deleteUser(id){
    await prisma.user.delete({
        where:{
            id:Number(id)
        }
    })
    return "user deleted"
}

