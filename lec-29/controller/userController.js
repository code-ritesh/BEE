const user =  require("../service/userService ")

module.exports = {
    let {name , email} = async (req,res)=>{

        let {name , email} = req.body

        let message = await user.addUser()

}
}