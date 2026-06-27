import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const LOGO = "data:image/png;base64,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";

const G = {
  dark:"#071A0D", mid:"#0B2415", green:"#5CB82E", greenL:"#7DD44E", greenD:"#3D8A1A",
  gold:"#F0C040", white:"#FFFFFF", off:"#F5F9F2", gray:"#6B8A70", grayL:"#9BB89F",
  border:"#E0ECD8", red:"#E74C3C", blue:"#3B82F6", purple:"#8B5CF6",
};

const fmtR = v => "R$ " + Number(v).toFixed(2).replace(".",",");
const calcDisc = p => p.promo ? Math.round((1-p.promo/p.price)*100) : 0;

function Stars({ rating }) {
  return (
    <span style={{display:"flex",gap:2}}>
      {[1,2,3,4,5].map(i=>(
        <svg key={i} width={11} height={11} viewBox="0 0 24 24"
          fill={i<=Math.round(rating)?G.gold:"none"} stroke={G.gold} strokeWidth={2}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </span>
  );
}

const PRODUCTS0 = [
  {id:1,name:"Fone Bluetooth Premium XR7",price:299.90,promo:199.90,cat:"Eletrônicos",brand:"SoundMax",rating:4.8,reviews:342,sold:1240,emoji:"🎧",badge:"Mais Vendido",affiliate:false,stock:45,desc:"Cancelamento ativo de ruído, bateria 30h, Bluetooth 5.3. Qualidade de estúdio no seu dia a dia."},
  {id:2,name:"Curso Marketing Digital Pro",price:497.00,promo:297.00,cat:"Digital",brand:"EduMax",rating:4.9,reviews:891,sold:3421,emoji:"📚",badge:"Hot",affiliate:true,platform:"Hotmart",stock:999,desc:"50+ aulas, acesso vitalício, certificado. Transforme sua carreira digital."},
  {id:3,name:"Smartwatch Fitness Ultra",price:599.00,promo:449.00,cat:"Eletrônicos",brand:"FitTech",rating:4.7,reviews:215,sold:876,emoji:"⌚",badge:"Promoção",affiliate:false,stock:28,desc:"Monitor cardíaco, GPS integrado, 7 dias de bateria, 50 esportes rastreados."},
  {id:4,name:"Kit Skincare Glow Completo",price:189.90,promo:null,cat:"Beleza",brand:"GlowLab",rating:4.6,reviews:567,sold:2100,emoji:"✨",badge:null,affiliate:false,stock:67,desc:"Limpador, sérum e hidratante premium. Fórmula natural, sem parabenos."},
  {id:5,name:"Cadeira Gamer RGB Pro",price:1299.00,promo:999.00,cat:"Móveis",brand:"GameZone",rating:4.5,reviews:188,sold:432,emoji:"🪑",badge:"Oferta",affiliate:false,stock:12,desc:"Iluminação RGB, encosto 180°, suporte lombar e braços 3D ajustáveis."},
  {id:6,name:"E-book Copywriting Master",price:97.00,promo:47.00,cat:"Digital",brand:"CopyPro",rating:4.8,reviews:1203,sold:5670,emoji:"📖",badge:"Best Seller",affiliate:true,platform:"Kiwify",stock:999,desc:"150 páginas de técnicas comprovadas, templates prontos e exemplos reais."},
  {id:7,name:"Tênis Running Air Max",price:459.00,promo:329.00,cat:"Moda",brand:"SportRun",rating:4.6,reviews:445,sold:987,emoji:"👟",badge:"Novo",affiliate:false,stock:34,desc:"Amortecimento Air Max, solado anti-derrapante, leve e respirável."},
  {id:8,name:"Cafeteira Smart Espresso",price:349.00,promo:279.00,cat:"Casa",brand:"CoffeMax",rating:4.7,reviews:312,sold:654,emoji:"☕",badge:null,affiliate:false,stock:23,desc:"15 bar de pressão, aquecimento em 25s, compatível com cápsulas."},
];

const ORDERS0 = [
  {id:"#1001",customer:"Ana Paula S.",email:"ana@gmail.com",total:599.80,status:"Entregue",date:"20/06/2025",items:2,payment:"Pix",city:"São Paulo"},
  {id:"#1002",customer:"Carlos Mendes",email:"carlos@hotmail.com",total:199.90,status:"Enviado",date:"21/06/2025",items:1,payment:"Cartão",city:"Rio de Janeiro"},
  {id:"#1003",customer:"Fernanda R.",email:"feh@gmail.com",total:1299.00,status:"Processando",date:"22/06/2025",items:1,payment:"Pix",city:"Curitiba"},
  {id:"#1004",customer:"Roberto Lima",email:"roberto@gmail.com",total:446.00,status:"Pendente",date:"23/06/2025",items:3,payment:"Boleto",city:"Belo Horizonte"},
];

const COUPONS0 = [
  {code:"PRIMEIRACOMPRA",desc:"15% desconto primeira compra",type:"percent",value:15,active:true,uses:0,minOrder:50},
  {code:"FRETEGRATIS",desc:"R$50 de desconto no frete",type:"fixed",value:50,active:true,uses:127,minOrder:200},
  {code:"ZELSTORE10",desc:"10% em todo o site",type:"percent",value:10,active:true,uses:43,minOrder:100},
];

const BLOG0 = [
  {id:1,title:"10 Dicas de SEO para 2025",slug:"seo-2025",excerpt:"Aprenda as melhores práticas de otimização para motores de busca que realmente funcionam este ano.",img:"📊",cat:"SEO",date:"20/06/2025",views:1342,published:true},
  {id:2,title:"Como Dobrar suas Vendas com Marketing Digital",slug:"dobrar-vendas",excerpt:"Estratégias práticas de tráfego pago e orgânico para aumentar suas conversões rapidamente.",img:"📈",cat:"Marketing",date:"18/06/2025",views:2521,published:true},
  {id:3,title:"Guia Completo de E-commerce para Iniciantes",slug:"guia-ecommerce",excerpt:"Tudo que você precisa saber para montar sua loja virtual do zero e começar a vender hoje.",img:"🛒",cat:"E-commerce",date:"15/06/2025",views:4102,published:true},
];

const CHARTS = [
  {day:"Seg",vendas:4200},{day:"Ter",vendas:6800},{day:"Qua",vendas:5100},
  {day:"Qui",vendas:8900},{day:"Sex",vendas:12400},{day:"Sáb",vendas:9600},{day:"Dom",vendas:7200},
];

const CATS = ["Todos","Eletrônicos","Digital","Beleza","Móveis","Moda","Casa"];
const PLATFORMS = ["Hotmart","Kiwify","Eduzz","Monetizze","Braip","Amazon","Shopee","AliExpress","Mercado Livre","Magalu"];

// ─── PRODUCT CARD ────────────────────────────────────────────────────────────
function ProductCard({ p, onAdd, onView }) {
  const [hov, setHov] = useState(false);
  const [wish, setWish] = useState(false);
  const d = calcDisc(p);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      onClick={() => onView(p)}
      style={{borderRadius:16,overflow:"hidden",cursor:"pointer",background:G.white,
        border: hov ? `2px solid ${G.green}` : `2px solid ${G.border}`,
        transform: hov ? "translateY(-4px)" : "none",
        boxShadow: hov ? `0 16px 40px rgba(92,184,46,0.18)` : "0 2px 12px rgba(0,0,0,0.06)",
        transition:"all 0.22s"}}
    >
      <div style={{position:"relative",background:G.white,height:200,display:"flex",alignItems:"center",justifyContent:"center",borderBottom:`1.5px solid ${G.border}`}}>
        <span style={{fontSize:88}}>{p.emoji}</span>
        {p.badge && <span style={{position:"absolute",top:10,left:10,fontSize:11,fontWeight:800,padding:"3px 10px",borderRadius:20,background:`linear-gradient(90deg,${G.greenD},${G.green})`,color:"#fff"}}>{p.badge}</span>}
        {p.affiliate && <span style={{position:"absolute",top:10,right:34,fontSize:10,fontWeight:700,padding:"2px 7px",borderRadius:20,background:"#FFF8E0",color:"#B8860B"}}>{p.platform}</span>}
        <button
          onClick={e => { e.stopPropagation(); setWish(!wish); }}
          style={{position:"absolute",top:10,right:10,width:28,height:28,borderRadius:"50%",background:wish?"#fff0f0":G.white,border:`1.5px solid ${wish?"#e74c3c":"#ccc"}`,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}
        >
          <svg width={12} height={12} viewBox="0 0 24 24" fill={wish?"#e74c3c":"none"} stroke={wish?"#e74c3c":"#aaa"} strokeWidth={2}>
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
        </button>
        {d > 0 && <div style={{position:"absolute",bottom:10,right:10,width:38,height:38,borderRadius:"50%",background:G.red,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:900,color:"#fff"}}>-{d}%</div>}
      </div>
      <div style={{padding:"14px 14px 16px"}}>
        <p style={{fontSize:11,color:G.green,fontWeight:700,marginBottom:3}}>{p.cat} · {p.brand}</p>
        <h3 style={{fontSize:14,fontWeight:700,color:"#1A2F1E",marginBottom:6,lineHeight:1.35,minHeight:38}}>{p.name}</h3>
        <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:10}}>
          <Stars rating={p.rating}/>
          <span style={{fontSize:11,color:G.gray}}>({p.reviews})</span>
          <span style={{fontSize:11,color:G.gray,marginLeft:"auto"}}>{p.sold.toLocaleString()} vendidos</span>
        </div>
        <div style={{display:"flex",alignItems:"flex-end",gap:8,marginBottom:12}}>
          {p.promo ? (
            <>
              <span style={{fontSize:20,fontWeight:900,color:"#1A2F1E"}}>{fmtR(p.promo)}</span>
              <span style={{fontSize:12,textDecoration:"line-through",color:G.gray}}>{fmtR(p.price)}</span>
            </>
          ) : <span style={{fontSize:20,fontWeight:900,color:"#1A2F1E"}}>{fmtR(p.price)}</span>}
        </div>
        <button
          onClick={e => { e.stopPropagation(); onAdd(p); }}
          style={{width:"100%",padding:"10px 0",borderRadius:12,fontSize:13,fontWeight:800,background:`linear-gradient(90deg,${G.greenD},${G.green})`,color:"#fff",border:"none",cursor:"pointer"}}
        >
          {p.affiliate ? "🔗 Ver Oferta" : "🛒 Comprar"}
        </button>
      </div>
    </div>
  );
}

// ─── PRODUCT MODAL ───────────────────────────────────────────────────────────
function ProductModal({ p, onAdd, onClose }) {
  const [tab, setTab] = useState("desc");
  return (
    <div style={{position:"fixed",inset:0,zIndex:300,background:"rgba(0,0,0,0.65)",display:"flex",alignItems:"center",justifyContent:"center",padding:16}} onClick={onClose}>
      <div style={{background:G.white,borderRadius:24,maxWidth:680,width:"100%",maxHeight:"90vh",overflow:"auto"}} onClick={e => e.stopPropagation()}>
        <div style={{display:"flex",gap:24,padding:28,flexWrap:"wrap"}}>
          <div style={{width:220,flexShrink:0,background:G.off,borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",fontSize:96,minHeight:200}}>{p.emoji}</div>
          <div style={{flex:1,minWidth:200}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
              <span style={{fontSize:12,fontWeight:700,color:G.green}}>{p.cat} · {p.brand}</span>
              <button onClick={onClose} style={{background:"none",border:"none",cursor:"pointer",fontSize:20,color:G.gray}}>✕</button>
            </div>
            <h2 style={{fontSize:20,fontWeight:900,color:"#1A2F1E",marginBottom:10,lineHeight:1.3}}>{p.name}</h2>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:14}}>
              <Stars rating={p.rating}/>
              <span style={{fontSize:12,color:G.gray}}>({p.reviews} avaliações) · {p.sold.toLocaleString()} vendidos</span>
            </div>
            <div style={{display:"flex",alignItems:"flex-end",gap:10,marginBottom:6}}>
              {p.promo ? (
                <>
                  <span style={{fontSize:28,fontWeight:900,color:"#1A2F1E"}}>{fmtR(p.promo)}</span>
                  <span style={{fontSize:15,textDecoration:"line-through",color:G.gray}}>{fmtR(p.price)}</span>
                  <span style={{fontSize:12,fontWeight:800,background:"#FEE2E2",color:G.red,padding:"2px 8px",borderRadius:8}}>-{calcDisc(p)}%</span>
                </>
              ) : <span style={{fontSize:28,fontWeight:900,color:"#1A2F1E"}}>{fmtR(p.price)}</span>}
            </div>
            <p style={{fontSize:12,color:G.gray,marginBottom:14}}>ou 12x de {fmtR((p.promo||p.price)/12)} sem juros</p>
            {p.stock <= 20 && <p style={{fontSize:12,fontWeight:700,color:"#E67E22",marginBottom:10}}>⚠️ Últimas {p.stock} unidades!</p>}
            <button onClick={() => onAdd(p)} style={{width:"100%",padding:"13px 0",borderRadius:14,fontSize:15,fontWeight:800,background:`linear-gradient(90deg,${G.greenD},${G.green})`,color:"#fff",border:"none",cursor:"pointer",marginBottom:10}}>
              {p.affiliate ? "🔗 Ir para oferta" : "🛒 Adicionar ao carrinho"}
            </button>
            <button style={{width:"100%",padding:"11px 0",borderRadius:14,fontSize:13,fontWeight:700,background:G.off,color:G.greenD,border:`1.5px solid ${G.border}`,cursor:"pointer"}}>
              💬 Perguntar via WhatsApp
            </button>
          </div>
        </div>
        <div style={{borderTop:`1.5px solid ${G.border}`,padding:"0 28px 28px"}}>
          <div style={{display:"flex",marginBottom:16,borderBottom:`1.5px solid ${G.border}`}}>
            {[["desc","Descrição"],["specs","Especificações"],["reviews","Avaliações"]].map(([k,l]) => (
              <button key={k} onClick={() => setTab(k)} style={{padding:"12px 20px",fontWeight:700,fontSize:13,background:"none",border:"none",cursor:"pointer",borderBottom:tab===k?`2px solid ${G.green}`:"2px solid transparent",color:tab===k?G.green:G.gray}}>
                {l}
              </button>
            ))}
          </div>
          {tab === "desc" && <p style={{fontSize:14,color:"#444",lineHeight:1.8}}>{p.desc}</p>}
          {tab === "specs" && (
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
              {[["SKU","ZL-00"+p.id],["Categoria",p.cat],["Marca",p.brand||"—"],["Estoque",p.stock+" unidades"],["Entrega","3-7 dias úteis"],["Garantia","12 meses"]].map(([l,v]) => (
                <div key={l} style={{background:G.off,borderRadius:10,padding:"10px 14px"}}>
                  <p style={{fontSize:11,color:G.gray,marginBottom:2}}>{l}</p>
                  <p style={{fontSize:13,fontWeight:700,color:"#1A2F1E"}}>{v}</p>
                </div>
              ))}
            </div>
          )}
          {tab === "reviews" && (
            <div>
              {[{name:"Maria S.",rating:5,txt:"Produto excelente! Superou todas as expectativas. Chegou rápido e bem embalado."},
                {name:"João P.",rating:4,txt:"Muito bom custo-benefício. Entrega rápida e produto conforme descrito."}].map((r,i) => (
                <div key={i} style={{padding:"12px 0",borderBottom:`1px solid ${G.border}`}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                    <div style={{width:34,height:34,borderRadius:"50%",background:G.green,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:14,fontWeight:800}}>{r.name[0]}</div>
                    <span style={{fontSize:13,fontWeight:700,color:"#1A2F1E"}}>{r.name}</span>
                    <Stars rating={r.rating}/>
                  </div>
                  <p style={{fontSize:13,color:"#555",lineHeight:1.7}}>{r.txt}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function ZelStore() {
  const [view, setView] = useState("store");
  const [adm, setAdm] = useState("dashboard");
  const [products, setProducts] = useState(PRODUCTS0);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState(ORDERS0);
  const [coupons, setCoupons] = useState(COUPONS0);
  const [blog, setBlog] = useState(BLOG0);
  const [selProd, setSelProd] = useState(null);
  const [toast, setToast] = useState(null);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Todos");
  const [step, setStep] = useState(1);
  const [pay, setPay] = useState("pix");
  const [couponCode, setCouponCode] = useState("");
  const [couponVal, setCouponVal] = useState(0);
  const [aiLoad, setAiLoad] = useState(false);
  const [aiRes, setAiRes] = useState("");
  const [aiMode, setAiMode] = useState("descricao");
  const [aiInput, setAiInput] = useState("");
  const [showPF, setShowPF] = useState(false);
  const [editP, setEditP] = useState(null);
  const [pForm, setPForm] = useState({name:"",price:"",promo:"",cat:"Eletrônicos",brand:"",stock:"",emoji:"📦",affiliate:false,platform:"Hotmart",desc:""});
  const [showBF, setShowBF] = useState(false);
  const [blogForm, setBlogForm] = useState({title:"",cat:"Marketing",content:"",img:"📝"});
  const [showCF, setShowCF] = useState(false);
  const [couponForm, setCouponForm] = useState({code:"",desc:"",type:"percent",value:"",minOrder:""});
  const [orderFilter, setOrderFilter] = useState("Todos");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [pixCode, setPixCode] = useState("");
  const [settings, setSettings] = useState({storeName:"Zel-Store",email:"contato@zelstore.com",whatsapp:"5511999999999",stripeKey:"pk_live_...",mpToken:"APP_USR_...",ga4:"G-XXXXXXXX",fbPixel:"",smtpHost:"smtp.gmail.com",smtpUser:""});
  const [settSaved, setSettSaved] = useState(false);

  const showT = (msg, type="success") => {
    setToast({msg, type});
    setTimeout(() => setToast(null), 3000);
  };

  const addToCart = p => {
    const ex = cart.find(c => c.id === p.id);
    if (ex) setCart(cart.map(c => c.id === p.id ? {...c, qty: c.qty+1} : c));
    else setCart([...cart, {...p, qty:1}]);
    showT("✓ Adicionado ao carrinho!");
  };

  const removeFromCart = id => setCart(cart.filter(c => c.id !== id));
  const updateQty = (id, qty) => {
    if (qty <= 0) { removeFromCart(id); return; }
    setCart(cart.map(c => c.id === id ? {...c, qty} : c));
  };

  const cartTotal = cart.reduce((s, c) => s + (c.promo||c.price)*c.qty, 0);
  const cartCount = cart.reduce((s, c) => s + c.qty, 0);
  const pixDisc = pay === "pix" ? cartTotal * 0.05 : 0;
  const finalTotal = Math.max(0, cartTotal - couponVal - pixDisc);

  const applyCoupon = () => {
    const found = coupons.find(c => c.code.toUpperCase() === couponCode.toUpperCase() && c.active);
    if (!found) { showT("Cupom inválido ou inativo", "error"); return; }
    if (cartTotal < found.minOrder) { showT(`Pedido mínimo: ${fmtR(found.minOrder)}`, "error"); return; }
    const val = found.type === "percent" ? cartTotal * found.value / 100 : found.value;
    setCouponVal(val);
    showT(`✓ Cupom aplicado! -${fmtR(val)}`);
  };

  const placeOrder = () => {
    const newOrd = {
      id:`#${1005 + orders.length}`, customer:"Novo Cliente", email:"cliente@email.com",
      total:finalTotal, status:"Pendente", date:new Date().toLocaleDateString("pt-BR"),
      items:cart.length, payment:pay==="pix"?"Pix":pay==="card"?"Cartão":"Mercado Pago", city:"Brasil"
    };
    setOrders([newOrd, ...orders]);
    if (pay === "pix") setPixCode("00020126580014br.gov.bcb.pix" + Date.now() + "52040000530398654" + finalTotal.toFixed(2) + "5802BR5925ZelStore6009SAOPAULO6304");
    setOrderPlaced(true);
    setCart([]); setCouponCode(""); setCouponVal(0); setStep(1);
    showT("🎉 Pedido realizado com sucesso!");
  };

  const saveProduct = () => {
    if (!pForm.name || !pForm.price) { showT("Preencha nome e preço","error"); return; }
    const prod = {...pForm, id:editP?editP.id:Date.now(), price:parseFloat(pForm.price)||0, promo:pForm.promo?parseFloat(pForm.promo):null, stock:parseInt(pForm.stock)||0, rating:4.5, reviews:0, sold:0};
    if (editP) setProducts(products.map(p => p.id===editP.id ? prod : p));
    else setProducts([prod, ...products]);
    setShowPF(false); setEditP(null);
    setPForm({name:"",price:"",promo:"",cat:"Eletrônicos",brand:"",stock:"",emoji:"📦",affiliate:false,platform:"Hotmart",desc:""});
    showT(editP ? "✓ Produto atualizado!" : "✓ Produto adicionado!");
  };

  const delProduct = id => { setProducts(products.filter(p => p.id !== id)); showT("Produto removido!"); };
  const startEdit = p => {
    setEditP(p);
    setPForm({name:p.name,price:String(p.price),promo:String(p.promo||""),cat:p.cat,brand:p.brand||"",stock:String(p.stock),emoji:p.emoji||"📦",affiliate:p.affiliate||false,platform:p.platform||"Hotmart",desc:p.desc||""});
    setShowPF(true);
  };

  const saveBlog = () => {
    if (!blogForm.title) { showT("Título obrigatório","error"); return; }
    const post = {id:Date.now(),title:blogForm.title,slug:blogForm.title.toLowerCase().replace(/\s+/g,"-"),excerpt:blogForm.content.slice(0,100)+"...",img:blogForm.img,cat:blogForm.cat,date:new Date().toLocaleDateString("pt-BR"),views:0,published:true,content:blogForm.content};
    setBlog([post,...blog]); setShowBF(false); setBlogForm({title:"",cat:"Marketing",content:"",img:"📝"});
    showT("✓ Post publicado!");
  };

  const saveCoupon = () => {
    if (!couponForm.code || !couponForm.value) { showT("Preencha código e valor","error"); return; }
    const c = {code:couponForm.code.toUpperCase(),desc:couponForm.desc,type:couponForm.type,value:parseFloat(couponForm.value),active:true,uses:0,minOrder:parseFloat(couponForm.minOrder)||0};
    setCoupons([c,...coupons]); setShowCF(false); setCouponForm({code:"",desc:"",type:"percent",value:"",minOrder:""});
    showT("✓ Cupom criado!");
  };

  const generateAI = async () => {
    if (!aiInput.trim()) { showT("Descreva o produto/tema","error"); return; }
    setAiLoad(true); setAiRes("");
    const prompts = {
      descricao: `Crie uma descrição de produto persuasiva para: "${aiInput}". Use copywriting, destaque benefícios e inclua CTA. Máximo 120 palavras. Em português.`,
      seo: `Crie SEO completo para: "${aiInput}". Inclua: Title tag (60 chars), Meta description (155 chars), 5 palavras-chave. Em português.`,
      anuncio: `Crie um anúncio para Facebook/Instagram sobre: "${aiInput}". Formato: Hook + Problema + Solução + CTA urgente. Em português.`,
      email: `Crie email marketing para: "${aiInput}". Inclua: Assunto, saudação, corpo com benefícios, oferta e CTA. Em português.`,
      blog: `Crie outline de artigo sobre: "${aiInput}". Inclua: título SEO, intro, 5 tópicos com subtópicos, conclusão e CTA. Em português.`,
      whatsapp: `Crie mensagem WhatsApp persuasiva para vender: "${aiInput}". Informal, com emoji, máx 3 parágrafos, CTA claro. Em português.`,
    };
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({model:"claude-sonnet-4-6",max_tokens:1000,messages:[{role:"user",content:prompts[aiMode]||prompts.descricao}]})
      });
      const data = await res.json();
      setAiRes(data.content?.[0]?.text || "Erro ao gerar conteúdo.");
    } catch(e) {
      setAiRes("Erro de conexão com a IA.");
    }
    setAiLoad(false);
  };

  const filtered = products.filter(p => {
    const mQ = p.name.toLowerCase().includes(q.toLowerCase()) || (p.brand||"").toLowerCase().includes(q.toLowerCase());
    const mC = cat === "Todos" || p.cat === cat;
    return mQ && mC;
  });

  const statusColor = s => s==="Entregue"?"#27AE60":s==="Enviado"?G.blue:s==="Processando"?G.gold:s==="Pendente"?"#E67E22":G.gray;

  const NavBtn = ({id, label}) => (
    <button onClick={() => setView(id)} style={{padding:"7px 16px",borderRadius:20,fontSize:13,fontWeight:700,background:view===id?`linear-gradient(90deg,${G.greenD},${G.green})`:`${G.green}22`,color:view===id?"#fff":G.greenL,border:`1.5px solid ${G.green}44`,cursor:"pointer"}}>
      {label}
    </button>
  );

  const Input = ({label, value, onChange, type="text", placeholder=""}) => (
    <div>
      <label style={{fontSize:12,fontWeight:700,color:G.gray,marginBottom:4,display:"block"}}>{label}</label>
      <input type={type} value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder}
        style={{width:"100%",padding:"9px 12px",borderRadius:10,border:`1.5px solid ${G.border}`,fontSize:13,outline:"none",boxSizing:"border-box"}}/>
    </div>
  );

  return (
    <div style={{minHeight:"100vh",background:G.off,fontFamily:"'Inter','Segoe UI',sans-serif",color:"#1A2F1E"}}>

      {/* TOAST */}
      {toast && (
        <div style={{position:"fixed",top:18,right:18,zIndex:1000,padding:"11px 22px",borderRadius:14,
          background:toast.type==="error"?G.red:`linear-gradient(90deg,${G.greenD},${G.green})`,
          color:"#fff",fontSize:13,fontWeight:700,boxShadow:"0 8px 28px rgba(0,0,0,0.18)"}}>
          {toast.msg}
        </div>
      )}

      {/* PRODUCT MODAL */}
      {selProd && <ProductModal p={selProd} onAdd={p=>{addToCart(p);setSelProd(null);}} onClose={()=>setSelProd(null)}/>}

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <header style={{position:"sticky",top:0,zIndex:90,background:G.dark,borderBottom:`2px solid ${G.mid}`,boxShadow:"0 4px 16px rgba(0,0,0,0.28)"}}>
        <div style={{maxWidth:1280,margin:"0 auto",padding:"0 16px",display:"flex",alignItems:"center",gap:12,height:64}}>
          <div style={{display:"flex",alignItems:"center",gap:8,cursor:"pointer",flexShrink:0}} onClick={()=>setView("store")}>
            <img src={LOGO} alt="Logo" style={{width:40,height:40,borderRadius:10,objectFit:"cover"}}/>
            <div>
              <span style={{fontSize:18,fontWeight:900,background:`linear-gradient(90deg,${G.green},${G.greenL})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",display:"block"}}>Zel-Store</span>
              <span style={{fontSize:9,color:G.grayL,letterSpacing:2,textTransform:"uppercase"}}>Sua loja digital</span>
            </div>
          </div>
          <div style={{flex:1,maxWidth:420,position:"relative"}}>
            <svg style={{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)"}} width={14} height={14} viewBox="0 0 24 24" fill="none" stroke={G.grayL} strokeWidth={2}><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Buscar produtos..."
              style={{width:"100%",paddingLeft:34,paddingRight:12,paddingTop:9,paddingBottom:9,borderRadius:24,border:`1.5px solid ${G.mid}`,background:"#0F2E18",color:"#fff",fontSize:13,outline:"none",boxSizing:"border-box"}}/>
          </div>
          <nav style={{display:"flex",gap:6,marginLeft:"auto",alignItems:"center"}}>
            <NavBtn id="store" label="🏪 Loja"/>
            <NavBtn id="blog" label="📝 Blog"/>
            <NavBtn id="admin" label="⚙️ Admin"/>
          </nav>
          <button onClick={()=>{setView("cart");setStep(1);setOrderPlaced(false);}}
            style={{position:"relative",padding:"7px 14px",borderRadius:20,fontSize:13,fontWeight:700,
              background:view==="cart"?`linear-gradient(90deg,${G.greenD},${G.green})`:`${G.green}22`,
              color:view==="cart"?"#fff":G.greenL,border:`1.5px solid ${G.green}44`,cursor:"pointer",flexShrink:0}}>
            🛒 Carrinho
            {cartCount > 0 && <span style={{position:"absolute",top:-7,right:-7,width:20,height:20,borderRadius:"50%",background:G.red,color:"#fff",fontSize:11,fontWeight:900,display:"flex",alignItems:"center",justifyContent:"center"}}>{cartCount}</span>}
          </button>
        </div>
      </header>

      {/* ── STORE ──────────────────────────────────────────────────────────── */}
      {view === "store" && (
        <main>
          {/* HERO */}
          <section style={{position:"relative",overflow:"hidden",padding:"64px 16px 76px",background:`linear-gradient(135deg,${G.dark} 0%,${G.mid} 55%,#1A4A24 100%)`}}>
            <div style={{position:"absolute",top:-100,right:-100,width:420,height:420,borderRadius:"50%",background:`${G.green}07`,filter:"blur(70px)"}}/>
            <div style={{maxWidth:800,margin:"0 auto",textAlign:"center",position:"relative"}}>
              <img src={LOGO} alt="Zel" style={{width:84,height:84,borderRadius:18,marginBottom:22,objectFit:"cover",boxShadow:`0 0 40px ${G.green}55`}}/>
              <h1 style={{fontSize:"clamp(32px,6vw,58px)",fontWeight:900,lineHeight:1.1,marginBottom:18,background:`linear-gradient(135deg,#fff 40%,${G.greenL})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
                Venda Mais.<br/>Cresça Mais.
              </h1>
              <p style={{fontSize:17,color:G.grayL,marginBottom:32,maxWidth:500,margin:"0 auto 32px"}}>
                Plataforma completa com IA, pagamentos, blog SEO e tudo para vender online.
              </p>
              <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
                <button onClick={()=>document.getElementById("produtos")?.scrollIntoView({behavior:"smooth"})}
                  style={{padding:"14px 32px",borderRadius:30,fontWeight:800,fontSize:15,background:`linear-gradient(90deg,${G.greenD},${G.green})`,color:"#fff",border:"none",cursor:"pointer",boxShadow:`0 0 30px ${G.green}44`}}>
                  🛒 Ver Produtos
                </button>
                <button onClick={()=>setView("admin")}
                  style={{padding:"14px 32px",borderRadius:30,fontWeight:800,fontSize:15,background:"transparent",color:G.greenL,border:`2px solid ${G.green}55`,cursor:"pointer"}}>
                  ⚙️ Painel Admin
                </button>
              </div>
              <div style={{display:"flex",justifyContent:"center",gap:28,marginTop:36,flexWrap:"wrap"}}>
                {[["🔒","Seguro","Pagamento garantido"],["⚡","Rápido","Entrega 3-7 dias"],["🤖","IA","Conteúdo automático"],["🏆","Completo","Tudo em um lugar"]].map(([ic,t,s])=>(
                  <div key={t} style={{textAlign:"center"}}>
                    <span style={{fontSize:22}}>{ic}</span>
                    <p style={{fontSize:13,fontWeight:700,color:"#fff",margin:"4px 0 2px"}}>{t}</p>
                    <p style={{fontSize:11,color:G.grayL}}>{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CATEGORIES */}
          <div style={{padding:"14px 16px",background:G.white,borderBottom:`2px solid ${G.border}`,position:"sticky",top:64,zIndex:50}}>
            <div style={{maxWidth:1280,margin:"0 auto",display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"}}>
              {CATS.map(c => (
                <button key={c} onClick={()=>setCat(c)} style={{padding:"7px 18px",borderRadius:20,fontSize:13,fontWeight:700,
                  background:cat===c?`linear-gradient(90deg,${G.greenD},${G.green})`:G.white,
                  color:cat===c?"#fff":G.gray,border:cat===c?`2px solid ${G.green}`:`2px solid ${G.border}`,cursor:"pointer",transition:"all 0.15s"}}>
                  {c}
                </button>
              ))}
              <span style={{marginLeft:"auto",fontSize:13,color:G.gray}}>{filtered.length} produto{filtered.length!==1?"s":""}</span>
            </div>
          </div>

          {/* PRODUCTS GRID */}
          <section id="produtos" style={{maxWidth:1280,margin:"0 auto",padding:"32px 16px"}}>
            {filtered.length === 0 ? (
              <div style={{textAlign:"center",padding:"60px 20px",background:G.white,borderRadius:16,border:`2px solid ${G.border}`}}>
                <p style={{fontSize:48}}>🔍</p>
                <p style={{fontSize:16,fontWeight:700,margin:"8px 0 4px"}}>Nenhum produto encontrado</p>
                <p style={{fontSize:13,color:G.gray,marginBottom:16}}>Tente outros termos ou limpe os filtros</p>
                <button onClick={()=>{setQ("");setCat("Todos");}} style={{padding:"8px 20px",borderRadius:10,background:G.green,color:"#fff",border:"none",cursor:"pointer",fontWeight:700}}>Limpar filtros</button>
              </div>
            ) : (
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(255px,1fr))",gap:20}}>
                {filtered.map(p => <ProductCard key={p.id} p={p} onAdd={addToCart} onView={setSelProd}/>)}
              </div>
            )}
          </section>

          {/* NEWSLETTER */}
          <section style={{padding:"40px 16px",background:`linear-gradient(135deg,${G.green}14,${G.greenL}07)`}}>
            <div style={{maxWidth:520,margin:"0 auto",textAlign:"center",padding:"32px 28px",borderRadius:24,background:G.white,border:`2px solid ${G.green}33`,boxShadow:`0 8px 32px ${G.green}12`}}>
              <p style={{fontSize:26,fontWeight:900,color:"#1A2F1E",marginBottom:6}}>📧 Fique por dentro!</p>
              <p style={{fontSize:14,color:G.gray,marginBottom:20}}>Promoções exclusivas e lançamentos direto no seu email.</p>
              <div style={{display:"flex",gap:10}}>
                <input placeholder="seu@email.com" style={{flex:1,padding:"10px 14px",borderRadius:12,border:`1.5px solid ${G.border}`,fontSize:13,outline:"none"}}/>
                <button onClick={()=>showT("✓ Inscrito com sucesso!")} style={{padding:"10px 18px",borderRadius:12,fontWeight:700,fontSize:13,background:`linear-gradient(90deg,${G.greenD},${G.green})`,color:"#fff",border:"none",cursor:"pointer"}}>Assinar</button>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* ── CART ───────────────────────────────────────────────────────────── */}
      {view === "cart" && (
        <div style={{maxWidth:1040,margin:"0 auto",padding:"30px 16px"}}>
          {orderPlaced ? (
            <div style={{textAlign:"center",padding:"60px 20px",background:G.white,borderRadius:20,border:`2px solid ${G.border}`}}>
              <p style={{fontSize:64,marginBottom:12}}>🎉</p>
              <h2 style={{fontSize:26,fontWeight:900,color:"#1A2F1E",marginBottom:8}}>Pedido Realizado!</h2>
              <p style={{fontSize:14,color:G.gray,marginBottom:20}}>Você receberá uma confirmação por email em breve.</p>
              {pay === "pix" && pixCode && (
                <div style={{background:"#F0FFF4",border:`2px solid ${G.green}`,borderRadius:16,padding:20,maxWidth:400,margin:"0 auto 24px",textAlign:"left"}}>
                  <p style={{fontWeight:800,color:G.greenD,marginBottom:8}}>📱 Código Pix Copia e Cola:</p>
                  <p style={{fontSize:11,color:G.gray,wordBreak:"break-all",lineHeight:1.6,background:G.off,padding:10,borderRadius:8,fontFamily:"monospace"}}>{pixCode}</p>
                  <button onClick={()=>{navigator.clipboard?.writeText(pixCode);showT("✓ Código Pix copiado!");}} style={{marginTop:10,padding:"8px 16px",borderRadius:10,background:G.green,color:"#fff",border:"none",cursor:"pointer",fontWeight:700,fontSize:13}}>📋 Copiar código</button>
                </div>
              )}
              <button onClick={()=>{setView("store");setOrderPlaced(false);}} style={{padding:"12px 28px",borderRadius:14,background:`linear-gradient(90deg,${G.greenD},${G.green})`,color:"#fff",border:"none",cursor:"pointer",fontWeight:800,fontSize:15}}>
                ← Continuar Comprando
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div style={{textAlign:"center",padding:"60px 20px",background:G.white,borderRadius:20,border:`2px solid ${G.border}`}}>
              <p style={{fontSize:56}}>📭</p>
              <p style={{fontSize:18,fontWeight:700,color:"#1A2F1E",marginTop:10,marginBottom:6}}>Seu carrinho está vazio</p>
              <p style={{fontSize:13,color:G.gray,marginBottom:20}}>Explore nossos produtos e comece a comprar!</p>
              <button onClick={()=>setView("store")} style={{padding:"11px 24px",borderRadius:12,background:`linear-gradient(90deg,${G.greenD},${G.green})`,color:"#fff",border:"none",cursor:"pointer",fontWeight:700}}>
                🛒 Ir às compras
              </button>
            </div>
          ) : (
            <>
              {/* Steps */}
              <div style={{display:"flex",alignItems:"center",marginBottom:28,gap:8,flexWrap:"wrap"}}>
                {[["1","Carrinho"],["2","Entrega"],["3","Pagamento"]].map(([n,l],i)=>(
                  <div key={n} style={{display:"flex",alignItems:"center",gap:8}}>
                    <div style={{width:32,height:32,borderRadius:"50%",background:step>=i+1?`linear-gradient(90deg,${G.greenD},${G.green})`:"#E0ECD8",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:800,color:step>=i+1?"#fff":G.gray}}>{n}</div>
                    <span style={{fontSize:13,fontWeight:step===i+1?800:400,color:step===i+1?G.greenD:G.gray}}>{l}</span>
                    {i < 2 && <div style={{width:36,height:2,background:step>i+1?G.green:G.border,borderRadius:1}}/>}
                  </div>
                ))}
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 320px",gap:22}}>
                <div>
                  {step === 1 && (
                    <div style={{background:G.white,borderRadius:16,border:`2px solid ${G.border}`,padding:20}}>
                      <h2 style={{fontSize:17,fontWeight:900,marginBottom:16}}>🛒 Itens ({cartCount})</h2>
                      {cart.map(item => (
                        <div key={item.id} style={{display:"flex",gap:14,paddingBottom:16,marginBottom:16,borderBottom:`1.5px solid ${G.border}`}}>
                          <div style={{width:86,height:86,borderRadius:12,background:G.off,display:"flex",alignItems:"center",justifyContent:"center",fontSize:40,flexShrink:0}}>{item.emoji}</div>
                          <div style={{flex:1}}>
                            <p style={{fontWeight:700,fontSize:14,color:"#1A2F1E",marginBottom:4,lineHeight:1.3}}>{item.name}</p>
                            <p style={{fontSize:12,color:G.gray,marginBottom:10}}>{item.brand}</p>
                            <div style={{display:"flex",alignItems:"center",gap:10}}>
                              <div style={{display:"flex",alignItems:"center",border:`1.5px solid ${G.border}`,borderRadius:8,overflow:"hidden"}}>
                                <button onClick={()=>updateQty(item.id,item.qty-1)} style={{width:30,height:30,background:G.off,border:"none",cursor:"pointer",fontSize:16,fontWeight:700,color:"#1A2F1E"}}>−</button>
                                <span style={{width:36,textAlign:"center",fontSize:14,fontWeight:700}}>{item.qty}</span>
                                <button onClick={()=>updateQty(item.id,item.qty+1)} style={{width:30,height:30,background:G.off,border:"none",cursor:"pointer",fontSize:16,fontWeight:700,color:"#1A2F1E"}}>+</button>
                              </div>
                              <button onClick={()=>removeFromCart(item.id)} style={{padding:"4px 10px",borderRadius:6,background:"#FFF0F0",color:G.red,border:`1px solid #FFD6D6`,cursor:"pointer",fontSize:11,fontWeight:700}}>Remover</button>
                            </div>
                          </div>
                          <div style={{textAlign:"right",flexShrink:0}}>
                            <p style={{fontSize:16,fontWeight:900,color:G.green}}>{fmtR((item.promo||item.price)*item.qty)}</p>
                            <p style={{fontSize:11,color:G.gray}}>cada {fmtR(item.promo||item.price)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {step === 2 && (
                    <div style={{background:G.white,borderRadius:16,border:`2px solid ${G.border}`,padding:24}}>
                      <h2 style={{fontSize:17,fontWeight:900,marginBottom:20}}>📦 Dados de Entrega</h2>
                      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                        {[["Nome completo","text","Maria Silva"],["Email","email","seu@email.com"],["Telefone","tel","(11) 99999-9999"],["CEP","text","01310-100"],["Endereço","text","Av. Paulista, 1000"],["Complemento","text","Apto 42 (opcional)"],["Cidade","text","São Paulo"],["Estado","text","SP"]].map(([l,t,ph])=>(
                          <div key={l}>
                            <label style={{fontSize:12,fontWeight:700,color:G.gray,marginBottom:4,display:"block"}}>{l}</label>
                            <input type={t} placeholder={ph} style={{width:"100%",padding:"9px 12px",borderRadius:10,border:`1.5px solid ${G.border}`,fontSize:13,outline:"none",boxSizing:"border-box"}}/>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {step === 3 && (
                    <div style={{background:G.white,borderRadius:16,border:`2px solid ${G.border}`,padding:24}}>
                      <h2 style={{fontSize:17,fontWeight:900,marginBottom:20}}>💳 Forma de Pagamento</h2>
                      {[["pix","📱 Pix","Aprovação instantânea","5% OFF automaticamente"],["card","💳 Cartão de Crédito","Visa, Mastercard, Elo","Em até 12x sem juros"],["mp","🔵 Mercado Pago","Pix, cartão ou boleto","Múltiplas opções"]].map(([val,label,sub,info])=>(
                        <div key={val} onClick={()=>setPay(val)} style={{display:"flex",alignItems:"center",gap:14,padding:16,borderRadius:14,border:`2px solid ${pay===val?G.green:G.border}`,background:pay===val?`${G.green}08`:G.white,cursor:"pointer",marginBottom:12,transition:"all 0.15s"}}>
                          <div style={{width:20,height:20,borderRadius:"50%",border:`2px solid ${pay===val?G.green:G.border}`,background:pay===val?G.green:"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                            {pay===val && <div style={{width:8,height:8,borderRadius:"50%",background:"#fff"}}/>}
                          </div>
                          <div style={{flex:1}}>
                            <p style={{fontWeight:700,fontSize:14,color:"#1A2F1E"}}>{label}</p>
                            <p style={{fontSize:12,color:G.gray}}>{sub}</p>
                          </div>
                          {pay===val && <span style={{fontSize:11,fontWeight:700,color:G.green,background:`${G.green}15`,padding:"3px 10px",borderRadius:20,whiteSpace:"nowrap"}}>{info}</span>}
                        </div>
                      ))}
                      {pay === "card" && (
                        <div style={{padding:16,background:G.off,borderRadius:12,marginTop:4}}>
                          {[["Número do Cartão","0000 0000 0000 0000"],["Nome no Cartão","MARIA SILVA"],["Validade","MM/AA"],["CVV","123"]].map(([l,ph])=>(
                            <div key={l} style={{marginBottom:10}}>
                              <label style={{fontSize:11,fontWeight:700,color:G.gray,marginBottom:3,display:"block"}}>{l}</label>
                              <input placeholder={ph} style={{width:"100%",padding:"9px 12px",borderRadius:9,border:`1.5px solid ${G.border}`,fontSize:13,outline:"none",boxSizing:"border-box"}}/>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Summary */}
                <div>
                  <div style={{background:G.white,borderRadius:16,border:`2px solid ${G.border}`,padding:20,position:"sticky",top:120}}>
                    <h3 style={{fontSize:16,fontWeight:900,marginBottom:16}}>Resumo</h3>
                    <div style={{fontSize:14,marginBottom:16}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}><span style={{color:G.gray}}>Subtotal</span><span style={{fontWeight:700}}>{fmtR(cartTotal)}</span></div>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}><span style={{color:G.gray}}>Frete</span><span style={{fontWeight:700,color:G.green}}>Grátis 🎁</span></div>
                      {pixDisc > 0 && <div style={{display:"flex",justifyContent:"space-between",marginBottom:8,color:G.green}}><span style={{fontWeight:600}}>Desconto Pix (5%)</span><span style={{fontWeight:700}}>-{fmtR(pixDisc)}</span></div>}
                      {couponVal > 0 && <div style={{display:"flex",justifyContent:"space-between",marginBottom:8,color:G.green}}><span style={{fontWeight:600}}>Cupom</span><span style={{fontWeight:700}}>-{fmtR(couponVal)}</span></div>}
                      <div style={{borderTop:`2px solid ${G.border}`,paddingTop:12,display:"flex",justifyContent:"space-between"}}>
                        <span style={{fontWeight:800}}>Total</span>
                        <span style={{fontSize:20,fontWeight:900,color:G.green}}>{fmtR(finalTotal)}</span>
                      </div>
                    </div>
                    {step === 1 && (
                      <div style={{marginBottom:14}}>
                        <div style={{display:"flex",gap:8,marginBottom:4}}>
                          <input value={couponCode} onChange={e=>setCouponCode(e.target.value)} placeholder="Código de cupom"
                            style={{flex:1,padding:"8px 12px",borderRadius:10,border:`1.5px solid ${G.border}`,fontSize:13,outline:"none"}}/>
                          <button onClick={applyCoupon} style={{padding:"8px 12px",borderRadius:10,background:G.green,color:"#fff",border:"none",cursor:"pointer",fontWeight:700,fontSize:12}}>Aplicar</button>
                        </div>
                        <p style={{fontSize:11,color:G.gray}}>Tente: PRIMEIRACOMPRA • ZELSTORE10</p>
                      </div>
                    )}
                    {step < 3 ? (
                      <button onClick={()=>setStep(step+1)} style={{width:"100%",padding:"13px 0",borderRadius:12,fontSize:15,fontWeight:800,background:`linear-gradient(90deg,${G.greenD},${G.green})`,color:"#fff",border:"none",cursor:"pointer",marginBottom:10}}>
                        {step===1?"Continuar →":"Ir para Pagamento →"}
                      </button>
                    ) : (
                      <button onClick={placeOrder} style={{width:"100%",padding:"13px 0",borderRadius:12,fontSize:15,fontWeight:800,background:`linear-gradient(90deg,${G.greenD},${G.green})`,color:"#fff",border:"none",cursor:"pointer",marginBottom:10}}>
                        ✅ Finalizar Pedido — {fmtR(finalTotal)}
                      </button>
                    )}
                    {step > 1 && <button onClick={()=>setStep(step-1)} style={{width:"100%",padding:"10px 0",borderRadius:12,fontSize:13,fontWeight:700,background:G.off,color:G.gray,border:`1.5px solid ${G.border}`,cursor:"pointer"}}>← Voltar</button>}
                    <div style={{marginTop:14,display:"flex",gap:6,justifyContent:"center"}}>
                      {["🔒 SSL","💳 Stripe","🔵 MP","📱 Pix"].map(s=><span key={s} style={{fontSize:10,color:G.gray,background:G.off,padding:"3px 8px",borderRadius:20}}>{s}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* ── BLOG ───────────────────────────────────────────────────────────── */}
      {view === "blog" && (
        <div style={{maxWidth:1280,margin:"0 auto",padding:"32px 16px"}}>
          <div style={{marginBottom:28}}>
            <h1 style={{fontSize:28,fontWeight:900,color:"#1A2F1E",marginBottom:6}}>📝 Blog Zel-Store</h1>
            <p style={{fontSize:14,color:G.gray}}>Dicas, estratégias e novidades para o seu negócio digital</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:22}}>
            {blog.map(post => (
              <div key={post.id} style={{background:G.white,borderRadius:18,border:`2px solid ${G.border}`,overflow:"hidden",cursor:"pointer",transition:"all 0.25s"}}
                onMouseEnter={e=>{e.currentTarget.style.boxShadow=`0 12px 32px ${G.green}18`;e.currentTarget.style.transform="translateY(-3px)";}}
                onMouseLeave={e=>{e.currentTarget.style.boxShadow="none";e.currentTarget.style.transform="none";}}>
                <div style={{height:180,background:`linear-gradient(135deg,${G.green}18,${G.greenL}09)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:72,borderBottom:`2px solid ${G.border}`}}>{post.img}</div>
                <div style={{padding:20}}>
                  <span style={{fontSize:11,fontWeight:700,color:G.green,background:`${G.green}15`,padding:"3px 10px",borderRadius:20}}>{post.cat}</span>
                  <h3 style={{fontSize:17,fontWeight:900,color:"#1A2F1E",marginTop:10,marginBottom:8,lineHeight:1.3}}>{post.title}</h3>
                  <p style={{fontSize:13,color:G.gray,marginBottom:14,lineHeight:1.6}}>{post.excerpt}</p>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <span style={{fontSize:12,color:G.gray}}>{post.date} · {post.views.toLocaleString()} views</span>
                    <button style={{fontSize:13,fontWeight:700,color:G.green,background:"none",border:"none",cursor:"pointer"}}>Ler →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── ADMIN ──────────────────────────────────────────────────────────── */}
      {view === "admin" && (
        <div style={{maxWidth:1280,margin:"0 auto",padding:"20px 16px",display:"flex",gap:20}}>
          {/* Sidebar */}
          <aside style={{width:178,flexShrink:0}}>
            <div style={{background:G.white,borderRadius:16,border:`2px solid ${G.border}`,overflow:"hidden",position:"sticky",top:90}}>
              <div style={{padding:"14px 12px 6px",borderBottom:`1.5px solid ${G.border}`}}>
                <p style={{fontSize:10,fontWeight:700,color:G.gray,textTransform:"uppercase",letterSpacing:1}}>Painel Admin</p>
              </div>
              <nav style={{padding:8}}>
                {[["dashboard","📊","Dashboard"],["products","📦","Produtos"],["orders","📋","Pedidos"],["coupons","🎟️","Cupons"],["affiliates","🔗","Afiliados"],["campaigns","📣","Campanhas"],["blog","📝","Blog"],["ai","🤖","IA Criativa"],["settings","⚙️","Config"]].map(([id,ic,lbl])=>(
                  <button key={id} onClick={()=>setAdm(id)} style={{width:"100%",padding:"9px 10px",borderRadius:10,fontSize:13,fontWeight:700,textAlign:"left",background:adm===id?`${G.green}18`:"transparent",color:adm===id?G.greenD:G.gray,border:"none",cursor:"pointer",marginBottom:2,display:"flex",alignItems:"center",gap:8}}>
                    <span>{ic}</span><span>{lbl}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div style={{flex:1,minWidth:0}}>

            {/* DASHBOARD */}
            {adm === "dashboard" && (
              <div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
                  <h1 style={{fontSize:22,fontWeight:900,color:"#1A2F1E"}}>📊 Dashboard</h1>
                  <span style={{fontSize:12,color:G.gray,background:G.white,padding:"6px 14px",borderRadius:20,border:`1.5px solid ${G.border}`}}>
                    📅 {new Date().toLocaleDateString("pt-BR",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}
                  </span>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(155px,1fr))",gap:14,marginBottom:22}}>
                  {[
                    {label:"Receita Total",value:`R$ ${(products.reduce((s,p)=>s+(p.promo||p.price)*p.sold,0)/1000).toFixed(0)}k`,icon:"💰",bg:`${G.green}12`,tc:G.green},
                    {label:"Pedidos",value:orders.length+2148,icon:"📋",bg:`${G.blue}12`,tc:G.blue},
                    {label:"Produtos",value:products.length,icon:"📦",bg:`${G.gold}12`,tc:"#B8860B"},
                    {label:"Clientes",value:"3.841",icon:"👥",bg:`${G.purple}12`,tc:G.purple},
                  ].map(s=>(
                    <div key={s.label} style={{background:G.white,borderRadius:14,border:`2px solid ${G.border}`,padding:"16px 14px"}}>
                      <div style={{width:42,height:42,borderRadius:12,background:s.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,marginBottom:12}}>{s.icon}</div>
                      <p style={{fontSize:24,fontWeight:900,color:"#1A2F1E",marginBottom:2}}>{s.value}</p>
                      <p style={{fontSize:12,color:G.gray}}>{s.label}</p>
                    </div>
                  ))}
                </div>
                <div style={{background:G.white,borderRadius:16,border:`2px solid ${G.border}`,padding:20,marginBottom:18}}>
                  <h3 style={{fontSize:15,fontWeight:900,color:"#1A2F1E",marginBottom:16}}>📈 Vendas dos Últimos 7 Dias</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={CHARTS}>
                      <CartesianGrid strokeDasharray="3 3" stroke={G.border}/>
                      <XAxis dataKey="day" style={{fontSize:12}} tick={{fill:G.gray}}/>
                      <YAxis style={{fontSize:12}} tick={{fill:G.gray}} tickFormatter={v=>`R$${(v/1000).toFixed(0)}k`}/>
                      <Tooltip formatter={v=>[`R$ ${v.toLocaleString()}`,""]} contentStyle={{borderRadius:10,border:`1.5px solid ${G.border}`}}/>
                      <Bar dataKey="vendas" fill={G.green} radius={[6,6,0,0]}/>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18}}>
                  <div style={{background:G.white,borderRadius:16,border:`2px solid ${G.border}`,padding:20}}>
                    <h3 style={{fontSize:14,fontWeight:900,color:"#1A2F1E",marginBottom:14}}>🕐 Últimos Pedidos</h3>
                    {orders.slice(0,4).map(o=>(
                      <div key={o.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 0",borderBottom:`1px solid ${G.border}`}}>
                        <div>
                          <p style={{fontWeight:700,fontSize:13,color:"#1A2F1E"}}>{o.customer}</p>
                          <p style={{fontSize:11,color:G.gray}}>{o.id} · {o.date}</p>
                        </div>
                        <span style={{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20,background:`${(s=>s==="Entregue"?"#27AE60":s==="Enviado"?G.blue:s==="Processando"?G.gold:"#E67E22")(o.status)}20`,color:(s=>s==="Entregue"?"#27AE60":s==="Enviado"?G.blue:s==="Processando"?G.gold:"#E67E22")(o.status)}}>{o.status}</span>
                        <span style={{fontSize:14,fontWeight:900,color:"#1A2F1E"}}>{fmtR(o.total)}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{background:G.white,borderRadius:16,border:`2px solid ${G.border}`,padding:20}}>
                    <h3 style={{fontSize:14,fontWeight:900,color:"#1A2F1E",marginBottom:14}}>🏆 Top Produtos</h3>
                    {products.sort((a,b)=>b.sold-a.sold).slice(0,4).map((p,i)=>(
                      <div key={p.id} style={{display:"flex",alignItems:"center",gap:12,padding:"9px 0",borderBottom:`1px solid ${G.border}`}}>
                        <span style={{fontSize:11,fontWeight:900,color:G.gray,width:18}}>#{i+1}</span>
                        <span style={{fontSize:24}}>{p.emoji}</span>
                        <div style={{flex:1,minWidth:0}}>
                          <p style={{fontWeight:700,fontSize:13,color:"#1A2F1E",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{p.name}</p>
                          <p style={{fontSize:11,color:G.gray}}>{p.sold.toLocaleString()} vendidos</p>
                        </div>
                        <span style={{fontSize:13,fontWeight:800,color:G.green,flexShrink:0}}>{fmtR(p.promo||p.price)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* PRODUCTS */}
            {adm === "products" && (
              <div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
                  <h1 style={{fontSize:22,fontWeight:900,color:"#1A2F1E"}}>📦 Produtos ({products.length})</h1>
                  <button onClick={()=>{setShowPF(!showPF);setEditP(null);setPForm({name:"",price:"",promo:"",cat:"Eletrônicos",brand:"",stock:"",emoji:"📦",affiliate:false,platform:"Hotmart",desc:""}); }} style={{padding:"9px 18px",borderRadius:20,fontSize:13,fontWeight:800,background:`linear-gradient(90deg,${G.greenD},${G.green})`,color:"#fff",border:"none",cursor:"pointer"}}>+ Novo Produto</button>
                </div>
                {showPF && (
                  <div style={{background:G.white,borderRadius:16,border:`2px solid ${G.green}44`,padding:22,marginBottom:22}}>
                    <h3 style={{fontSize:15,fontWeight:900,marginBottom:16,color:"#1A2F1E"}}>{editP?"✏️ Editar Produto":"➕ Novo Produto"}</h3>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                      {[["Nome do Produto","name","text","Fone Bluetooth Pro"],["Preço (R$)","price","number","299.90"],["Preço Promocional","promo","number","199.90"],["Marca","brand","text","SoundMax"],["Estoque","stock","number","50"],["Emoji/Ícone","emoji","text","🎧"]].map(([lbl,key,type,ph])=>(
                        <div key={key}>
                          <label style={{fontSize:12,fontWeight:700,color:G.gray,marginBottom:4,display:"block"}}>{lbl}</label>
                          <input type={type} placeholder={ph} value={pForm[key]} onChange={e=>setPForm({...pForm,[key]:e.target.value})}
                            style={{width:"100%",padding:"9px 12px",borderRadius:10,border:`1.5px solid ${G.border}`,fontSize:13,outline:"none",boxSizing:"border-box"}}/>
                        </div>
                      ))}
                      <div>
                        <label style={{fontSize:12,fontWeight:700,color:G.gray,marginBottom:4,display:"block"}}>Categoria</label>
                        <select value={pForm.cat} onChange={e=>setPForm({...pForm,cat:e.target.value})} style={{width:"100%",padding:"9px 12px",borderRadius:10,border:`1.5px solid ${G.border}`,fontSize:13,background:"#fff",outline:"none"}}>
                          {CATS.filter(c=>c!=="Todos").map(c=><option key={c}>{c}</option>)}
                        </select>
                      </div>
                      <div style={{display:"flex",alignItems:"center",gap:10,paddingTop:18}}>
                        <input type="checkbox" id="aff" checked={pForm.affiliate} onChange={e=>setPForm({...pForm,affiliate:e.target.checked})} style={{width:16,height:16,cursor:"pointer"}}/>
                        <label htmlFor="aff" style={{fontSize:13,fontWeight:700,color:"#1A2F1E",cursor:"pointer"}}>Produto Afiliado</label>
                      </div>
                    </div>
                    {pForm.affiliate && (
                      <div style={{marginTop:12}}>
                        <label style={{fontSize:12,fontWeight:700,color:G.gray,marginBottom:4,display:"block"}}>Plataforma de Afiliado</label>
                        <select value={pForm.platform} onChange={e=>setPForm({...pForm,platform:e.target.value})} style={{width:220,padding:"9px 12px",borderRadius:10,border:`1.5px solid ${G.border}`,fontSize:13,background:"#fff",outline:"none"}}>
                          {PLATFORMS.map(p=><option key={p}>{p}</option>)}
                        </select>
                      </div>
                    )}
                    <div style={{marginTop:12}}>
                      <label style={{fontSize:12,fontWeight:700,color:G.gray,marginBottom:4,display:"block"}}>Descrição do Produto</label>
                      <textarea value={pForm.desc} onChange={e=>setPForm({...pForm,desc:e.target.value})} rows={3} placeholder="Descreva os benefícios e características do produto..."
                        style={{width:"100%",padding:"9px 12px",borderRadius:10,border:`1.5px solid ${G.border}`,fontSize:13,outline:"none",resize:"vertical",boxSizing:"border-box"}}/>
                    </div>
                    <div style={{display:"flex",gap:10,marginTop:16}}>
                      <button onClick={saveProduct} style={{padding:"10px 24px",borderRadius:12,fontWeight:700,background:`linear-gradient(90deg,${G.greenD},${G.green})`,color:"#fff",border:"none",cursor:"pointer"}}>
                        {editP?"💾 Salvar Alterações":"➕ Adicionar"}
                      </button>
                      <button onClick={()=>{setShowPF(false);setEditP(null);}} style={{padding:"10px 18px",borderRadius:12,fontWeight:700,background:G.off,color:G.gray,border:`1.5px solid ${G.border}`,cursor:"pointer"}}>Cancelar</button>
                    </div>
                  </div>
                )}
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(210px,1fr))",gap:14}}>
                  {products.map(p=>(
                    <div key={p.id} style={{background:G.white,borderRadius:14,border:`2px solid ${G.border}`,padding:14}}>
                      <div style={{fontSize:44,textAlign:"center",marginBottom:10,background:G.off,borderRadius:12,padding:"14px 0"}}>{p.emoji}</div>
                      <p style={{fontWeight:700,fontSize:13,color:"#1A2F1E",marginBottom:3,lineHeight:1.3}}>{p.name}</p>
                      <p style={{fontSize:11,color:G.gray,marginBottom:4}}>{p.cat} · {p.brand}</p>
                      <p style={{fontSize:15,fontWeight:900,color:G.green,marginBottom:4}}>{fmtR(p.promo||p.price)}</p>
                      {p.promo && <p style={{fontSize:11,textDecoration:"line-through",color:G.gray,marginBottom:4}}>{fmtR(p.price)}</p>}
                      <p style={{fontSize:11,color:G.gray,marginBottom:12}}>Estoque: {p.stock} · {p.sold} vendidos</p>
                      <div style={{display:"flex",gap:8}}>
                        <button onClick={()=>startEdit(p)} style={{flex:1,padding:"6px 0",borderRadius:8,fontSize:12,fontWeight:700,background:`${G.green}14`,color:G.greenD,border:"none",cursor:"pointer"}}>✏️ Editar</button>
                        <button onClick={()=>delProduct(p.id)} style={{flex:1,padding:"6px 0",borderRadius:8,fontSize:12,fontWeight:700,background:"#FFF0F0",color:G.red,border:"none",cursor:"pointer"}}>🗑️ Excluir</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ORDERS */}
            {adm === "orders" && (
              <div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20,flexWrap:"wrap",gap:10}}>
                  <h1 style={{fontSize:22,fontWeight:900,color:"#1A2F1E"}}>📋 Pedidos ({orders.length})</h1>
                  <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                    {["Todos","Pendente","Processando","Enviado","Entregue"].map(f=>(
                      <button key={f} onClick={()=>setOrderFilter(f)} style={{padding:"6px 14px",borderRadius:20,fontSize:12,fontWeight:700,background:orderFilter===f?`linear-gradient(90deg,${G.greenD},${G.green})`:G.white,color:orderFilter===f?"#fff":G.gray,border:`1.5px solid ${orderFilter===f?G.green:G.border}`,cursor:"pointer"}}>{f}</button>
                    ))}
                  </div>
                </div>
                <div style={{background:G.white,borderRadius:16,border:`2px solid ${G.border}`,overflow:"hidden"}}>
                  <div style={{overflowX:"auto"}}>
                    <table style={{width:"100%",borderCollapse:"collapse",minWidth:560}}>
                      <thead>
                        <tr style={{background:G.off,borderBottom:`2px solid ${G.border}`}}>
                          {["Pedido","Cliente","Data","Pagamento","Status","Total"].map(h=>(
                            <th key={h} style={{padding:"12px 14px",textAlign:"left",fontSize:12,fontWeight:800,color:"#1A2F1E",whiteSpace:"nowrap"}}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {orders.filter(o=>orderFilter==="Todos"||o.status===orderFilter).map(o=>(
                          <tr key={o.id} style={{borderBottom:`1px solid ${G.border}`}}>
                            <td style={{padding:"12px 14px",fontSize:13,fontWeight:700,color:G.green}}>{o.id}</td>
                            <td style={{padding:"12px 14px"}}><p style={{fontSize:13,fontWeight:700,color:"#1A2F1E",margin:0}}>{o.customer}</p><p style={{fontSize:11,color:G.gray,margin:0}}>{o.city}</p></td>
                            <td style={{padding:"12px 14px",fontSize:12,color:G.gray,whiteSpace:"nowrap"}}>{o.date}</td>
                            <td style={{padding:"12px 14px",fontSize:12,color:"#1A2F1E"}}>{o.payment}</td>
                            <td style={{padding:"12px 14px"}}>
                              <select defaultValue={o.status} onChange={e=>{setOrders(orders.map(ord=>ord.id===o.id?{...ord,status:e.target.value}:ord));showT("✓ Status atualizado!");}}
                                style={{padding:"4px 8px",borderRadius:8,border:`1.5px solid ${statusColor(o.status)}55`,background:`${statusColor(o.status)}12`,color:statusColor(o.status),fontSize:12,fontWeight:700,cursor:"pointer",outline:"none"}}>
                                {["Pendente","Processando","Enviado","Entregue","Cancelado"].map(s=><option key={s}>{s}</option>)}
                              </select>
                            </td>
                            <td style={{padding:"12px 14px",fontSize:14,fontWeight:900,color:"#1A2F1E",whiteSpace:"nowrap"}}>{fmtR(o.total)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* COUPONS */}
            {adm === "coupons" && (
              <div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
                  <h1 style={{fontSize:22,fontWeight:900,color:"#1A2F1E"}}>🎟️ Cupons ({coupons.length})</h1>
                  <button onClick={()=>setShowCF(!showCF)} style={{padding:"9px 18px",borderRadius:20,fontSize:13,fontWeight:800,background:`linear-gradient(90deg,${G.greenD},${G.green})`,color:"#fff",border:"none",cursor:"pointer"}}>+ Novo Cupom</button>
                </div>
                {showCF && (
                  <div style={{background:G.white,borderRadius:16,border:`2px solid ${G.green}44`,padding:22,marginBottom:20}}>
                    <h3 style={{fontSize:15,fontWeight:900,marginBottom:14}}>Criar Cupom</h3>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                      {[["Código","code","ZELBLACK20"],["Descrição","desc","20% de desconto"],["Valor","value","20"],["Pedido mínimo (R$)","minOrder","100"]].map(([lbl,key,ph])=>(
                        <div key={key}>
                          <label style={{fontSize:12,fontWeight:700,color:G.gray,marginBottom:4,display:"block"}}>{lbl}</label>
                          <input placeholder={ph} value={couponForm[key]} onChange={e=>setCouponForm({...couponForm,[key]:e.target.value})}
                            style={{width:"100%",padding:"9px 12px",borderRadius:10,border:`1.5px solid ${G.border}`,fontSize:13,outline:"none",boxSizing:"border-box"}}/>
                        </div>
                      ))}
                      <div>
                        <label style={{fontSize:12,fontWeight:700,color:G.gray,marginBottom:4,display:"block"}}>Tipo de Desconto</label>
                        <select value={couponForm.type} onChange={e=>setCouponForm({...couponForm,type:e.target.value})} style={{width:"100%",padding:"9px 12px",borderRadius:10,border:`1.5px solid ${G.border}`,fontSize:13,background:"#fff",outline:"none"}}>
                          <option value="percent">Percentual (%)</option>
                          <option value="fixed">Valor Fixo (R$)</option>
                        </select>
                      </div>
                    </div>
                    <div style={{display:"flex",gap:10,marginTop:16}}>
                      <button onClick={saveCoupon} style={{padding:"10px 24px",borderRadius:12,fontWeight:700,background:`linear-gradient(90deg,${G.greenD},${G.green})`,color:"#fff",border:"none",cursor:"pointer"}}>✓ Criar Cupom</button>
                      <button onClick={()=>setShowCF(false)} style={{padding:"10px 18px",borderRadius:12,fontWeight:700,background:G.off,color:G.gray,border:`1.5px solid ${G.border}`,cursor:"pointer"}}>Cancelar</button>
                    </div>
                  </div>
                )}
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:14}}>
                  {coupons.map(c=>(
                    <div key={c.code} style={{background:G.white,borderRadius:14,border:`2px dashed ${c.active?G.green:G.border}`,padding:18}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
                        <p style={{fontSize:18,fontWeight:900,color:G.green,letterSpacing:1}}>{c.code}</p>
                        <button onClick={()=>setCoupons(coupons.map(x=>x.code===c.code?{...x,active:!x.active}:x))} style={{fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:20,background:c.active?`${G.green}18`:"#f5f5f5",color:c.active?G.greenD:G.gray,border:"none",cursor:"pointer"}}>
                          {c.active?"✓ Ativo":"Inativo"}
                        </button>
                      </div>
                      <p style={{fontSize:13,color:G.gray,marginBottom:8}}>{c.desc}</p>
                      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                        {[["Desconto",c.type==="percent"?`${c.value}%`:`R$ ${c.value}`],["Mín",fmtR(c.minOrder)],["Usado",`${c.uses}x`],["Status",c.active?"Ativo":"Inativo"]].map(([l,v])=>(
                          <div key={l} style={{background:G.off,borderRadius:8,padding:"6px 10px"}}>
                            <p style={{fontSize:10,color:G.gray}}>{l}</p>
                            <p style={{fontSize:13,fontWeight:700,color:"#1A2F1E"}}>{v}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* AFFILIATES */}
            {adm === "affiliates" && (
              <div>
                <h1 style={{fontSize:22,fontWeight:900,color:"#1A2F1E",marginBottom:20}}>🔗 Produtos Afiliados</h1>
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(270px,1fr))",gap:14,marginBottom:24}}>
                  {products.filter(p=>p.affiliate).length === 0 ? (
                    <div style={{gridColumn:"1/-1",textAlign:"center",padding:"40px",background:G.white,borderRadius:16,border:`2px solid ${G.border}`}}>
                      <p style={{fontSize:40,marginBottom:8}}>🔗</p>
                      <p style={{fontSize:15,fontWeight:700,color:"#1A2F1E"}}>Nenhum produto afiliado cadastrado</p>
                      <p style={{fontSize:13,color:G.gray,marginTop:6}}>Cadastre um produto no painel de Produtos e marque como "Produto Afiliado"</p>
                    </div>
                  ) : products.filter(p=>p.affiliate).map(p=>(
                    <div key={p.id} style={{background:G.white,borderRadius:14,border:`2px solid ${G.border}`,padding:16}}>
                      <div style={{display:"flex",gap:12,alignItems:"start",marginBottom:12}}>
                        <span style={{fontSize:36}}>{p.emoji}</span>
                        <div>
                          <p style={{fontWeight:700,fontSize:13,color:"#1A2F1E",marginBottom:4}}>{p.name}</p>
                          <span style={{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20,background:`${G.gold}20`,color:"#B8860B"}}>{p.platform}</span>
                        </div>
                      </div>
                      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                        {[["Comissão","30%"],["Vendidos",p.sold],["Receita",fmtR(p.sold*(p.promo||p.price)*0.3)],["Status","Ativo"]].map(([l,v])=>(
                          <div key={l} style={{background:G.off,borderRadius:8,padding:"7px 10px"}}>
                            <p style={{fontSize:10,color:G.gray}}>{l}</p>
                            <p style={{fontSize:13,fontWeight:800,color:"#1A2F1E"}}>{v}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{background:G.white,borderRadius:16,border:`2px solid ${G.border}`,padding:22}}>
                  <h3 style={{fontSize:15,fontWeight:900,marginBottom:14}}>➕ Importar Produto Afiliado</h3>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12}}>
                    {[["Link de Afiliado","Link do produto (Hotmart, Kiwify...)"],["Nome do Produto","Nome para exibir na loja"],["Preço (R$)","197.00"],["Comissão (%)","30"]].map(([lbl,ph])=>(
                      <div key={lbl}>
                        <label style={{fontSize:12,fontWeight:700,color:G.gray,marginBottom:4,display:"block"}}>{lbl}</label>
                        <input placeholder={ph} style={{width:"100%",padding:"9px 12px",borderRadius:10,border:`1.5px solid ${G.border}`,fontSize:13,outline:"none",boxSizing:"border-box"}}/>
                      </div>
                    ))}
                    <div>
                      <label style={{fontSize:12,fontWeight:700,color:G.gray,marginBottom:4,display:"block"}}>Plataforma</label>
                      <select style={{width:"100%",padding:"9px 12px",borderRadius:10,border:`1.5px solid ${G.border}`,fontSize:13,background:"#fff",outline:"none"}}>
                        {PLATFORMS.map(p=><option key={p}>{p}</option>)}
                      </select>
                    </div>
                  </div>
                  <button onClick={()=>showT("✓ Produto afiliado importado!")} style={{padding:"10px 24px",borderRadius:12,fontWeight:700,background:`linear-gradient(90deg,${G.greenD},${G.green})`,color:"#fff",border:"none",cursor:"pointer"}}>
                    🔗 Importar Produto
                  </button>
                </div>
              </div>
            )}

            {/* CAMPAIGNS */}
            {adm === "campaigns" && (
              <div>
                <h1 style={{fontSize:22,fontWeight:900,color:"#1A2F1E",marginBottom:20}}>📣 Campanhas de Marketing</h1>
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:14,marginBottom:22}}>
                  {[{name:"Meta Ads",icon:"📘",budget:5000,spent:3200,roas:3.8,status:"Ativo",clicks:12400,conv:142},
                    {name:"Google Ads",icon:"🔍",budget:8000,spent:5800,roas:4.2,status:"Ativo",clicks:28000,conv:312},
                    {name:"TikTok Ads",icon:"🎵",budget:3000,spent:1200,roas:2.9,status:"Pausado",clicks:45000,conv:89},
                    {name:"Remarketing",icon:"🔄",budget:2000,spent:1800,roas:6.1,status:"Ativo",clicks:5200,conv:201}].map(c=>(
                    <div key={c.name} style={{background:G.white,borderRadius:14,border:`2px solid ${G.border}`,padding:16}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:12}}>
                        <span style={{fontSize:24}}>{c.icon}</span>
                        <span style={{fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:20,background:c.status==="Ativo"?`${G.green}20`:`${G.gold}20`,color:c.status==="Ativo"?G.greenD:"#B8860B"}}>{c.status}</span>
                      </div>
                      <p style={{fontWeight:800,fontSize:15,color:"#1A2F1E",marginBottom:12}}>{c.name}</p>
                      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                        {[["Budget",fmtR(c.budget)],["Gasto",fmtR(c.spent)],["ROAS",c.roas+"x"],["Conversões",c.conv]].map(([l,v])=>(
                          <div key={l} style={{background:G.off,borderRadius:8,padding:"7px 10px"}}>
                            <p style={{fontSize:10,color:G.gray}}>{l}</p>
                            <p style={{fontSize:13,fontWeight:800,color:"#1A2F1E"}}>{v}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{background:G.white,borderRadius:16,border:`2px solid ${G.border}`,padding:22}}>
                  <h3 style={{fontSize:15,fontWeight:900,marginBottom:14}}>➕ Nova Campanha</h3>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12}}>
                    {[["Nome da Campanha","Ex: Black Friday"],["Budget (R$)","5000"],["Pixel ID","123456789012345"],["Público Alvo","Interesses e localidade"]].map(([lbl,ph])=>(
                      <div key={lbl}>
                        <label style={{fontSize:12,fontWeight:700,color:G.gray,marginBottom:4,display:"block"}}>{lbl}</label>
                        <input placeholder={ph} style={{width:"100%",padding:"9px 12px",borderRadius:10,border:`1.5px solid ${G.border}`,fontSize:13,outline:"none",boxSizing:"border-box"}}/>
                      </div>
                    ))}
                    <div>
                      <label style={{fontSize:12,fontWeight:700,color:G.gray,marginBottom:4,display:"block"}}>Plataforma</label>
                      <select style={{width:"100%",padding:"9px 12px",borderRadius:10,border:`1.5px solid ${G.border}`,fontSize:13,background:"#fff",outline:"none"}}>
                        {["Meta Ads","Google Ads","TikTok Ads","Pinterest Ads"].map(p=><option key={p}>{p}</option>)}
                      </select>
                    </div>
                  </div>
                  <button onClick={()=>showT("✓ Campanha criada com sucesso!")} style={{padding:"10px 24px",borderRadius:12,fontWeight:700,background:`linear-gradient(90deg,${G.greenD},${G.green})`,color:"#fff",border:"none",cursor:"pointer"}}>
                    📣 Criar Campanha
                  </button>
                </div>
              </div>
            )}

            {/* BLOG ADMIN */}
            {adm === "blog" && (
              <div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
                  <h1 style={{fontSize:22,fontWeight:900,color:"#1A2F1E"}}>📝 Blog ({blog.length})</h1>
                  <button onClick={()=>setShowBF(!showBF)} style={{padding:"9px 18px",borderRadius:20,fontSize:13,fontWeight:800,background:`linear-gradient(90deg,${G.greenD},${G.green})`,color:"#fff",border:"none",cursor:"pointer"}}>+ Novo Artigo</button>
                </div>
                {showBF && (
                  <div style={{background:G.white,borderRadius:16,border:`2px solid ${G.green}44`,padding:22,marginBottom:20}}>
                    <h3 style={{fontSize:15,fontWeight:900,marginBottom:14}}>Escrever Artigo</h3>
                    {[["Título do Artigo","title","10 Dicas de Marketing Digital"],["Categoria","cat","Marketing"],["Emoji","img","📊"]].map(([lbl,key,ph])=>(
                      <div key={key} style={{marginBottom:12}}>
                        <label style={{fontSize:12,fontWeight:700,color:G.gray,marginBottom:4,display:"block"}}>{lbl}</label>
                        <input placeholder={ph} value={blogForm[key]} onChange={e=>setBlogForm({...blogForm,[key]:e.target.value})}
                          style={{width:"100%",padding:"9px 12px",borderRadius:10,border:`1.5px solid ${G.border}`,fontSize:13,outline:"none",boxSizing:"border-box"}}/>
                      </div>
                    ))}
                    <div style={{marginBottom:12}}>
                      <label style={{fontSize:12,fontWeight:700,color:G.gray,marginBottom:4,display:"block"}}>Conteúdo</label>
                      <textarea value={blogForm.content} onChange={e=>setBlogForm({...blogForm,content:e.target.value})} rows={5} placeholder="Escreva aqui o conteúdo do artigo... Dica: use o painel de IA para gerar o conteúdo automaticamente!"
                        style={{width:"100%",padding:"9px 12px",borderRadius:10,border:`1.5px solid ${G.border}`,fontSize:13,outline:"none",resize:"vertical",boxSizing:"border-box"}}/>
                    </div>
                    <div style={{display:"flex",gap:10}}>
                      <button onClick={saveBlog} style={{padding:"10px 24px",borderRadius:12,fontWeight:700,background:`linear-gradient(90deg,${G.greenD},${G.green})`,color:"#fff",border:"none",cursor:"pointer"}}>📤 Publicar</button>
                      <button onClick={()=>setShowBF(false)} style={{padding:"10px 18px",borderRadius:12,fontWeight:700,background:G.off,color:G.gray,border:`1.5px solid ${G.border}`,cursor:"pointer"}}>Cancelar</button>
                    </div>
                  </div>
                )}
                <div style={{background:G.white,borderRadius:16,border:`2px solid ${G.border}`,padding:20}}>
                  {blog.map(post=>(
                    <div key={post.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 0",borderBottom:`1px solid ${G.border}`,gap:14}}>
                      <div style={{display:"flex",gap:12,alignItems:"center",flex:1,minWidth:0}}>
                        <span style={{fontSize:32,flexShrink:0}}>{post.img}</span>
                        <div style={{minWidth:0}}>
                          <p style={{fontWeight:700,fontSize:14,color:"#1A2F1E",marginBottom:2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{post.title}</p>
                          <p style={{fontSize:12,color:G.gray}}>{post.cat} · {post.date} · {post.views.toLocaleString()} views</p>
                        </div>
                      </div>
                      <div style={{display:"flex",gap:8,alignItems:"center",flexShrink:0}}>
                        <span style={{fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:20,background:"#E8F8EE",color:"#27AE60"}}>✓ Publicado</span>
                        <button onClick={()=>{setBlog(blog.filter(b=>b.id!==post.id));showT("Post removido!");}} style={{padding:"5px 10px",borderRadius:8,fontSize:12,fontWeight:700,background:"#FFF0F0",color:G.red,border:"none",cursor:"pointer"}}>🗑️</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* AI PANEL */}
            {adm === "ai" && (
              <div>
                <h1 style={{fontSize:22,fontWeight:900,color:"#1A2F1E",marginBottom:6}}>🤖 IA Criativa</h1>
                <p style={{fontSize:14,color:G.gray,marginBottom:24}}>Gere textos profissionais com Inteligência Artificial em segundos.</p>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
                  <div style={{background:G.white,borderRadius:16,border:`2px solid ${G.border}`,padding:22}}>
                    <p style={{fontSize:13,fontWeight:800,color:"#1A2F1E",marginBottom:12}}>Tipo de Conteúdo</p>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:18}}>
                      {[["descricao","📦","Descrição"],["seo","🔍","SEO"],["anuncio","📣","Anúncio"],["email","📧","E-mail"],["blog","📝","Blog"],["whatsapp","💬","WhatsApp"]].map(([key,ic,lbl])=>(
                        <button key={key} onClick={()=>setAiMode(key)} style={{padding:"10px 8px",borderRadius:12,fontSize:13,fontWeight:700,background:aiMode===key?`linear-gradient(90deg,${G.greenD},${G.green})`:`${G.green}10`,color:aiMode===key?"#fff":G.greenD,border:aiMode===key?`2px solid ${G.green}`:`2px solid ${G.green}25`,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>
                          {ic} {lbl}
                        </button>
                      ))}
                    </div>
                    <label style={{fontSize:12,fontWeight:700,color:G.gray,marginBottom:6,display:"block"}}>Produto ou Tema</label>
                    <textarea value={aiInput} onChange={e=>setAiInput(e.target.value)} placeholder={aiMode==="descricao"?"Ex: Fone Bluetooth com cancelamento de ruído, bateria 30h...":aiMode==="blog"?"Ex: Como vender mais no Instagram em 2025...":"Descreva o produto ou tema..."} rows={4}
                      style={{width:"100%",padding:"10px 12px",borderRadius:12,border:`1.5px solid ${G.border}`,fontSize:13,outline:"none",resize:"vertical",boxSizing:"border-box",marginBottom:14}}/>
                    <button onClick={generateAI} disabled={aiLoad}
                      style={{width:"100%",padding:"13px 0",borderRadius:12,fontSize:14,fontWeight:800,background:aiLoad?G.grayL:`linear-gradient(90deg,${G.greenD},${G.green})`,color:"#fff",border:"none",cursor:aiLoad?"not-allowed":"pointer"}}>
                      {aiLoad?"⏳ Gerando...":"✨ Gerar com IA"}
                    </button>
                  </div>
                  <div style={{background:G.white,borderRadius:16,border:`2px solid ${G.border}`,padding:22,display:"flex",flexDirection:"column"}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
                      <p style={{fontSize:13,fontWeight:800,color:"#1A2F1E"}}>Resultado</p>
                      {aiRes && <button onClick={()=>{navigator.clipboard?.writeText(aiRes);showT("✓ Copiado!");}} style={{fontSize:12,fontWeight:700,color:G.green,background:`${G.green}15`,border:"none",cursor:"pointer",padding:"4px 12px",borderRadius:20}}>📋 Copiar</button>}
                    </div>
                    {aiLoad && (
                      <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:12}}>
                        <div style={{fontSize:48}}>🤖</div>
                        <p style={{color:G.gray,fontSize:14,textAlign:"center"}}>Gerando conteúdo com IA...</p>
                        <p style={{color:G.grayL,fontSize:12}}>Isso leva alguns segundos</p>
                      </div>
                    )}
                    {!aiLoad && aiRes && (
                      <div style={{background:G.off,borderRadius:12,padding:16,fontSize:13,lineHeight:1.8,color:"#333",whiteSpace:"pre-wrap",flex:1,overflow:"auto",maxHeight:360}}>{aiRes}</div>
                    )}
                    {!aiLoad && !aiRes && (
                      <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10}}>
                        <span style={{fontSize:52}}>✨</span>
                        <p style={{color:G.gray,fontSize:13,textAlign:"center",lineHeight:1.6}}>Selecione o tipo de conteúdo, descreva o produto e clique em Gerar</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* SETTINGS */}
            {adm === "settings" && (
              <div>
                <h1 style={{fontSize:22,fontWeight:900,color:"#1A2F1E",marginBottom:6}}>⚙️ Configurações</h1>
                <p style={{fontSize:14,color:G.gray,marginBottom:24}}>Configure sua loja, integrações e formas de pagamento.</p>
                <div style={{display:"grid",gap:18}}>
                  {[
                    {title:"🏪 Dados da Loja",fields:[["Nome da Loja","storeName"],["Email de Contato","email"],["WhatsApp (com DDD)","whatsapp"]]},
                    {title:"💳 Gateways de Pagamento",fields:[["Stripe Public Key","stripeKey"],["Mercado Pago Token","mpToken"]]},
                    {title:"📊 Analytics & Tracking",fields:[["Google Analytics (GA4)","ga4"],["Facebook Pixel ID","fbPixel"]]},
                    {title:"📧 Configurações de Email",fields:[["SMTP Host","smtpHost"],["Usuário SMTP","smtpUser"]]},
                  ].map(section=>(
                    <div key={section.title} style={{background:G.white,borderRadius:16,border:`2px solid ${G.border}`,padding:22}}>
                      <h3 style={{fontSize:15,fontWeight:900,color:"#1A2F1E",marginBottom:16}}>{section.title}</h3>
                      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                        {section.fields.map(([lbl,key])=>(
                          <div key={key}>
                            <label style={{fontSize:12,fontWeight:700,color:G.gray,marginBottom:4,display:"block"}}>{lbl}</label>
                            <input value={settings[key]} onChange={e=>setSettings({...settings,[key]:e.target.value})}
                              style={{width:"100%",padding:"9px 12px",borderRadius:10,border:`1.5px solid ${G.border}`,fontSize:13,outline:"none",boxSizing:"border-box"}}/>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  <button onClick={()=>{setSettSaved(true);setTimeout(()=>setSettSaved(false),2500);showT("✓ Configurações salvas!");}} style={{padding:"13px 0",borderRadius:14,fontSize:15,fontWeight:800,background:settSaved?`${G.green}cc`:`linear-gradient(90deg,${G.greenD},${G.green})`,color:"#fff",border:"none",cursor:"pointer",transition:"all 0.2s"}}>
                    {settSaved?"✅ Salvo com sucesso!":"💾 Salvar Configurações"}
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer style={{background:G.dark,borderTop:`2px solid ${G.mid}`,padding:"36px 16px 24px",marginTop:48}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:28,marginBottom:30}}>
            <div>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:14}}>
                <img src={LOGO} alt="Logo" style={{width:36,height:36,borderRadius:8,objectFit:"cover"}}/>
                <span style={{fontSize:16,fontWeight:900,color:G.green}}>Zel-Store</span>
              </div>
              <p style={{fontSize:13,color:G.grayL,lineHeight:1.7}}>Plataforma completa para e-commerce. Venda mais com tecnologia de ponta e IA integrada.</p>
            </div>
            {[["Loja",["Produtos","Categorias","Promoções","Lançamentos"]],["Suporte",["FAQ","Rastrear Pedido","Trocas","Contato"]],["Legal",["Termos de Uso","Privacidade","LGPD","Cookies"]]].map(([title,links])=>(
              <div key={title}>
                <p style={{fontSize:12,fontWeight:800,color:"#fff",marginBottom:12,textTransform:"uppercase",letterSpacing:1}}>{title}</p>
                {links.map(l=>(
                  <p key={l} style={{fontSize:13,color:G.grayL,marginBottom:8,cursor:"pointer",transition:"color 0.15s"}}
                    onMouseEnter={e=>e.target.style.color=G.green} onMouseLeave={e=>e.target.style.color=G.grayL}>{l}</p>
                ))}
              </div>
            ))}
          </div>
          <div style={{borderTop:`1px solid ${G.mid}`,paddingTop:20,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}}>
            <p style={{fontSize:12,color:G.grayL}}>© 2025 Zel-Store. Todos os direitos reservados.</p>
            <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
              {["🔒 SSL Seguro","💳 Stripe","🔵 Mercado Pago","📱 Pix","✅ LGPD"].map(s=>(
                <span key={s} style={{fontSize:11,color:G.grayL,background:`${G.white}10`,padding:"3px 10px",borderRadius:20}}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
