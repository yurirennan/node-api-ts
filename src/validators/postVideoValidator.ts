import * as yup from 'yup';

export const postVideoValidator: yup.AnyObjectSchema = yup.object({
    name: yup.string().required(),
    description: yup.string().required(),
    time: yup.number().required(),
    category_id: yup.string().uuid().required(),
})