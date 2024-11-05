import { array, date, InferType, number, object, string } from "yup";

export const schemaTodoForm = object({
  title: string()
  .optional()
  .max(150, "Заголовок не может содержать более 150 символов"),

description: string()
  .required()
  .min(1, "Описание должно содержать минимум 1 символ")
  .max(200, "Описание не может содержать более 200 символов"),

date: date()
  .optional(),

priority: number()
  .required("Приоритет обязателен")
  .min(1, "Минимальный приоритет — 1")
  .max(4, "Максимальный приоритет — 4"),

tags: array()
  .of(string().required().max(20, "Тег не может содержать более 20 символов"))
  .optional()
})

export type TSchemaTodoForm = InferType<typeof schemaTodoForm>;
