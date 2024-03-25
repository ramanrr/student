import mongoose from 'mongoose'

const CricketSchema =  mongoose.Schema({
    teamName: {type:String, default:null},
    captainName: {type:String, default:null},
    teamPlayers: {type:Array, default:[]},
    
})

const cricketmodel = mongoose.model('sports', CricketSchema)

export default cricketmodel