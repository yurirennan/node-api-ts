import * as yup from "yup";

export const postCategoryValidator: yup.AnyObjectSchema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
});
