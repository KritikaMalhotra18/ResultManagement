const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    console.log(data);
    pool.query(
      `insert into student(rollNo, Name, dob,score) 
                values(?,?,?,?)`,
      [
        data.rollNo,
        data.Name,
        data.dob,
        data.score,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getStudentByRollNo: (rollNo, callBack) => {
    pool.query(
      `select rollNo,Name,dob,score from student where rollNo = ?`,
      [rollNo],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getStudents: callBack => {
    pool.query(
      `select rollNo,Name,dob,score from student`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateStudent: (data, callBack) => {
    pool.query(
      `update student set Name=?, dob=?, score=? where rollNo = ?`,
      [
        data.Name,
        data.dob,
        data.score,
        data.rollNo
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteStudent: (rollNo, callBack) => {
    pool.query(
      `delete from student where rollNo = ?`,
      [rollNo],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};