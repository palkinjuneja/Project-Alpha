import express from 'express';
import {userGetter,userGetterBySkill,userGetterByRole,userGetterById} from '../controller/userController.js'

const route = express.Router();
route.get('/allUsers',userGetter);
route.get('/userBySkill',userGetterBySkill);
route.get('/userByRole',userGetterByRole);
route.get('/userById',userGetterById);
export default route;