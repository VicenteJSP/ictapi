import { Router } from 'express';
import { deleteEmployed, getAllEmployed, getEmployed, patchEmployed, postEmployed, putEmployed } from '../controllers/employed.controller';

const router = Router();

router.route('/').get(getAllEmployed);

router.route('/:employedId')
    .get(getEmployed)
    .post(postEmployed)
    .patch(patchEmployed)
    .put(putEmployed)
    .delete(deleteEmployed);

export default router;
