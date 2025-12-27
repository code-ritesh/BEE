const { get } = require("mongoose")

class User{
    async addUser(email , name){

        const newUser= await prisma.user.create({
            data:{
                email:email,
                name:name
            }
    })

    return "User added"
}
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
