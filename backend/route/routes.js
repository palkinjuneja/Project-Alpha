import express from 'express';
import {userGetter,userGetterBySkill,userGetterByRole,userGetterById,collaborationUpdateById,collaborationRequestGetter} from '../controller/userController.js'

const route = express.Router();
route.get('/allUsers',userGetter);
route.get('/userBySkill',userGetterBySkill);
route.get('/userByRole',userGetterByRole);
route.get('/userById',userGetterById);
route.get('/getCollabRequest',collaborationRequestGetter);
route.put('/requestAction',collaborationUpdateById);

export default route;