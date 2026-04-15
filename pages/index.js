import { useState, useEffect } from 'react'
import Head from 'next/head'

export default function Dashboard() {
  const [lang, setLang] = useState('id')
  const [activeModal, setActiveModal] = useState(null)
  const [dessertModal, setDessertModal] = useState({show: false, title: '', price: '', img: ''})

  const translations = {
    en: {
      'hero-title': 'TOTAL FRUIT',
      'hero-tagline': 'Taste the health, feel the cloud.',
      'hero-sub': 'Signature Gold Edition',
      'hero-desc': 'Premium cut fruit with a gourmet experience.',
      'hero-btn': 'SEE MENU',
      'about-title': 'ABOUT US',
      'about-text': 'TotalFruit is the <strong>first and only</strong> premium dessert brand in Cibaling Pandeglang Banten bringing 5-star quality to street stall level.<br><br>We combine quality ingredients – grade A fruits and our signature <strong>Kuah Sultan</strong> recipe – handcrafted fresh daily.<br><br><strong>TotalFruit: Street Cart, Sultan Taste.</strong>',
      'juice-title': 'JUICE',
      'juice-desc': '100% Natural ingredients, no artificial coloring or flavors',
      'dessert-title': 'SIGNATURE DESSERT',
      'dessert-desc': 'No Water • No Coconut Milk • No Added Sugar • Rich Fiber',
      'dessert-modal-btn': 'Order Here'
    },
    id: {
      'hero-title': 'TOTAL FRUIT',
      'hero-tagline': 'Rasakan sehatnya, nikmati kelembutannya.',
      'hero-sub': 'Signature Gold Edition',
      'hero-desc': 'Potongan buah premium dengan pengalaman ala gourmet.',
      'hero-btn': 'LIHAT MENU',
      'about-title': 'TENTANG KAMI',
      'about-text': 'TotalFruit adalah brand dessert premium <strong>pertama dan satu-satunya</strong> di Cibaliung Pandeglang Banten yang berani bawa kualitas bintang 5 ke level gerobakan.<br><br>Kami memadukan bahan dasar berkualitas — buah grade A dan resep <strong>Kuah Sultan</strong> signature — yang diolah langsung oleh tangan setiap hari.<br><br><strong>TotalFruit: Gerobakan Rasa Sultan.</strong>',
      'juice-title': 'JUS',
      'juice-desc': '100% Bahan alami, tanpa pewarna atau perisa buatan',
      'dessert-title': 'SIGNATURE DESSERT',
      'dessert-desc': 'Tanpa Air • Tanpa Santan • Tanpa Tambahan Gula • Kaya Serat',
      'dessert-modal-btn': 'Pesan Sekarang'
    }
  }

  const juiceMenu = [
    { id: 'avocado', name: '🥑 Alpukat', title: 'AVOCADO SERIES', img: '/Menu-avocado.png' },
    { id: 'mango', name: '🥭 Mangga', title: 'MANGO SERIES', img: '/Menu-mango.png' },
    { id: 'banana', name: '🍌 Pisang', title: 'BANANA SERIES', img: '/Menu-banana.png' },
    { id: 'strawberry', name: '🍓 Stroberi', title: 'STRAWBERRY SERIES', img: '/Menu-strawberry.png' },
    { id: 'dragon', name: '🐉 Buah Naga', title: 'DRAGON SERIES', img: '/Menu-dragonfruit.png' },
  ]

  useEffect(() => {
    const currentLang = localStorage.getItem('lang') || 'id'
    setLang(currentLang)
  }, [])

  const switchLang = (newLang) => {
    setLang(newLang); localStorage.setItem('lang', newLang)
  }

  const openJuice = (item) => { setActiveModal(item); document.body.style.overflow = 'hidden' }
  const openDessert = (title, price, img) => { setDessertModal({show: true, title, price, img}); document.body.style.overflow = 'hidden' }
  const closeModal = () => { setActiveModal(null); setDessertModal({show: false, title: '', price: '', img: ''}); document.body.style.overflow = 'auto' }

  const t = (key) => translations[lang][key] || key

  return (
    <>
      <Head>
        <title>TOTAL FRUIT | Signature Gold</title>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <style jsx global>{`
        *{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{background:#000;color:#fff;font-family:'Poppins',sans-serif;padding-top:90px}
    .container{max-width:700px;margin:0 auto;padding:0 20px;text-align:center}

        /* Navbar - HEADER RAPIN */
    .navbar{position:fixed;top:0;left:0;width:100%;height:90px;background:#000;z-index:1000;border-bottom:2px solid #FFD700}
    .navbar-inner{width:100%;max-width:700px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;padding:15px 20px 13px;position:relative}
    .navbar-logo{height:34px}
    .nav-links{position:absolute;left:50%;transform:translateX(-50%);display:flex;gap:20px;font-size:12px;text-transform:uppercase;font-weight:600;align-items:center}
    .nav-links a{color:#ccc;text-decoration:none}
    .lang-box{position:absolute;right:20px;display:flex;gap:6px;align-items:center}
    .lang-btn{cursor:pointer;transition:0.3s;font-size:11px;font-weight:600}

        /* Sections */
        section{padding:50px 0;text-align:center}
        section h2{font-family:'Cinzel',serif;font-size:1.75rem;color:#FFD700;margin-bottom:20px;width:100%}
        section p{color:#ccc;line-height:1.6;margin-bottom:20px;max-width:100%}

        /* Hero - JARAK CROWN DIBENERIN */
    .hero{padding-top:85px}
    .title{font-family:'Cinzel',serif;font-size:2.2rem;color:#FFD700;margin-bottom:8px;position:relative;display:inline-block}
    .crown-1::before{content:'👑';position:absolute;top:-1.9em;left:50%;transform:translateX(-50%) scale(0.9);font-size:1em;color:#FFD700;filter:drop-shadow(0 0 10px #FFD700)}

        /* Buttons */
    .btn-gold{background:linear-gradient(90deg,#FFD700,#FFA500);color:#000;padding:12px 25px;border-radius:25px;font-weight:bold;border:none;cursor:pointer;display:inline-block;text-decoration:none}
    .menu-btn{width:100%;background:#111;border:1px solid #D4AF37;color:#D4AF37;padding:16px;border-radius:15px;margin-bottom:12px;font-weight:bold;cursor:pointer}

        /* Modal */
    .modal{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.95);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px}
    .modal-content{background:#111;width:100%;max-width:450px;border-radius:20px;border:1px solid #FFD700;padding:25px;position:relative;text-align:center}
    .close-modal{position:absolute;top:10px;right:20px;font-size:32px;color:#FFD700;cursor:pointer}

        /* Footer */
        footer{background:#050505;padding:60px 20px 30px;text-align:center;border-top:1px solid #D4AF37;margin-top:40px}
    .footer-logo-img{height:45px;margin-bottom:20px}
    .social-btn{color:#D4AF37;text-decoration:none;font-size:0.75rem;border:1px solid #D4AF37;padding:8px 16px;border-radius:5px;margin:0 5px}

    .wa-float{position:fixed;bottom:25px;right:25px;background:#25D366;width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 15px rgba(37,211,102,0.4);z-index:999}
      `}</style>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-inner">
          <img src="/logo.png" alt="Total Fruit" className="navbar-logo" />
          <div className="nav-links">
  <a href="#home">HOME</a>
  <a href="#about">ABOUT</a>
  <a href="#menu">MENU</a>
</div>
          <div className="lang-box">
            <span onClick={() => switchLang('id')} className="lang-btn" style={{color: lang === 'id'? '#FFD700' : '#555'}}>ID</span>
            <span style={{color:'#333'}}>/</span>
            <span onClick={() => switchLang('en')} className="lang-btn" style={{color: lang === 'en'? '#FFD700' : '#555'}}>EN</span>
          </div>
        </div>
      </nav>

      {/* Banner Promo TotalGo - CUMA INI YANG DITAMBAH */}
      <div style={{
        position:'sticky',
        top:'90px',
        background:'#FFD700',
        color:'#000',
        textAlign:'center',
        padding:'10px 12px',
        fontSize:'12px',
        fontWeight:600,
        borderBottom:'1px solid #D4AF37',
        zIndex:998
      }}>
        Pesan lebih cepat pake app <a href="https://total-go.vercel.app" target="_blank" rel="noopener noreferrer" style={{color:'#000',textDecoration:'underline',fontWeight:700}}>TotalGo</a> → Disc 10%.
      </div>
      {/* End Banner */}

      <div className="container">
        {/* HERO */}
        <section id="home" className="hero">
          <h1 className="title crown-1">{t('hero-title')}</h1>
          <p style={{letterSpacing:'3px', color:'#D4AF37', fontSize:'0.75rem', marginTop:'15px'}}>{t('hero-tagline')}</p>
          <p>{t('hero-desc')}</p>
          <a href="#menu" className="btn-gold">{t('hero-btn')}</a>
        </section>

        {/* ABOUT - POSISI TENGAH */}
        <section id="about">
          <h2>{t('about-title')}</h2>
          <p dangerouslySetInnerHTML={{__html: t('about-text')}}></p>
        </section>

        {/* JUICE - POSISI TENGAH */}
        <section id="menu">
          <h2>{t('juice-title')}</h2>
          <p>{t('juice-desc')}</p>
          {juiceMenu.map((item) => (
            <button key={item.id} className="menu-btn" onClick={() => openJuice(item)}>
              {item.name}
            </button>
          ))}
        </section>

        {/* DESSERT - POSISI TENGAH */}
        <section style={{background:'#0a0a0a', borderRadius:'20px', padding:'40px 20px'}}>
          <h2>{t('dessert-title')}</h2>
          <p style={{fontSize:'0.8rem', color:'#888'}}>{t('dessert-desc')}</p>

          <button className="menu-btn" onClick={() => openDessert('Es Teler Sultan Signature Gold', '30.000', '/Menu-dessert.png')}>
            🥑🥭 Es Teler Sultan Signature Gold
          </button>
          <button className="menu-btn" onClick={() => openDessert('Ketan Mangga Sultan', '35.000', '/Menu-dessert.png')}>
            🥭 Ketan Mangga Super Creamy
          </button>
          <button className="menu-btn" onClick={() => openDessert('Fruit Sando Premium', '15.000', '/Menu-dessert.png')}>
            🍓🥝 Fruit Sando Premium
          </button>
        </section>
      </div>

      {/* MODAL JUICE */}
      {activeModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closeModal}>×</span>
            <h2 style={{fontSize:'1.2rem', marginBottom:'15px'}}>{activeModal.title}</h2>
            <img src={activeModal.img} style={{width:'100%', borderRadius:'10px', marginBottom:'20px'}} alt="Menu" />
            <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
              <button className="btn-gold" onClick={() => window.open(`https://wa.me/628512444513?text=Order ${activeModal.id} Lite`)}>LITE - 18K</button>
              <button className="btn-gold" onClick={() => window.open(`https://wa.me/628512444513?text=Order ${activeModal.id} Healthy`)}>HEALTHY - 25K</button>
              <button className="btn-gold" onClick={() => window.open(`https://wa.me/628512444513?text=Order ${activeModal.id} Sultan Edition`)}>SULTAN - 45K 👑</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DESSERT */}
      {dessertModal.show && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closeModal}>×</span>
            <img src={dessertModal.img} style={{width:'100%', borderRadius:'10px', marginBottom:'15px'}} />
            <h2 style={{color:'#D4AF37'}}>{dessertModal.title}</h2>
            <p style={{fontSize:'1.5rem', margin:'10px 0'}}>IDR {dessertModal.price}</p>
            <button className="btn-gold" style={{width:'100%'}} onClick={() => window.open(`https://wa.me/628512444513?text=Halo Total Fruit, mau order ${dessertModal.title}`)}>
              {t('dessert-modal-btn')}
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer>
        <img src="/logo.png" alt="Total Fruit" className="footer-logo-img" />
        <p style={{fontSize:'0.9rem', color:'#bbb', marginBottom:'20px'}}>Pariuk Nangkub Harmoni Land<br/>Cibaliung, Pandeglang, Banten</p>
        <div style={{marginBottom:'30px'}}>
          <a href="https://instagram.com/totalfruit.id" target="_blank" className="social-btn">INSTAGRAM</a>
          <a href="https://wa.me/628512444513" target="_blank" className="social-btn">WHATSAPP</a>
        </div>
        <p style={{fontSize:'0.65rem', color:'#444', letterSpacing:'2px'}}>© 2026 TOTAL FRUIT • TASTE THE HEALTH • FEEL THE CLOUD</p>
      </footer>

      {/* WA FLOAT */}
<a href="https://wa.me/628512444513" target="_blank" className="wa-float">
  <svg style={{width:'30px', fill:'white'}} viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.229 3.481 8.405c0 6.555-5.332 11.887-11.887 11.887-2.012 0-3.987-.512-5.741-1.488l-6.244 1.713zm5.862-4.102l.362.216c1.3.774 2.793 1.183 4.317 1.183 4.608 0 8.356-3.748 8.356-8.356 0-2.233-.869-4.332-2.447-5.91s-3.677-2.447-5.91-2.447c-4.607 0-8.355 3.748-8.355 8.356 0 1.638.481 3.232 1.391 4.611l.237.359-1.002 3.66 3.75-.989z"/></svg>
</a>

{/* TIKTOK FLOAT */}
<a href="https://tiktok.com/@totalfruit.id" target="_blank" className="wa-float" style={{bottom:'95px', background:'#000', border:'2px solid #FFD700', boxShadow:'0 4px 15px rgba(255,215,0,0.4)'}}>
  <svg style={{width:'28px', fill:'#FFD700'}} viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 0 00-.88-.05A6.33 0 005 20.1a6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>
</a>
    </>
  )
}