import express from 'express';
import multer from 'multer';
import OrphanageController from './controllers/OrphanageController';
 
import UploadConfig from './config/upload';

const route = express.Router();
const upload = multer(UploadConfig);

route.get('/orphanages', OrphanageController.index);
route.get('/orphanages/:id', OrphanageController.show);
route.post('/orphanages',upload.array('images') , OrphanageController.create);

export default route;

