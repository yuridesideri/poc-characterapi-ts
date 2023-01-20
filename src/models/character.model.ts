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

export const characterUpdateSchema = joi.object().keys({
    name: joi.string().optional(),
    race: joi.string().optional(),
    description: joi.string().optional(),
    age: joi.string().optional(),
    height: joi.string().optional(),
    u_obj: joi.string().optional(),
    sex: joi.string().valid("male", "female", "other"),
    image: joi.string().uri().allow(null).optional(),

})

export const characterIdSchema = numberStringSchema;