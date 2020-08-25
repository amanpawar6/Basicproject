const empModel = require('../model/empModel');


function deleteApi(req, res) {

    let id = req.body.id;
    if(id==undefined){
        return res.status(422).send('unprocessable entry');
    }
    empModel.findByIdAndDelete(id, function (error) {
        if (error) {
            return res.status(404).send("not found");
        }
        return res.status(200).send(`user deleted on ${id}`);
    })


}

module.exports = {
    deleteApi
};