export async function likeProduct(req, res) {
  if (req.method === "POST") {
    const body = res.json(req.body);
    return body;
  }
}
