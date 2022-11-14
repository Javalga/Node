const { Professional } = require("../Professional");

let professional = null;

let professionals = [];
// const getProfessional = (req, res) => {
//   let answer;
//   if (professional != null) {
//     answer = professional;
//   } else {
//     answer = {
//       error: true,
//       code: 200,
//       message: "This professional doesn't exist",
//     };
//   }
//   res.send(answer);
// };

// const postProfessional = (req, res) => {
//   let answer;
//   console.log(req.body);
//   if (professional === null) {
//     professional = new Professional(
//       req.body.name,
//       req.body.age,
//       req.body.weight,
//       req.body.height,
//       req.body.isRetired,
//       req.body.nationality,
//       req.body.oscarsNumber,
//       req.body.profession
//     );
//     answer = {
//       error: false,
//       code: 200,
//       message: "User created",
//       result: professional,
//     };
//   } else {
//     answer = {
//       error: true,
//       code: 280,
//       message: "User already exist",
//       result: null,
//     };
//   }
//   res.send(answer);
// };

// const putProfessional = (req, res) => {
//   let answer;
//   if (professional != null) {
//     professional.name = req.body.name;
//     professional.age = req.body.age;
//     professional.weight = req.body.weight;
//     professional.height = req.body.height;
//     professional.isRetired = req.body.isRetired;
//     professional.nationality = req.body.nationality;
//     professional.oscarsNumber = req.body.oscarsNumber;
//     professional.profession = req.body.profession;
//     answer = {
//       error: false,
//       code: 200,
//       message: "Professional updated",
//       result: professional,
//     };
//   } else {
//     answer = {
//       error: true,
//       code: 200,
//       message: "Professional doesn't exist",
//       result: professional,
//     };
//   }
//   res.send(answer);
// };

// const deleteProfessional = (req, res) => {
//   let answer;
//   if (professional != null) {
//     professional = null;
//     answer = {
//       error: false,
//       code: 200,
//       message: "Professional deleted",
//       result: professional,
//     };
//   } else
//     answer = {
//       error: true,
//       code: 200,
//       message: "User doesn't exist",
//       result: professional,
//     };
//   res.send(answer);
// };

// reto 3

const getProfessionals = (req, res) => {
  let answer;
  let position = req.query.id
  if (professionals.length > 0) {
    answer = professionals[position - 1];
  } else {
    answer = {
      error: true,
      code: 200,
      message: "This professional doesn't exist",
    };
  }
  res.send(answer);
};

const postIntoProfessionals = (req, res) => {
  let answer;
  if (professionals != null) {
    professional = new Professional(
      req.body.name,
      req.body.age,
      req.body.weight,
      req.body.height,
      req.body.isRetired,
      req.body.nationality,
      req.body.oscarsNumber,
      req.body.profession)
    professionals.push(professional);
    answer = {
      error: false,
      code: 200,
      message: "Professional added to the list",
      result: professionals,
    };
  } else {
    answer = {
      error: true,
      code: 280,
      message: "Professionals doesn't exist",
      result: null,
    };
  }
  res.send(answer);
};

const putProfessionals = (req, res) => {
  let answer;
  let position = req.query.pos;
  if (professional != null && professionals[position]) {
    professionals[position].name = req.body.name;
    professionals[position].age = req.body.age;
    professionals[position].weight = req.body.weight;
    professionals[position].height = req.body.height;
    professionals[position].isRetired = req.body.isRetired;
    professionals[position].nationality = req.body.nationality;
    professionals[position].oscarsNumber = req.body.oscarsNumber;
    professionals[position].profession = req.body.profession;
    answer = {
      error: false,
      code: 200,
      message: "Professional updated",
      result: professionals[position],
    };
  } else {
    answer = {
      error: true,
      code: 200,
      message: "Professionals doesn't exist",
      result: professional,
    };
  }
  res.send(answer);
};

const deleteProfessionals = (req, res) => {
  let position = req.query.pos;
  let answer;
  if (professionals != null && professionals[position]) {
    professionals.splice(position, 1);
    answer = {
      error: false,
      code: 200,
      message: "Professional deleted",
      result: professionals[req.param.pos],
    };
  } else
    answer = {
      error: true,
      code: 200,
      message: "User doesn't exist",
      result: professional,
    };
  res.send(answer);
};
module.exports = {
  // getProfessional,
  getProfessionals,
  // postProfessional,
  postIntoProfessionals,
  // putProfessional,
  putProfessionals,
  // deleteProfessional,
  deleteProfessionals,
};
