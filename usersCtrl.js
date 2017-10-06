const userData = require("./userData.json");

module.exports = {
  //not returning ages < 40
  getUsers: function(req, res, next) {
    let userArr = userData;
    if (req.query.age) {
      userArr = userArr.filter(x => {
        return x.age < req.query.age;
      });
    }
    if (req.query.lastname) {
      userArr = userArr.filter(x => {
        return x.last_name === req.query.lastname;
      });
    }
    if (req.query.email) {
      userArr = userArr.filter(x => {
        return x.email === req.query.email;
      });
    }
    if (req.query.favorites) {
      userArr = userArr.filter(x => {
        return x.favorites.includes(req.query.favorites);
      });
    }
    res.status(200).json(userArr);
    return;
  },

  getUsersById: function(req, res, next) {
    if (req.params.id) {
      for (var obj of userData) {
        if (obj.id == req.params.id) {
          res.json(obj);
          return;
        }
      }
    }
    res.status(404).json(null);
  },

  getAdmins: function(req, res, next) {
    let userArr = userData;
    userArr = userArr.filter(x => x.type == "admin");
    res.status(200).json(userArr);
    return;
  },

  getNonAdmins: function(req, res, next) {
    let userArr = userData;
    userArr = userArr.filter(x => x.type != "admin");
    res.status(200).json(userArr);
    return;
  },
  //not working for some reason
  getbyTypeUser: function(req, res, next) {
    let userArr = userData;
    userArr = userArr.filter(x => x.type == "user");
    res.status(200).json(userArr);
    return;
  },
  getbyTypeMod: function(req, res, next) {
    let userArr = userData;
    userArr = userArr.filter(x => x.type === "moderator");
    res.status(200).json(userArr);
    return;
  },
  getbyTypeAdmin: function(req, res, next) {
    let userArr = userData;
    userArr = userArr.filter(x => x.type === "admin");
    res.status(200).json(userArr);
    return;
  },

  //not sure if working
  addNewUser: function(req, res, next) {
    let userArr = userData;
    for (var i = 0; i < userArr.length; i++) {
      if (userArr[i].id == req.params.id) {
        userArr[i] = req.body;
        res.status(200).json(userArr);
        return;
      }
    }
  },
  addUser: function(req, res, next) {
    let user = req.body;
    user.id = userData.length + 1;
    userData.push(user);
    res.status(200).json(userData);
    return;
  },
  deleteUser: function(req, res, next) {
    let userArr = userData;
    for (var i = 0; i < userArr.length; i++) {
      if (userArr[i].id == req.params.id) {
        userArr.splice(i, 1);
        res.status(200).json(userArr);
        return;
      }
    }
  }
};
