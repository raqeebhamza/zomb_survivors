
const { sequelize } = require("../models");
const db = require("../models");
const survivorsdb = db.survivors;
const resourcesdb= db.resources;


class SurvivorsService{

    async create(data){
    
        const {
            name,
            age,
            latitude,
            longitude,
            infected,
            resources
        }= data
            console.log("🚀 ~ file: survivors.service.js ~ line 20 ~ SurvivorsService ~ create ~ resources", resources)
        const person={
            name:name,age:age,latitude:latitude,longitude:longitude,infected:infected
        }

            const resp= await survivorsdb.create(person)
            const arr = resources.map(object => {
                return {...object, survivors_id: resp.id};
              });
              
            const bulkResp=await resourcesdb.bulkCreate(arr)
     
        return {"msg":"Added Successfully",
                "survivor":resp,
                "resources":bulkResp}
    }

    async updatelocation(data){

        const resp=await survivorsdb.update({
            longitude:data.longitude,
            latitude:data.latitude
        },{where:{id:data.id}})
        if (resp[0]){
            return {
                "msg":"Updated Successfully",
                "status":201
            }
        }
        return {
            "msg":"Unable to update",
            "status":500
        }
    }

    async getPercentageReport(){
        const total=await survivorsdb.count()
        const infectedCount=await survivorsdb.count({
            where:{infected:1}
        })
        console.log("🚀 ~ file: survivors.service.js ~ line 61 ~ SurvivorsService ~ getPercentageReport ~ infectedCount", infectedCount)
        const nonInfectedConut=await survivorsdb.count({
            where:{infected:0}
        })
    
        return {
            "Infected Percentage":(infectedCount/total)*100,
            "Non infected Percentage":(nonInfectedConut/total)*100
        }
    }
}
module.exports=SurvivorsService