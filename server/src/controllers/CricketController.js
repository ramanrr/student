
import CricketModel from "../models/CricketModel"

const addTeam = (req, res) => {
    console.log(req.body)
    CricketModel.create(req.body).then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
    });
    // res.send({message:"Team Regisration Successful"})

}

const getTeamDetails = (req, res) => {
    CricketModel.aggregate([
        {$match:{}},
        // {
        //     $project: {
        //         _id: 0,
        //         teamName: 1,
        //         captainName: 1,
        //     }
        // }
    ]).then((result) => {
        res.send(result)

    }).catch((err) => { res.send(err) })
}

const getTeamDetailsById = (req,res) => {
        let id = req.params.id
    CricketModel.findById(id).then(result => {
        res.send(result)
    }).catch(err => {
        res.send(err)

    })
    // res.send({message:"get team details Successful"})
}

const UpdateTeam = (req,res)=> {

    console.log(req.body)
    console.log(req.params.teamId)
    let option = {new:true}
    const obj = {teamName:req.body.teamName, captainName:req.body.captainName,teamPlayers:req.body.teamPlayers}
    CricketModel.findByIdAndUpdate(req.params.teamId,obj,option).then(result =>{
        res.send(result)
    }).catch(err =>{
        res.send(err)
    })

    console.log(req.query.rajId)
    // res.send({message:"Update team response received"})
}

const deleteCricketTeamById = (req,res)=>{
    CricketModel.findByIdAndDelete(req.params.teamid).then(result=>res.send(result)).catch(err=>res.send(err))
}
export default { addTeam, getTeamDetails, getTeamDetailsById, UpdateTeam, deleteCricketTeamById }