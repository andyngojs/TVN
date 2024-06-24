import { Client, LogLevel } from "@notionhq/client";
import { handleCatchError, handlePropertyValue } from "@/helpers/notion";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
  logLevel: LogLevel.DEBUG,
});

export const getDatabase = async ({
  dbId = process.env.NOTION_DB_PAGES_KEY,
}) => {
  try {
    const db = await notion.databases.query({
      database_id: dbId,
    });

    const reformatted_data = db.results.map((page, index) => {
      const arrPropertiesFormatted = Object.entries(page.properties).map(
        (item) => {
          return [item[0], (item[1] = handlePropertyValue(item[1]))];
        }
      );
      const propertiesFormatted = Object.fromEntries(arrPropertiesFormatted);

      return {
        ...propertiesFormatted,
      };
    });

    return reformatted_data;
  } catch (error) {
    handleCatchError(error);
  }
};
