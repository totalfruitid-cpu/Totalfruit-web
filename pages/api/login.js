export default function handler(req, res) {
  if (req.method === 'POST') {
    const { user, pass } = req.body
    if (user === 'perbah' && pass === 'totalgo') {
      return res.status(200).json({ token: 'buah-123', msg: 'Login sukses bro' })
    } else {
      return res.status(401).json({ msg: 'Username/password salah' })
    }
  }
  res.status(200).json({ msg: 'API TotalFruit nyala 🔥' })
}
