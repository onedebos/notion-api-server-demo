// Make operations on the DB

const notion = require('../services/notion')
const databaseId = process.env.NOTION_DATABASE_ID

const bootcampModel = {
    listDbs: async () =>{
        const res = await notion.databases.retrieve({ database_id: databaseId });
       console.log(res)
        return res;
    }
}



module.exports = bootcampModel;