import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Dashboard() {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) router.push('/')

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
        'juice-avocado': '🥑 Avocado',
        'juice-mango': '🥭 Mango',
        'juice-banana': '🍌 Banana',
        'juice-strawberry': '🍓 Strawberry',
        'juice-dragon': '🐉 Dragon Fruit',
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
        'juice-avocado': '🥑 Alpukat',
        'juice-mango': '🥭 Mangga',
        'juice-banana': '🍌 Pisang',
        'juice-strawberry': '🍓 Stroberi',
        'juice-dragon': '🐉 Buah Naga',
        'dessert-title': 'SIGNATURE DESSERT',
        'dessert-desc': 'Tanpa Air • Tanpa Santan • Tanpa Tambahan Gula • Kaya Serat',
        'dessert-modal-desc': '100% Natural • Tanpa Santan • Tanpa Tambahan Gula',
        'dessert-modal-btn': 'Pesan Sekarang'
      }
    };

    window.switchLang = function(lang) {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[lang][key]) el.innerHTML = translations[lang][key];
      });
      document.getElementById('btn-id').style.opacity = lang === 'id'? '1' : '0.5';
      document.getElementById('btn-en').style.opacity = lang === 'en'? '1' : '0.5';
      localStorage.setItem('lang', lang);
    }

    window.openModal = function(modalId) {
      document.getElementById(modalId).style.display = 'block';
      document.body.style.overflow = 'hidden';
    }

    window.closeModal = function(modalId) {
      document.getElementById(modalId).style.display = 'none';
      document.body.style.overflow = 'auto';
    }

    window.openDessertModal = function(title, price, img) {
      document.getElementById('dessert-modal-title').innerText = title;
      document.getElementById('dessert-modal-price').innerText = price;
      document.getElementById('dessert-modal-img').src = img;
      document.getElementById('dessertModal').style.display = 'block';
    }

    window.orderDessert = function() {
      const title = document.getElementById('dessert-modal-title').innerText;
      const price = document.getElementById('dessert-modal-price').innerText;
      const text = `Halo TOTAL FRUIT, mau order ${title} - ${price}`;
      window.open(`https://wa.me/628512444513?text=${encodeURIComponent(text)}`, '_blank');
    }

    window.logout = function() {
      localStorage.removeItem('token');
      router.push('/');
    }

    const currentLang = localStorage.getItem('lang') || 'id';
    window.switchLang(currentLang);

    window.onclick = function(event) {
      if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>TOTAL FRUIT</title>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <style jsx global>{`
        *{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth!important}
        section,.hero{scroll-margin-top:80px!important}
        body{
          background:#000;
          color:#fff;
          font-family:'Poppins',sans-serif;
          padding-top:80px!important;
          padding-bottom:160px!important;
        }
     .navbar{
          position:fixed;
          top:0;
          left:0;
          width:100%;
          height:80px!important;
          background:#000!important;
          display:flex!important;
          align-items:center!important;
          justify-content:space-between;
          padding:0 15px!important;
          z-index:1000;
          border-bottom:2px solid #FFD700!important;
          box-shadow:0 2px 15px rgba(255, 215, 0, 0.2)!important;
        }
     .navbar-scroll{
          display:flex;
          align-items:center;
          gap:12px;
          font-size:13px;
          overflow-x:auto;
          padding-right:10px;
          scrollbar-width:none;
          flex:1;
        }
     .navbar-scroll::-webkit-scrollbar{display:none}
     .navbar-scroll a{
          color:#ccc;
          text-decoration:none;
          font-weight:600;
          transition:0.3s;
          white-space:nowrap;
        }
     .navbar-scroll a:hover{color:#FFD700}
     .hero{
          min-height:auto;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:flex-start;
          padding:40px 20px 35px;
          text-align:center;
        }
     .title{
          font-family:'Cinzel',serif;
          font-size:2rem;
          font-weight:700;
          letter-spacing:2px;
          background:linear-gradient(90deg,#FFD700,#FFA500);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          margin-bottom:8px;
          text-shadow:0 0 30px rgba(255,215,0,0.3);
          white-space:nowrap;
        }
     .crown-1{
          position:relative;
          display:inline-block;
          background:linear-gradient(90deg,#FFD700,#FFA500);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }
     .crown-1::before{
          content:'👑';
          position:absolute;
          top:-1.3em;
          left:50%;
          transform:translateX(-50%) scale(0.9);
          font-size:1em;
          -webkit-text-fill-color:initial;
          color:#FFD700;
          filter:drop-shadow(0 0 10px #FFD700);
          z-index:2;
        }
     .tagline{
          margin-top:-8px;
          margin-bottom:15px;
          font-size:0.75em;
          font-style:italic;
          color:#b5b5b5;
          letter-spacing:2px;
          text-transform:uppercase;
          opacity:0.8;
          white-space:nowrap;
        }
        p{
          margin-top:0;
          color:#ccc;
          margin-bottom:15px;
          max-width:500px;
          line-height:1.6;
          font-size:1.1rem;
        }
     .btn{
          background:linear-gradient(90deg,#FFD700,#FFA500);
          color:#000;
          padding:14px 32px;
          border:none;
          border-radius:30px;
          font-weight:600;
          font-size:1rem;
          cursor:pointer;
          text-decoration:none;
          transition:0.3s;
        }
     .btn:hover{opacity:0.85;transform:translateY(-2px)}
        section{
          padding:35px 20px;
          max-width:700px;
          margin:0 auto;
          text-align:center;
        }
        section h2{font-family:'Cinzel',serif;font-size:2rem;color:#FFD700;margin-bottom:25px}
     .wa-float{
          position:fixed;
          bottom:105px;
          right:25px;
          background:#25D366;
          width:60px;
          height:60px;
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          box-shadow:0 4px 15px rgba(37,211,102,0.4);
          transition:0.3s;
          z-index:999;
        }
     .wa-float:hover{transform:scale(1.1)}
     .wa-float svg{width:32px;height:32px;fill:#fff}
     .modal{display:none;position:fixed;z-index:9999;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,0.7)}
     .modal-content{background:#111;margin:5vh auto;padding:15px;border:2px solid #D4AF37;width:90%;max-width:500px;max-height:85vh;overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;box-sizing:border-box;border-radius:15px;position:relative}
       footer{
          position:fixed;
          bottom:0;
          left:0;
          right:0;
          width:100%;
          background:#0a0a0a;
          padding:15px 20px;
          text-align:center;
          border-top:1px solid #FFD700;
          z-index:999;
          margin:0;
          box-sizing:border-box;
        }
        footer p{color:#999;margin:4px 0;font-size:0.85rem}
        footer a{color:#FFD700;text-decoration:none}
        footer a:hover{text-decoration:underline}
      `}</style>

      <div className="navbar">
        <img src="/logo.png" alt="Total Fruit" style={{height:35,marginRight:15}} />
        <div className="navbar-scroll">
          <a href="#home">Home</a>
          <a href="#tentang">About</a>
          <a href="#menu">Menu</a>
          <a onClick={() => window.logout()} style={{color:'#dc3545',cursor:'pointer'}}>Logout</a>
        </div>
        <div id="langBtn" style={{fontWeight:'bold',color:'#D4AF37',cursor:'pointer',userSelect:'none',fontSize:13,whiteSpace:'nowrap',marginLeft:10}}>
          <span onClick={() => window.switchLang('id')} id="btn-id" style={{opacity:0.5}}>ID</span>
          <span style={{margin:'0 4px',opacity:0.5}}>/</span>
          <span onClick={() => window.switchLang('en')} id="btn-en" style={{opacity:1}}>EN</span>
        </div>
      </div>

      <div className="hero" id="home">
        <h1 id="hero-title" className="title crown-1" data-i18n="hero-title"></h1>
        <p id="hero-tagline" className="tagline" data-i18n="hero-tagline"></p>
        <p id="hero-sub" data-i18n="hero-sub"></p>
        <p id="hero-desc" data-i18n="hero-desc"></p>
        <a id="hero-btn" href="#menu" className="btn" data-i18n="hero-btn"></a>
      </div>

      <section id="tentang" style={{marginTop:0,paddingTop:0,paddingBottom:30}}>
        <h2 id="about-title" data-i18n="about-title" style={{marginTop:0,marginBottom:15}}></h2>
        <p id="about-text" data-i18n="about-text" style={{marginTop:0,marginBottom:0}}></p>
      </section>

      <section id="menu" style={{padding:'60px 20px',background:'#0a0a0a',textAlign:'center'}}>
        <h2 id="juice-title" data-i18n="juice-title" style={{color:'#D4AF37',fontSize:36,marginBottom:10}}></h2>
        <p id="juice-desc" data-i18n="juice-desc" style={{color:'#aaa',marginBottom:40}}></p>

        <div style={{display:'flex',gap:15,justifyContent:'center',maxWidth:900,margin:'0 auto 20px auto',flexWrap:'wrap'}}>
          <button id="juice-avocado" data-i18n="juice-avocado" onClick={() => window.openModal('avocadoModal')} style={{backgroundColor:'#d4a017',color:'#000',border:'none',padding:15,borderRadius:25,width:'100%',fontSize:16,margin:'5px 0'}}>🥑 Avocado</button>
          <button id="juice-mango" data-i18n="juice-mango" onClick={() => window.openModal('mangoModal')} style={{backgroundColor:'#d4a017',color:'#000',border:'none',padding:15,borderRadius:25,width:'100%',fontSize:16,margin:'5px 0'}}>🥭 Mango</button>
          <button id="juice-banana" data-i18n="juice-banana" onClick={() => window.openModal('bananaModal')} style={{backgroundColor:'#d4a017',color:'#000',border:'none',padding:15,borderRadius:25,width:'100%',fontSize:16,margin:'5px 0'}}>🍌 Banana</button>
          <button id="juice-strawberry" data-i18n="juice-strawberry" onClick={() => window.openModal('strawberryModal')} style={{backgroundColor:'#d4a017',color:'#000',border:'none',padding:15,borderRadius:25,width:'100%',fontSize:16,margin:'5px 0'}}>🍓 Strawberry</button>
          <button id="juice-dragon" data-i18n="juice-dragon" onClick={() => window.openModal('dragonModal')} style={{backgroundColor:'#d4a017',color:'#000',border:'none',padding:15,borderRadius:25,width:'100%',fontSize:16,margin:'5px 0'}}>🐉 Dragon Fruit</button>
        </div>

        <div style={{padding:'40px 20px',backgroundColor:'#000',borderTop:'1px solid #333'}}>
          <h2 id="dessert-title" data-i18n="dessert-title" style={{textAlign:'center',color:'#d4a017',fontSize:32,marginBottom:10,fontFamily:'serif'}}></h2>
          <p id="dessert-desc" data-i18n="dessert-desc" style={{textAlign:'center',color:'#aaa',marginBottom:30,fontSize:14}}>No Santan • No Added Sugar • Rich Fiber</p>
          <button onClick={() => window.openDessertModal('Es Teler Creamy Signature Gold', 'IDR 30,000', '/Menu-dessert.png')} style={{backgroundColor:'#d4a017',color:'#000',border:'none',padding:'12px 15px',borderRadius:25,width:'100%',fontSize:14,margin:'5px 0',fontWeight:'bold',display:'flex',flexDirection:'column',alignItems:'center',gap:2}}>
            <span>🥑🥭 Es Teler Creamy Signature Gold</span>
            <span style={{fontSize:13,opacity:0.9}}>IDR 30,000</span>
          </button>
          <button onClick={() => window.openDessertModal('Mango Sticky Rice Super Creamy', 'IDR 35,000', '/Menu-dessert.png')} style={{backgroundColor:'#d4a017',color:'#000',border:'none',padding:'12px 15px',borderRadius:25,width:'100%',fontSize:14,margin:'5px 0',fontWeight:'bold',display:'flex',flexDirection:'column',alignItems:'center',gap:2}}>
            <span>🥭 Ketan Mangga Super Creamy</span>
            <span style={{fontSize:13,opacity:0.9}}>IDR 35,000</span>
          </button>
          <button onClick={() => window.openDessertModal('Fruit Sando Premium', 'IDR 15,000', '/Menu-dessert.png')} style={{backgroundColor:'#d4a017',color:'#000',border:'none',padding:'12px 15px',borderRadius:25,width:'100%',fontSize:14,margin:'5px 0',fontWeight:'bold',display:'flex',flexDirection:'column',alignItems:'center',gap:2}}>
            <span>🍓🥝 Fruit Sando Premium</span>
            <span style={{fontSize:13,opacity:0.9}}>IDR 15,000</span>
          </button>
        </div>
      </section>

      <div id="avocadoModal" className="modal">
        <div className="modal-content">
          <span onClick={() => window.closeModal('avocadoModal')} style={{color:'#D4AF37',position:'absolute',top:10,right:20,fontSize:30,fontWeight:'bold',cursor:'pointer'}}>×</span>
          <h2 style={{fontSize:16,margin:'4px 0 8px 0',padding:0,textAlign:'center',color:'#D4AF37',lineHeight:1.2}}>AVOCADO SERIES</h2>
          <img src="/Menu-avocado.png" alt="Menu Avocado" style={{width:'100%',height:'auto',display:'block',maxWidth:'100%'}} />
          <div style={{textAlign:'center',marginTop:20}}>
            <button onClick={() => window.open('https://wa.me/628512444513?text=Order Avocado Lite - 18K')} style={{background:'transparent',color:'#D4AF37',padding:'12px 24px',margin:5,border:'2px solid #D4AF37',borderRadius:25,fontWeight:'bold',fontSize:16,cursor:'pointer'}}>Lite - 18K</button>
            <button onClick={() => window.open('https://wa.me/628512444513?text=Order Avocado Healthy - 25K')} style={{background:'transparent',color:'#D4AF37',padding:'12px 24px',margin:5,border:'2px solid #D4AF37',borderRadius:25,fontWeight:'bold',fontSize:16,cursor:'pointer'}}>Healthy - 25K</button>
            <button onClick={() => window.open('https://wa.me/628512444513?text=Order Avocado Sultan Edition - 45K')} style={{background:'#D4AF37',color:'black',padding:'12px 24px',margin:5,border:'2px solid #D4AF37',borderRadius:25,fontWeight:'bold',fontSize:16,cursor:'pointer'}}>Sultan - 45K 👑</button>
          </div>
        </div>
      </div>

      <div id="mangoModal" className="modal">
        <div className="modal-content">
          <span onClick={() => window.closeModal('mangoModal')} style={{color:'#D4AF37',position:'absolute',top:10,right:20,fontSize:30,fontWeight:'bold',cursor:'pointer'}}>×</span>
          <h2 style={{fontSize:16,margin:'4px 0 8px 0',padding:0,textAlign:'center',color:'#D4AF37',lineHeight:1.2}}>MANGO SERIES</h2>
          <img src="/Menu-mango.png" alt="Menu Mango" style={{width:'100%',height:'auto',display:'block',maxWidth:'100%'}} />
          <div style={{textAlign:'center',marginTop:20}}>
            <button onClick={() => window.open('https://wa.me/628512444513?text=Order Mango Lite - 18K')} style={{background:'transparent',color:'#D4AF37',padding:'12px 24px',margin:5,border:'2px solid #D4AF37',borderRadius:25,fontWeight:'bold',fontSize:16,cursor:'pointer'}}>Lite - 18K</button>
            <button onClick={() => window.open('https://wa.me/628512444513?text=Order Mango Healthy - 25K')} style={{background:'transparent',color:'#D4AF37',padding:'12px 24px',margin:5,border:'2px solid #D4AF37',borderRadius:25,fontWeight:'bold',fontSize:16,cursor:'pointer'}}>Healthy - 25K</button>
            <button onClick={() => window.open('https://wa.me/628512444513?text=Order Mango Sultan Edition - 45K')} style={{background:'#D4AF37',color:'black',padding:'12px 24px',margin:5,border:'2px solid #D4AF37',borderRadius:25,fontWeight:'bold',fontSize:16,cursor:'pointer'}}>Sultan - 45K 👑</button>
          </div>
        </div>
      </div>

      <div id="bananaModal" className="modal">
        <div className="modal-content">
          <span onClick={() => window.closeModal('bananaModal')} style={{color:'#D4AF37',position:'absolute',top:10,right:20,fontSize:30,fontWeight:'bold',cursor:'pointer'}}>×</span>
          <h2 style={{fontSize:16,margin:'4px 0 8px 0',padding:0,textAlign:'center',color:'#D4AF37',lineHeight:1.2}}>BANANA SERIES</h2>
          <img src="/Menu-banana.png" alt="Menu Banana" style={{width:'100%',height:'auto',display:'block',maxWidth:'100%'}} />
          <div style={{textAlign:'center',marginTop:20}}>
            <button onClick={() => window.open('https://wa.me/628512444513?text=Order Banana Lite - 18K')} style={{background:'transparent',color:'#D4AF37',padding:'12px 24px',margin:5,border:'2px solid #D4AF37',borderRadius:25,fontWeight:'bold',fontSize:16,cursor:'pointer'}}>Lite - 18K</button>
            <button onClick={() => window.open('https://wa.me/628512444513?text=Order Banana Healthy - 25K')} style={{background:'transparent',color:'#D4AF37',padding:'12px 24px',margin:5,border:'2px solid #D4AF37',borderRadius:25,fontWeight:'bold',fontSize:16,cursor:'pointer'}}>Healthy - 25K</button>
            <button onClick={() => window.open('https://wa.me/628512444513?text=Order Banana Sultan Edition - 45K')} style={{background:'#D4AF37',color:'black',padding:'12px 24px',margin:5,border:'2px solid #D4AF37',borderRadius:25,fontWeight:'bold',fontSize:16,cursor:'pointer'}}>Sultan - 45K 👑</button>
          </div>
        </div>
      </div>

      <div id="strawberryModal" className="modal">
        <div className="modal-content">
          <span onClick={() => window.closeModal('strawberryModal')} style={{color:'#D4AF37',position:'absolute',top:10,right:20,fontSize:30,fontWeight:'bold',cursor:'pointer'}}>×</span>
          <h2 style={{fontSize:16,margin:'4px 0 8px 0',padding:0,textAlign:'center',color:'#D4AF37',lineHeight:1.2}}>STRAWBERRY SERIES</h2>
          <img src="/Menu-strawberry.png" alt="Menu Strawberry" style={{width:'100%',height:'auto',display:'block',maxWidth:'100%'}} />
          <div style={{textAlign:'center',marginTop:20}}>
            <button onClick={() => window.open('https://wa.me/628512444513?text=Order Strawberry Lite - 18K')} style={{background:'transparent',color:'#D4AF37',padding:'12px 24px',margin:5,border:'2px solid #D4AF37',borderRadius:25,fontWeight:'bold',fontSize:16,cursor:'pointer'}}>Lite - 18K</button>
            <button onClick={() => window.open('https://wa.me/628512444513?text=Order Strawberry Healthy - 25K')} style={{background:'transparent',color:'#D4AF37',padding:'12px 24px',margin:5,border:'2px solid #D4AF37',borderRadius:25,fontWeight:'bold',fontSize:16,cursor:'pointer'}}>Healthy - 25K</button>
            <button onClick={() => window.open('https://wa.me/628512444513?text=Order Strawberry Sultan Edition - 45K')} style={{background:'#D4AF37',color:'black',padding:'12px 24px',margin:5,border:'2px solid #D4AF37',borderRadius:25,fontWeight:'bold',fontSize:16,cursor:'pointer'}}>Sultan - 45K 👑</button>
          </div>
        </div>
      </div>

      <div id="dragonModal" className="modal">
        <div className="modal-content">
          <span onClick={() => window.closeModal('dragonModal')} style={{color:'#D4AF37',position:'absolute',top:10,right:20,fontSize:30,fontWeight:'bold',cursor:'pointer'}}>×</span>
          <h2 style={{fontSize:16,margin:'4px 0 8px 0',padding:0,textAlign:'center',color:'#D4AF37',lineHeight:1.2}}>DRAGON SERIES</h2>
          <img src="/Menu-dragonfruit.png" alt="Menu Dragon" style={{width:'100%',height:'auto',display:'block',maxWidth:'100%'}} />
          <div style={{textAlign:'center',marginTop:20}}>
            <button onClick={() => window.open('https://wa.me/628512444513?text=Order Dragon Lite - 18K')} style={{background:'transparent',color:'#D4AF37',padding:'12px 24px',margin:5,border:'2px solid #D4AF37',borderRadius:25,fontWeight:'bold',fontSize:16,cursor:'pointer'}}>Lite - 18K</button>
            <button onClick={() => window.open('https://wa.me/628512444513?text=Order Dragon Healthy - 25K')} style={{background:'transparent',color:'#D4AF37',padding:'12px 24px',margin:5,border:'2px solid #D4AF37',borderRadius:25,fontWeight:'bold',fontSize:16,cursor:'pointer'}}>Healthy - 25K</button>
            <button onClick={() => window.open('https://wa.me/628512444513?text=Order Dragon Sultan Edition - 45K')} style={{background:'#D4AF37',color:'black',padding:'12px 24px',margin:5,border:'2px solid #D4AF37',borderRadius:25,fontWeight:'bold',fontSize:16,cursor:'pointer'}}>Sultan - 45K 👑</button>
          </div>
        </div>
      </div>

      <div id="dessertModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => window.closeModal('dessertModal')} style={{color:'#d4a017',float:'right',fontSize:28,fontWeight:'bold',cursor:'pointer'}}>×</span>
          <img id="dessert-modal-img" src="" style={{width:'100%',borderRadius:10,marginBottom:15}} />
          <h2 id="dessert-modal-title" style={{color:'#d4a017',fontSize:24,margin:0}}></h2>
          <p id="dessert-modal-price" style={{color:'#fff',fontSize:20,margin:'5px 0 15px 0'}}></p>
          <p id="dessert-modal-desc" data-i18n="dessert-modal-desc" style={{color:'#ccc',fontSize:14,marginBottom:20}}>100% Natural • No Coconut Milk • No Added Sugar</p>
          <button id="dessert-modal-btn" data-i18n="dessert-modal-btn" onClick={() => window.orderDessert()} style={{backgroundColor:'#d4a017',color:'#000',border:'none',padding:12,borderRadius:25,width:'100%',fontWeight:'bold'}}>Pesan Sekarang</button>
        </div>
      </div>

      <footer>
        <p><strong style={{color:'#FFD700'}}>TOTAL FRUIT</strong></p>
        <p>Location: Cibaliung Pandeglang, Banten</p>
        <p>Instagram: <a href="https://instagram.com/totalfruit.id" target="_blank">@totalfruit.id</a></p>
        <p style={{marginTop:15,fontSize:'0.85rem',color:'#666'}}>© 2026 TOTAL FRUIT. All rights reserved.</p>
      </footer>

      <a href="https://wa.me/6285124441513?text=Halo%20TOTAL%20FRUIT,%20mau%20order%20dong" target="_blank" className="wa-float" aria-label="Chat WhatsApp">
        <svg viewBox="0 0 32 32"><path d="M16 0C7.2 0 0 7.2 0 16c0 2.8.7 5.5 2.1 7.9L0 32l8.3-2.2C10.6 31.3 13.3 32 16 32c8.8 0 16-7.2 16-16S24.8 0 16 0zm0 29.3c-2.4 0-4.7-.6-6.8-1.8l-.5-.3-4.9 1.3-4.8-.3-.5c-1.3-2.1-2-4.5-2-7 0-7.3 6-13.3 13.3-13.3S29.3 8.7 29.3 16 23.3 29.3 16 29.3zm7.3-9.9c-.4-.2-2.3-1.1-2.7-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.5-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.4-2-3.1-2.2-3.5-.2-.4 0-.6.2-.8.2-.2.4-.5.5-.7.2-.2.3-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.7-.6-.8-.6h-.7c-.3 0-.7.1-1.5-.4.4-1.3 1.3-1.3 3.1s1.4 3.6 1.6 3.9c.2.3 2.7 4.1 6.5 5.7 3.8 1.6 3.8 1.1 4.5 1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.1-.4-.2-.8-.4z"/></svg>
      </a>
    </>
  )
}