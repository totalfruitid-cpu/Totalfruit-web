import { useState, useEffect } from 'react'
import Head from 'next/head'

export default function Home() {
  const [lang, setLang] = useState('id')
  const [activeModal, setActiveModal] = useState(null)
  const [dessertModal, setDessertModal] = useState({show: false, title: '', price: '', img: ''})

  const [orderStep, setOrderStep] = useState(1)
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedAddons, setSelectedAddons] = useState([])

  const translations = {
    en: {
      'hero-title': 'TOTAL FRUIT',
      'hero-tagline': 'Taste the health, feel the cloud.',
      'hero-sub': 'Signature Gold Edition',
      'hero-desc': 'Premium cut fruit with a gourmet experience.',
      'hero-btn': 'SEE MENU',
      'about-title': 'ABOUT US',
      'about-text': 'TotalFruit is the <strong>first and only</strong> premium dessert brand in Cibaliung Pandeglang Banten bringing 5-star quality to street stall level.<br><br>We combine quality ingredients – grade A fruits and our signature <strong>Kuah Sultan</strong> recipe – handcrafted fresh daily.<br><br><strong>TotalFruit: Street Cart, Sultan Taste.</strong>',
      'juice-title': 'JUICE',
      'juice-desc': '100% Natural ingredients, no artificial coloring or flavors',
      'dessert-title': 'SIGNATURE DESSERT',
      'dessert-desc': 'No Water • No Coconut Milk • No Added Sugar • Rich Fiber',
      'dessert-modal-btn': 'Order Here',
      'addons-title': 'POPULAR ADD-ONS',
      'addons-note': '*Popping boba only in Sultan Edition',
      'checkout-btn': 'Checkout via WhatsApp',
      'back-btn': 'Back'
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
      'dessert-modal-btn': 'Pesan Sekarang',
      'addons-title': 'ADD-ONS POPULER',
      'addons-note': '*Popping boba hanya di Sultan Edition',
      'checkout-btn': 'Checkout via WhatsApp',
      'back-btn': 'Kembali'
    }
  }

  const juiceMenu = [
    {
      id: 'avocado', name: '🥑 Alpukat', title: 'AVOCADO SERIES', img: '/Menu-avocado.png',
      sizes: [{name: 'LITE', price: 18}, {name: 'HEALTHY', price: 25}, {name: 'SULTAN', price: 45}],
      addons: [
        {name: 'Avocado Cube', price: 5, icon: '🥑'},
        {name: 'Chia Seeds', price: 5, icon: '🌰'},
        {name: 'Shredded Cheese', price: 5, icon: '🧀'},
        {name: 'Sultan Sauce', price: 10, icon: '👑'},
        {name: 'Popping Boba', price: 5, icon: '⚪', sultanOnly: true}
      ]
    },
    {
      id: 'mango', name: '🥭 Mangga', title: 'MANGO SERIES', img: '/Menu-mango.png',
      sizes: [{name: 'LITE', price: 18}, {name: 'HEALTHY', price: 25}, {name: 'SULTAN', price: 45}],
      addons: [
        {name: 'Mango Cube', price: 5, icon: '🥭'},
        {name: 'Chia Seeds', price: 5, icon: '🌰'},
        {name: 'Shredded Cheese', price: 5, icon: '🧀'},
        {name: 'Sultan Sauce', price: 10, icon: '👑'},
        {name: 'Popping Boba', price: 5, icon: '⚪', sultanOnly: true}
      ]
    },
    {
      id: 'banana', name: '🍌 Pisang', title: 'BANANA SERIES', img: '/Menu-banana.png',
      sizes: [{name: 'LITE', price: 18}, {name: 'HEALTHY', price: 25}, {name: 'SULTAN', price: 45}],
      addons: [
        {name: 'Chia Seeds', price: 5, icon: '🌰'},
        {name: 'Shredded Cheese', price: 5, icon: '🧀'},
        {name: 'Sultan Sauce', price: 10, icon: '👑'},
        {name: 'Popping Boba', price: 5, icon: '⚪', sultanOnly: true}
      ]
    },
    {
      id: 'strawberry', name: '🍓 Stroberi', title: 'STRAWBERRY SERIES', img: '/Menu-strawberry.png',
      sizes: [{name: 'LITE', price: 18}, {name: 'HEALTHY', price: 25}, {name: 'SULTAN', price: 45}],
      addons: [
        {name: 'Strawberry Slice', price: 5, icon: '🍓'},
        {name: 'Chia Seeds', price: 5, icon: '🌰'},
        {name: 'Shredded Cheese', price: 5, icon: '🧀'},
        {name: 'Sultan Sauce', price: 10, icon: '👑'},
        {name: 'Popping Boba', price: 5, icon: '⚪', sultanOnly: true}
      ]
    },
    {
      id: 'dragon', name: '🐉 Buah Naga', title: 'DRAGON SERIES', img: '/Menu-dragonfruit.png',
      sizes: [{name: 'LITE', price: 18}, {name: 'HEALTHY', price: 25}, {name: 'SULTAN', price: 45}],
      addons: [
        {name: 'Dragon Cube', price: 5, icon: '🐉'},
        {name: 'Chia Seeds', price: 5, icon: '🌰'},
        {name: 'Shredded Cheese', price: 5, icon: '🧀'},
        {name: 'Sultan Sauce', price: 10, icon: '👑'},
        {name: 'Popping Boba', price: 5, icon: '⚪', sultanOnly: true}
      ]
    },
  ]

  useEffect(() => {
    const currentLang = localStorage.getItem('lang') || 'id'
    setLang(currentLang)
  }, [])

  const switchLang = (newLang) => {
    setLang(newLang); localStorage.setItem('lang', newLang)
  }

  const openJuice = (item) => {
    setActiveModal(item);
    setOrderStep(1);
    setSelectedSize(null);
    setSelectedAddons([]);
    document.body.style.overflow = 'hidden'
  }
  const openDessert = (title, price, img) => { setDessertModal({show: true, title, price, img}); document.body.style.overflow = 'hidden' }
  const closeModal = () => {
    setActiveModal(null);
    setDessertModal({show: false, title: '', price: '', img: ''});
    setOrderStep(1);
    setSelectedSize(null);
    setSelectedAddons([]);
    document.body.style.overflow = 'auto'
  }

  const selectSize = (size) => {
    setSelectedSize(size);
    setOrderStep(2);
    setSelectedAddons([]);
  }

  const toggleAddon = (addon) => {
    if(addon.sultanOnly && selectedSize?.name!== 'SULTAN') return;
    if(selectedAddons.find(a => a.name === addon.name)){
      setSelectedAddons(selectedAddons.filter(a => a.name!== addon.name))
    } else {
      setSelectedAddons([...selectedAddons, addon])
    }
  }

  const calculateTotal = () => {
    if(!selectedSize) return 0;
    const addonTotal = selectedAddons.reduce((sum, addon) => sum + addon.price, 0);
    return selectedSize.price + addonTotal;
  }

  const checkoutWA = () => {
    const addonText = selectedAddons.length > 0
   ? `%0AAdd-ons: ${selectedAddons.map(a => a.name).join(', ')}`
      : '';
    const total = calculateTotal();
    const text = `Halo Total Fruit, mau order ${activeModal.name} ${selectedSize.name}${addonText}%0ATotal: IDR ${total}K`;
    window.open(`https://wa.me/6285124441513?text=${text}`)
  }

  // INI YANG BENER BRO, ADA [lang] NYA
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
     .navbar{position:fixed;top:0;left:0;width:100%;height:90px;background:#000;z-index:1000;border-bottom:2px solid #FFD700}
     .navbar-inner{width:100%;max-width:700px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;padding:15px 20px 13px;position:relative}
     .navbar-logo{height:45px}
     .nav-links{position:absolute;left:50%;transform:translateX(-50%);display:flex;gap:20px;font-size:12px;text-transform:uppercase;font-weight:600;align-items:center}
     .nav-links a{color:#ccc;text-decoration:none}
     .lang-box{position:absolute;right:20px;display:flex;gap:6px;align-items:center}
     .lang-btn{cursor:pointer;transition:0.3s;font-size:11px;font-weight:600}
        section{padding:50px 0;text-align:center}
        section h2{font-family:'Cinzel',serif;font-size:1.75rem;color:#FFD700;margin-bottom:20px;width:100%}
        section p{color:#ccc;line-height:1.6;margin-bottom:20px;max-width:100%}
     .hero{padding-top:85px}
     .title{font-family:'Cinzel',serif;font-size:2.2rem;color:#FFD700;margin-bottom:8px;position:relative;display:inline-block}
     .crown-1::before{content:'👑';position:absolute;top:-1.9em;left:50%;transform:translateX(-50%) scale(0.9);font-size:1em;color:#FFD700;filter:drop-shadow(0 0 10px #FFD700)}
     .btn-gold{background:linear-gradient(90deg,#FFD700,#FFA500);color:#000;padding:12px 25px;border-radius:25px;font-weight:bold;border:none;cursor:pointer;display:inline-block;text-decoration:none}
     .menu-btn{width:100%;background:#111;border:1px solid #D4AF37;color:#D4AF37;padding:16px;border-radius:15px;margin-bottom:12px;font-weight:bold;cursor:pointer}
     .modal{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.95);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;overflow-y:auto}
     .modal-content{background:#111;width:100%;max-width:450px;border-radius:20px;border:1px solid #FFD700;padding:25px;position:relative;text-align:center;max-height:90vh;overflow-y:auto}
     .close-modal{position:absolute;top:10px;right:20px;font-size:32px;color:#FFD700;cursor:pointer}
     .addon-item{display:flex;justify-content:space-between;align-items:center;padding:12px 16px;background:#1a1a1a;border:1px solid #333;border-radius:10px;margin-bottom:8px;cursor:pointer}
     .addon-item.active{border-color:#FFD700;background:#2a2300}
     .addon-item.disabled{opacity:0.4;cursor:not-allowed}
        footer{background:#050505;padding:60px 20px 30px;text-align:center;border-top:1px solid #D4AF37;margin-top:40px}
     .footer-logo-img{height:45px;margin-bottom:20px}
     .social-btn{color:#D4AF37;text-decoration:none;font-size:0.75rem;border:1px solid #D4AF37;padding:8px 16px;border-radius:5px;margin:0 5px}
     .wa-float{position:fixed;bottom:25px;right:25px;background:#25D366;width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 15px rgba(37,211,102,0.4);z-index:999}
      `}</style>

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

      <div className="container">
        <section id="home" className="hero">
          <h1 className="title crown-1">{t('hero-title')}</h1>
          <p style={{letterSpacing:'3px', color:'#D4AF37', fontSize:'0.75rem', marginTop:'15px'}}>{t('hero-tagline')}</p>
          <p>{t('hero-desc')}</p>
          <a href="#menu" className="btn-gold">{t('hero-btn')}</a>
        </section>

        <section id="about">
          <h2>{t('about-title')}</h2>
          <p dangerouslySetInnerHTML={{__html: t('about-text')}}></p>
        </section>

        <section id="menu">
          <h2>{t('juice-title')}</h2>
          <p>{t('juice-desc')}</p>
          {juiceMenu.map((item) => (
            <button key={item.id} className="menu-btn" onClick={() => openJuice(item)}>
              {item.name}
            </button>
          ))}
        </section>

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

      {activeModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closeModal}>×</span>

            {orderStep === 1 && (
              <>
                <h2 style={{fontSize:'1.2rem', marginBottom:'15px'}}>{activeModal.title}</h2>
                <img src={activeModal.img} style={{width:'100%', borderRadius:'10px', marginBottom:'20px'}} alt="Menu" />
                <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                  {activeModal.sizes.map(size => (
                    <button key={size.name} className="btn-gold" onClick={() => selectSize(size)}>
                      {size.name} - {size.price}K {size.name === 'SULTAN' && '👑'}
                    </button>
                  ))}
                </div>
              </>
            )}

            {orderStep === 2 && (
              <>
                <h2 style={{fontSize:'1.2rem', marginBottom:'5px'}}>{activeModal.name} {selectedSize.name}</h2>
                <p style={{color:'#D4AF37', fontSize:'1.5rem', marginBottom:'20px'}}>IDR {calculateTotal()}K</p>

                <h3 style={{fontSize:'1rem', color:'#FFD700', marginBottom:'15px', textAlign:'left'}}>{t('addons-title')}</h3>

                {activeModal.addons.map(addon => {
                  const isDisabled = addon.sultanOnly && selectedSize.name!== 'SULTAN';
                  const isActive = selectedAddons.find(a => a.name === addon.name);
                  return (
                    <div
                      key={addon.name}
                      className={`addon-item ${isActive? 'active' : ''} ${isDisabled? 'disabled' : ''}`}
                      onClick={() =>!isDisabled && toggleAddon(addon)}
                    >
                      <span>{addon.icon} {addon.name}</span>
                      <span>+{addon.price}K</span>
                    </div>
                  )
                })}

                <p style={{fontSize:'0.7rem', color:'#666', marginTop:'10px', textAlign:'left'}}>{t('addons-note')}</p>

                <div style={{display:'flex', gap:'10px', marginTop:'20px'}}>
                  <button className="menu-btn" style={{flex:1}} onClick={() => setOrderStep(1)}>{t('back-btn')}</button>
                  <button className="btn-gold" style={{flex:2}} onClick={checkoutWA}>{t('checkout-btn')}</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {dessertModal.show && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closeModal}>×</span>
            <img src={dessertModal.img} style={{width:'100%', borderRadius:'10px', marginBottom:'15px'}} />
            <h2 style={{color:'#D4AF37'}}>{dessertModal.title}</h2>
            <p style={{fontSize:'1.5rem', margin:'10px 0'}}>IDR {dessertModal.price}</p>
            <button className="btn-gold" style={{width:'100%'}} onClick={() => window.open(`https://wa.me/6285124441513?text=Halo Total Fruit, mau order ${dessertModal.title}`)}>
              {t('dessert-modal-btn')}
            </button>
          </div>
        </div>
      )}

      <footer>
        <img src="/logo.png" alt="Total Fruit" className="footer-logo-img" style={{height:'80px', marginBottom:'12px'}} />
        <a href="https://instagram.com/totalfruit.id" target="_blank" style={{color:'#FFD700', fontSize:'16px', textDecoration:'none', display:'block', marginBottom:'15px'}}>
          @totalfruit.id
        </a>
        <p style={{fontSize:'0.9rem', color:'#bbb', marginBottom:'20px'}}>
          Pariuk Nangkub Harmoni Land<br/>
          Cibaliung, Pandeglang, Banten
        </p>
        <p style={{fontSize:'0.65rem', color:'#bbb', letterSpacing:'2px'}}>
          © 2026 TOTAL FRUIT
        </p>
      </footer>

      <a href="https://tiktok.com/@totalfruit.id" target="_blank" className="wa-float" style={{bottom:'95px', background:'#FFD700', border:'1px solid #000', boxShadow:'0 4px 15px rgba(255,215,0,0.4)'}}>
        <img src="/tiktok.png" alt="TikTok" style={{width:'26px', height:'26px', objectFit:'contain'}} />
      </a>

      <a href="https://wa.me/6285124441513" target="_blank" className="wa-float">
        <img src="/Whatsapp.png" alt="WhatsApp" style={{width:'30px', height:'30px', objectFit:'contain'}} />
      </a>
    </>
  )
}
