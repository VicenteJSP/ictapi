import * as employedService from "../services/employed.service";

const getAllEmployed = async (req, res) => {
    try {
        const employeds = await employedService.getAllEmployeds();
        return res.status(200).json({ employeds });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const getEmployed = async (req, res) => {
    try {
        const { employedId } = req.params;
        const employed = await employedService.getEmployedId(employedId);
        return res.status(employed.active ? 200 : 404).json(employed.active ? { action: 'getEmployed', employed: employed } : {});
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const postEmployed = async (req, res) => {
    try {
        const newEmployed = await employedService.createEmployed(req.body);
        return res.status(201).json({ action: 'potEmployed', data: newEmployed });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const putEmployed = async (req, res) => {
    try {
        let dataEmployed = req.body;
        delete dataEmployed.active;
        const { employedId } = req.params;
        const employed = await employedService.updateEmployed(employedId, dataEmployed);
        return res.status(200).json({ action: 'putEmployed', employed });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const patchEmployed = async (req, res) => {
    try {
        let dataEmployed = req.body;
        delete dataEmployed.active;
        const { employedId } = req.params;
        const employed = await employedService.updateEmployed(employedId, dataEmployed, true);
        return res.status(200).json({ action: 'putEmployed', employed });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const deleteEmployed = async (req, res) => {
    try {
        const { employedId } = req.params;
        const employed = await employedService.deleteEmployed(employedId);
        return res.status(200).json({ action: 'deleteEmployed', employed: `Employed deleted`, data: employed });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

export { getAllEmployed, getEmployed, postEmployed, putEmployed, patchEmployed, deleteEmployed };