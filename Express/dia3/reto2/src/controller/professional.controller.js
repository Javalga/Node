const { Professional } = require("../Professional");

let professional = new Professional("toño", 2, 23, 54, 5, 51, 42, 5);

const getProfessional = (req, res) => {
  let answer;
  if (professional != null) {
    answer = professional;
  } else {
    answer = {
      error: true,
      code: 200,
      message: "This professional doesn't exist",
    };
  }
  res.send(answer);
};

const postProfessional = (req, res) => {
  let answer;
  console.log(req.body);
  if (professional === null) {
    professional = new Professional(
      req.body.name,
      req.body.age,
      req.body.weight,
      req.body.height,
      req.body.isRetired,
      req.body.nationality,
      req.body.oscarsNumber,
      req.body.profession
    );
    answer = {
      error: false,
      code: 200,
      message: "User created",
      result: professional,
    };
  } else {
    answer = {
      error: true,
      code: 280,
      message: "User already exist",
      result: null,
    };
  }
  res.send(answer);
};

const putProfessional = (req, res) => {
  let answer;
  if (professional != null) {
    professional.name = req.body.name;
    professional.age = req.body.age;
    professional.weight = req.body.weight;
    professional.height = req.body.height;
    professional.isRetired = req.body.isRetired;
    professional.nationality = req.body.nationality;
    professional.oscarsNumber = req.body.oscarsNumber;
    professional.profession = req.body.profession;
    answer = {
      error: false,
      code: 200,
      message: "Professional updated",
      result: professional,
    };
  } else {
    answer = {
      error: true,
      code: 200,
      message: "Professional doesn't exist",
      result: professional,
    };
  }
  res.send(answer);
};

const deleteProfessional = (req, res) => {
  let answer;
  if (professional != null) {
    professional = null;
    answer = {
      error: false,
      code: 200,
      message: "Professional deleted",
      result: professional,
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
  getProfessional,
  postProfessional,
  putProfessional,
  deleteProfessional,
};
