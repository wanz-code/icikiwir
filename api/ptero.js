export default async function handler(req, res) {
  const { type } = req.query;
  const baseUrl = "https://oktb.publik-panel.my.id"; // VPS bot domain

  try {
    if (type === "connect") {
      const resp = await fetch(`${baseUrl}/connect`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body)
      });
      const data = await resp.json();
      return res.status(200).json(data);
    }

    if (type === "send") {
      const resp = await fetch(`${baseUrl}/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body)
      });
      const data = await resp.json();
      return res.status(200).json(data);
    }

    if (type === "status") {
      const { userId } = req.query;
      const resp = await fetch(`${baseUrl}/status/${userId}`);
      const data = await resp.json();
      return res.status(200).json(data);
    }

    return res.status(400).json({ error: "Invalid type" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
}
