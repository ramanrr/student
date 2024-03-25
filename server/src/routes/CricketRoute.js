import express from 'express'
import CricketController from '../controllers/CricketController'
const router = express.Router()

router.get('/team-details', CricketController.getTeamDetails)
router.post('/add-cricket-team', CricketController.addTeam)
router.get('/team-details/:id', CricketController.getTeamDetailsById)

router.put('/update-team-details/:teamId/updateTeam', CricketController.UpdateTeam)
// router.get('/cricket-details/:id', CricketController.getCricketById)
router.delete('/cricket-team-details/:teamid', CricketController.deleteCricketTeamById)
// router.get('/get-user-depart', CricketController.getCricketDepartment)

export default router;