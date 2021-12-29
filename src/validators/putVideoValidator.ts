import * as yup from 'yup';

export const putVideoValidator: yup.AnyObjectSchema = yup.object({
    name: yup.string(),
    description: yup.string(),
    time: yup.number()
})