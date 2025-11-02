import express from 'express';
import { postLogin, postRegister } from '../controllers/controllers.ts';
import Joi from 'joi';
import ExpressValidation from 'express-joi-validation';
const router = express.Router()

const validator = ExpressValidation.createValidator({})

const registerSchema = Joi.object({
    username: Joi.string().min(3).max(12).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(12).required(),
});

const loginSchema = Joi.object({
    password: Joi.string().min(6).max(12).required(),
    email: Joi.string().email().required(),
});

router.post('/register', validator.body(registerSchema), postRegister);

router.post('/login', validator.body(loginSchema), postLogin); 

export default router;
