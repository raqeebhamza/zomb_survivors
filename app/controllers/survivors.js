const SurvivorsService = require("../services/survivors.service");

const survivorsService= new SurvivorsService()
// Create and Save 
exports.create= (req, res)=>{
    
        
        survivorsService.create(req.body).then(data=>{
            
            res.send(data);
        }).catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving tutorials."
            });
          });
};

exports.update= (req,res)=>{
  survivorsService.updatelocation(req.body).then(data=>{
    res.send(data)
  }).
  catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  });
}

exports.getPercentage= (req,res)=>{
  survivorsService.getPercentageReport().then(data=>{
    res.send(data)
  }).
  catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  });
}
