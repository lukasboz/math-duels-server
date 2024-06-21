const rooms = new Map();

exports.createRoom = (name, scope, id) => {
    rooms.set(id, {name: name, scope: scope, id: id});
}

exports.getRooms = () => {
    return Array.from(rooms.values()).filter((room) => room.scope);
    
}

exports.deleteRoom = (id) => {
    rooms.delete(id);
}
