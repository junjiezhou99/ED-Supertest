import Router from "express";
import userController from "../controller/userController";

const router = Router();

router.route('/read')
    .get(userController.getUser);

router.route('/create')
    .post(userController.createUser);

router.route('/update')
    .put(userController.updateUser);

router.route('/delete')
    .delete(userController.deleteUser);

export default router;