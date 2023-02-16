export default async function likeproduct(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  const body = JSON.parse(req.body);
  res.status(200).send(body);
}
