import { faker } from "@faker-js/faker";
import PetDTO from "../dto/Pet.dto.js";
import { petsService } from "../services/index.js"
import __dirname from "../utils/index.js";

const getAllPets = async (req, res) => {
    const pets = await petsService.getAll();
    res.send({ status: "success", payload: pets })
}

const createPet = async (req, res) => {
    const { name, specie, birthDate } = req.body;
    if (!name || !specie || !birthDate) return res.status(400).send({ status: "error", error: "Incomplete values" })
    const pet = PetDTO.getPetInputFrom({ name, specie, birthDate });
    const result = await petsService.create(pet);
    res.send({ status: "success", payload: result })
}

const generateFakePet = async (req, res) => {
    const quantity = parseInt(req.query.quantity) || 1;
    const pets = [];


    const petType = (quantity) => {
        if ((parseInt(quantity) % 2) !== 0) {
            return 'cat'
        } else {
            return 'dog'
        }
    };

    for (let p = 0; p < quantity; p++) {
        const specie = petType(p);
        pets.push(
            {
                name: specie === 'cat' ? faker.animal.cat() : faker.animal.dog(),
                specie: specie,
                birthDate: faker.date.past(),
                image: 'no-image'
            }
        )
    }
    res.send({ pets })
}

const updatePet = async (req, res) => {
    const petUpdateBody = req.body;
    const petId = req.params.pid;
    const result = await petsService.update(petId, petUpdateBody);
    res.send({ status: "success", message: "pet updated" })
}

const deletePet = async (req, res) => {
    const petId = req.params.pid;
    const result = await petsService.delete(petId);
    res.send({ status: "success", message: "pet deleted" });
}

const createPetWithImage = async (req, res) => {
    const file = req.file;
    const { name, specie, birthDate } = req.body;
    if (!name || !specie || !birthDate) return res.status(400).send({ status: "error", error: "Incomplete values" })
    console.log(file);
    const pet = PetDTO.getPetInputFrom({
        name,
        specie,
        birthDate,
        image: `${__dirname}/../public/img/${file.filename}`
    });
    console.log(pet);
    const result = await petsService.create(pet);
    res.send({ status: "success", payload: result })
}

const generateAndInsertPets = async (req, res) => {
    const { quantity } = req.body;

    if (!quantity)
        return res.status(400).send({
            status: 'error',
            error: 'Incomplete values'
        });

    const petType = (quantity) => {
        if ((parseInt(quantity) % 2) !== 0) {
            return 'cat'
        } else {
            return 'dog'
        }
    };

    try {
        for (let p = 0; p < quantity; p++) {
            const specie = petType(p);
            await petsService.create(
                {
                    name: specie === 'cat' ? faker.animal.cat() : faker.animal.dog(),
                    specie: specie,
                    birthDate: faker.date.past(),
                    image: 'no-image'
                }
            )
        }
    } catch (error) {
        throw new Error(error);
    }

    res.send('Datos insertados correctamente');
}

export default {
    getAllPets,
    createPet,
    updatePet,
    deletePet,
    createPetWithImage,
    generateFakePet,
    generateAndInsertPets
}