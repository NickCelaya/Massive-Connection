//exports is exporting the function. Which gives index.js access to it when the controller is required then controller.getplanes is used in the endpoint to run the function and sql query.

exports.getPlanes = (req, res) => {
  var dbInstance = req.app.get("db") //request coming in off endpoint app has express on it then telling it to get the db
  dbInstance.get_planes([25]).then( (response) => {  //response is a param it could be anything. (planes)
    res.status(200).send(response);
  })
};


//Since our slq query is using $1 it makes the param dynamic ([25]) is just a param, it can be any number, essentially saying get all planes where passangercount is greater than 25.
