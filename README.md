# REACT APP - FOOTBALL API
## A simple REACT app to render the data fetched from API.

## Tech
### Backend
- [NodeJs](https://nodejs.org/en) - For server.
- [ExpressJs](https://expressjs.com/) - For simplifying api handling.
- [Dotenv](https://github.com/motdotla/dotenv#readme) - To load environment variables from .env into process.env.
- [Cors](https://github.com/expressjs/cors#readme) - For handling CORS activity.
- [Cheerio](https://cheerio.js.org/) - For web scrapping.

Some other libraries used for development.
- [Morgan](https://github.com/expressjs/morgan#readme) - For checking the apis while development.
- [Nodemon](https://nodemon.io/) - For development pupose.
- [Concurrently](https://github.com/open-cli-tools/concurrently#readme) - For running the Node server and React client together at same CLI.

### Backend
- [ReactJs](https://react.dev/) - Frontend library.

CDN used
- [Bootstrap](https://getbootstrap.com/) - For basic styling and icons.

API used
-[Rapid API](https://rapidapi.com/api-sports/api/api-football/) - Rapid API for football data.

## Project
Install the required packages
Frontend:
```sh
cd cd_by_ab_react
npm install
```
Backend:
```sh
cd cd_by_ab_react
npm install
```

For API keys...
```sh
cd cd_by_ab_react
touch .env.local
```
And add your API 
```sh
REACT_APP_API_KEY = your api key
```

To run the project...
```sh
cd cd_by_ab_react
npm run conc
```

## Preview
Here are some screenshots of the project.

The NEWS (web scrapped)...

<img 
     src="https://github.com/Ajay-Kr/from_ab/assets/55989070/66ff63cd-d096-4df7-926c-11225a99a5f5" 
     data-canonical-src="https://github.com/Ajay-Kr/from_ab/assets/55989070/66ff63cd-d096-4df7-926c-11225a99a5f5" 
     width="700" align="center"
/>

The top players...

<img 
     src="https://github.com/Ajay-Kr/from_ab/assets/55989070/59b9cbdb-4c42-4e29-9746-2a492a057be1" 
     data-canonical-src="https://github.com/Ajay-Kr/from_ab/assets/55989070/59b9cbdb-4c42-4e29-9746-2a492a057be1" 
     width="700" align="center"
/>

