import express from 'express';
import { emergencyDataController, viewDataById, deleteDataById, updateDataById } from '../controllers/emergency.DataController.js'; // adjust path as needed

const routes = express.Router();

routes.post('/emergency', emergencyDataController);
routes.get('/emergency', emergencyDataController);
routes.get('/emergency/:id', viewDataById);
routes.delete('/emergency/:id' , deleteDataById);
routes.put('/emergency/:id', updateDataById); 
export default routes
