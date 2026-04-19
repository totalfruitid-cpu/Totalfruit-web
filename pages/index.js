import { useState, useEffect } from 'react'
import Head from 'next/head'

export default function Dashboard() {
  const [lang, setLang] = useState('id')
  const [activeModal, setActiveModal] = useState(null)
  const [dessertModal, setDessertModal] = useState({show: false, title: '', price: '', img: ''})

  const translations = {
    id: {
      heroTitle: 'TOTAL FRUIT',
      heroTag: 'Rasakan sehatnya, nikmati kelembutannya.',
      heroDesc: 'Fresh setiap hari • Tanpa gula tambahan • Creamy & nagih 🤤',
      heroBtn: 'LIHAT MENU',
      about: 'TotalFruit adalah brand dessert premium pertama di Cibaliung. Gerobakan rasa sultan dengan buah grade A & kuah signature.',
      juice: 'JUS SEGAR',
      dessert: 'SIGNATURE DESSERT',
      order: 'Pesan Sekarang'
    },
    en: {
      heroTitle: 'TOTAL FRUIT',
      heroTag: 'Taste the health, feel the cloud.',
      heroDesc: 'Fresh daily • No added sugar • Creamy & addictive 🤤',
      heroBtn: 'SEE MENU',
      about: 'Premium fruit dessert brand with high quality ingredients.',
      juice: 'JUICE',
      dessert: 'SIGNATURE DESSERT',
      order: 'Order Now'
    }
  }

  const t = (key) => translations[lang][key]

  const juiceMenu = [
    { id: 'avocado', name: '🥑 Alpukat', img: '/Menu-avocado.png' },
    { id: 'mango', name: '🥭 Mangga', img: '/Menu-mango.png' },
    { id: 'banana', name: '🍌 Pisang', img: '/Menu-banana.png' },
    { id: 'strawberry', name: '🍓 Stroberi', img: '/Menu-strawberry.png' },
  ]

  useEffect(() => {
    setLang(localStorage.getItem('lang') || 'id')
  }, [])

  const openJuice = (item) => {
    setActiveModal(item)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setActiveModal(null)
    setDessertModal({show:false})
    document.body.style.overflow = 'auto'
  }

  return (
    <>
      <Head>
        <title>Total Fruit Premium</title>
      </Head>

      <style jsx global>{`
        body{margin:0;background:#000;color:#fff;font-family:sans-serif}
        .container{max-width:700px;margin:auto;padding:20px;text-align:center}
        .btn{background:gold;color:#000;padding:12px 20px;border-radius:20px;font-weight:bold}
        .menu-btn{background:#111;color:gold;padding:15px;border-radius:12px;margin:10px 0;display:flex;align-items:center;gap:10px}
        .float{position:fixed;right:20px;width:55px;height:55px;border-radius:50%;display:flex;align-items:center;justify-content:center;z-index:999}
      `}</style>

      {/* PROMO */}
      <div style={{background:'gold',color:'#000',padding:'10px',textAlign:'center',fontWeight:'bold'}}>
        🔥 Diskon 10% via TotalGo
      </div>

      <div className="container">
        {/* HERO */}
        <h1>{t('heroTitle')}</h1>
        <p>{t('heroTag')}</p>

        <img src="/hero-product.png" style={{width:'100%',borderRadius:'20px'}} />

        <p>{t('heroDesc')}</p>
        <a href="#menu" className="btn">{t('heroBtn')}</a>

        {/* TRUST */}
        <p style={{marginTop:'20px',color:'#aaa'}}>
          ⭐ 100+ pelanggan puas
        </p>

        {/* ABOUT */}
        <p>{t('about')}</p>

        {/* MENU */}
        <h2 id="menu">{t('juice')}</h2>

        {juiceMenu.map((item)=>(
          <div key={item.id} className="menu-btn" onClick={()=>openJuice(item)}>
            <img src={item.img} width="40"/>
            {item.name}
          </div>
        ))}

        <h2>{t('dessert')}</h2>

        <div className="menu-btn">🥑🥭 Es Teler Sultan</div>
      </div>

      {/* MODAL */}
      {activeModal && (
        <div style={{position:'fixed',top:0,left:0,width:'100%',height:'100%',background:'#000'}}>
          <h2>{activeModal.name}</h2>
          <button onClick={closeModal}>Close</button>
        </div>
      )}

      {/* TIKTOK */}
      <a href="https://tiktok.com/@totalfruit.id" target="_blank"
        className="float"
        style={{bottom:'90px',background:'#000'}}>
        <svg viewBox="0 0 24 24" width="26" fill="white">
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