import userModel from "../model/userModel.js";

const getUser = (req, res) => {
    const users = userModel.getUser();
    res.json(users);
}

const createUser = (req, res) => {
    const users = userModel.createUser(req.body);
    res.json(users);
}

const updateUser = (req, res) => {
    const users = userModel.updateUser(req.body);
    res.json(users);
}

const deleteUser = (req, res) => {
    const users = userModel.deleteUser(req.body);
    res.json(users);
}

export default {
    getUser,
    createUser,
    updateUser,
    deleteUser
}