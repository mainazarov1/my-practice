module.exports = {
  checkPass(pass) {
    if (pass < 9) {
      console.log("пароль слишком маленький");
    }
  },
  checkData(obj) {
    if (obj.name === "" && obj.surname === "" && obj.position === "") {
      console.log("все поля обязательны");
    } else if (obj.name === "" && obj.surname === "") {
      console.log("поля name и surname обязательны");
    } else if (obj.name === "" && obj.position === "") {
      console.log("поля name и position обязательны");
    } else if (obj.position === "" && obj.surname === "") {
      console.log("поля surname и position обязательны");
    } else if (obj.name === "") {
      console.log("нет name");
    } else if (obj.surname === "") {
      console.log("нет surname");
    } else if (obj.position === "") {
      console.log("нет position");
    }
  },
};
