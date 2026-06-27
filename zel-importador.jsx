import { useState } from "react";

const LOGO = "data:image/png;base64,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";

const G = {
  dark:"#071A0D", mid:"#0B2415", green:"#5CB82E", greenL:"#7DD44E", greenD:"#3D8A1A",
  gold:"#F0C040", white:"#FFFFFF", off:"#F5F9F2", gray:"#6B8A70", grayL:"#9BB89F",
  border:"#E0ECD8", red:"#E74C3C", blue:"#3B82F6",
};

// ── PLATAFORMAS ───────────────────────────────────────────────────────────────
const PLATAFORMAS = [
  // Digitais / Infoprodutos
  { id:"hotmart",    nome:"Hotmart",       emoji:"🔥", cor:"#FF4D00", tipo:"digital",  campo:"hotmart.com",         comissao:30, cookie:30, desc:"Maior plataforma de cursos e infoprodutos do Brasil" },
  { id:"kiwify",     nome:"Kiwify",        emoji:"🥝", cor:"#00B388", tipo:"digital",  campo:"kiwify.com.br",       comissao:40, cookie:30, desc:"Plataforma de produtos digitais com checkout otimizado" },
  { id:"eduzz",      nome:"Eduzz",         emoji:"📘", cor:"#0066CC", tipo:"digital",  campo:"eduzz.com",           comissao:30, cookie:60, desc:"Plataforma completa para produtores e afiliados" },
  { id:"monetizze",  nome:"Monetizze",     emoji:"💰", cor:"#8B31D4", tipo:"digital",  campo:"monetizze.com.br",    comissao:40, cookie:30, desc:"Especialista em checkout e funil de vendas" },
  { id:"braip",      nome:"Braip",         emoji:"🅱️", cor:"#FF6B00", tipo:"digital",  campo:"braip.com",           comissao:40, cookie:30, desc:"Alta conversão com checkout integrado" },
  { id:"greenn",     nome:"Greenn",        emoji:"🟢", cor:"#22C55E", tipo:"digital",  campo:"greenn.com.br",       comissao:30, cookie:30, desc:"Plataforma de pagamentos e vendas digitais" },
  // E-commerce
  { id:"mercadolivre", nome:"Mercado Livre", emoji:"🛒", cor:"#FFE600", tipo:"fisico",  campo:"mercadolivre.com.br", comissao:7,  cookie:30, desc:"Maior marketplace da América Latina" },
  { id:"shopee",     nome:"Shopee",        emoji:"🧡", cor:"#EE4D2D", tipo:"fisico",  campo:"shopee.com.br",       comissao:8,  cookie:30, desc:"Plataforma asiática líder em promoções" },
  { id:"amazon",     nome:"Amazon BR",     emoji:"📦", cor:"#FF9900", tipo:"fisico",  campo:"amazon.com.br",       comissao:8,  cookie:24, desc:"Maior varejista do mundo com afiliados" },
  { id:"magalu",     nome:"Magalu",        emoji:"🛍️", cor:"#0086FF", tipo:"fisico",  campo:"magazineluiza.com.br",comissao:5,  cookie:30, desc:"Magazine Luiza - Programa de Parceiros" },
  { id:"americanas", nome:"Americanas",    emoji:"🔴", cor:"#E60014", tipo:"fisico",  campo:"americanas.com.br",   comissao:5,  cookie:30, desc:"Programa de afiliados Americanas" },
  { id:"casasbahia", nome:"Casas Bahia",   emoji:"🏠", cor:"#FFD200", tipo:"fisico",  campo:"casasbahia.com.br",   comissao:5,  cookie:30, desc:"Um dos maiores varejistas do Brasil" },
  { id:"aliexpress", nome:"AliExpress",    emoji:"🌏", cor:"#FF4747", tipo:"fisico",  campo:"aliexpress.com",      comissao:8,  cookie:3,  desc:"Importados direto da China com programa de afiliados" },
];

const fmtR = v => "R$ " + Number(v).toFixed(2).replace(".",",");

// Extrai infos de uma URL de produto
function parseUrl(url, plataforma) {
  try {
    const u = new URL(url);
    const slug = u.pathname.split("/").filter(Boolean).pop() || "";
    const nomeGuess = slug.replace(/[-_]/g," ").replace(/\b\w/g,c=>c.toUpperCase()).slice(0,60);
    return { slug, nomeGuess };
  } catch { return { slug:"", nomeGuess:"" }; }
}

// Simula busca do produto (em produção usaria a API de cada plataforma)
async function fetchProductInfo(url, plat) {
  await new Promise(r => setTimeout(r, 1800)); // simula latência de API
  const { nomeGuess } = parseUrl(url, plat);
  const emojis = { hotmart:"📚", kiwify:"📖", eduzz:"🎓", monetizze:"💡", braip:"⚡", greenn:"🌿", mercadolivre:"🛒", shopee:"🧡", amazon:"📦", magalu:"🛍️", americanas:"🔴", casasbahia:"🏠", aliexpress:"🌏" };
  const preco = (Math.random() * 400 + 47).toFixed(2);
  const promo = (parseFloat(preco) * (0.6 + Math.random()*0.3)).toFixed(2);
  return {
    nome: nomeGuess || `Produto ${plat.nome}`,
    preco: parseFloat(preco),
    promo: parseFloat(promo),
    emoji: emojis[plat.id] || "📦",
    desc: `Produto importado automaticamente da ${plat.nome}. Link: ${url}`,
    comissao: plat.comissao,
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random()*2000+100),
    plataforma: plat.nome,
  };
}

// ── COMPONENTE PRINCIPAL ──────────────────────────────────────────────────────
export default function ImportadorProdutos() {
  const [tab, setTab] = useState("importar");           // importar | importados | utmbuilder
  const [platSel, setPlatSel] = useState(null);         // plataforma selecionada
  const [filtroTipo, setFiltroTipo] = useState("todos");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [produtos, setProdutos] = useState([
    { id:1, nome:"Curso Marketing Digital Pro", preco:497, promo:297, emoji:"📚", plataforma:"Hotmart", comissao:30, rating:"4.9", reviews:891, importadoEm:"20/06/2025", status:"Ativo" },
    { id:2, nome:"E-book Copywriting Master",   preco:97,  promo:47,  emoji:"📖", plataforma:"Kiwify",  comissao:40, rating:"4.8", reviews:1203, importadoEm:"19/06/2025", status:"Ativo" },
    { id:3, nome:"Smartphone Samsung Galaxy",   preco:1999,promo:1599,emoji:"📱", plataforma:"Mercado Livre", comissao:7, rating:"4.7", reviews:3421, importadoEm:"18/06/2025", status:"Ativo" },
  ]);
  const [toast, setToast] = useState(null);
  // UTM builder
  const [utm, setUtm] = useState({ source:"zelstore", medium:"afiliado", campaign:"", content:"", term:"" });
  // Formulário manual
  const [manual, setManual] = useState({ nome:"", preco:"", promo:"", cat:"Digital", emoji:"📦", comissao:"", desc:"" });

  const showT = (msg, type="success") => { setToast({msg,type}); setTimeout(()=>setToast(null),3500); };

  const platsFiltradas = filtroTipo === "todos" ? PLATAFORMAS : PLATAFORMAS.filter(p=>p.tipo===filtroTipo);

  const importar = async () => {
    if (!url.trim()) { showT("Cole o link do produto","error"); return; }
    if (!platSel) { showT("Selecione a plataforma primeiro","error"); return; }
    setLoading(true); setPreview(null);
    try {
      const info = await fetchProductInfo(url, platSel);
      setPreview(info);
    } catch { showT("Erro ao buscar produto","error"); }
    setLoading(false);
  };

  const confirmarImport = () => {
    if (!preview) return;
    const novo = { id: Date.now(), ...preview, status:"Ativo", importadoEm: new Date().toLocaleDateString("pt-BR"), url };
    setProdutos([novo, ...produtos]);
    setPreview(null); setUrl(""); setPlatSel(null);
    showT(`✓ "${preview.nome}" importado com sucesso!`);
    setTab("importados");
  };

  const importarManual = () => {
    if (!manual.nome || !manual.preco) { showT("Preencha nome e preço","error"); return; }
    const novo = { id:Date.now(), nome:manual.nome, preco:parseFloat(manual.preco), promo:manual.promo?parseFloat(manual.promo):null, emoji:manual.emoji, plataforma:platSel?.nome||"Manual", comissao:parseFloat(manual.comissao||0), rating:"4.5", reviews:0, importadoEm:new Date().toLocaleDateString("pt-BR"), status:"Ativo", desc:manual.desc };
    setProdutos([novo,...produtos]);
    setManual({nome:"",preco:"",promo:"",cat:"Digital",emoji:"📦",comissao:"",desc:""});
    showT("✓ Produto adicionado manualmente!");
    setTab("importados");
  };

  const utmLink = () => {
    if (!url) return "Cole um link acima para gerar";
    const params = Object.entries(utm).filter(([,v])=>v).map(([k,v])=>`utm_${k}=${encodeURIComponent(v)}`).join("&");
    return url + (url.includes("?")?"&":"?") + params;
  };

  const deletar = id => { setProdutos(produtos.filter(p=>p.id!==id)); showT("Produto removido!"); };

  const statusColor = s => s==="Ativo"?G.green:s==="Pausado"?G.gold:G.red;

  return (
    <div style={{minHeight:"100vh",background:G.off,fontFamily:"'Inter','Segoe UI',sans-serif",color:"#1A2F1E"}}>

      {/* TOAST */}
      {toast && (
        <div style={{position:"fixed",top:18,right:18,zIndex:999,padding:"11px 22px",borderRadius:14,
          background:toast.type==="error"?G.red:`linear-gradient(90deg,${G.greenD},${G.green})`,
          color:"#fff",fontSize:13,fontWeight:700,boxShadow:"0 8px 28px rgba(0,0,0,0.18)"}}>
          {toast.msg}
        </div>
      )}

      {/* HEADER */}
      <header style={{background:G.dark,padding:"0 20px",display:"flex",alignItems:"center",gap:12,height:64,borderBottom:`2px solid ${G.mid}`,position:"sticky",top:0,zIndex:50}}>
        <img src={LOGO} alt="Logo" style={{width:38,height:38,borderRadius:9,objectFit:"cover"}}/>
        <div>
          <span style={{fontSize:17,fontWeight:900,color:G.green,display:"block"}}>Zel-Store</span>
          <span style={{fontSize:10,color:G.grayL,letterSpacing:2,textTransform:"uppercase"}}>Importador de Produtos</span>
        </div>
        <div style={{marginLeft:"auto",display:"flex",gap:8}}>
          {[["importar","🔗 Importar"],["importados","📦 Importados ("+produtos.length+")"],["utmbuilder","🔧 UTM Builder"]].map(([id,lbl])=>(
            <button key={id} onClick={()=>setTab(id)} style={{padding:"7px 16px",borderRadius:20,fontSize:13,fontWeight:700,background:tab===id?`linear-gradient(90deg,${G.greenD},${G.green})`:`${G.green}22`,color:tab===id?"#fff":G.greenL,border:`1.5px solid ${G.green}44`,cursor:"pointer"}}>
              {lbl}
            </button>
          ))}
        </div>
      </header>

      <div style={{maxWidth:1200,margin:"0 auto",padding:"28px 16px"}}>

        {/* ── TAB: IMPORTAR ─────────────────────────────────────────── */}
        {tab === "importar" && (
          <div>
            <div style={{marginBottom:24}}>
              <h1 style={{fontSize:24,fontWeight:900,color:"#1A2F1E",marginBottom:6}}>🔗 Importar Produtos de Afiliado</h1>
              <p style={{fontSize:14,color:G.gray}}>Cole o link do produto de qualquer plataforma e importe para sua loja em segundos.</p>
            </div>

            {/* FILTRO TIPO */}
            <div style={{display:"flex",gap:8,marginBottom:20}}>
              {[["todos","🌐 Todas"],["digital","📱 Digitais"],["fisico","📦 Físicos"]].map(([v,l])=>(
                <button key={v} onClick={()=>setFiltroTipo(v)} style={{padding:"7px 16px",borderRadius:20,fontSize:13,fontWeight:700,background:filtroTipo===v?`linear-gradient(90deg,${G.greenD},${G.green})`:G.white,color:filtroTipo===v?"#fff":G.gray,border:`1.5px solid ${filtroTipo===v?G.green:G.border}`,cursor:"pointer"}}>
                  {l}
                </button>
              ))}
            </div>

            {/* GRID PLATAFORMAS */}
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(170px,1fr))",gap:12,marginBottom:28}}>
              {platsFiltradas.map(p => (
                <div key={p.id} onClick={()=>setPlatSel(platSel?.id===p.id?null:p)}
                  style={{background:G.white,borderRadius:14,border:platSel?.id===p.id?`2px solid ${p.cor}`:`2px solid ${G.border}`,padding:"14px 12px",cursor:"pointer",transition:"all 0.2s",
                    boxShadow:platSel?.id===p.id?`0 4px 16px ${p.cor}30`:"none",
                    transform:platSel?.id===p.id?"scale(1.03)":"scale(1)"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"start",marginBottom:8}}>
                    <span style={{fontSize:28}}>{p.emoji}</span>
                    {platSel?.id===p.id && <span style={{fontSize:11,fontWeight:800,color:"#fff",background:p.cor,padding:"2px 7px",borderRadius:20}}>✓</span>}
                  </div>
                  <p style={{fontSize:14,fontWeight:800,color:"#1A2F1E",marginBottom:3}}>{p.nome}</p>
                  <p style={{fontSize:11,color:G.gray,marginBottom:6,lineHeight:1.4}}>{p.desc}</p>
                  <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                    <span style={{fontSize:10,fontWeight:700,background:`${p.cor}15`,color:p.cor,padding:"2px 7px",borderRadius:20}}>💰 {p.comissao}%</span>
                    <span style={{fontSize:10,fontWeight:700,background:`${G.green}12`,color:G.greenD,padding:"2px 7px",borderRadius:20}}>🍪 {p.cookie}d</span>
                    <span style={{fontSize:10,fontWeight:700,background:p.tipo==="digital"?`${G.blue}15`:`${G.gold}15`,color:p.tipo==="digital"?G.blue:"#B8860B",padding:"2px 7px",borderRadius:20}}>
                      {p.tipo==="digital"?"📱 Digital":"📦 Físico"}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* IMPORTAR VIA LINK */}
            <div style={{background:G.white,borderRadius:18,border:`2px solid ${G.border}`,padding:24,marginBottom:20}}>
              <h2 style={{fontSize:17,fontWeight:900,color:"#1A2F1E",marginBottom:16}}>
                {platSel ? `${platSel.emoji} Importar via ${platSel.nome}` : "🔗 Importar via Link"}
              </h2>
              {!platSel && (
                <div style={{background:`${G.gold}15`,border:`1.5px solid ${G.gold}`,borderRadius:12,padding:12,marginBottom:16,fontSize:13,color:"#8B6914"}}>
                  ⚠️ Selecione uma plataforma acima antes de colar o link.
                </div>
              )}
              <div style={{display:"flex",gap:10,marginBottom:16}}>
                <input value={url} onChange={e=>setUrl(e.target.value)} placeholder={platSel?`Cole aqui o link do produto ${platSel.nome}...`:"https://..."}
                  style={{flex:1,padding:"11px 14px",borderRadius:12,border:`1.5px solid ${G.border}`,fontSize:13,outline:"none"}}/>
                <button onClick={importar} disabled={loading||!platSel}
                  style={{padding:"11px 24px",borderRadius:12,fontWeight:800,fontSize:14,background:loading||!platSel?G.grayL:`linear-gradient(90deg,${G.greenD},${G.green})`,color:"#fff",border:"none",cursor:loading||!platSel?"not-allowed":"pointer",whiteSpace:"nowrap"}}>
                  {loading?"⏳ Buscando...":"🔍 Buscar Produto"}
                </button>
              </div>

              {/* LOADING */}
              {loading && (
                <div style={{textAlign:"center",padding:"32px",background:G.off,borderRadius:14}}>
                  <div style={{fontSize:48,marginBottom:8}}>🔄</div>
                  <p style={{fontWeight:700,color:"#1A2F1E",marginBottom:4}}>Buscando produto em {platSel?.nome}...</p>
                  <p style={{fontSize:13,color:G.gray}}>Consultando título, preço, descrição e imagem</p>
                </div>
              )}

              {/* PREVIEW */}
              {preview && !loading && (
                <div style={{background:G.off,borderRadius:16,padding:20,border:`2px solid ${G.green}44`}}>
                  <p style={{fontSize:13,fontWeight:700,color:G.greenD,marginBottom:14}}>✓ Produto encontrado! Revise antes de importar:</p>
                  <div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:16,alignItems:"start"}}>
                    <div style={{background:G.white,borderRadius:14,padding:16,fontSize:60,textAlign:"center",border:`1.5px solid ${G.border}`}}>
                      {preview.emoji}
                    </div>
                    <div>
                      <input value={preview.nome} onChange={e=>setPreview({...preview,nome:e.target.value})}
                        style={{width:"100%",padding:"9px 12px",borderRadius:10,border:`1.5px solid ${G.border}`,fontSize:15,fontWeight:700,outline:"none",boxSizing:"border-box",marginBottom:10}}/>
                      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:12}}>
                        {[["Preço Original (R$)","preco"],["Preço Promo (R$)","promo"],["Comissão (%)","comissao"]].map(([lbl,k])=>(
                          <div key={k}>
                            <label style={{fontSize:11,fontWeight:700,color:G.gray,marginBottom:3,display:"block"}}>{lbl}</label>
                            <input type="number" value={preview[k]} onChange={e=>setPreview({...preview,[k]:e.target.value})}
                              style={{width:"100%",padding:"8px 10px",borderRadius:9,border:`1.5px solid ${G.border}`,fontSize:13,outline:"none",boxSizing:"border-box"}}/>
                          </div>
                        ))}
                      </div>
                      <textarea value={preview.desc} onChange={e=>setPreview({...preview,desc:e.target.value})} rows={2}
                        style={{width:"100%",padding:"8px 12px",borderRadius:10,border:`1.5px solid ${G.border}`,fontSize:13,outline:"none",resize:"vertical",boxSizing:"border-box",marginBottom:12}}/>
                      <div style={{display:"flex",gap:10}}>
                        <button onClick={confirmarImport} style={{padding:"10px 24px",borderRadius:12,fontWeight:800,background:`linear-gradient(90deg,${G.greenD},${G.green})`,color:"#fff",border:"none",cursor:"pointer"}}>
                          ✅ Confirmar Importação
                        </button>
                        <button onClick={()=>{setPreview(null);setUrl("");}} style={{padding:"10px 18px",borderRadius:12,fontWeight:700,background:G.off,color:G.gray,border:`1.5px solid ${G.border}`,cursor:"pointer"}}>
                          Cancelar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CADASTRO MANUAL */}
            <div style={{background:G.white,borderRadius:18,border:`2px solid ${G.border}`,padding:24}}>
              <h2 style={{fontSize:17,fontWeight:900,color:"#1A2F1E",marginBottom:6}}>✏️ Cadastro Manual</h2>
              <p style={{fontSize:13,color:G.gray,marginBottom:16}}>Preencha manualmente caso prefira total controle das informações.</p>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                {[["Nome do Produto","nome","text","Curso de Marketing Digital"],["Preço Original (R$)","preco","number","497.00"],["Preço Promocional (R$)","promo","number","297.00"],["Emoji/Ícone","emoji","text","📚"],["Comissão (%)","comissao","number","30"]].map(([lbl,k,t,ph])=>(
                  <div key={k}>
                    <label style={{fontSize:12,fontWeight:700,color:G.gray,marginBottom:4,display:"block"}}>{lbl}</label>
                    <input type={t} placeholder={ph} value={manual[k]} onChange={e=>setManual({...manual,[k]:e.target.value})}
                      style={{width:"100%",padding:"9px 12px",borderRadius:10,border:`1.5px solid ${G.border}`,fontSize:13,outline:"none",boxSizing:"border-box"}}/>
                  </div>
                ))}
                <div>
                  <label style={{fontSize:12,fontWeight:700,color:G.gray,marginBottom:4,display:"block"}}>Plataforma</label>
                  <select onChange={e=>{const p=PLATAFORMAS.find(x=>x.nome===e.target.value);if(p)setPlatSel(p);}} style={{width:"100%",padding:"9px 12px",borderRadius:10,border:`1.5px solid ${G.border}`,fontSize:13,background:"#fff",outline:"none"}}>
                    <option value="">Selecione...</option>
                    {PLATAFORMAS.map(p=><option key={p.id}>{p.nome}</option>)}
                  </select>
                </div>
              </div>
              <div style={{marginTop:12}}>
                <label style={{fontSize:12,fontWeight:700,color:G.gray,marginBottom:4,display:"block"}}>Descrição</label>
                <textarea value={manual.desc} onChange={e=>setManual({...manual,desc:e.target.value})} rows={2} placeholder="Benefícios e características do produto..."
                  style={{width:"100%",padding:"9px 12px",borderRadius:10,border:`1.5px solid ${G.border}`,fontSize:13,outline:"none",resize:"vertical",boxSizing:"border-box"}}/>
              </div>
              <button onClick={importarManual} style={{marginTop:14,padding:"10px 24px",borderRadius:12,fontWeight:700,background:`linear-gradient(90deg,${G.greenD},${G.green})`,color:"#fff",border:"none",cursor:"pointer"}}>
                ➕ Adicionar Produto
              </button>
            </div>
          </div>
        )}

        {/* ── TAB: IMPORTADOS ───────────────────────────────────────── */}
        {tab === "importados" && (
          <div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:24}}>
              <div>
                <h1 style={{fontSize:24,fontWeight:900,color:"#1A2F1E",marginBottom:4}}>📦 Produtos Importados</h1>
                <p style={{fontSize:14,color:G.gray}}>{produtos.length} produto{produtos.length!==1?"s":""} na sua loja</p>
              </div>
              <button onClick={()=>setTab("importar")} style={{padding:"9px 18px",borderRadius:20,fontSize:13,fontWeight:800,background:`linear-gradient(90deg,${G.greenD},${G.green})`,color:"#fff",border:"none",cursor:"pointer"}}>
                + Importar Mais
              </button>
            </div>

            {/* STATS */}
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:14,marginBottom:24}}>
              {[
                {label:"Total Produtos",value:produtos.length,icon:"📦",bg:`${G.green}12`,tc:G.greenD},
                {label:"Comissão Média",value:`${(produtos.reduce((s,p)=>s+p.comissao,0)/Math.max(produtos.length,1)).toFixed(1)}%`,icon:"💰",bg:`${G.gold}12`,tc:"#8B6914"},
                {label:"Plataformas",value:new Set(produtos.map(p=>p.plataforma)).size,icon:"🌐",bg:`${G.blue}12`,tc:G.blue},
                {label:"Ativos",value:produtos.filter(p=>p.status==="Ativo").length,icon:"✅",bg:`${G.green}12`,tc:G.greenD},
              ].map(s=>(
                <div key={s.label} style={{background:G.white,borderRadius:14,border:`2px solid ${G.border}`,padding:"14px 16px"}}>
                  <span style={{fontSize:26}}>{s.icon}</span>
                  <p style={{fontSize:22,fontWeight:900,color:"#1A2F1E",marginTop:6,marginBottom:2}}>{s.value}</p>
                  <p style={{fontSize:12,color:G.gray}}>{s.label}</p>
                </div>
              ))}
            </div>

            {/* LISTA */}
            <div style={{background:G.white,borderRadius:18,border:`2px solid ${G.border}`,overflow:"hidden"}}>
              <div style={{overflowX:"auto"}}>
                <table style={{width:"100%",borderCollapse:"collapse",minWidth:600}}>
                  <thead>
                    <tr style={{background:G.off,borderBottom:`2px solid ${G.border}`}}>
                      {["Produto","Plataforma","Preço","Promo","Comissão","Avaliação","Status","Ação"].map(h=>(
                        <th key={h} style={{padding:"12px 14px",textAlign:"left",fontSize:12,fontWeight:800,color:"#1A2F1E",whiteSpace:"nowrap"}}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {produtos.map(p=>(
                      <tr key={p.id} style={{borderBottom:`1px solid ${G.border}`}}>
                        <td style={{padding:"12px 14px"}}>
                          <div style={{display:"flex",alignItems:"center",gap:10}}>
                            <span style={{fontSize:28}}>{p.emoji}</span>
                            <div>
                              <p style={{fontWeight:700,fontSize:13,color:"#1A2F1E",maxWidth:200,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{p.nome}</p>
                              <p style={{fontSize:11,color:G.gray}}>Importado em {p.importadoEm}</p>
                            </div>
                          </div>
                        </td>
                        <td style={{padding:"12px 14px"}}>
                          <span style={{fontSize:12,fontWeight:700,background:`${PLATAFORMAS.find(x=>x.nome===p.plataforma)?.cor||G.green}18`,color:PLATAFORMAS.find(x=>x.nome===p.plataforma)?.cor||G.green,padding:"3px 10px",borderRadius:20,whiteSpace:"nowrap"}}>
                            {PLATAFORMAS.find(x=>x.nome===p.plataforma)?.emoji} {p.plataforma}
                          </span>
                        </td>
                        <td style={{padding:"12px 14px",fontSize:13,color:G.gray,textDecoration:p.promo?"line-through":"none"}}>{fmtR(p.preco)}</td>
                        <td style={{padding:"12px 14px",fontSize:14,fontWeight:900,color:G.green}}>{p.promo?fmtR(p.promo):"—"}</td>
                        <td style={{padding:"12px 14px"}}>
                          <span style={{fontSize:12,fontWeight:800,background:`${G.gold}20`,color:"#8B6914",padding:"3px 10px",borderRadius:20}}>{p.comissao}%</span>
                        </td>
                        <td style={{padding:"12px 14px",fontSize:13,color:"#1A2F1E",fontWeight:700}}>⭐ {p.rating} <span style={{color:G.gray,fontWeight:400}}>({p.reviews})</span></td>
                        <td style={{padding:"12px 14px"}}>
                          <select value={p.status} onChange={e=>setProdutos(produtos.map(x=>x.id===p.id?{...x,status:e.target.value}:x))}
                            style={{padding:"4px 8px",borderRadius:8,border:`1.5px solid ${statusColor(p.status)}55`,background:`${statusColor(p.status)}12`,color:statusColor(p.status),fontSize:12,fontWeight:700,cursor:"pointer",outline:"none"}}>
                            <option>Ativo</option>
                            <option>Pausado</option>
                            <option>Removido</option>
                          </select>
                        </td>
                        <td style={{padding:"12px 14px"}}>
                          <button onClick={()=>deletar(p.id)} style={{padding:"5px 10px",borderRadius:8,fontSize:12,fontWeight:700,background:"#FFF0F0",color:G.red,border:"none",cursor:"pointer"}}>🗑️</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* POR PLATAFORMA */}
            <div style={{marginTop:24,background:G.white,borderRadius:18,border:`2px solid ${G.border}`,padding:22}}>
              <h3 style={{fontSize:15,fontWeight:900,color:"#1A2F1E",marginBottom:16}}>📊 Distribuição por Plataforma</h3>
              <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
                {PLATAFORMAS.map(plat=>{
                  const count = produtos.filter(p=>p.plataforma===plat.nome).length;
                  return (
                    <div key={plat.id} style={{background:G.off,borderRadius:12,padding:"10px 16px",display:"flex",alignItems:"center",gap:10,border:`1.5px solid ${count>0?plat.cor:G.border}`}}>
                      <span style={{fontSize:22}}>{plat.emoji}</span>
                      <div>
                        <p style={{fontSize:13,fontWeight:700,color:"#1A2F1E"}}>{plat.nome}</p>
                        <p style={{fontSize:12,color:G.gray}}>{count} produto{count!==1?"s":""}</p>
                      </div>
                      {count > 0 && <span style={{background:plat.cor,color:"#fff",fontSize:11,fontWeight:900,width:22,height:22,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"}}>{count}</span>}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ── TAB: UTM BUILDER ──────────────────────────────────────── */}
        {tab === "utmbuilder" && (
          <div>
            <h1 style={{fontSize:24,fontWeight:900,color:"#1A2F1E",marginBottom:6}}>🔧 UTM Builder</h1>
            <p style={{fontSize:14,color:G.gray,marginBottom:24}}>Gere links rastreáveis para suas campanhas de marketing e saiba exatamente de onde vêm suas vendas.</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
              <div style={{background:G.white,borderRadius:18,border:`2px solid ${G.border}`,padding:24}}>
                <h3 style={{fontSize:15,fontWeight:900,marginBottom:16}}>Configurar Link</h3>
                <div style={{marginBottom:14}}>
                  <label style={{fontSize:12,fontWeight:700,color:G.gray,marginBottom:4,display:"block"}}>URL do Produto</label>
                  <input value={url} onChange={e=>setUrl(e.target.value)} placeholder="https://hotmart.com/product/seu-produto"
                    style={{width:"100%",padding:"9px 12px",borderRadius:10,border:`1.5px solid ${G.border}`,fontSize:13,outline:"none",boxSizing:"border-box"}}/>
                </div>
                <div style={{display:"grid",gap:12}}>
                  {[
                    ["utm_source","source","De onde vem o tráfego","zelstore, instagram, google"],
                    ["utm_medium","medium","Tipo de mídia","afiliado, cpc, email, social"],
                    ["utm_campaign","campaign","Nome da campanha","black-friday, lancamento"],
                    ["utm_content","content","Identifica o anúncio","banner-topo, link-bio"],
                    ["utm_term","term","Palavra-chave paga","curso marketing"],
                  ].map(([full,k,hint,ex])=>(
                    <div key={k}>
                      <label style={{fontSize:12,fontWeight:700,color:G.gray,marginBottom:3,display:"block"}}>
                        <span style={{color:G.green,fontFamily:"monospace"}}>{full}</span> — {hint}
                      </label>
                      <input value={utm[k]} onChange={e=>setUtm({...utm,[k]:e.target.value})} placeholder={`Ex: ${ex}`}
                        style={{width:"100%",padding:"9px 12px",borderRadius:10,border:`1.5px solid ${G.border}`,fontSize:13,outline:"none",boxSizing:"border-box"}}/>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div style={{background:G.white,borderRadius:18,border:`2px solid ${G.border}`,padding:24,marginBottom:16}}>
                  <h3 style={{fontSize:15,fontWeight:900,marginBottom:14}}>Link Gerado</h3>
                  <div style={{background:G.off,borderRadius:12,padding:14,marginBottom:14,wordBreak:"break-all",fontSize:12,fontFamily:"monospace",color:G.greenD,lineHeight:1.7,minHeight:80}}>
                    {utmLink()}
                  </div>
                  <div style={{display:"flex",gap:10}}>
                    <button onClick={()=>{navigator.clipboard?.writeText(utmLink());showT("✓ Link copiado!");}} style={{flex:1,padding:"10px 0",borderRadius:12,fontWeight:700,background:`linear-gradient(90deg,${G.greenD},${G.green})`,color:"#fff",border:"none",cursor:"pointer"}}>
                      📋 Copiar Link
                    </button>
                    <button onClick={()=>{setUrl("");setUtm({source:"zelstore",medium:"afiliado",campaign:"",content:"",term:""});}} style={{padding:"10px 16px",borderRadius:12,fontWeight:700,background:G.off,color:G.gray,border:`1.5px solid ${G.border}`,cursor:"pointer"}}>
                      🔄 Limpar
                    </button>
                  </div>
                </div>
                <div style={{background:G.white,borderRadius:18,border:`2px solid ${G.border}`,padding:22}}>
                  <h3 style={{fontSize:14,fontWeight:900,marginBottom:14}}>💡 Templates Prontos</h3>
                  {[
                    {label:"📘 Meta Ads",vals:{source:"facebook",medium:"cpc",campaign:"conversao"}},
                    {label:"🔍 Google Ads",vals:{source:"google",medium:"cpc",campaign:"search"}},
                    {label:"🎵 TikTok Ads",vals:{source:"tiktok",medium:"cpc",campaign:"video"}},
                    {label:"📧 Email Mkt",vals:{source:"email",medium:"email",campaign:"newsletter"}},
                    {label:"📱 Instagram",vals:{source:"instagram",medium:"social",campaign:"organico"}},
                    {label:"💬 WhatsApp",vals:{source:"whatsapp",medium:"messenger",campaign:"direto"}},
                  ].map(t=>(
                    <button key={t.label} onClick={()=>setUtm({...utm,...t.vals})} style={{display:"block",width:"100%",padding:"9px 14px",borderRadius:10,textAlign:"left",fontSize:13,fontWeight:600,background:G.off,color:"#1A2F1E",border:`1.5px solid ${G.border}`,cursor:"pointer",marginBottom:8}}>
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
