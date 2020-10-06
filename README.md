# Roamler subsmissions

Responsive app to display example information about Roamler users submissions. 

![alt text](./Roamler_preview.jpeg "Roamler preview")

## Description

The user can:

* View information regarding the submission (date, address, questions and answers given)
* View ten submissions at the time and navigate the table
* Sort submissions based on date
* Filter submissions based on address
* Choose a specific date range
* View submissions on map 
* Click on a location on map to view its submission 

## Technologies

* React
* Redux
* Material UI
* Styled components
* Node.js
* Express
* Postgres
* Axios

## How to run
1. Pull the repo
2. `yarn start` on the server. Make sure you have a postgres instance running on port `5432`. You can add a custom db url in the env config. On start, seed data will be loaded to the db
3. `yarn start` on the client
4. The app uses a google maps api key meant for developement purposes only, you can add your own key in the env config

## Next steps
* Add routing to app to expand features and make the search bookmarkable
* Save search preferences in local storage
* Add testing
* Improve usability of map
* Improve table design and functionality 
* Add autocomplete to address search bar
