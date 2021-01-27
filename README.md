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

__Stage 1: Database Configurations__
- Connect to database
- Create ORM Object

__Stage 2: Apply ORM Operations__
- Implement ORM operations on HTTP Endpoints

__Stage 3: Apply Relationships__
- Associate Garage with Car (Car belongs to Garage, Garage has many Cars)
- Create car object belongs to an exist garage object

<br><br>
## HTTP Endpoints ##

We will implement the following endpoints with database.

|Method | Endpoint              | Description                |
| :----:|:---------------------|-----------------------:|
| POST  | /garage               | add a garage
| GET   | /garage               | get all garage|
| POST  | /garage/:garageId/car | add a car and associate it to a garage|
| GET   | /car              | get all cars       |

