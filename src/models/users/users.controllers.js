const { where } = require('sequelize')
const uuid = require('uuid')
const { hashPassword } = require('../../utils/crypto')

const Users = require('../users/users.model')

const getAllUsers = async () => {
    const data = await Users.findAll()
    return data
}

const getUserById = async (id) => {
    // const data = await Users.findByPk(id)
    const data = await Users.findOne(
        { where: { id } }
    )

    return data
}

const createUser = async (data) => {
    const newUser = Users.create({
        id: uuid.v4(),
        name: data.name,
        email: data.email,
        active: data.active,
        isValidated: data.isValidated,
        usertype: data.usertype,
        password: hashPassword(data.password)
    })
    return newUser
}

const updateUser = async (id, data) => {
    const result = await Users.update(data, {
        where: { id }
    })
    return result
}

const deleteUser = async (id) => {
    const data = await Users.destroy({
        where: { id }
    })
    return data
}


const getUserByEmail = async (email) => {
    const data = await Users.findOne({
        where: { email }
    })
    return data
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUserByEmail
}