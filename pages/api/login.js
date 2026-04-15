export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }
  const { username, password } = req.body
  if (username === 'admin' && password === '1234') {
    res.status(200).json({ token: 'fake-jwt-token-totalfruit' })
  } else {
    res.status(401).json({ error: 'Username/password salah' })
  }
}
