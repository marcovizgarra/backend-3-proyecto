import { faker } from "@faker-js/faker";
import { usersService } from "../services/index.js"

const getAllUsers = async(req,res)=>{
    const users = await usersService.getAll();
    res.send({status:"success",payload:users})
}

const getUser = async(req,res)=> {
    const userId = req.params.uid;
    const user = await usersService.getUserById(userId);
    if(!user) return res.status(404).send({status:"error",error:"User not found"})
    res.send({status:"success",payload:user})
}

const updateUser =async(req,res)=>{
    const updateBody = req.body;
    const userId = req.params.uid;
    const user = await usersService.getUserById(userId);
    if(!user) return res.status(404).send({status:"error", error:"User not found"})
    const result = await usersService.update(userId,updateBody);
    res.send({status:"success",message:"User updated"})
}

const deleteUser = async(req,res) =>{
    const userId = req.params.uid;
    const result = await usersService.getUserById(userId);
    res.send({status:"success",message:"User deleted"})
}

const generateFakeUser = (req, res) => {
    const { quantity } = req.body;
    const users = [];

    for (let u = 0; u < quantity; u++) {
        users.push(
            {
                first_name: faker.person.firstName(),
                last_name: faker.person.lastName(),
                email: faker.internet.email().toLocaleLowerCase(),
                password: faker.internet.password(),
                role: 'user',
                pets: []
            }
        )
    }
    res.send( users )
}

export default {
    deleteUser,
    getAllUsers,
    getUser,
    updateUser,
    generateFakeUser
}