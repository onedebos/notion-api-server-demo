// Make operations on the DB

const notion = require("../services/notion");
const courseDatabaseId = process.env.NOTION_DATABASE_ID;
const mailingListDatabaseId = process.env.NOTION_MAILING_LIST_ID;

const bootcampModel = {
  // list all the courses in the DB
  queryCourses: async () => {
    try {
      const { results } = await notion.databases.query({
        database_id: courseDatabaseId,
      });

      const res = results.map((page) => {
        return {
          pageId: page.id,
          videoURL: page.properties["YouTube Video"].url,
          title: page.properties.Name.title[0].plain_text,
          tags: page.properties.Tags.multi_select.map((tag) => tag.name),
          summary: page.properties.Summary.rich_text[0].plain_text,
          author: page.properties.Author.rich_text[0].plain_text,
          startDate: page.properties.Date.date.start,
          endDate: page.properties.Date.date.end,
        };
      });

      return res;
    } catch (error) {
      console.error(error);
    }
  },

  getSubscribersFromDB: async () => {
    try {
      const { results } = await notion.databases.query({
        database_id: mailingListDatabaseId,
      });

      const res = results.map((page) => {
        return {
          name: page.properties.Name.title[0]?.text.content,
          email: page.properties["E-mail"].multi_select[0]?.name,
        };
      });

      return res;
    } catch (error) {
      console.error(error);
    }
  },

  addSubscriberToDB: async ({ name, email }) => {
    try {
      const res = await notion.pages.create({
        parent: {
          database_id: mailingListDatabaseId,
        },
        properties: {
          Name: {
            title: [
              {
                text: { content: name, link: null },
                plain_text: name,
              },
            ],
          },
          "E-mail": {
            multi_select: [
              {
                name: email,
              },
            ],
          },
        },
      });

      return res;
    } catch (error) {
      return {
        error: "Failed to add user to Mailing List",
      };
    }
  },

  findSubscriberByEmail: async ({ email }) => {
    try {
      const { results } = await notion.databases.query({
        database_id: mailingListDatabaseId,
        filter: {
          or: [
            {
              property: "E-mail",
              multi_select: {
                contains: email,
              },
            },
          ],
        },
      });

      // check if the results array contains a user
      if (results.length > 0) {
        return {
          isUserInDB: true,
        };
      }

      return {
        isUserInDB: false,
      };
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = bootcampModel;
