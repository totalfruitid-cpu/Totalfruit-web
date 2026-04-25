import { useState, useEffect } from 'react'
import Head from 'next/head'
import { db } from '../lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export default function Home() {
  const [lang, setLang] = useState('id')
  const [activeModal, setActiveModal] = useState(null)
  const [orderStep, setOrderStep] = useState(1)
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedAddons, setSelectedAddons] = useState([])
  const [loading, setLoading] = useState(false)
  const [sukses, setSukses] = useState(false)
  const [customer, setCustomer] = useState({ nama: "", noHp: "", alamat: "" })
  const [metode, setMetode] = useState("COD")

  const translations = {
    id: {
      'hero-title': 'TOTAL FRUIT',
      'hero-tagline': 'Rasakan sehatnya, nikmati kelembutannya.',
      'hero-btn': 'LIHAT MENU',
      'juice-title': 'JUS',
      'juice-desc': '100% Bahan alami, tanpa pewarna atau perisa buatan',
      'addons-title': 'ADD-ONS POPULER',
      'addons-note': '*Popping boba hanya di Sultan',
      'checkout-btn': 'Kirim Pesanan',
      'back-btn': 'Kembali',
      'sukses-title': 'Pesanan Terkirim!',
      'sukses-desc': 'Cek status di kasir. Tim kami segera proses 👑'
    },
    en: {
      'hero-title': 'TOTAL FRUIT',
      'hero-tagline': 'Taste the health, feel the cloud.',
      'hero-btn': 'SEE MENU',
      'juice-title': 'JUICE',
      'juice-desc': '100% Natural ingredients, no artificial coloring or flavors',
      'addons-title': 'POPULAR ADD-ONS',
      'addons-note': '*Popping boba only in Sultan',
      'checkout-btn': 'Send Order',
      'back-btn': 'Back',
      'sukses-title': 'Order Sent!',
      'sukses-desc': 'Check status at cashier. We will process soon 👑'
    }
  }

  const juiceMenu = [
    {
      id: 'avocado', name: '🥑 Alpukat', title: 'AVOCADO SERIES', img: '/menu-avocado.png',
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
      id: 'mango', name: '🥭 Mangga', title: 'MANGO SERIES', img: '/menu-mango.png',
      sizes: [{name: 'LITE', price: 18}, {name: 'HEALTHY', price: 25}, {name: 'SULTAN', price: 45}],
      addons: [
        {name: 'Mango Cube', price: 5, icon: '🥭'},
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

  const t = (key) => translations[lang][key] || key

  const openJuice = (item) => {
    setActiveModal(item)
    setOrderStep(1)
    setSelectedSize(null)
    setSelectedAddons([])
    setSukses(false)
    setCustomer({ nama: "", noHp: "", alamat: "" })
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setActiveModal(null)
    setOrderStep(1)
    setSelectedSize(null)
    setSelectedAddons([])
    setSukses(false)
    setCustomer({ nama: "", noHp: "", alamat: "" })
    document.body.style.overflow = 'auto'
  }

  const selectSize = (size) => {
    setSelectedSize(size)
    setOrderStep(2)
    setSelectedAddons([])
  }

  const toggleAddon = (addon) => {
    if(addon.sultanOnly && selectedSize?.name!== 'SULTAN') return
    if(selectedAddons.find(a => a.name === addon.name)){
      setSelectedAddons(selectedAddons.filter(a => a.name!== addon.name))
    } else {
      setSelectedAddons([...selectedAddons, addon])
    }
  }

  const calculateTotal = () => {
    if(!selectedSize) return 0
    const addonTotal = selectedAddons.reduce((sum, addon) => sum + addon.price, 0)
    return selectedSize.price + addonTotal
  }

  // FIX: UDAH SESUAI RULES FIREBASE LU 100%
  const kirimKeKasir = async () => {
    if(!selectedSize) return alert('Pilih ukuran dulu')
    if(!customer.nama.trim()) return alert('Nama wajib diisi')
    if(!customer.noHp.trim()) return alert('No WA wajib diisi')
    if(!customer.alamat.trim()) return alert('Alamat wajib diisi')

    setLoading(true)
    try {
      const total = calculateTotal()
      await addDoc(collection(db, "orders"), {
        items: [{
          id: activeModal.id,
          nama: activeModal.name,
          varian: selectedSize.name,
          harga: selectedSize.price,
          qty: 1,
          addons: selectedAddons.map(a => ({
            nama: a.name,
            harga: a.price
          }))
        }],
        total: total,
        grandTotal: total,
        status: "pending",
        metode: metode,
        waktu: serverTimestamp(),
        nama: customer.nama,
        noHp: customer.noHp,
        alamat: customer.alamat
      })
      setSukses(true)
      setTimeout(() => {
        closeModal()
      }, 2000)
    } catch (e) {
      console.error("Error:", e)
      alert('Gagal kirim pesanan: ' + e.message)
    }
    setLoading(false)
  }

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
      .navbar-inner{width:100%;max-width:700px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;padding:15px 20px 13px}
      .title{font-family:'Cinzel',serif;font-size:2.2rem;color:#FFD700;margin-bottom:8px;position:relative;display:inline-block}
      .crown-1::before{content:'👑';position:absolute;top:-1.9em;left:50%;transform:translateX(-50%) scale(0.9);font-size:1em;color:#FFD700;filter:drop-shadow(0 0 10px #FFD700)}
      .btn-gold{background:linear-gradient(90deg,#FFD700,#FFA500);color:#000;padding:12px 25px;border-radius:25px;font-weight:bold;border:none;cursor:pointer;display:inline-block;text-decoration:none}
      .btn-gold:disabled{background:#555;color:#999;cursor:not-allowed}
      .menu-btn{width:100%;background:#111;border:1px solid #D4AF37;color:#D4AF37;padding:16px;border-radius:15px;margin-bottom:12px;font-weight:bold;cursor:pointer}
      .modal{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.95);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;overflow-y:auto}
      .modal-content{background:#111;width:100%;max-width:450px;border-radius:20px;border:1px solid #FFD700;padding:25px;position:relative;text-align:center;max-height:90vh;overflow-y:auto}
      .close-modal{position:absolute;top:10px;right:20px;font-size:32px;color:#FFD700;cursor:pointer}
      .addon-item{display:flex;justify-content:space-between;align-items:center;padding:12px 16px;background:#1a1a1a;border:1px solid #333;border-radius:10px;margin-bottom:8px;cursor:pointer}
      .addon-item.active{border-color:#FFD700;background:#2a2300}
      .addon-item.disabled{opacity:0.4;cursor:not-allowed}
      .input-field{width:100%;background:#1a1a1a;border:1px solid #333;padding:12px 16px;border-radius:10px;margin-bottom:10px;color:#fff;font-family:'Poppins',sans-serif}
      .input-field:focus{outline:none;border-color:#FFD700}
      .metode-btn{flex:1;padding:10px;border-radius:10px;border:1px solid #333;background:#1a1a1a;color:#fff;font-weight:600;cursor:pointer}
      .metode-btn.active{border-color:#FFD700;background:#2a2300;color:#FFD700}
      `}</style>

      <nav className="navbar">
        <div className="navbar-inner">
          <img src="/logo.png" alt="Total Fruit" style={{height:'45px'}} />
          <h1 className="title crown-1" style={{fontSize:'1.2rem'}}>TOTAL FRUIT</h1>
        </div>
      </nav>

      <div className="container">
        <section id="menu">
          <h2 style={{fontFamily:'Cinzel,serif',fontSize:'1.75rem',color:'#FFD700',marginBottom:'20px'}}>{t('juice-title')}</h2>
          <p style={{color:'#ccc',marginBottom:'20px'}}>{t('juice-desc')}</p>
          {juiceMenu.map((item) => (
            <button key={item.id} className="menu-btn" onClick={() => openJuice(item)}>
              {item.name}
            </button>
          ))}
        </section>
      </div>

      {activeModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closeModal}>×</span>

            {sukses? (
              <>
                <h2 style={{fontSize:'1.5rem',marginBottom:'10px'}}>👑 {t('sukses-title')}</h2>
                <p style={{color:'#ccc'}}>{t('sukses-desc')}</p>
              </>
            ) : orderStep === 1? (
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
            ) : (
              <>
                <h2 style={{fontSize:'1.2rem', marginBottom:'5px'}}>{activeModal.name} {selectedSize.name}</h2>
                <p style={{color:'#D4AF37', fontSize:'1.5rem', marginBottom:'20px'}}>IDR {calculateTotal()}K</p>

                <h3 style={{fontSize:'1rem', color:'#FFD700', marginBottom:'15px', textAlign:'left'}}>{t('addons-title')}</h3>

                {activeModal.addons.map(addon => {
                  const isDisabled = addon.sultanOnly && selectedSize.name!== 'SULTAN'
                  const isActive = selectedAddons.find(a => a.name === addon.name)
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

                <p style={{fontSize:'0.7rem', color:'#666', marginTop:'10px', marginBottom:'20px', textAlign:'left'}}>{t('addons-note')}</p>

                {/* FORM DATA CUSTOMER - WAJIB SESUAI RULES */}
                <input
                  placeholder="Nama Lengkap"
                  value={customer.nama}
                  onChange={e => setCustomer({...customer, nama: e.target.value})}
                  className="input-field"
                />
                <input
                  placeholder="No WA: 628xxx"
                  value={customer.noHp}
                  onChange={e => setCustomer({...customer, noHp: e.target.value})}
                  className="input-field"
                />
                <textarea
                  placeholder="Alamat Lengkap"
                  value={customer.alamat}
                  onChange={e => setCustomer({...customer, alamat: e.target.value})}
                  className="input-field"
                  rows={2}
                />

                {/* METODE BAYAR */}
                <div style={{textAlign:'left', marginBottom:'15px'}}>
                  <p style={{fontSize:'0.9rem', color:'#FFD700', marginBottom:'10px'}}>Metode Pembayaran:</p>
                  <div style={{display:'flex', gap:'8px'}}>
                    {['COD', 'QRIS', 'Transfer'].map(m => (
                      <button
                        key={m}
                        onClick={() => setMetode(m)}
                        className={`metode-btn ${metode === m? 'active' : ''}`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{display:'flex', gap:'10px', marginTop:'20px'}}>
                  <button className="menu-btn" style={{flex:1}} onClick={() => setOrderStep(1)}>{t('back-btn')}</button>
                  <button className="btn-gold" style={{flex:2}} onClick={kirimKeKasir} disabled={loading}>
                    {loading? 'Mengirim...' : t('checkout-btn')}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}