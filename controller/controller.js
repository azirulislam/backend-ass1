users = [
    {
        "id" : 1,
        "gender" : "male",
        "name" : "smith",
        "contact" : "12345",
        "address" : "abc"
      },
      {
        "id" : 2,
        "gender" : "male",
        "name" : "john",
        "contact" : "12345",
        "address" : "mno"
     
     },
     {
        "id" : 3,
        "gender" : "male",
        "name" : "adam",
        "contact" : "12345",
        "address" : "xyz"
     
     }
];

    let user = {
        id : 6,
        name : "Michel"
    }


module.exports.getUser = (req, res, next) =>{
    const {limit} = req.query;
    res.send(users.slice(0, limit));
};

module.exports.addData = (req, res, next) =>{
    users.push(req.body);
    res.send(users);

};

module.exports.updateUser = (req, res, next) =>{
    const { id } = req.params;
    const filter = { _id : id };

    const newData = users.find(user => user.id === Number(id));
    newData.id = id;
    newData.name = req.body.name;
    res.send(newData);

};

module.exports.deleteUser = (req, res, next) =>{
    const { id } = req.params;
    const filter = { _id : id };

    deleteUser = users.filter(user => user.id !== Number(id));
    
    res.send(deleteUser);

};