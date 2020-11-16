# FPSMatchAPI

FPSMatchAPI is an API which provides some information about an fps match.

## Install:

#### First, install the dependencies:
```bash
~$ npm install
```


#### Start the Mysql service: 
#### Then, create a user. If you don't want to tweak up the config files, create a user named 'admin'.

#### Go to the root folder and run the DB Migrations.
 ```bash
~$ yarn sequelize db:create
~$ yarn sequelize db:migrate
 ```
#### Run the server:
 ```bash
~$ yarn nodemon src/server.js or yarn dev
 ```
