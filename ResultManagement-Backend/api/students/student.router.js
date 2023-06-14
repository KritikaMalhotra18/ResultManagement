const router = require("express").Router();
const {
  createUser,
  getStudentByRollNo,
    getStudents,
    updateStudent,
    deleteStudent
} = require("./student.controller");
router.get("/",  getStudents);
router.post("/", createUser);
router.get("/:rollNo", getStudentByRollNo);
router.patch("/", updateStudent);
router.delete("/:rollNo", deleteStudent);
module.exports = router;