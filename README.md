# zomb_survivors
JavaScript rest end points for adding and updating the survivors data

## To Run

 * clone repo
 * npm install
 * run sql script(__zombie_db.sql__) to create tables on your system
 * change credential in __db/config.js__ according to yours
 * Run 
          ___nodemon___
 
 ## Postman Requests
 
 ### To add survivor
 ------------------------------------------------------------------
 
 curl --location --request POST 'http://localhost:8080/api/add' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"john",
    "age":20,
    "latitude":40.57657656,
    "longitude":50.54234531,
    "infected":true,
    "resources":[
        {
            "name":"knife",
            "quantity":1
        },
        {
            "name":"hammer",
            "quantity":1
        }
    ]
}'
 
 ### To update location 
 ---------------------------------------------------------------
 
 curl --location --request PUT 'http://localhost:8080/api/update' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id":1,
    "latitude":80.57657856,
    "longitude":20.54234531
}'

### To get percentage
 -----------------------------------------------------------------
 curl --location --request GET 'http://localhost:8080/api/getPercentage'
