This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run

Run `yarn start`, which will install the dependencies and run the app in development mode.
You can open [http://localhost:3000](http://localhost:3000) to view it in the browser.

If the server is not running, the App will throw a 404.

You can test the app by typing an address in the search bar, changing the date range (the seed data goes from May 2014 to July 2014), and by checking the locations on the map.

## Technologies

* React 16
* Redux
* Material UI
* Styled Components

Because of the limited amount of styled components, they have been unified in [styled-components.js](./src/styled-components.js), instead of being coupled to the single component files.