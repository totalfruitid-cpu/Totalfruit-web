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

.navbar{position:fixed;top:0;left:0;width:100%;height:90px;background:#000;z-index:1000;border-bottom:2px solid #FFD700}
.navbar-inner{width:100%;max-width:700px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;padding:15px 20px 13px;position:relative}
.navbar-logo{height:45px}

.nav-links{position:absolute;left:50%;transform:translateX(-50%);display:flex;gap:20px;font-size:12px;text-transform:uppercase;font-weight:600}
.nav-links a{color:#ccc;text-decoration:none;transition:0.2s}
.nav-links a:hover{color:#FFD700}

.lang-box{position:absolute;right:20px;display:flex;gap:6px}
.lang-btn{cursor:pointer;font-size:11px;font-weight:600}

section{padding:60px 0}
section h2{font-family:'Cinzel',serif;font-size:1.75rem;color:#FFD700;margin-bottom:20px}
section p{color:#ccc;line-height:1.6;margin-bottom:20px}

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
.menu-btn:hover{transform:scale(1.015)}

.modal{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.95);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px}
.modal-content{background:#0a0a0a;width:100%;max-width:450px;border-radius:20px;border:1px solid rgba(255,215,0,0.3);padding:25px;text-align:center}
.close-modal{position:absolute;top:10px;right:20px;font-size:32px;color:#FFD700;cursor:pointer}

footer{background:#050505;padding:60px 20px 30px;text-align:center;border-top:1px solid rgba(255,215,0,0.3);margin-top:40px}

.wa-float{position:fixed;right:25px;width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;z-index:999}
`}</style>

<nav className="navbar">
<div className="navbar-inner">
<img src="/logo.png" className="navbar-logo" />

<div className="nav-links">
<a href="#home">HOME</a>
<a href="#about">ABOUT</a>
<a href="#menu">MENU</a>
</div>

<div className="lang-box">
<span onClick={() => switchLang('id')} className="lang-btn" style={{color: lang==='id'?'#FFD700':'#555'}}>ID</span>
<span>/</span>
<span onClick={() => switchLang('en')} className="lang-btn" style={{color: lang==='en'?'#FFD700':'#555'}}>EN</span>
</div>
</div>
</nav>

<div className="container">
<section id="home" className="hero">
<h1 className="title crown-1">{t('hero-title')}</h1>
<p style={{letterSpacing:'3px',color:'#D4AF37',fontSize:'0.75rem'}}>{t('hero-tagline')}</p>
<p>{t('hero-desc')}</p>
<a href="#menu" className="btn-gold">{t('hero-btn')}</a>
</section>

<section id="about">
<h2>{t('about-title')}</h2>
<p dangerouslySetInnerHTML={{__html:t('about-text')}}></p>
</section>

<section id="menu">
<h2>{t('juice-title')}</h2>
<p>{t('juice-desc')}</p>
{juiceMenu.map(item=>(
<button key={item.id} className="menu-btn" onClick={()=>openJuice(item)}>
{item.name}
</button>
))}
</section>

<section style={{background:'#0a0a0a',borderRadius:'20px',padding:'40px 20px'}}>
<h2>{t('dessert-title')}</h2>
<p style={{fontSize:'0.8rem',color:'#888'}}>{t('dessert-desc')}</p>

<button className="menu-btn" onClick={()=>openDessert('Es Teler Sultan Signature Gold','30.000','/Menu-dessert.png')}>🥑🥭 Es Teler Sultan Signature Gold</button>
<button className="menu-btn" onClick={()=>openDessert('Ketan Mangga Sultan','35.000','/Menu-dessert.png')}>🥭 Ketan Mangga Super Creamy</button>
<button className="menu-btn" onClick={()=>openDessert('Fruit Sando Premium','15.000','/Menu-dessert.png')}>🍓🥝 Fruit Sando Premium</button>
</section>
</div>

{activeModal && (
<div className="modal" onClick={closeModal}>
<div className="modal-content" onClick={e=>e.stopPropagation()}>
<span className="close-modal" onClick={closeModal}>×</span>
<h2>{activeModal.title}</h2>
<img src={activeModal.img} style={{width:'100%',borderRadius:'10px'}} />
<button className="btn-gold" onClick={()=>window.open(`https://wa.me/6285124441513?text=Order ${activeModal.id}`)}>Order</button>
</div>
</div>
)}

<footer>
<img src="/logo.png" style={{height:'80px'}} />
<a href="https://instagram.com/totalfruit.id" target="_blank" style={{color:'#FFD700',display:'block'}}>
@totalfruit.id
</a>
</footer>

<a href="https://tiktok.com/@totalfruit.id" target="_blank" className="wa-float" style={{bottom:'95px',background:'#FFD700'}}>
<svg viewBox="0 0 448 512" style={{width:'26px',fill:'#000'}}>
<path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0h88a121.18,121.18,0,0,0,1.86,22.17A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
</svg>
</a>

<a href="https://wa.me/6285124441513" target="_blank" className="wa-float" style={{bottom:'25px',background:'#25D366'}}>
<svg viewBox="0 0 24 24" style={{width:'30px',fill:'#fff'}}>
<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.229 3.481 8.405c0 6.555-5.332 11.887-11.887 11.887-2.012 0-3.987-.512-5.741-1.488l-6.244 1.713z"/>
</svg>
</a>

</>
)
}