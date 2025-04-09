export default function handler(req, res) {
  if (req.method === 'POST') {
    const { status } = req.body;

    if (status === 'paid') {
      // Respond with confirmation (you could hook this into a real database later)
      return res.status(200).json({ message: 'Status updated', status: 'paid' });
    }
  }

  res.status(405).json({ message: 'Method not allowed' });
}
const response = await fetch("/api/payment");
const data = await response.json();
if (data.status === "paid") {
  // show the button
}
