import * as yup from 'yup';

export const postUserValidator: yup.AnyObjectSchema = yup.object({
    email: yup.string().email().required(),
    name: yup.string().required(),
    password: yup.string().min(8).max(16).required(),
    isAdmin: yup.boolean().required(),
})