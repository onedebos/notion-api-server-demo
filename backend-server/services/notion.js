// In this file, we connect to the Notion Service

require('dotenv').config()

const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_TOKEN });

module.exports = notion;
