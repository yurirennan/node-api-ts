import * as yup from "yup";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

yup.setLocale({
  mixed: {
    default: "É inválido",
    required: "É um campo obrigatório",
  },
  string: {
    length: "deve ter exatamente ${length} caracteres",
    min: "deve ter pelo menos ${min} caracteres",
    max: "deve ter no máximo ${max} caracteres",
    email: "tem o formato de e-mail inválido",
    url: "deve ter um formato de URL válida",
  },
});

export const validateRequest = (
  schema: yup.AnyObjectSchema
): yup.Asserts<yup.AnyObjectSchema> => {
  return async (request: Request, response: Response, next: NextFunction) => {
    try {
      const validatedBody = await schema.validate(request.body, {
        abortEarly: false,
      });

      request.body = validatedBody;

      next();
    } catch (err: any) {
      const errors: yup.ValidationError[] = err.inner;
      let message = ``;

      errors.forEach((err) => {
        message += `Campo: ${err.path} ${err.errors.join(", ")} `;
      });

      throw new AppError(message);
    }
  };
};
