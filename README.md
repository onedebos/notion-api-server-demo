# Notion API Demo 

This NodeJS application demonstrates how to read and write data to your Notion Workspace using the new [Notion APIs](https://developers.notion.com/reference/intro).


## Built With
- Node.js (Fastify)
- Notion API

## To test out this application, follow the steps below.

- Clone the project to your local machine
- Create an account on Notion and generate a `NOTION_ACCESS_TOKEN` and `NOTION_DATABASE_ID` according to the tutorial.
- Create a `.env` file in the root directory of this project and update it with the variables below and your keys.

```
NOTION_API_TOKEN = ''
NOTION_DATABASE_ID = ''
NOTION_MAILING_LIST_ID = ''
```

- Install the project's dependencies using `yarn intall`
- Start up the Fastify server with `yarn start`. 

The server will start on `localhost:5000`. You may then make GET and POST requests to the root endpoint using the parameters specified in the tutorial.


## Author

👤 **Adebola**

- Github: [@githubhandle](https://github.com/onedebos)
- Twitter: [@twitterhandle](https://twitter.com/debosthefirst)
- Linkedin: [linkedin](https://www.linkedin.com/in/adebola-niran/)
- Web: [Web](https://adebola.dev)

