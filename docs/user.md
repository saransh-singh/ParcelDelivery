
# User APIs


## Add User

*URL:- * `/api/v1/user`
*Request Type:- * POST
*Request Body Type:- * application/json
*Request Body:- *
    ```
    {
      "email": {
        "address": "asd@asd.mng", // must be unique
      },
      "password": "St@i8dng", // must be alphnumeri and contains at least one special character ( @, #, $, %, ^, & and * ) and have at least 8 characters (including alphabet, number and special character)
      "profile" : {
        "name": "ASD sad",
        "contact": "8585252512",  // must be 10 digits
        "dob": "2018-07-12T09:27:19.996Z",
        "address": "asd sadkjb asjd",
        "documentUrl": "http://sadasd.pdf",
      },
      "roles" : "admin" // roles are 'admin', 'customer' and 'deliveryBoy', select one of them.
    }
    ```

*Response Type:- * json
*Responst Body:- *
  - if success:-
      ```
      {
        "status": "success",
        "data": {
          "email": {
            "verified": false,
            "address": "asd@asd.mng"
          },
          "profile": {
            "userVerified": false,
            "token": "c1a99YZkowFblgOtVadKcAJ64XI7OBIq",
            "isTokenUsed": false,
            "name": "String",
            "contact": "8585252512",
            "dob": "2018-07-12T09:27:19.996Z",
            "address": "String",
            "documentUrl": "String",
            "createdAt": "2018-07-12T11:22:34.741Z"
          },
          "_id": "5b4739fa20090550436a4228",
          "password": "$2a$10$xbgCaqqphiIroEZcJiU0Qu0OHSfA0ImPeX7lkpEJVpTq5kDpZtK2a",
          "roles": "admin",
          "__v": 0
        }
      }
      ```
  - if failed:-
      ```
      {
        "status": "failed",
        "data": "E11000 duplicate key error collection: parcelDelivery.users index: email_1 dup key: { : { verified: false, address: \"asd@asd.mng\" } }" // error message
      }
      ```

## Get Users

*URL:- * `/api/v1/users`
*Request Type:- * GET

*Response Type:- * json
*Responst Body:- *
  - if success:-
      ```
      {
        "status": "success",
        "data": [
          {
            "email": {
              "verified": false,
              "address": "asd@asd.mng"
            },
            "profile": {
              "userVerified": false,
              "token": "c1a99YZkowFblgOtVadKcAJ64XI7OBIq",
              "isTokenUsed": false,
              "name": "String",
              "contact": "8585252512",
              "dob": "2018-07-12T09:27:19.996Z",
              "address": "String",
              "documentUrl": "String",
              "createdAt": "2018-07-12T11:22:34.741Z"
            },
            "_id": "5b4739fa20090550436a4228",
            "password": "$2a$10$xbgCaqqphiIroEZcJiU0Qu0OHSfA0ImPeX7lkpEJVpTq5kDpZtK2a",
            "roles": "admin",
            "__v": 0
          }
        ]
      }
      ```
  - if failed:-
      ```
      {
        "status": "failed",
        "data": "Users fetching failed" // error message
      }
      ```

## Get Single User

*URL:- * `/api/v1/user/asd@asd.mng`  (`/api/v1/user/:emailId`)
*Request Type:- * GET

*Response Type:- * json
*Responst Body:- *
  - if success:-
      ```
      {
        "status": "success",
        "data": {
          "email": {
            "verified": false,
            "address": "asd@asd.mng"
          },
          "profile": {
            "userVerified": false,
            "token": "c1a99YZkowFblgOtVadKcAJ64XI7OBIq",
            "isTokenUsed": false,
            "name": "String",
            "contact": "8585252512",
            "dob": "2018-07-12T09:27:19.996Z",
            "address": "String",
            "documentUrl": "String",
            "createdAt": "2018-07-12T11:22:34.741Z"
          },
          "_id": "5b4739fa20090550436a4228",
          "password": "$2a$10$xbgCaqqphiIroEZcJiU0Qu0OHSfA0ImPeX7lkpEJVpTq5kDpZtK2a",
          "roles": "admin",
          "__v": 0
        }
      }
      ```
  - if failed:-
      ```
      {
        "status": "failed",
        "data": "User fetching failed" // error message
      }
      ```