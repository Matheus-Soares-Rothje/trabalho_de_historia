/* t = estilo: base | pop | mid | op | psi · c = cor de destaque · k = cor do texto sobre o destaque · f = filete (mid) */
const slides=[
{id:'capa',b:'ANOS 60!',t:'base',c:'var(--mostarda)',k:'#14100c',titulo:'Anos 60: uma década que mudou o mundo',sub:'Yasmin Pérola, Matheus Soares, Lucas Ryan e Adriano Miguel',
 foto:'src/img/capa.jpg',alt:'A Terra nascendo sobre o horizonte da Lua, foto da missão Apollo 8 (1968)',cr:'Bill Anders / NASA, 1968, domínio público'},
{id:'linha-do-tempo',t:'base',c:'var(--petroleo)',k:'#F4E8C8',titulo:'Linha do tempo: 1961–1970',anos:[
 ['1961','Começa a construção do Muro de Berlim (13 de agosto).'],
 ['1962','Brasil é bicampeão mundial, no Chile (17 de junho).'],
 ['1963','JFK é assassinado em Dallas (22 de novembro).'],
 ['1964','Golpe militar derruba João Goulart (31 de março–1º de abril).'],
 ['1965','Jovem Guarda estreia na TV Record (22 de agosto).'],
 ['1966','Inglaterra vence a Copa (30 de julho); o Brasil cai na 1ª fase.'],
 ['1967','Festival da Record põe a guitarra elétrica no palco (21 de outubro).'],
 ['1968','AI-5 endurece a ditadura (13 de dezembro).'],
 ['1969','Apollo 11 pousa na Lua (20 de julho).'],
 ['1970','Brasil é tricampeão mundial, no México (21 de junho).']],
 foto:'src/img/linha-do-tempo.jpg',alt:'Operários instalam uma barreira contra tanques no Checkpoint Charlie, em Berlim, em dezembro de 1961',cr:'CIA, 1961, domínio público'},
{id:'esporte',b:'BI!',t:'pop',c:'var(--vermelho)',k:'#F4E8C8',titulo:'Esporte: Copa de 62',top:[
 ['Chile 1962:','o Brasil defende o título e vence a Tchecoslováquia por 3 a 1 na final, em 17 de junho, em Santiago.'],
 ['Garrincha, a estrela:','craque da Copa e dono de 4 gols, ele carrega o time depois da lesão de Pelé.'],
 ['Bicampeonato:','o Brasil vira o 2º país a vencer duas Copas seguidas, depois da Itália (1934 e 1938).']],
 curio:'Em 1962, Pelé se machucou no 2º jogo e Amarildo o substituiu: fez o gol de empate na final!',
 foto:'src/img/esporte.jpg',alt:'Garrincha durante a Copa do Mundo de 1962, no Chile',cr:'Pressens bild, 1962, domínio público na Suécia'},
{id:'copa70',g:'esporte',b:'TRI!',t:'pop',c:'var(--vermelho)',k:'#F4E8C8',titulo:'Esporte: Copa de 70',top:[
 ['Campanha perfeita:','no México, o Brasil vence os 6 jogos e marca 19 gols, com Zagallo como técnico.'],
 ['Final em 21 de junho:','4 a 1 na Itália, no Estádio Azteca, com gols de Pelé, Gérson, Jairzinho e Carlos Alberto.'],
 ['Tri e taça para sempre:','o Brasil fica com a taça Jules Rimet, e Pelé vira o único jogador com três Copas.']],
 curio:'A Copa de 70 foi a primeira que o mundo assistiu ao vivo por satélite!',
 foto:'src/img/copa70.jpg',alt:'A seleção brasileira perfilada antes do jogo contra o Peru, na Copa de 1970; o mesmo time jogou a final',cr:'El Gráfico, 1970, domínio público na Argentina'},
{id:'politica',b:'URGENTE!',t:'mid',c:'var(--oliva)',k:'#F4E8C8',f:'var(--mostarda)',titulo:'Política',top:[
 ['Guerra Fria:','Muro de Berlim (agosto de 1961), Crise dos Mísseis em Cuba (outubro de 1962, 13 dias de tensão) e Guerra do Vietnã, que se intensifica em 1965 com as tropas de combate dos EUA.'],
 ['EUA:','JFK é assassinado em 1963; a luta por direitos civis leva à lei de 1964 contra a discriminação racial.'],
 ['Brasil e França:','o golpe de 1964 inicia a ditadura e o AI-5 (13/12/1968) fecha o Congresso; em maio de 68, uma greve geral de cerca de 10 milhões de trabalhadores paralisa a França.']],
 curio:'O “telefone vermelho” entre Washington e Moscou nunca foi telefone: a linha direta, criada em 1963 depois da Crise dos Mísseis, usava teletipos.',
 foto:'src/img/politica.jpg',alt:'O presidente John F. Kennedy no Salão Oval, em julho de 1963',cr:'Cecil Stoughton / Casa Branca, 1963, domínio público'},
{id:'economia',b:'BOOM!',t:'mid',c:'var(--laranja)',k:'#F4E8C8',f:'var(--petroleo)',titulo:'Economia',top:[
 ['Boom do pós-guerra:','os países industrializados crescem quase 5% ao ano nos anos 1960, com mais consumo e mais indústria.'],
 ['JK e Brasília:','o Plano de Metas (“50 anos em 5”) investe em energia, transportes e indústria; a capital é inaugurada em 21 de abril de 1960.'],
 ['Inflação e Milagre:','a inflação chega a cerca de 90% em 1964; de 1968 a 1973, o PIB cresce mais de 10% ao ano, mas a dívida externa mais que triplica.']],
 curio:'Por causa da inflação, em 1967 a moeda perdeu três zeros: 1 cruzeiro novo passou a valer 1.000 cruzeiros.',
 foto:'src/img/economia.jpg',alt:'Obras do Congresso Nacional na Esplanada dos Ministérios, em Brasília, em outubro de 1959',cr:'Domínio público / Acervo Arquivo Nacional, 1959'},
{id:'tecnologia',b:'ONLINE!',t:'op',c:'var(--ciano)',k:'#14100c',titulo:'Tecnologia',top:[
 ['Corrida espacial:','Gagarin é o primeiro humano no espaço (12/4/1961) e a Apollo 11 pousa na Lua em 20/7/1969.'],
 ['ARPANET:','em 29/10/1969, um computador da UCLA se comunica com outro do Stanford Research Institute, o ancestral da internet.'],
 ['No dia a dia:','a fita cassete (Philips, 1963) e a TV em cores (EUA em 1965–66; Brasil só em 1972).']],
 curio:'A primeira mensagem da ARPANET devia ser “LOGIN”, mas o sistema travou depois de “LO”. Cerca de uma hora depois, a palavra completa passou.',
 foto:'src/img/tecnologia.jpg',alt:'O astronauta Buzz Aldrin faz continência à bandeira dos EUA na Lua, em 1969',cr:'Neil Armstrong / NASA, 1969, domínio público'},
{id:'musica',b:'PLAY!',t:'psi',c:'var(--roxo)',k:'#F4E8C8',titulo:'Música',top:[
 ['Beatles e Jovem Guarda:','depois dos Beatles na TV dos EUA (1964), a Record lança a Jovem Guarda, com Roberto Carlos, em 1965.'],
 ['Bossa Nova e Tropicália:','a Bossa Nova toma o Carnegie Hall (21/11/1962); em 1967–68, Caetano, Gil e Os Mutantes misturam rock e ritmos brasileiros.'],
 ['Festivais e Woodstock:','“Arrastão”, com Elis Regina, vence o festival de 1965; Woodstock reúne mais de 460 mil pessoas em agosto de 1969.']],
 curio:'Em julho de 1967, Gilberto Gil marchou em São Paulo contra a guitarra elétrica; em outubro, cantou “Domingo no Parque” com guitarras e com Os Mutantes.',
 foto:'src/img/musica.jpg',alt:'Os Beatles ao chegar a Nova York, em fevereiro de 1964',cr:'UPI, 1964, Biblioteca do Congresso (EUA), domínio público nos EUA'},
{id:'cinema',b:'AÇÃO!',t:'pop',c:'var(--rosa)',k:'#14100c',titulo:'Cinema',top:[
 ['Nouvelle Vague e Cinema Novo:','jovens cineastas levam a câmera às ruas: Godard na França (1960) e Glauber Rocha no Brasil, com Deus e o Diabo na Terra do Sol (1964).'],
 ['James Bond:','Sean Connery estreia como 007 em Dr. No (1962), o primeiro filme da série.'],
 ['Suspense e ficção científica:','Hitchcock lança Psicose (1960) e Kubrick, 2001: Uma Odisseia no Espaço (abril de 1968), 15 meses antes da Apollo 11.']],
 curio:'O “sangue” da cena do chuveiro de Psicose era calda de chocolate!',
 foto:'src/img/cinema.jpg',alt:'Retrato do diretor Alfred Hitchcock, em 1956, quatro anos antes de Psicose',cr:'Fred Palumbo, 1956, Biblioteca do Congresso (EUA), domínio público'},
{id:'legado',t:'base',c:'var(--cafe)',k:'#F4E8C8',titulo:'Legado e referências',top:[
 ['Direitos civis:','a Marcha sobre Washington (1963) reuniu mais de 250 mil pessoas, e a lei de 1964 acabou com a segregação legal em lugares públicos nos EUA.'],
 ['Ciência:','a chegada à Lua (1969) e a ARPANET, ancestral da internet, mostram o salto tecnológico da década.'],
 ['Esporte e mídia:','a Copa de 70 foi a primeira transmitida ao vivo por satélite, e aquela seleção é vista até hoje como uma das melhores da história.']],
 refs:[
 ['National Archives (EUA): origem da Lei dos Direitos Civis de 1964','https://www.archives.gov/legislative/features/march-on-washington/s1731.html'],
 ['Congressional Research Service: Marcha sobre Washington, 1963','https://sgp.fas.org/crs/misc/R47655.pdf'],
 ['ASALH: linha do tempo dos direitos civis','https://asalh.org/about-us/a-century-of-black-history-commemorations-timeline/'],
 ['The Planetary Society: Apollo 11','https://www.planetary.org/space-missions/apollo-11'],
 ['CBS News: primeira mensagem da ARPANET','https://www.cbsnews.com/news/first-message-sent-over-the-internet-45-years-ago'],
 ['Trivela: final da Copa de 1970','https://trivela.com.br/copa-do-mundo/os-50-anos-da-copa-de-70-a-apoteose-do-inigualavel-esquadrao-o-brasil-e-tricampeao-mundial/'],
 ['Jovem Pan: o tri e a transmissão por satélite','https://jovempan.com.br/colunistas/thiago-uberreich/a-conquista-do-tri-faz-55-anos-e-e-uma-das-vitorias-mais-marcantes-da-selecao/'],
 ['Sky Sports: a Copa de 1962','https://skysports.com/football/news/17252/11384017/world-cups-remembered-chile-1962'],
 ['Wikimedia Commons: fotos do site (créditos em cada slide)','https://commons.wikimedia.org']],
 foto:'src/img/legado.jpg',alt:'Multidão diante do Lincoln Memorial na Marcha sobre Washington, em 28 de agosto de 1963',cr:'Warren K. Leffler, 1963, Biblioteca do Congresso (EUA), domínio público'}
];

/* Cada estilo entra com um movimento próprio (GSAP): [easing, ponto de partida] */
const FX={base:['power3.out',{y:24,scale:.94}],pop:['back.out(2.4)',{scale:.5,rotate:-8}],mid:['power3.out',{x:-36}],op:['steps(5)',{x:24}],psi:['elastic.out(1,.45)',{y:44,rotate:6}]};
const reduz=()=>matchMedia('(prefers-reduced-motion: reduce)').matches||!window.gsap;
const url=f=>f.includes('/')?f:'https://commons.wikimedia.org/wiki/Special:FilePath/'+encodeURIComponent(f)+'?width=960';
const quadro=n=>'data:image/svg+xml,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect x="150" y="230" width="500" height="140" rx="70" fill="#F4E8C8" stroke="#2A2118" stroke-width="6"/><text x="400" y="290" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="700" fill="#2A2118">Imagem provisória</text><text x="400" y="336" text-anchor="middle" font-family="sans-serif" font-size="24" fill="#2A2118">${n}</text></svg>`);
const falha=(e,f)=>{const im=e.target;if(im.dataset.q)return;im.dataset.q=1;im.src=quadro(f.slice(0,28))};

const burst=Array.from({length:32},(_,k)=>{const r=k%2?36:49,t=Math.PI*k/16;return(50+r*Math.sin(t)).toFixed(1)+','+(50-r*Math.cos(t)).toFixed(1)}).join(' ');
const pent=(x,y,r,a)=>Array.from({length:5},(_,k)=>{const t=(a+72*k)*Math.PI/180;return(x+r*Math.cos(t)).toFixed(1)+','+(y+r*Math.sin(t)).toFixed(1)}).join(' ');
const ang=k=>(-90+72*k)*Math.PI/180;
const bola={c:pent(50,50,16,-90),f:Array.from({length:5},(_,k)=>pent(50+46*Math.cos(ang(k)),50+46*Math.sin(ang(k)),13,ang(k)*180/Math.PI+180)),l:Array.from({length:5},(_,k)=>{const t=ang(k),q=n=>n.toFixed(1);return'M'+q(50+16*Math.cos(t))+' '+q(50+16*Math.sin(t))+'L'+q(50+33*Math.cos(t))+' '+q(50+33*Math.sin(t))}).join('')};
const ledTxt='HELLO, WORLD!   ◆   '.repeat(12);
const {createApp,ref,computed,watch,onMounted}=Vue;
createApp({setup(){
  const ignorar=ref(false),i=ref(0),dir=ref(1),grade=ref(false),s=computed(()=>slides[i.value]);
  const ir=n=>{n=Math.max(0,Math.min(slides.length-1,n));if(n===i.value)return;dir.value=n>i.value?1:-1;i.value=n};
  const prox=()=>ir(i.value+1),ant=()=>ir(i.value-1);

  /* Link por slide: .../index.html#esporte */
  const daHash=()=>{const n=slides.findIndex(x=>x.id===location.hash.slice(1));if(n>=0)ir(n)};
  const pre=n=>{if(slides[n])new Image().src=url(slides[n].foto)};
  watch(i,n=>{if(location.hash.slice(1)!==slides[n].id)location.hash=slides[n].id;pre(n+1);pre(n+2)});

  const ajustar=el=>{
    el=el||document.querySelector('.slide');
    const t=el&&el.querySelector('.texto'),m=el&&el.querySelector('.miolo');
    if(!t||!m)return;
    const H=m.clientHeight*(matchMedia('(max-width:820px)').matches?.58:1);
    let fs=Math.min(1.7,Math.max(1,(innerWidth/1100+innerHeight/700)/2*1.1));
    el.style.setProperty('--fs',fs+'rem');
    while(t.scrollHeight>H+1&&fs>.62){fs-=.04;el.style.setProperty('--fs',fs+'rem')}
  };
  const entrar=(el,done)=>{
    ajustar(el);
    if(reduz())return done();
    const [ease,de]=FX[el.dataset.t];
    gsap.fromTo(el,{opacity:0,x:dir.value*70},{opacity:1,x:0,duration:.45,ease:'power3.out',clearProps:'transform,opacity',onComplete:done});
    gsap.from(el.querySelectorAll('.anim'),{opacity:0,...de,duration:.8,stagger:.1,delay:.12,ease,clearProps:'transform,opacity'});
  };
  const sair=(el,done)=>{
    if(reduz())return done();
    gsap.to(el,{opacity:0,x:-dir.value*50,duration:.25,ease:'power2.in',onComplete:done});
  };

  const tela=()=>document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.();
  const tecla=e=>{
    if(e.altKey||e.ctrlKey||e.metaKey)return;
    const k=e.key;
    if(k==='Escape')grade.value=false;
    else if(k==='g'||k==='G')grade.value=!grade.value;
    else if(k==='f'||k==='F')tela();
    else if(grade.value)return;
    else if(k===' '&&!/^(BUTTON|A)$/.test(e.target.tagName)){e.preventDefault();e.shiftKey?ant():prox()}
    else if(k==='ArrowRight'||k==='PageDown'){e.preventDefault();prox()}
    else if(k==='ArrowLeft'||k==='PageUp'){e.preventDefault();ant()}
    else if(k==='Home')ir(0);
    else if(k==='End')ir(slides.length-1);
    else if(/^[1-9]$/.test(k))ir(+k-1);
  };

  let x0=null,y0=0;
  const ts=e=>{if(e.touches.length!==1){x0=null;return}x0=e.touches[0].clientX;y0=e.touches[0].clientY};
  const te=e=>{
    if(x0===null)return;
    const t=e.changedTouches[0],dx=t.clientX-x0,dy=t.clientY-y0;x0=null;
    if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.5)dx<0?prox():ant();
  };

  onMounted(()=>{document.getElementById('aviso')?.remove();pre(1);pre(2);daHash();addEventListener('hashchange',daHash);addEventListener('keydown',tecla);document.fonts?.ready.then(()=>ajustar());addEventListener('resize',()=>requestAnimationFrame(()=>ajustar()))});
  return{slides,ignorar,i,s,grade,tela,ir,prox,ant,entrar,sair,ts,te,url,falha,burst,bola,ledTxt};
}}).mount('#app');
