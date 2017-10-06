const express = require("express");
const bodyParser = require("body-parser");
const usersCtrl = require("./usersCtrl.js");

const port = 3000;

const app = express();

app.use(bodyParser.json());

///get endpoints
app.get("/api/users", usersCtrl.getUsers);
app.get("/api/users/:id", usersCtrl.getUsersById);
app.get("/api/admins", usersCtrl.getAdmins);
app.get("/api/nonadmins", usersCtrl.getNonAdmins);
app.get("/api/user_type/user", usersCtrl.getbyTypeUser);
app.get("/api/user_type/moderator", usersCtrl.getbyTypeMod);
app.get("/api/user_type/admin", usersCtrl.getbyTypeAdmin);

///put endpoints
app.put("/api/users/:id", usersCtrl.addNewUser);

//post endpoints
app.post("/api/users", usersCtrl.addUser);

//delete endpoints
app.delete("/api/users/:id", usersCtrl.deleteUser);

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
