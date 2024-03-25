import StudentModel from '../models/StudentModel'

const AddStudentDetails = (req, res) => {
    console.log(req.body)
    const obj = req.body
    const model = StudentModel.create(obj)
    model.then(result => {
        res.send({result, message: "add student details controller"})

    }).catch(err => {
        res.send({message: "err"})

    })
}

const getStudentDetails = (req, res) => {
    StudentModel.find({}).then(result => res.send(result)).catch(err => res.send(err))
}

const UpdateStudent = (req, res) => {
  const id = req.params.id;
    StudentModel.findByIdAndUpdate(id,  // condition 
        req.body, //update
        {new:true}).then(result => {
        res.send({result, message: "updated student details controller"})

    }).catch(err => {
        res.send({message: "err"})

    })
}

const getStudentById = (req,res) => {
    let id = req.params.id
    StudentModel.findById(id).then(result => {
        res.send(result)
    }).catch(err => {
        res.send({message: "err"})

    })
}

const deleteStudentById = (req, res) => {
    let id = req.params.id

    StudentModel.findByIdAndDelete(id).then(result => {
        res.send({message: 'student delete successfully', id: id})
    }).catch(err => {
        res.send({message: "err"})

    })
}

const getStudentDepartment = (req, res) => {
   StudentModel.aggregate([
    {$match:{}},
    {
        $lookup: {
            from: "departments",
            localField: "departmentId",
            foreignField: "_id",
            as: "department_details"
        }
    },
        { $unwind: { path: "$department_details", preserveNullAndEmptyArrays: true } },
    {
        $project: {
            _id: 0,
            name: 1,
            email: 1,
            department_details: 1
        }
    }
])
   
   .then(result => res.send(result))
}

export default {AddStudentDetails, getStudentDetails, UpdateStudent, getStudentById, deleteStudentById, getStudentDepartment}