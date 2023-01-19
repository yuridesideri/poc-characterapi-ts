import joi from "joi";

const numberStringSchema = joi.string().regex(/^[0-9]+$/).required();
const normalStringSchema = joi.string().min(3).max(500).required();

export const characterSchema = joi.object({
    name: normalStringSchema,
    race: normalStringSchema,
    description: normalStringSchema,
    age: numberStringSchema,
    height: numberStringSchema,
    u_obj: normalStringSchema,
    sex: joi.string().valid("male", "female", "other").required(),
    image: joi.string().uri(),
})