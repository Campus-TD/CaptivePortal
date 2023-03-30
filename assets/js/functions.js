function checkMatricula(str) {
    var reg = /^\d{10}$/;
    return reg.test(str);
}

function checkName(str) {
    var reg = /^[a-zA-ZÀ-ÿ\s]{3,100}$/;
    return reg.test(str);
}

function checkPassword(str) {
    var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,100}$/;
    return reg.test(str);
}