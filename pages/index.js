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
    if (res.ok) setPesan('✅ Login sukses! Token: ' + data.token)
    else setPesan('❌ ' + data.error)
  }

  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#f5f5f5',fontFamily:'system-ui'}}>
      <div style={{background:'white',padding:40,borderRadius:12,boxShadow:'0 4px 20px rgba(0,0,0,0.1)',width:'100%',maxWidth:360}}>
        <h1 style={{textAlign:'center',marginTop:0,marginBottom:30}}>TOTAL FRUIT</h1>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} required style={{width:'100%',padding:12,marginBottom:15,border:'1px solid #ddd',borderRadius:8,fontSize:16,boxSizing:'border-box'}}/>
          <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required style={{width:'100%',padding:12,marginBottom:20,border:'1px solid #ddd',borderRadius:8,fontSize:16,boxSizing:'border-box'}}/>
          <button type="submit" disabled={loading} style={{width:'100%',padding:12,background:loading?'#ccc':'#0070f3',color:'white',border:'none',borderRadius:8,fontSize:16,fontWeight:'bold',cursor:loading?'not-allowed':'pointer'}}>
            {loading?'Loading...':'Login'}
          </button>
        </form>
        {pesan && <p style={{textAlign:'center',marginTop:20,marginBottom:0,padding:10,background:pesan.includes('✅')?'#d4edda':'#f8d7da',color:pesan.includes('✅')?'#155724':'#721c24',borderRadius:8,fontSize:14}}>{pesan}</p>}
        <p style={{textAlign:'center',marginTop:20,fontSize:12,color:'#666'}}>Test: admin / 1234</p>
      </div>
    </div>
  )
}
