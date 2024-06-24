export async function baseHandler(url, config = {}) {
  return fetch(url, config)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw new Error("error_fetch: ", err);
    });
}

export async function get(url) {
  try {
    const response = await baseHandler(url, {
      method: "get",
    });

    return response;
  } catch (e) {
    console.warn(e);
  }
}
