import employed from "../models/employed.model";
import { validateAllProperties } from "../shared/validateEmployed";

const getAllEmployeds = async () => {
    return await employed.find();
};

const getEmployedId = async (employedId) => {
    if (!employedId) throw new Error('employedId required');
    return await employed.findById(employedId);
};

const createEmployed = async (dataEmployed) => {
    validateAllProperties(dataEmployed);
    return await employed.create(dataEmployed);
};

const updateEmployed = async (employedId, employedUpdate, isPatch = false) => {
    if(!isPatch) validateAllProperties(employedUpdate);
    if (!await employed.exists({ _id: employedId })) throw new Error('Employed not found!');
    return await employed.findByIdAndUpdate({ _id: employedId }, employedUpdate, { new: true });
};

const deleteEmployed = async (employedId) => {
    return await updateEmployed(employedId, { active: false }, true);
};

export { getAllEmployeds, createEmployed, getEmployedId, updateEmployed, deleteEmployed };
