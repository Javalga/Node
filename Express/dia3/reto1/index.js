const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Peticion recibida por el cliente");
  console.log(`La url de la solicitud es ${req.url}`);
  console.log(`El metodo de la solicitud es ${req.method}`);
  console.log(`El cliente que se esta usando es ${req.headers["user-agent"]}`);
  res.send({ status_code: 200, ok: true, message: "Recibido!" });
});

app.get("/bye", (req, res) => {
  req.send({ status_code: 200, ok: true, message: "Adios!" });
});
app.listen(3000, () => {
  console.log("Server listening port 3000");
});
