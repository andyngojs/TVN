import { isNotionClientError } from "@notionhq/client";
import { TYPE_PROP } from "@/constants/notion.constant";

export function handleCatchError(error) {
  if (isNotionClientError(error)) {
    // error is now strongly typed to NotionClientError
    switch (error.code) {
      case ClientErrorCode.RequestTimeout:
        console.log("error_notion_RequestTimeout: ", error.message);
        break;
      case APIErrorCode.ObjectNotFound:
        console.log("error_notion_ObjectNotFound: ", error.message);
        break;
      case APIErrorCode.Unauthorized:
        console.log("error_notion_Unauthorized: ", error.message);
        break;
      default:
        // you could even take advantage of exhaustiveness checking
        assertNever(error.code);
    }
  }
}

export const handlePropertyValue = (property) => {
  switch (property.type) {
    case TYPE_PROP.RICH_TEXT:
      if (property[TYPE_PROP.RICH_TEXT].length === 0) {
        return null;
      }
      const data = property[TYPE_PROP.RICH_TEXT][0];
      return data.type == "text" ? data.text.content : data.plain_text;
    case TYPE_PROP.TITLE:
      if (property[TYPE_PROP.TITLE].length === 0) {
        return;
      }
      const title = property[TYPE_PROP.TITLE][0];
      return title.type == "text" ? title.text.content : title.plain_text;
    case TYPE_PROP.FILES:
      if (property[TYPE_PROP.FILES].length === 0) {
        return;
      }
      const file = property[TYPE_PROP.FILES][0];
      return file[TYPE_PROP.FILE].url;
    case TYPE_PROP.NUMBER:
      // Handle number property
      // Access and process numeric value
      break;
    case TYPE_PROP.SELECT:
      // Handle select property
      // Access and process selected option
      break;
    case TYPE_PROP.MULTI_SELECT:
      // Handle multi-select property
      // Access and process selected options
      break;
    case TYPE_PROP.DATE:
      // Handle date property
      // Access and process date value
      break;
    case TYPE_PROP.CHECKBOX:
      // Handle checkbox property
      // Access and process checkbox value (true/false)
      break;
    case TYPE_PROP.PEOPLE:
      // Handle people property
      // Access and process linked user objects
      break;
    case TYPE_PROP.URL:
      // Handle URL property
      // Access and process URL value
      break;
    case TYPE_PROP.FORMULA:
      // Handle formula property
      // Access and process formula value
      break;
    case TYPE_PROP.RELATION:
      // Handle relation property
      // Access and process related database pages
      break;
    case TYPE_PROP.ROLLUP:
      // Handle rollup property
      // Access and process rollup values
      break;
    case TYPE_PROP.COLOR:
      // Handle color property
      // Access and process color value
      break;
    case TYPE_PROP.RATING:
      // Handle rating property
      // Access and process rating value (1-5 stars)
      break;
    case TYPE_PROP.PAGE:
      // Handle page property
      // Access and process linked Notion page
      break;
    case TYPE_PROP.CREATED_TIME:
      // Handle created time property
      // Access and process created timestamp
      break;
    case TYPE_PROP.LAST_EDITED_TIME:
      // Handle last edited time property
      // Access and process last edited timestamp
      break;
    default:
    //   console.warn(`Unknown property type: ${property.type}`);
  }
};
