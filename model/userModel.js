import user from "../data/user.js";

class userModel{
    getUser(){
        return user.find(e => e.id == 1);
    }

    createUser(jsonUser){
        user.push(jsonUser);
        return jsonUser;
    }

    updateUser(newUser){
        let index = user.findIndex(e => e.username == newUser.username);
        user[index].password = newUser.password;
        return user[index];
    }

    deleteUser(delUser){
        let index = user.findIndex(e => e.username == delUser.username);
        user[index].active = false;
        return user[index];
    }
}

export default new userModel;