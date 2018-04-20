import { API_URL } from './apiUrl'
import * as types from './actionTypes'

//Action Creators

const setUsers = users => {
  return {
    type: types.REQUEST_USER,
    users
  }
}

const addUser = users => {
  return {
    type: types.ADD_USER,
    users
  }
}

// const deleteUser = users => {
//   return {
//     type: types.DELETE_USER,
//     users
//   }
// }

export const getUsers = () => {
  return dispatch => {
    return fetch(`${API_URL}/users`)
      .then(response => response.json())
      .then(users => {
        dispatch(setUsers(users))
      })
      .catch(error => console.log(error));
  };
}

export const createUser = user => {
  return dispatch => {
    return fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: user})
    })
      .then(response => response.json())
      .then(user => {
        dispatch(addUser(user))
      })
      .catch(error => console.log(error));
  };
}

///// DEFINE HOW TO AUTHENTICATE A USER /////
//initialize a connection
//get a temporary code
//fetch that code and turn it into a TOKEN by making a POST request to the url
//get that TOKEN and make a GET request to the API to get the User's info (credentials)
//Now we have the user's info (credentials); pass that info (credentials) to the client to make a request to server, the server will know which user is making the requests.
//Use JWT to encode passed info (credentials)

//site sends the temp code to endpoint in API. create that endpoint by creating a controller - We got one through knock gem.
//Controller uses authenticator class/method to get user's info (credentials), stores it in the database, and redirects to client app as JWT encoded info (credentials)
//create endpoint (the route that points to the controller - KNOCK GEM User_token route

//Authenticating users;
//with the passed authenticated JWT info (credentials), we need to know which user made it, so their info can be associated to their user account
//this passed authentication and user ID determination happens at all endpoints, so many methods have to be shared throughout all controllers

//Current_User method decodes the JWT token, extracts the user's login from it, tries to find a user in the database with that login, and stores it in the current_user instance variable

//logged_in? method returns if the user was found in the database

//authenticate_user! method creates a response with a 401 Unauthroized error if a user can't be found.
//authenticate_user! is invoked before processing any request in controllers by making before_action hook

//use current_user instance variable generated by authenticate_user! to fetch the requested info in each method to all controllers
