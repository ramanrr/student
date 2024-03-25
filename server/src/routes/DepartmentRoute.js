import express from 'express'
import DepartmentController from '../controllers/DepartmentController'
const router = express.Router()

router.post('/add-department', DepartmentController.AddDepartment)



export default router;