const { request, response } = require("express");
const doctorSchema = require("./../model/doctorModel");
exports.getAllDoctors = (request, response, next) => {
  doctorSchema
    .find({})
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((error) => next(error));
};
exports.getDoctorById = (request, response, next) => {
    doctorSchema
      .find({})
      .then((data) => {
        response.status(200).json(data);
      })
      .catch((error) => next(error));
  };
// exports.postAllDoctors = (request, response, next) => {
//   doctorSchema.insertMany({
//     _id: mongoose.Schema.Types.ObjectId,
//     image:String,
//   fullName: String,
//   jopProfile: String,
//   history: String
//   })
//   .then((data) => {
//         response.status(200).json(data);
//       })
//       .catch((error) => next(error));
// }