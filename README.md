# Activity Preparation #
## Installation ##
This activity continues from https://github.com/edisonzsq/node-activity. 

We will be using additional modules in this activity. Install them by typing the following in your command line/terminal:
```shell
npm install sequelize --save
npm install sqlite@3 --save
npm install body-parser --save
```

<br><br>
## Activity Objectives ##

Stage 1: Create a class in Garage.js.<br>
Stage 2: Extend it with [Sequelize ORM](https://www.npmjs.com/package/sequelize).<br>
Stage 3: Create a garage record in database.<br>
Stage 4: Create a class in Car.js<br>
Stage 5: Associate Garage.js with Car.js with many-to-one relationship.</i>

<br><br>
## HTTP Endpoints ##

We will implement the following endpoints with database.

|Method | Endpoint              | Description                |
| :----:|:---------------------|-----------------------:|
| POST  | /garage               | add a garage
| GET   | /garage               | get all garage|
| POST  | /garage/:garageId/car | add a car and associate it to a garage|
| GET   | /car              | get all cars       |

