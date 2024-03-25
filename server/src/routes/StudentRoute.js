import express from 'express'
import StudentController from '../controllers/StudentController'
const router = express.Router()

router.get('/all', StudentController.getStudentDetails)
router.post('/add-student-details', StudentController.AddStudentDetails)
router.put('/update-student-details/:id', StudentController.UpdateStudent)
router.get('/student-details/:id', StudentController.getStudentById)
router.delete('/delete-student-details/:id', StudentController.deleteStudentById)
router.get('/get-user-depart', StudentController.getStudentDepartment)

export default router;