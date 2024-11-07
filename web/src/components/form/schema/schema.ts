import { array, date, InferType, number, object, string } from "yup";

export const schemaTodoForm = object({
  title: string()
    .required()
    .nullable()
    .max(150, "Заголовок не может содержать более 150 символов"),

  description: string()
    .required()
    .min(1, "Описание должно содержать минимум 1 символ")
    .max(200, "Описание не может содержать более 200 символов"),

  date: date().required().nullable(),

  priority: number()
    .required()
    .nullable()
    .min(0, "Минимальный приоритет — 0")
    .max(3, "Максимальный приоритет — 3"),

  tags: array()
    .of(string().required().max(20, "Тег не может содержать более 20 символов"))
    .required(),
});

export type TSchemaTodoForm = InferType<typeof schemaTodoForm>;
