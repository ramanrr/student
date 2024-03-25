import Departmentmodel from "../models/DepartmentModel"


const AddDepartment = (req, res) => {
    console.log(req.body)
    const obj = req.body
    const model = Departmentmodel.create(obj)
    model.then(result => {
        res.send({result, message: "add department details controller"})

    }).catch(err => {
        res.send({message: "err"})

    })
}

export default { AddDepartment }