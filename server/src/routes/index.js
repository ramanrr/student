import express from 'express'
import StudentRoute from './StudentRoute'
import DepartmentRoute from './DepartmentRoute'
import CricketRoute from './CricketRoute'
const routes = express()

routes.use('/students', StudentRoute)
routes.use('/departments', DepartmentRoute)
routes.use('/cricket',CricketRoute)

export default routes