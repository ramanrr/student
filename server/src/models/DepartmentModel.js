import mongoose from 'mongoose'

const DepartmentSchema =  mongoose.Schema({
    departmentName: {type: String, default: null}
})

const departmentmodel = mongoose.model('departments', DepartmentSchema)

export default departmentmodel