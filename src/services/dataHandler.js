import { get } from "./handler.base";

const BASE_URL_API =
  "https://script.google.com/macros/s/AKfycbx8tHKf5BYqzd50jID6rr_3ooQv9mItt6GpdJnuI2OhRfzZHqlkQkecyu3n3sQIuAaOHQ/exec";

export async function getDataHandler() {
  try {
    const data = await get(BASE_URL_API);

    const arrData = Object.entries(data).map((item, index) => {
      if (item[1].match(/(drive.google.com)/)) {
        item[1] = getDriveImageUrl(item[1]);
      }

      return item;
    });

    const dataFormatted = Object.fromEntries(arrData);

    return dataFormatted;
  } catch (error) {
    console.log(error);
  }
}

function getDriveImageUrl(shareUrl) {
  const fileId = shareUrl.match(/[-\w]{25,}/)[0];
  const imageUrl = `https://lh3.googleusercontent.com/d/${fileId}`;
  return imageUrl;
}
