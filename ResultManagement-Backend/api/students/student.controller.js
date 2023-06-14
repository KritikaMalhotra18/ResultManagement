const {
    create,
    getStudentByRollNo,
    getStudents,
    updateStudent,
    deleteStudent
  } = require("./student.service");
//   const { hashSync, genSaltSync } = require("bcrypt");

  
  module.exports = {
    createUser: (req, res) => {
      const body = req.body;
    //   const salt = genSaltSync(10);
    //   body.password = hashSync(body.password, salt);
      create(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection errror"
          });
        }
        return res.status(200).json({
          success: 1,
          data: results
        });
      });
    },

    getStudentByRollNo: (req, res) => {
      const rollNo = req.params.rollNo;
      getStudentByRollNo(rollNo, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "Record not Found"
          });
        }
        results.password = undefined;
        return res.json({
          success: 1,
          data: results
        });
      });
    },
    getStudents: (req, res) => {
      getStudents((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          data: results
        });
      });
    },
    updateStudent: (req, res) => {
      const body = req.body;
      // const salt = genSaltSync(10);
      // body.password = hashSync(body.password, salt);
      updateStudent(body, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          message: "updated successfully"
        });
      });
    },
    deleteStudent: (req, res) => {
      const rollNo = req.params.rollNo;
      deleteStudent(rollNo, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          message: "user deleted successfully"
        });
      });
    }
  };