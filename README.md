# task

####Backend for appiness -test

See branches for current code. `master` will be empty until first release.

# Project Title

Appiness-Test-code
---
## Requirements

For development, you will only need Node.js and a node global package, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on windows

  You can install nodejs and npm easily with npm install, just run the following commands.

      $ npm install nodejs
      $ npm install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/bandanasahu123/task-3.git
    $ cd PROJECT_TITLE
    $ npm install

### Framework used

    Express

## Running the project

    $ npm start or nodemon

### Git Branches

    Latest code - master

### Database Used

    MongoDB (https://docs.mongodb.com/)

### commands

npm install - to install all the dependencies

nodemon/npm start - to start the project

REST API at http://localhost:3030/

### API request URL - http://localhost:3030/api/get-all-categories
### Method : GET
### Response


```{
  "type": "application/json",
  "statusCode": 200,
  "data": [
    {
      "_id": "5e7f52ebcd75da9a71b45a9a",
      "name": "Game",
      "numOfProducts": 3,
      "products": [
        {
          "_id": "5e7f53d5cd75da9a71b45adf",
          "categoryId": "5e7f52ebcd75da9a71b45a9a",
          "name": "product1",
          "description": "desc",
          "price": "$12.00"
        },
        {
          "_id": "5e7f53d5cd75da9a71b45ae1",
          "categoryId": "5e7f52ebcd75da9a71b45a9a",
          "name": "product2",
          "description": "desc",
          "price": "$16.00"
        },
        {
          "_id": "5e7f53d5cd75da9a71b45ae3",
          "categoryId": "5e7f52ebcd75da9a71b45a9a",
          "name": "product3",
          "description": "desc",
          "price": "$14.00"
        }
      ]
    },
    {
      "_id": "5e7f5311cd75da9a71b45aa9",
      "name": "Nature",
      "numOfProducts": 3,
      "products": [
        {
          "_id": "5e7f54cecd75da9a71b45b45",
          "categoryId": "5e7f5311cd75da9a71b45aa9",
          "name": "product4",
          "description": "desc",
          "price": "$12.00"
        },
        {
          "_id": "5e7f54cecd75da9a71b45b47",
          "categoryId": "5e7f5311cd75da9a71b45aa9",
          "name": "product5",
          "description": "desc",
          "price": "$12.00"
        },
        {
          "_id": "5e7f54cecd75da9a71b45b49",
          "categoryId": "5e7f5311cd75da9a71b45aa9",
          "name": "product6",
          "description": "desc",
          "price": "$12.00"
        }
      ]
    }
  ],
  "status": 200,
  "success": true,
  "message": "All the category details."
}



