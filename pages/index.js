import { useState, useEffect } from 'react'
import Head from 'next/head'

export default function Dashboard() {
  const [lang, setLang] = useState('id')
  const [activeModal, setActiveModal] = useState(null) // Untuk Juice Series
  const [dessertModal, setDessertModal] = useState({show: false, title: '', price: '', img: ''})

  const translations = {
    en: {
      'hero-title': 'TOTAL FRUIT',
      'hero-tagline': 'Taste the health, feel the cloud.',
      'hero-sub': 'Signature Gold Edition',
      'hero-desc': 'Premium cut fruit with a gourmet experience.',
      'hero-btn': 'SEE MENU',
      'about-title': 'ABOUT US',
      'about-text': 'TotalFruit is the <strong>first and only</strong> premium dessert brand in Cigeulis bringing 5-star quality to street stall level.<br><br>We combine quality ingredients – grade A fruits and our signature <strong>Kuah Sultan</strong> recipe – handcrafted fresh daily. No machines, no factory. Fresh, thick, creamy, royal.<br><br>From a humble street cart, our mission is clear: elevate local dessert standards. Proving premium doesn\'t have to be expensive, and delicious doesn\'t have to be complicated.<br><br><strong>TotalFruit: Street Cart, Sultan Taste.</strong>',
      'juice-title': 'JUICE',
      'juice-desc': '100% Natural ingredients, no artificial coloring or flavors',
      'dessert-title': 'SIGNATURE DESSERT',
      'dessert-desc': 'No Water • No Coconut Milk • No Added Sugar • Rich Fiber',
      'dessert-modal-desc': '100% Natural • No Coconut Milk • No Added Sugar',
      'dessert-modal-btn': 'Order Here'
    },
    id: {
      'hero-title': 'TOTAL FRUIT',
      'hero-tagline': 'Rasakan sehatnya, nikmati kelembutannya.',
      'hero-sub': 'Signature Gold Edition',
      'hero-desc': 'Potongan buah premium dengan pengalaman ala gourmet.',
      'hero-btn': 'LIHAT MENU',
      'about-title': 'TENTANG KAMI',
      'about-text': 'TotalFruit adalah brand dessert premium <strong>pertama dan satu-satunya</strong> di Cigeulis yang berani bawa kualitas bintang 5 ke level gerobakan.<br><br>Kami memadukan bahan dasar berkualitas — buah grade A dan resep <strong>Kuah Sultan</strong> signature — yang diolah langsung oleh tangan setiap hari. Nggak ada mesin, nggak ada pabrik. Fresh, kental, creamy, royal.<br><br>Dari stand gerobakan sederhana, misi kami jelas: bikin standar dessert lokal naik kelas. Buktikan kalo premium nggak harus mahal, dan enak nggak harus ribet.<br><br><strong>TotalFruit: Gerobakan Rasa Sultan.</strong>',
      'juice-title': 'JUS',
      'juice-desc': '100% Bahan alami, tanpa pewarna atau perisa buatan',
      'dessert-title': 'SIGNATURE DESSERT',
      'dessert-desc': 'Tanpa Air • Tanpa Santan • Tanpa Tambahan Gula • Kaya Serat',
      'dessert-modal-desc': '100% Natural • Tanpa Santan • Tanpa Tambahan Gula',
      'dessert-modal-btn': 'Pesan Sekarang'
    }
  }

  // Data Menu untuk Loop (Biar Kode Bersih)
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

  const openJuice = (item) => {
    setActiveModal(item); document.body.style.overflow = 'hidden'
  }

  const openDessert = (title, price, img) => {
    setDessertModal({show: true, title, price, img}); document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setActiveModal(null); setDessertModal({show: false, title: '', price: '', img: ''})
    document.body.style.overflow = 'auto'
  }

  const t = (key) => translations[lang][key] || key

  return (
    <>
      <Head>
        <title>TOTAL FRUIT | Signature Gold Edition</title>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <style jsx global>{`
        *{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{background:#000;color:#fff;font-family:'Poppins',sans-serif;padding-top:80px;padding-bottom:100px}
        .container{max-width:700px;margin:0 auto;padding:0 20px}
        
        /* Navbar */
        .navbar{position:fixed;top:0;left:0;width:100%;height:80px;background:#000;z-index:1000;border-bottom:2px solid #FFD700;display:flex;align-items:center}
        .navbar-inner{width:100%;max-width:700px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;padding:0 20px}
        .navbar-logo{height:30px}
        .nav-links{display:flex;gap:15px;font-size:12px;text-transform:uppercase;font-weight:600}
        .nav-links a{color:#ccc;text-decoration:none;transition:0.3s}
        .nav-links a:hover{color:#FFD700}

        /* Hero */
        .hero{padding:60px 0;text-align:center}
        .title{font-family:'Cinzel',serif;font-size:2.5rem;background:linear-gradient(90deg,#FFD700,#FFA500);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:10px}
        .crown-1{position:relative;display:inline-block}
        .crown-1::before{content:'👑';position:absolute;top:-1.2em;left:50%;transform:translateX(-50%);font-size:1.2rem;-webkit-text-fill-color:initial}
        .tagline{font-size:0.8rem;letter-spacing:3px;color:#D4AF37;text-transform:uppercase;margin-bottom:20px}

        /* Buttons & Cards */
        .btn-gold{background:linear-gradient(90deg,#FFD700,#FFA500);color:#000;padding:12px 25px;border-radius:25px;text-decoration:none;font-weight:bold;display:inline-block;border:none;cursor:pointer;transition:0.3s}
        .btn-gold:hover{transform:scale(1.05);box-shadow:0 0 15px rgba(255,215,0,0.4)}
        .menu-btn{width:100%;background:#111;border:1px solid #D4AF37;color:#D4AF37;padding:15px;border-radius:15px;margin-bottom:10px;font-weight:bold;cursor:pointer;transition:0.3s;font-size:1rem}
        .menu-btn:hover{background:#D4AF37;color:#000}

        /* Modal */
        .modal{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px}
        .modal-content{background:#111;width:100%;max-width:450px;border-radius:20px;border:1px solid #FFD700;padding:25px;position:relative;text-align:center}
        .close-modal{position:absolute;top:15px;right:20px;font-size:28px;color:#FFD700;cursor:pointer}

        /* Footer */
        footer{background:#050505;padding:60px 20px 30px;text-align:center;border-top:1px solid #D4AF37;margin-top:50px}
        .footer-logo-img{height:45px;margin-bottom:20px;filter:drop-shadow(0 0 8px rgba(212,175,55,0.3))}
        .footer-socials{display:flex;justify-content:center;gap:15px;margin:20px 0}
        .social-btn{color:#D4AF37;text-decoration:none;font-size:0.75rem;font-weight:600;border:1px solid rgba(212,175,55,0.5);padding:10px 20px;border-radius:5px;transition:0.3s}
        .social-btn:hover{background:#D4AF37;color:#000}

        .wa-float{position:fixed;bottom:30px;right:25px;background:#25D366;width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 15px rgba(37,211,102,0.4);z-index:999}
      `}</style>

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-inner">
          <img src="/logo.png" alt="Total Fruit" className="navbar-logo" />
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <div onClick={() => switchLang(lang === 'id' ? 'en' : 'id')} style={{cursor:'pointer', color:'#D4AF37'}}>
              {lang.toUpperCase()}
            </div>
          </div>
        </div>
      </nav>

      <div className="container">
        {/* Hero Section */}
        <section className="hero" id="home">
          <h1 className="title crown-1">{t('hero-title')}</h1>
          <p className="tagline">{t('hero-tagline')}</p>
          <p style={{fontSize:'0.9rem', color:'#888', marginBottom:'25px'}}>{t('hero-desc')}</p>
          <a href="#menu" className="btn-gold">{t('hero-btn')}</a>
        </section>

        {/* About Section */}
        <section id="about" style={{padding:'40px 0', borderTop:'1px solid #222'}}>
          <h2 style={{fontFamily:'Cinzel', color:'#FFD700', marginBottom:'20px'}}>{t('about-title')}</h2>
          <p style={{fontSize:'0.95rem', textAlign:'justify', color:'#ccc'}} dangerouslySetInnerHTML={{__html: t('about-text')}}></p>
        </section>

        {/* Juice Section */}
        <section id="menu" style={{padding:'60px 0'}}>
          <h2 style={{fontFamily:'Cinzel', fontSize:'2rem', color:'#FFD700', marginBottom:'10px'}}>{t('juice-title')}</h2>
          <p style={{color:'#666', marginBottom:'30px'}}>{t('juice-desc')}</p>
          {juiceMenu.map((item) => (
            <button key={item.id} className="menu-btn" onClick={() => openJuice(item)}>
              {item.name}
            </button>
          ))}
        </section>

        {/* Dessert Section */}
        <section style={{padding:'60px 0', background:'#0a0a0a', borderRadius:'20px'}}>
          <h2 style={{fontFamily:'Cinzel', color:'#FFD700'}}>{t('dessert-title')}</h2>
          <p style={{color:'#666', fontSize:'0.8rem', marginBottom:'30px'}}>{t('dessert-desc')}</p>
          
          <button className="menu-btn" onClick={() => openDessert('Es Teler Sultan Signature Gold', 'IDR 30.000', '/Menu-dessert.png')}>
            🥑🥭 Es Teler Sultan Signature Gold
          </button>
          <button className="menu-btn" onClick={() => openDessert('Mango Sticky Rice Sultan', 'IDR 35.000', '/Menu-dessert.png')}>
            🥭 Ketan Mangga Super Creamy
          </button>
          <button className="menu-btn" onClick={() => openDessert('Fruit Sando Premium', 'IDR 15.000', '/Menu-dessert.png')}>
            🍓 kiwi Fruit Sando Premium
          </button>
        </section>
      </div>

      {/* Dynamic Juice Modal */}
      {activeModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closeModal}>×</span>
            <h2 style={{color:'#D4AF37', marginBottom:'15px', fontSize:'1.2rem'}}>{activeModal.title}</h2>
            <img src={activeModal.img} style={{width:'100%', borderRadius:'10px', marginBottom:'20px'}} alt="Menu" />
            <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
              <button className="btn-gold" onClick={() => window.open(`https://wa.me/628512444513?text=Order ${activeModal.id} Lite`)}>LITE - 18K</button>
              <button className="btn-gold" onClick={() => window.open(`https://wa.me/628512444513?text=Order ${activeModal.id} Healthy`)}>HEALTHY - 25K</button>
              <button className="btn-gold" onClick={() => window.open(`https://wa.me/628512444513?text=Order ${activeModal.id} Sultan Edition`)}>SULTAN - 45K 👑</button>
            </div>
          </div>
        </div>
      )}

      {/* Dessert Modal */}
      {dessertModal.show && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closeModal}>×</span>
            <img src={dessertModal.img} style={{width:'100%', borderRadius:'10px', marginBottom:'15px'}} />
            <h2 style={{color:'#D4AF37'}}>{dessertModal.title}</h2>
            <p style={{fontSize:'1.5rem', margin:'10px 0'}}>{dessertModal.price}</p>
            <p style={{color:'#666', fontSize:'0.8rem', marginBottom:'20px'}}>{t('dessert-modal-desc')}</p>
            <button className="btn-gold" style={{width:'100%'}} onClick={() => window.open(`https://wa.me/628512444513?text=Order ${dessertModal.title}`)}>
              {t('dessert-modal-btn')}
            </button>
          </div>
        </div>
      )}

      {/* Premium Footer */}
      <footer>
        <div className="container">
          <img src="/logo.png" alt="Total Fruit Logo" className="footer-logo-img" />
          <div style={{color:'#bbb', fontSize:'0.9rem', marginBottom:'20px'}}>
            <p><strong>Pariuk Nangkub Harmoni Land</strong></p>
            <p>Cibaliung, Pandeglang, Banten</p>
          </div>
          <div className="footer-socials">
            <a href="https://instagram.com/totalfruit.id" target="_blank" className="social-btn">Instagram</a>
            <a href="https://wa.me/628512444513" target="_blank" className="social-btn">WhatsApp</a>
          </div>
          <div style={{borderTop:'1px solid #1a1a1a', paddingTop:'20px'}}>
            <p style={{fontSize:'0.7rem', color:'#444', letterSpacing:'2px'}}>© 2026 TOTAL FRUIT • TASTE THE HEALTH • FEEL THE CLOUD</p>
          </div>
        </div>
      </footer>

      {/* Floating WA */}
      <a href="https://wa.me/628512444513" target="_blank" className="wa-float">
        <svg style={{width:'30px', fill:'white'}} viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.229 3.481 8.405c0 6.555-5.332 11.887-11.887 11.887-2.012 0-3.987-.512-5.741-1.488l-6.244 1.713zm5.862-4.102l.362.216c1.3.774 2.793 1.183 4.317 1.183 4.608 0 8.356-3.748 8.356-8.356 0-2.233-.869-4.332-2.447-5.91s-3.677-2.447-5.91-2.447c-4.607 0-8.355 3.748-8.355 8.356 0 1.638.481 3.232 1.391 4.611l.237.359-1.002 3.66 3.75-.989zm11.531-5.462c-.279-.14-1.653-.816-1.908-.908-.256-.092-.442-.139-.628.14-.186.279-.719.908-.882 1.093-.163.186-.326.209-.605.069-.279-.14-1.18-.435-2.248-1.388-.831-.741-1.391-1.656-1.554-1.936-.163-.28-.018-.431.122-.57.126-.125.279-.325.419-.488.139-.163.186-.279.279-.465.093-.186.046-.349-.023-.488-.069-.139-.628-1.512-.86-2.07-.226-.546-.453-.472-.628-.481l-.535-.011c-.186 0-.488.07-.744.349-.256.279-.977.954-.977 2.326s1.001 2.7 1.14 2.885c.14.186 1.968 3.005 4.767 4.212.666.287 1.187.459 1.592.587.67.213 1.281.183 1.763.111.538-.08 1.653-.675 1.885-1.326.233-.651.233-1.21.163-1.326-.07-.116-.256-.186-.535-.325z"/></svg>
      </a>
    </>
  )
}