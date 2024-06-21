

exports.getRandomId = () => {
    var id = "";
    for (var i = 0; i < 4; i++) {
        id += String.fromCharCode(65 + Math.floor(Math.random() * 26));
    }
    return id;
}