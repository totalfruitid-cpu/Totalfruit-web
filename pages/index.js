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

body{
  background: radial-gradient(circle at top, #111, #000);
  color:#fff;
  font-family:'Poppins',sans-serif;
  padding-top:90px
}

.container{max-width:700px;margin:0 auto;padding:0 20px;text-align:center}

/* NAVBAR */
.navbar{position:fixed;top:0;left:0;width:100%;height:90px;background:#000;z-index:1000;border-bottom:2px solid #FFD700}
.navbar-inner{width:100%;max-width:700px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;padding:15px 20px 13px;position:relative}
.navbar-logo{height:45px}
.nav-links{position:absolute;left:50%;transform:translateX(-50%);display:flex;gap:20px;font-size:12px;text-transform:uppercase;font-weight:600;align-items:center}
.nav-links a{color:#ccc;text-decoration:none;transition:0.2s}
.nav-links a:hover{color:#FFD700}
.lang-box{position:absolute;right:20px;display:flex;gap:6px;align-items:center}
.lang-btn{cursor:pointer;font-size:11px;font-weight:600}

/* SECTION */
section{padding:60px 0;text-align:center}
section h2{font-family:'Cinzel',serif;font-size:1.75rem;color:#FFD700;margin-bottom:20px}
section p{color:#ccc;line-height:1.6;margin-bottom:20px}

/* HERO */
.hero{padding-top:85px}
.title{
  font-family:'Cinzel',serif;
  font-size:2.2rem;
  color:#FFD700;
  letter-spacing:2px;
  text-shadow:0 0 10px rgba(255,215,0,0.2);
  position:relative;
}
.crown-1::before{
  content:'👑';
  position:absolute;
  top:-1.9em;
  left:50%;
  transform:translateX(-50%);
  filter:drop-shadow(0 0 10px #FFD700)
}

/* BUTTON */
.btn-gold{
  background:linear-gradient(90deg,#FFD700,#FFA500);
  color:#000;
  padding:12px 25px;
  border-radius:25px;
  font-weight:bold;
  border:none;
  cursor:pointer;
  text-decoration:none;
  box-shadow:0 4px 15px rgba(255,215,0,0.2);
}

.menu-btn{
  width:100%;
  background: linear-gradient(145deg,#111,#0a0a0a);
  border:1px solid rgba(212,175,55,0.35);
  color:#D4AF37;
  padding:16px;
  border-radius:15px;
  margin-bottom:12px;
  font-weight:bold;
  cursor:pointer;
  transition:0.2s;
}

.menu-btn:hover{
  transform:scale(1.015);
}

/* MODAL */
.modal{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.95);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px}
.modal-content{background:#0a0a0a;width:100%;max-width:450px;border-radius:20px;border:1px solid rgba(255,215,0,0.3);padding:25px;position:relative;text-align:center}
.close-modal{position:absolute;top:10px;right:20px;font-size:32px;color:#FFD700;cursor:pointer}

/* FOOTER */
footer{background:#050505;padding:60px 20px 30px;text-align:center;border-top:1px solid rgba(255,215,0,0.3);margin-top:40px}

.wa-float{position:fixed;bottom:25px;right:25px;width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;z-index:999}
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

{/* CONTENT SAMA PERSIS */}
{/* (tidak gue ubah sama sekali) */}

<footer>
<img src="/logo.png" style={{height:'80px', marginBottom:'12px'}} />
<a href="https://instagram.com/totalfruit.id" target="_blank" style={{color:'#FFD700', textDecoration:'none'}}>
@totalfruit.id
</a>
</footer>

<a href="https://wa.me/6285124441513" target="_blank" className="wa-float" style={{background:'#25D366'}}>
<svg style={{width:'30px', fill:'white'}} viewBox="0 0 24 24">
<path d="M.057 24l1.687-6.163..." />
</svg>
</a>

</>
)
}