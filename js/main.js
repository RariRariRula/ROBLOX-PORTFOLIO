/*
  Inline config - edit these values directly
*/
const SITE_CONFIG = {
  name: "RariTheRula",
  role: "Roblox Scripter · 1-2 Years Experience",
  about: "Hey, I'm RariTheRula. I'm 20 years old and have 1-2 years of Roblox scripting experience. I take commissions in both Robux and USD.",
  footer: "RARITHERULA — ROBLOX COMMISSIONS",
  banner: "RARITHERULA COMMISSIONS ✦ ROBUX + USD ✦ ROBLOX SCRIPTING",

  heroImage: "https://RariRariRula.github.io/pic.jpg",

  socials: [
    { name: "Discord (DM to order)", url: "https://discord.com/" },
    { name: "Twitter/X", url: "https://twitter.com/" }
  ],

  pricing: [
    { name: "Test", price: "R$Example / $Example" },
    { name: "Test", price: "R$Example / $Example" },
    { name: "Test", price: "R$Example / $Example" },
    { name: "Test", price: "R$Example / $Example" },
    { name: "Test", price: "R$Example / $Example" },
    { name: "Test", price: "R$Example / $Example" }
  ],

  rules: [
    "Example rule 1.",
    "Example rule 2.",
    "Example rule 3.",
    "Example rule 4.",
    "Example rule 5.",
    "Example rule 6.",
    "Example rule 7.",
    "Example rule 8.",
    "Example rule 9.",
    "Example rule 10."
  ],

  commissionStatus: "OPEN",

  timeline: [
    { label: "Example", description: "Standard commission" },
    { label: "Example", description: "Rush fee (% extra)" }
  ],

  process: [
    "Example process step 1.",
    "Example process step 2.",
    "Example process step 3.",
    "Example process step 4.",
    "Example process step 5."
  ],

  faq: [
    { q: "Can I rush my commission?", a: "Yes, but it costs 30% - 50% extra, depending on how soon you need it before the original deadline." },
    { q: "Do you work on weekends?", a: "Sometimes, depending on my schedule and deadlines." },
    { q: "What if I'm not happy with the work?", a: "Revisions are discussed per project. Honesty over everything." },
    { q: "Can you build full games?", a: "No. I only work on specific systems, never full frameworks." }
  ],

  portfolio: [
    { title: "Example1", type: "Scripting", image: "https://via.placeholder.com/300x200?text=Combat" },
    { title: "Example2", type: "Scripting", image: "https://via.placeholder.com/300x200?text=System" },
    { title: "Example3", type: "Scripting", image: "https://via.placeholder.com/300x200?text=Moves" }
  ],

  testimonials: [
    { author: "Test", text: "Example testimonial text." },
    { author: "Test", text: "Example testimonial text." },
    { author: "Test", text: "Example testimonial text." }
  ],

  news: [
    { date: "0000/00/00", title: "New Blank", content: "idk." },
    { date: "0000/00/00", title: "Blank Title", content: "Example news content." }
  ],

  videos: [
    { title: "Example", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Example", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
  ],

  gallery: [
    { id: 1, title: "Example", thumb: "https://via.placeholder.com/200x150?text=Combat1", full: "https://via.placeholder.com/800x600?text=Combat1" },
    { id: 2, title: "Example", thumb: "https://via.placeholder.com/200x150?text=System1", full: "https://via.placeholder.com/800x600?text=System1" },
    { id: 3, title: "Example", thumb: "https://via.placeholder.com/200x150?text=Move1", full: "https://via.placeholder.com/800x600?text=Move1" },
    { id: 4, title: "Example", thumb: "https://via.placeholder.com/200x150?text=System2", full: "https://via.placeholder.com/800x600?text=System2" }
  ],

  quoteForm: {
    email: "Example",
    fields: [
      { label: "Project Type", required: true },
      { label: "Scope/Description", required: true },
      { label: "Budget Range", required: false },
      { label: "Timeline", required: true }
    ]
  },

  defaultTheme: "dark"
};

const byId = id => document.getElementById(id)

function renderBanner(){
  const banner = byId('banner')
  if(!banner) return
  banner.innerHTML = `<span>${SITE_CONFIG.banner}</span><span>${SITE_CONFIG.banner}</span>`
}

function renderHero(){
  byId('name').textContent = SITE_CONFIG.name
  byId('role').textContent = SITE_CONFIG.role
  byId('about-text').textContent = SITE_CONFIG.about
  byId('footer').textContent = SITE_CONFIG.footer
  const img = byId('hero-img')
  if(img && SITE_CONFIG.heroImage) img.src = SITE_CONFIG.heroImage
}


function renderSocials(){
  const socials = byId('socials')
  socials.innerHTML = ''
  SITE_CONFIG.socials.forEach(s => {
    const a = document.createElement('a')
    a.href = s.url; a.textContent = s.name; a.target = '_blank'
    socials.appendChild(a)
  })
}

function renderRules(){
  const rulesList = byId('rules-list')
  if(!rulesList) return
  rulesList.innerHTML = ''
  const ul = document.createElement('ul')
  SITE_CONFIG.rules.forEach(r => {
    const li = document.createElement('li')
    li.textContent = r
    ul.appendChild(li)
  })
  rulesList.appendChild(ul)
}

function renderPricing(){
  const pricingList = byId('pricing-list')
  if(!pricingList) return
  pricingList.innerHTML = ''
  SITE_CONFIG.pricing.forEach(p => {
    const row = document.createElement('div')
    row.className = 'price-item'
    row.innerHTML = `<strong>${p.name}</strong><span>${p.price}</span>`
    pricingList.appendChild(row)
  })
}

function renderStatus(){
  const status = byId('commission-status')
  if(!status) return
  const isOpen = SITE_CONFIG.commissionStatus === "OPEN"
  status.innerHTML = `<span class="status-badge ${isOpen ? 'open' : 'closed'}">${SITE_CONFIG.commissionStatus}</span>`
}

function renderTimeline(){
  const timeline = byId('timeline-list')
  if(!timeline) return
  timeline.innerHTML = ''
  SITE_CONFIG.timeline.forEach(t => {
    const item = document.createElement('div')
    item.className = 'timeline-item'
    item.innerHTML = `<strong>${t.label}</strong><p>${t.description}</p>`
    timeline.appendChild(item)
  })
}

function renderProcess(){
  const process = byId('process-list')
  if(!process) return
  process.innerHTML = ''
  SITE_CONFIG.process.forEach((p, i) => {
    const item = document.createElement('div')
    item.className = 'process-item'
    item.innerHTML = `<span class="step">${i+1}</span><p>${p}</p>`
    process.appendChild(item)
  })
}

function renderFAQ(){
  const faq = byId('faq-list')
  if(!faq) return
  faq.innerHTML = ''
  SITE_CONFIG.faq.forEach(item => {
    const faqItem = document.createElement('details')
    faqItem.className = 'faq-item'
    faqItem.innerHTML = `<summary>${item.q}</summary><p>${item.a}</p>`
    faq.appendChild(faqItem)
  })
}

function renderPortfolio(){
  const portfolio = byId('portfolio-list')
  if(!portfolio) return
  portfolio.innerHTML = ''
  SITE_CONFIG.portfolio.forEach(p => {
    const card = document.createElement('div')
    card.className = 'portfolio-card'
    card.innerHTML = `<img src="${p.image}" alt="${p.title}"/><h4>${p.title}</h4><p>${p.type}</p>`
    portfolio.appendChild(card)
  })
}

function renderTestimonials(){
  const testimonials = byId('testimonials-list')
  if(!testimonials) return
  testimonials.innerHTML = ''
  SITE_CONFIG.testimonials.forEach(t => {
    const card = document.createElement('div')
    card.className = 'testimonial-card'
    card.innerHTML = `<p>"${t.text}"</p><strong>— ${t.author}</strong>`
    testimonials.appendChild(card)
  })
}

function renderNews(){
  const news = byId('news-list')
  if(!news) return
  news.innerHTML = ''
  SITE_CONFIG.news.forEach(n => {
    const item = document.createElement('div')
    item.className = 'news-item'
    item.innerHTML = `<span class="news-date">${n.date}</span><h4>${n.title}</h4><p>${n.content}</p>`
    news.appendChild(item)
  })
}

function renderVideos(){
  const videos = byId('videos-list')
  if(!videos) return
  videos.innerHTML = ''
  SITE_CONFIG.videos.forEach(v => {
    const container = document.createElement('div')
    container.className = 'video-container'
    container.innerHTML = `<iframe src="${v.url}" title="${v.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>${v.title}</p>`
    videos.appendChild(container)
  })
}

function renderGallery(){
  const gallery = byId('gallery-list')
  if(!gallery) return
  gallery.innerHTML = ''
  SITE_CONFIG.gallery.forEach(img => {
    const thumb = document.createElement('div')
    thumb.className = 'gallery-thumb'
    thumb.innerHTML = `<img src="${img.thumb}" alt="${img.title}"/>`
    thumb.addEventListener('click', ()=>openLightbox(img))
    gallery.appendChild(thumb)
  })
}

function openLightbox(img){
  const modal = document.getElementById('lightbox-modal')
  if(!modal) return
  modal.style.display = 'flex'
  modal.innerHTML = `
    <div class="lightbox-content">
      <span class="lightbox-close">&times;</span>
      <img src="${img.full}" alt="${img.title}"/>
      <p>${img.title}</p>
    </div>
  `
  modal.querySelector('.lightbox-close').addEventListener('click', closeLightbox)
  modal.addEventListener('click', (e)=>{ if(e.target === modal) closeLightbox() })
}

function closeLightbox(){
  const modal = document.getElementById('lightbox-modal')
  if(modal) modal.style.display = 'none'
}

function renderQuoteForm(){
  const form = byId('quote-form')
  if(!form) return
  form.innerHTML = `
    <form id="quote-form-element">
      <input type="email" placeholder="Your Email" required/>
      <textarea placeholder="Describe your project..." rows="4" required></textarea>
      <select required>
        <option disabled selected>Select Project Type</option>
        <option>Combat Scripting</option>
        <option>VFX Work</option>
        <option>Custom Moves</option>
        <option>Other</option>
      </select>
      <input type="text" placeholder="Timeline (e.g., 'ASAP', '1 week')" required/>
      <button type="submit">Get Quote</button>
    </form>
  `
  document.getElementById('quote-form-element').addEventListener('submit', (e)=>{
    e.preventDefault()
    alert('Quote request received! Check your email for next steps.')
    e.target.reset()
  })
}

function setupStickyNav(){
  const nav = document.getElementById('sticky-nav')
  if(!nav) return
  const sections = document.querySelectorAll('main section[id]')
  const navLinks = {}
  
  sections.forEach(section => {
    const link = document.createElement('a')
    link.href = '#' + section.id
    link.textContent = section.querySelector('h2')?.textContent || section.id
    link.addEventListener('click', (e)=>{
      e.preventDefault()
      section.scrollIntoView({behavior: 'smooth'})
    })
    nav.appendChild(link)
    navLinks[section.id] = link
  })

  window.addEventListener('scroll', ()=>{
    sections.forEach(section => {
      const rect = section.getBoundingClientRect()
      if(rect.top < 150 && rect.bottom > 150){
        Object.values(navLinks).forEach(l => l.classList.remove('active'))
        navLinks[section.id]?.classList.add('active')
      }
    })
  })
}

function setupParallax(){
  // Parallax disabled
}

function setupTheme(){
  const btn = byId('theme-toggle')
  const root = document.documentElement
  const saved = localStorage.getItem('site-theme')
  if(saved) root.setAttribute('data-theme', saved)
  else if(SITE_CONFIG.defaultTheme) root.setAttribute('data-theme', SITE_CONFIG.defaultTheme)
  btn.addEventListener('click', ()=>{
    const cur = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    root.setAttribute('data-theme', cur)
    localStorage.setItem('site-theme', cur)
  })
}

document.addEventListener('DOMContentLoaded', ()=>{
  renderBanner()
  renderHero()
  renderStatus()
  renderSocials()
  renderRules()
  renderPricing()
  renderTimeline()
  renderProcess()
  renderNews()
  renderVideos()
  renderGallery()
  renderQuoteForm()
  renderFAQ()
  renderPortfolio()
  renderTestimonials()
  setupTheme()
  setupStickyNav()
})
