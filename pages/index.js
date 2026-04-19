import { useState, useEffect } from 'react'
import Head from 'next/head'

export default function Home() {
  const [active, setActive] = useState(null)

  const menu = [
    { id: 'avocado', name: '🥑 Avocado Series', img: '/Menu-avocado.png' },
    { id: 'mango', name: '🥭 Mango Series', img: '/Menu-mango.png' },
    { id: 'banana', name: '🍌 Banana Series', img: '/Menu-banana.png' },
    { id: 'strawberry', name: '🍓 Strawberry Series', img: '/Menu-strawberry.png' },
  ]

  const open = (item) => {
    setActive(item)
    document.body.style.overflow = 'hidden'
  }

  const close = () => {
    setActive(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <>
      <Head>
        <title>Total Fruit Premium</title>
      </Head>

      <style jsx global>{`
        *{margin:0;padding:0;box-sizing:border-box}
        body{
          background:#000;
          color:#fff;
          font-family:'Poppins',sans-serif;
        }

        .container{
          max-width:700px;
          margin:auto;
          padding:20px;
          text-align:center;
        }

        h1{
          font-size:2.3rem;
          color:#FFD700;
          margin-bottom:10px;
        }

        .hero-img{
          width:100%;
          border-radius:20px;
          margin:20px 0;
          box-shadow:0 10px 40px rgba(255,215,0,0.25);
          animation:fadeIn 1s ease;
        }

        .btn{
          background:linear-gradient(90deg,#FFD700,#FFA500);
          color:#000;
          padding:14px 25px;
          border-radius:30px;
          font-weight:bold;
          display:inline-block;
          margin-top:10px;
          text-decoration:none;
          transition:0.3s;
        }

        .btn:hover{
          transform:scale(1.05);
        }

        .menu-card{
          background:#111;
          border:1px solid #FFD700;
          padding:15px;
          border-radius:15px;
          margin:12px 0;
          display:flex;
          align-items:center;
          gap:10px;
          cursor:pointer;
          transition:0.3s;
        }

        .menu-card:hover{
          transform:scale(1.03);
          background:#1a1a1a;
        }

        .float{
          position:fixed;
          right:20px;
          width:60px;
          height:60px;
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          z-index:999;
          transition:0.3s;
        }

        .float:hover{
          transform:scale(1.1);
        }

        .promo{
          background:#FFD700;
          color:#000;
          padding:12px;
          text-align:center;
          font-weight:bold;
          position:sticky;
          top:0;
          z-index:1000;
        }

        .fade{
          animation:fadeIn 0.8s ease;
        }

        @keyframes fadeIn{
          from{opacity:0;transform:translateY(20px)}
          to{opacity:1;transform:translateY(0)}
        }

        .modal{
          position:fixed;
          top:0;left:0;
          width:100%;
          height:100%;
          background:rgba(0,0,0,0.95);
          display:flex;
          align-items:center;
          justify-content:center;
          z-index:9999;
        }

        .modal-box{
          background:#111;
          padding:25px;
          border-radius:20px;
          border:1px solid #FFD700;
          width:90%;
          max-width:400px;
          text-align:center;
        }

      `}</style>

      {/* PROMO */}
      <div className="promo">
        🔥 Diskon 10% via TotalGo — Buruan!
      </div>

      <div className="container fade">

        {/* HERO */}
        <h1>👑 TOTAL FRUIT</h1>
        <p style={{color:'#aaa'}}>Taste the health, feel the cloud</p>

        <img src="/hero-product.png" className="hero-img" />

        <p style={{marginTop:'10px'}}>
          Fresh setiap hari • Tanpa gula tambahan • Creamy & nagih 🤤
        </p>

        <a href="#menu" className="btn">LIHAT MENU</a>

        <p style={{marginTop:'20px',color:'#bbb'}}>
          ⭐ 100+ pelanggan puas • Repeat order tinggi
        </p>

        {/* MENU */}
        <h2 id="menu" style={{marginTop:'40px'}}>MENU FAVORIT</h2>

        {menu.map(item => (
          <div key={item.id} className="menu-card" onClick={()=>open(item)}>
            <img src={item.img} width="45" style={{borderRadius:'10px'}} />
            {item.name}
          </div>
        ))}

      </div>

      {/* MODAL */}
      {active && (
        <div className="modal" onClick={close}>
          <div className="modal-box" onClick={(e)=>e.stopPropagation()}>
            <h2>{active.name}</h2>
            <img src={active.img} style={{width:'100%',borderRadius:'10px',margin:'15px 0'}}/>

            <a className="btn" href={`https://wa.me/6285124441513?text=Order ${active.name}`}>
              Pesan Sekarang
            </a>
          </div>
        </div>
      )}

      {/* TIKTOK */}
      <a href="https://tiktok.com/@totalfruit.id" target="_blank"
        className="float"
        style={{bottom:'90px',background:'#000'}}>
        <svg viewBox="0 0 24 24" width="28" fill="white">
          <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.208h-3.27v13.593a2.998 2.998 0 1 1-2.998-2.998c.2 0 .394.02.583.057v-3.31a6.308 6.308 0 0 0-.583-.028A6.308 6.308 0 1 0 15.858 16V8.687a8.07 8.07 0 0 0 4.73 1.553V6.686z"/>
        </svg>
      </a>

      {/* WA */}
      <a href="https://wa.me/6285124441513" target="_blank"
        className="float"
        style={{bottom:'20px',background:'#25D366'}}>
        WA
      </a>

    </>
  )
}