# Project Intro
This project is collection of react hooks I developed over the period of time as the need occured.

# Hooks
  1. # useGetRequest:
     this hooks let you make a get api call using getData function the special part is that it will cancel all your request made through this function as soon as you call cancel request function. In my work setup I have extended this to do all different type of API requests and do default validation check, end point checks etc.
     click [here](https://medium.com/@vaadarsh8178/optimising-api-calls-in-react-ec55fd9e39f) to know more.
  2. # useOptimalReq:
     this hooks let you mix concept of debouncing with maximum parallel request made at a time, it's implications were very specific to my use case but it lets you add a debounce period over your api call and also give you ability to add limit on number of maximum api calls that can be in queue after debounce period.
     click [here](https://medium.com/@vaadarsh8178/a-new-way-of-debouncing-your-api-calls-69f12c693fbb) to know more.
  3. # usePagination:
     this hook make use of intersection observer to efficiently fetch data on infinite scroll pagination
     click [here](https://medium.com/@vaadarsh8178/optimising-pagination-with-react-hooks-c2e378596568) to know more.  


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
