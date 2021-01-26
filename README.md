# Activity Preparation #
## Installation ##
This activity continues from https://github.com/edisonzsq/node-activity. 

We will be using sequelize in this activity. Install sequelize by typing the following in your command line/terminal:
```shell
npm install sequelize --save
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

The following endpoints will not be having any implementation. It will return a string describing what it should be doing.

|Method | Endpoint              | Returns                |
| :----:|:---------------------|-----------------------:|
| POST  | /garage               | add a garage
| GET   | /garage               | retrieve all garage|
| POST  | /garage/:garageId/car | add a car to garage|
| DELETE| /car/:id              | delete a car       |

