export async function handler(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function search(url) {
  const response = await fetch(url);
  const data = await response.json();
  const results = data.response;
  return results;
}

export async function searchAll(url) {
  // Use promise all to get data for both apis

  const results = Promise.all(url)
    .then((values) => Promise.all(values.map((element) => element.json())))
    .then(([productdata, searchedData, selectedData]) => {
      // deconstruct array of data from both apis responses.
      // eslint-disable-next-line no-console
      console.log(productdata, searchedData, selectedData);
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
      throw new Error("something went wrong");
    });

  return results;
}

export async function likeProduct(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  // not needed in NextJS v12+
  const body = JSON.parse(req.body);
  return body;
}
