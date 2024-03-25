import mongoose from 'mongoose'

const StudentSchema =  mongoose.Schema({
    name: {type: String, default: null},
    email: {type: String, default: null},
    age: {type: Number, default: 0},
    departmentId: {type: mongoose.Schema.Types.ObjectId, default: null}
})

const studentmodel = mongoose.model('students', StudentSchema)

export default studentmodel