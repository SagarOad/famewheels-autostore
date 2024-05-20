export default function handler(req, res) {
    const token = Math.random().toString(36).substr(2); // simple token generation
    res.status(200).json({ token });
  }
  