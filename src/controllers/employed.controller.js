
const getAllEmployed = (req, res) => {
    return res.status(200).json({ response: 'getAllEmployed' });
 };
const getEmployed = (req, res) => {
    return res.status(200).json({ response: 'getEmployed' });
 };
const postEmployed = (req, res) => {
    return res.status(200).json({ response: 'postEmployed' });
 };
const putEmployed = (req, res) => {
    return res.status(200).json({ response: 'putEmployed' });
 };
const patchEmployed = (req, res) => {
    return res.status(200).json({ response: 'patchEmployed' });
 };
const deleteEmployed = (req, res) => {
    return res.status(200).json({ response: 'deleteEmployed' });
 };

export { getAllEmployed, getEmployed, postEmployed, putEmployed, patchEmployed, deleteEmployed };