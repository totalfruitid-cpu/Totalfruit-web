import { useState } from 'react'

export default function Home() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [pesan, setPesan] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setPesan('')
    
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
    
    const data = await res.json()
    setLoading(false)
    
    if (res.ok) {
      setPesan('✅ Login sukses! Token: ' + data.token)
    } else {
      setPesan('❌ ' + data.error)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f5f5f5',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{
        background:
