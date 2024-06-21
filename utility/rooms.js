const rooms = new Array();

exports.createRoom = (name, scope, id) => {
    rooms.push({name: name, scope: scope, id: id});
}

exports.getRooms = () => {
    return rooms;
}
