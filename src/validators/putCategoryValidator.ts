import * as yup from "yup";

export const putCategoryValidator: yup.AnyObjectSchema = yup.object({
  name: yup.string(),
  description: yup.string()
});
