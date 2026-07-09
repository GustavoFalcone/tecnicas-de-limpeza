function icon(name, size = 28) {
  return `<i data-lucide="${name}" style="width:${size}px;height:${size}px"></i>`;
}

function page(className, content) {
  return `<section class="page ${className}">${content}</section>`;
}

function actionSteps(steps = []) {
  return `<ol class="action-steps">${steps.map((step) => `<li>${step}</li>`).join("")}</ol>`;
}

const hubImages = {
  hero: "https://i.postimg.cc/MKLDT7wb/Chat-GPT-Image-8-de-jul-de-2026-03-48-10.png",
  principal: "https://i.postimg.cc/5NBBj1K8/Chat-GPT-Image-8-de-jul-de-2026-15-19-51.png",
  calculadora: "https://i.postimg.cc/nhPLj1cK/Chat-GPT-Image-8-de-jul-de-2026-03-50-49.png",
  agenda: "https://i.postimg.cc/ncMbjfsN/Chat-GPT-Image-8-de-jul-de-2026-03-51-26.png",
  artes: "https://i.postimg.cc/jSK16VCt/Chat-GPT-Image-8-de-jul-de-2026-03-52-15.png",
  certificado: "https://i.postimg.cc/Sxs6bVv8/Chat-GPT-Image-8-de-jul-de-2026-03-52-57.png"
};

const moduleCards = [
  {
    id: "principal",
    kind: "Produto principal",
    title: "+250 técnicas de limpeza profissional",
    description: "Técnicas práticas para limpar, organizar e finalizar serviços residenciais e comerciais leves.",
    button: "Abrir material principal",
    icon: "sparkles",
    image: "assets/images/cover-premium.png"
  },
  {
    id: "calculadora",
    kind: "Bônus 01",
    title: "Calculadora para saber quanto cobrar pela faxina",
    description: "Uma tabela simples para ajudar você a calcular o valor do serviço sem cobrar no chute.",
    button: "Abrir calculadora",
    icon: "calculator",
    image: "assets/images/module-09-acabamento.png"
  },
  {
    id: "agenda",
    kind: "Bônus 02",
    title: "Agenda da semana para anotar seus clientes",
    description: "Folhas prontas para organizar clientes, horários, valores e observações da semana.",
    button: "Abrir agenda",
    icon: "calendar-days",
    image: "assets/images/module-10-seguranca.png"
  },
  {
    id: "artes",
    kind: "Bônus 03",
    title: "Artes prontas para divulgar sua faxina",
    description: "Modelos visuais para divulgar seus serviços no WhatsApp, Instagram e grupos de bairro.",
    button: "Abrir artes",
    icon: "image",
    image: "assets/images/module-03-banheiros.png"
  },
  {
    id: "certificado",
    kind: "Bônus 04",
    title: "Certificado de conclusão",
    description: "Um certificado bonito para preencher, imprimir ou salvar.",
    button: "Abrir certificado",
    icon: "award",
    image: "assets/images/module-06-pisos-vidros.png"
  }
];

function renderHub() {
  return `
    <section id="hub" class="hub-view active-view">
      <div class="hub-hero">
        <div class="hub-copy">
          <span class="hub-pill">Produto principal + 4 bônus</span>
          <h1>Seu kit de limpeza profissional está pronto</h1>
          <p>Acesse o material principal e os bônus abaixo.</p>
          <div class="hub-actions">
            <button data-open="principal">Abrir +250 técnicas</button>
            <button class="ghost-button" data-scroll-bonus>Ver bônus</button>
          </div>
        </div>
        <div class="hub-mockup">
          <img src="assets/images/cover-premium.png" alt="Kit de limpeza profissional com materiais organizados" />
          <div class="mockup-card">${icon("gift", 22)} 4 bônus incluídos</div>
        </div>
      </div>
      <section id="bonusCards" class="hub-grid">
        ${moduleCards.map((card) => `
          <article class="access-card ${card.id === "principal" ? "featured-access-card" : ""}">
            <div class="access-image"><img src="${card.image}" alt="${card.title}" /></div>
            <div class="access-content">
              <span>${card.kind}</span>
              <div class="access-icon">${icon(card.icon, 32)}</div>
              <h2>${card.title}</h2>
              <p>${card.description}</p>
              <button data-open="${card.id}">${card.button}</button>
            </div>
          </article>
        `).join("")}
      </section>
    </section>
  `;
}

moduleCards.splice(
  0,
  moduleCards.length,
  {
    id: "principal",
    kind: "Produto principal",
    title: "+250 técnicas de limpeza profissional",
    reelTitle: "250 técnicas em um material visual",
    description: "Abra, consulte e grave mostrando os capítulos prontos para usar na rotina.",
    button: "Abrir material principal",
    icon: "sparkles",
    image: hubImages.principal
  },
  {
    id: "calculadora",
    kind: "Bônus 01",
    title: "Calcule quanto cobrar",
    reelTitle: "",
    description: "Visual simples para explicar tempo, gastos e valor final sem confusão.",
    button: "Abrir calculadora",
    icon: "calculator",
    image: hubImages.calculadora
  },
  {
    id: "agenda",
    kind: "Bônus 02",
    title: "Agenda semanal visual",
    reelTitle: "",
    description: "Fácil de mostrar em vídeo: dias, horários, valores e pagamentos.",
    button: "Abrir agenda",
    icon: "calendar-days",
    image: hubImages.agenda
  },
  {
    id: "artes",
    kind: "Bônus 03",
    title: "Artes editáveis de divulgação",
    reelTitle: "",
    description: "Modelos prontos para mostrar, editar e imprimir sem perder a qualidade.",
    button: "Abrir artes",
    icon: "image",
    image: hubImages.artes
  },
  {
    id: "certificado",
    kind: "Bônus 04",
    title: "Certificado final",
    reelTitle: "",
    description: "Um fechamento visual para gravar, preencher, salvar ou imprimir.",
    button: "Abrir certificado",
    icon: "award",
    image: hubImages.certificado
  }
);

function renderChapterBook(content) {
  const spreads = content.modules.map((module) => `
    <div class="chapter-spread" data-spread>
      <article class="book-page left-page" style="--module:${module.color}">
        <span class="chapter-number">${String(module.id).padStart(2, "0")}</span>
        <p class="eyebrow">Capítulo ${String(module.id).padStart(2, "0")}</p>
        <h3>${module.title}</h3>
        <p>${module.intro}</p>
        <div class="chapter-tags">${module.finds.slice(0, 3).map((find) => `<span>${find}</span>`).join("")}</div>
      </article>
      <article class="book-page right-page" style="--module:${module.color}">
        <img src="${module.image}" alt="${module.title}" />
        <strong>25 técnicas práticas</strong>
        <p>Conteúdo direto para consultar antes, durante ou depois da faxina.</p>
      </article>
    </div>
  `).join("");

  return `
    <section class="chapter-book-section" aria-label="Prévia do livro digital">
      <div class="chapter-book-heading">
        <p class="eyebrow">Prévia interativa</p>
        <h2>Folheie o material principal</h2>
        <p>Clique no livro ou na seta para ver os capítulos. No final, o certificado aparece na tela.</p>
      </div>
      <div class="chapter-book-shell">
        <button class="book-nav book-prev" type="button" data-book-prev aria-label="Página anterior">‹</button>
        <button class="interactive-book is-cover" type="button" data-book aria-label="Folhear livro">
          <div class="book-cover-preview" data-book-cover>
            <div>
              <span>+250 técnicas</span>
              <h3>Limpeza profissional</h3>
              <p>Material principal</p>
            </div>
            <img src="${hubImages.principal}" alt="Capa do material +250 técnicas de limpeza profissional" />
          </div>
          <div class="book-spreads" data-book-spreads>${spreads}</div>
          <div class="book-flip-sheet" aria-hidden="true"></div>
        </button>
        <button class="book-nav book-next" type="button" data-book-next aria-label="Próxima página">›</button>
      </div>
      <div class="book-progress"><span data-book-status>Capa</span></div>
      <div class="certificate-popup" data-certificate-popup aria-hidden="true">
        <div class="certificate-popup-card">
          <button type="button" data-close-certificate aria-label="Fechar certificado">×</button>
          <img src="assets/images/certificado-conclusao-final.png" alt="Certificado de conclusão" />
        </div>
      </div>
    </section>
  `;
}

function renderHub(content) {
  return `
    <section id="hub" class="hub-view active-view">
      <div class="hub-hero">
        <div class="hub-copy">
          <h1>Seu kit de limpeza profissional está pronto</h1>
          <p>Acesse o material principal e os bônus abaixo</p>
          <div class="hub-mockup">
            <img src="${hubImages.hero}" alt="Kit de limpeza profissional com material principal e bônus" />
          </div>
          <div class="hub-actions">
            <button data-open="principal">Abrir +250 técnicas</button>
            <button class="ghost-button" data-scroll-bonus>Ver bônus</button>
          </div>
        </div>
      </div>
      <section id="bonusCards" class="hub-grid">
        ${moduleCards.map((card) => `
          <article class="access-card ${card.id === "principal" ? "featured-access-card" : ""}">
            <div class="access-image"><img src="${card.image}" alt="${card.title}" /></div>
            <div class="access-content">
              <span>${card.kind}</span>
              <div class="access-icon">${icon(card.icon, 32)}</div>
              ${card.reelTitle ? `<h2>${card.reelTitle}</h2>` : ""}
              <p>${card.description}</p>
              <button data-open="${card.id}">${card.button}</button>
            </div>
          </article>
        `).join("")}
      </section>
      ${renderChapterBook(content)}
    </section>
  `;
}

function renderIntro(content) {
  const presentationCards = [
    ["clipboard-check", "Técnicas para preparar a limpeza", "Organize materiais, panos, produtos e cuidados antes de começar."],
    ["timer", "Técnicas para limpar mais rápido", "Ganhe ordem sem correr e reduza retrabalho entre ambientes."],
    ["bath", "Técnicas para banheiros", "Cuide de pia, vaso, box, espelho, ralo, metais e piso."],
    ["chef-hat", "Técnicas para cozinha e gordura", "Limpe bancadas, fogão, inox, puxadores e gordura leve com segurança."],
    ["sofa", "Técnicas para áreas comuns", "Deixe quartos, salas, móveis e objetos com aparência organizada."],
    ["sparkles", "Técnicas para pisos e vidros", "Evite marcas, excesso de água, fiapos e manchas de pano."],
    ["construction", "Técnicas para pós-obra leve", "Trabalhe poeira fina e resíduos leves sem danificar superfícies."],
    ["building-2", "Técnicas para escritórios e temporada", "Aplique cuidados simples em locais de circulação e hospedagem."],
    ["badge-check", "Técnicas de acabamento final", "Finalize com brilho, secagem, alinhamento e revisão visual."],
    ["shield-check", "Técnicas de segurança e materiais", "Conserve panos, produtos e acessórios sem misturas perigosas."]
  ];

  return [
    page("cover", `
      <div class="cover-grid">
        <div class="cover-copy">
          <p class="eyebrow">Entregável digital premium</p>
          <h1>${content.title}</h1>
          <p class="subtitle">${content.subtitle}</p>
          <div class="cover-badges">
            <span>250 técnicas</span><span>10 módulos</span><span>Pronto para imprimir</span><span>Uso residencial e comercial leve</span>
          </div>
        </div>
        <div class="cover-visual"><img src="assets/images/cover-premium.png" alt="Materiais de limpeza profissional organizados" /></div>
      </div>
    `),
    page("presentation", `
      <div class="page-heading">${icon("sparkles", 34)}<div><p class="eyebrow">Apresentação</p><h2>O que você recebe neste material</h2></div></div>
      <p class="lead">Este material reúne 250 técnicas práticas para ajudar diaristas, faxineiras, auxiliares e pequenas equipes a limpar com mais ordem, cuidado e acabamento profissional em serviços residenciais e comerciais leves.</p>
      <div class="image-row">${content.modules.slice(0, 4).map((module) => `<figure><img src="${module.image}" alt="${module.title}" /><figcaption>${module.title}</figcaption></figure>`).join("")}</div>
      <div class="feature-grid feature-grid-ten">${presentationCards.map(([iconName, title, description]) => `<article><b>${icon(iconName, 18)}${title}</b><p>${description}</p></article>`).join("")}</div>
      <aside class="soft-note">${content.safetyNote}</aside>
    `),
    page("how-to", `
      <div class="page-heading">${icon("route", 34)}<div><p class="eyebrow">Como usar</p><h2>Quatro passos simples</h2></div></div>
      <figure class="wide-photo"><img src="assets/images/module-10-seguranca.png" alt="Panos, luvas e produtos organizados com segurança" /></figure>
      <div class="steps">
        ${[
          ["01", "Escolha o ambiente que será limpo", "Veja se a técnica será usada em banheiro, cozinha, sala, quarto, piso, vidro, escritório ou pós-obra leve."],
          ["02", "Abra o módulo correspondente", "Vá direto ao módulo que combina com o ambiente ou com o problema de limpeza daquele momento."],
          ["03", "Leia a técnica antes de aplicar", "Entenda a explicação, quando usar e os passos simples antes de começar."],
          ["04", "Use o cuidado indicado", "Siga o cuidado importante para evitar erro, retrabalho, manchas ou dano em superfícies."]
        ].map(([number, title, description]) => `<article><span>${number}</span><h3>${title}</h3><p>${description}</p></article>`).join("")}
      </div>
    `),
    page("summary", `
      <div class="page-heading">${icon("layout-grid", 34)}<div><p class="eyebrow">Sumário visual</p><h2>10 módulos, 25 técnicas em cada</h2></div></div>
      <div class="module-grid">${content.modules.map((module) => `
        <article style="--module:${module.color}">
          <img src="${module.image}" alt="${module.title}" />
          <div class="module-card-top"><span>${String(module.id).padStart(2, "0")}</span>${icon(module.icon, 28)}</div>
          <h3>${module.title}</h3><p>${module.intro}</p><b>25 técnicas</b>
        </article>`).join("")}</div>
    `)
  ].join("");
}

function renderModule(module) {
  const groups = [];
  for (let i = 0; i < module.items.length; i += 5) groups.push(module.items.slice(i, i + 5));
  const opener = page("module-opener", `
    <div class="module-opener-inner" style="--module:${module.color}">
      <div class="module-photo"><img src="${module.image}" alt="${module.title}" /></div>
      <div class="module-opener-copy">
        <div class="module-number">${String(module.id).padStart(2, "0")}</div><p class="eyebrow">Módulo ${String(module.id).padStart(2, "0")}</p>
        <h2>${module.title}</h2><p>${module.intro}</p>
        <div class="finds">${module.finds.map((find) => `<span>${icon("check-circle-2", 15)}${find}</span>`).join("")}</div>
      </div>
    </div>`);
  const itemPages = groups.map((group) => page("items-page", `
    <header class="items-header" style="--module:${module.color}">
      <div>${icon(module.icon, 28)}<span>Módulo ${String(module.id).padStart(2, "0")}</span></div>
      <h2>${module.title}</h2><img src="${module.image}" alt="" />
      <small>Técnicas ${String(group[0].number).padStart(3, "0")} a ${String(group[group.length - 1].number).padStart(3, "0")}</small>
    </header>
    <div class="item-list">${group.map((item) => `
      <article class="item-card technique-card" style="--module:${module.color}">
        <div class="item-meta"><span>Item ${String(item.number).padStart(3, "0")}</span><b>${item.category}</b></div>
        <h3>${item.title}</h3>
        <div class="technique-block"><strong>Explicação simples</strong><p>${item.explanation}</p></div>
        <div class="technique-block compact"><strong>Quando usar</strong><p>${item.when}</p></div>
        <div class="technique-block"><strong>Como aplicar</strong>${actionSteps(item.steps)}</div>
        <aside>${icon("shield-check", 15)}<span><strong>Cuidado importante:</strong> ${item.care}</span></aside>
        <div class="notes-line">Anotações: <span></span></div>
      </article>`).join("")}</div>`)).join("");
  return opener + itemPages;
}

function renderSafety(content) {
  return page("safety", `
    <div class="page-heading">${icon("shield-check", 34)}<div><p class="eyebrow">Uso seguro</p><h2>Orientação final de responsabilidade</h2></div></div>
    <p class="lead">${content.safetyNote}</p>
    <div class="safety-grid">${[
      "Não misture água sanitária com qualquer outro produto.",
      "Não faça misturas químicas caseiras agressivas.",
      "Siga sempre o rótulo e a indicação de superfície.",
      "Teste em pequena área antes de aplicar em material sensível.",
      "Use luvas, ventile o ambiente e evite excesso de produto.",
      "Este material não é limpeza hospitalar, industrial ou especializada."
    ].map((rule) => `<article>${icon("shield-alert", 22)}<p>${rule}</p></article>`).join("")}</div>
    <div class="signature-box"><strong>Cuidados seguros antes de sair</strong>${actionSteps(["Produtos fechados", "Pisos de passagem secos", "Janelas conforme combinado", "Objetos no lugar", "Materiais recolhidos"])}</div>
  `);
}

function renderMainMaterial(content) {
  return `<section id="principal" class="module-view"><div class="book">${renderIntro(content)}${content.modules.map(renderModule).join("")}${renderSafety(content)}</div></section>`;
}

function renderBonusCover(id, title, subtitle, iconName) {
  return page(`bonus-cover ${id}-cover`, `
    <div class="bonus-cover-inner">
      <span class="hub-pill">Bônus</span>
      <div class="bonus-cover-icon">${icon(iconName, 70)}</div>
      <h1>${title}</h1>
      <p>${subtitle}</p>
    </div>
  `);
}

function money(value) {
  return Number(value || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function renderCalculator() {
  const examples = window.bonusContent.calculatorExamples;
  return `<section id="calculadora" class="module-view"><div class="book bonus-book">
    ${renderBonusCover("calculator", "Calculadora para saber quanto cobrar pela faxina", "Uma ferramenta simples para organizar seu valor sem cobrar no chute.", "calculator")}
    ${page("bonus-page calculator-page calculator-screen-page", `
      <div class="page-heading">${icon("calculator", 34)}<div><p class="eyebrow">Como usar</p><h2>Calcule em 3 passos</h2></div></div>
      <div class="steps">${[
        ["01", "Preencha o tempo estimado", "Coloque quantas horas você acha que o serviço vai levar."],
        ["02", "Some transporte e material", "Inclua gastos para chegar ao local e produtos que serão seus."],
        ["03", "Veja o valor sugerido", "Use o resultado como apoio para conversar com o cliente."]
      ].map(([n,t,d]) => `<article><span>${n}</span><h3>${t}</h3><p>${d}</p></article>`).join("")}</div>
      <aside class="soft-note">Use como apoio para organizar seu preço. O valor final pode mudar conforme cidade, tamanho do imóvel, dificuldade e combinado com o cliente.</aside>
      <div class="calculator-widget cleaning-calculator">
        <div class="calc-panel calc-input-panel">
          <div class="calc-section-title"><span>1</span><div><h3>Dados do atendimento</h3><p>Monte um orçamento claro antes de falar com o cliente.</p></div></div>
          <div class="calc-fields">
            <label class="wide">Nome do cliente ou bairro<input id="calc-client" type="text" value="" placeholder="Ex.: Dona Maria - Centro" /></label>
            <label>Tipo de limpeza<select id="calc-type"><option>Faxina simples</option><option>Faxina completa</option><option>Limpeza pesada</option><option>Pós-obra leve</option><option>Escritório / sala comercial</option></select></label>
            <label>Horas estimadas<input id="calc-hours" type="number" min="0" step="0.5" value="4" /></label>
            <label>Valor desejado por hora<input id="calc-hourly" type="number" min="0" step="1" value="30" /></label>
            <label>Transporte<input id="calc-transport" type="number" min="0" step="1" value="15" /></label>
            <label>Produtos usados por você<input id="calc-materials" type="number" min="0" step="1" value="20" /></label>
            <label>Extra por sujeira/dificuldade<input id="calc-extra" type="number" min="0" step="1" value="0" /></label>
            <label>Desconto combinado<input id="calc-discount" type="number" min="0" step="1" value="0" /></label>
          </div>
          <div class="formula-strip" id="result-formula">4h x R$ 30,00 + gastos - desconto</div>
        </div>
        <div class="calc-panel calc-display-panel">
          <div class="calc-ticket-top">
            <span id="calc-summary-type">Faxina simples</span>
            <small id="calc-summary-client">Orçamento rápido</small>
          </div>
          <div class="final-price-card">
            <span>Valor para apresentar</span>
            <strong id="result-final-large">R$ 0,00</strong>
            <small>Valor arredondado para facilitar a conversa.</small>
          </div>
          <div class="result-mini-grid">
            <article><span>Mão de obra</span><strong id="result-base">R$ 0,00</strong></article>
            <article><span>Gastos</span><strong id="result-extra">R$ 0,00</strong></article>
            <article><span>Soma antes de arredondar</span><strong id="result-suggested">R$ 0,00</strong></article>
            <article><span>Final</span><strong id="result-final" class="final-price">R$ 0,00</strong></article>
          </div>
          <div class="calc-reminder">${icon("message-circle", 18)} <span>Use este número como ponto de partida. Ajuste se o local for longe, grande ou mais pesado que o normal.</span></div>
        </div>
      </div>
    `)}
    ${page("bonus-page printable-calculator", `
      <div class="page-heading">${icon("printer", 34)}<div><p class="eyebrow">Versão imprimível</p><h2>Preencha à mão</h2></div></div>
      <div class="print-form-grid">${["Nome do cliente", "Tipo de limpeza", "Horas estimadas", "Valor por hora", "Transporte", "Produtos/materiais", "Extra por dificuldade", "Desconto", "Valor sugerido", "Valor final"].map((field) => `<div><b>${field}</b><span></span></div>`).join("")}</div>
    `)}
    ${page("bonus-page examples-page", `
      <div class="page-heading">${icon("table", 34)}<div><p class="eyebrow">Exemplos simples</p><h2>Como os valores podem aparecer</h2></div></div>
      <div class="example-grid">${examples.map((ex) => {
        const base = ex.hours * ex.hourly;
        const total = base + ex.transport + ex.materials + ex.extra - ex.discount;
        return `<article><h3>${ex.type}</h3><p>${ex.hours}h x ${money(ex.hourly)}</p><strong>${money(Math.ceil(total / 10) * 10)}</strong></article>`;
      }).join("")}</div>
    `)}
  </div></section>`;
}

function renderAgenda() {
  const days = window.bonusContent.weekDays;
  const timeBlocks = ["Manhã", "Tarde", "Fim do dia"];
  return `<section id="agenda" class="module-view"><div class="book bonus-book">
    ${renderBonusCover("agenda", "Agenda da semana para anotar seus clientes", "Organize clientes, horários, valores e observações em páginas bonitas.", "calendar-days")}
    ${page("bonus-page", `<div class="page-heading">${icon("calendar-check", 34)}<div><p class="eyebrow">Como usar</p><h2>Organize em 3 passos</h2></div></div><div class="steps">${[
      ["01", "Anote os clientes da semana", "Coloque cada atendimento no dia certo."],
      ["02", "Marque horários e valores", "Deixe claro o combinado de cada cliente."],
      ["03", "Confira pagamentos", "Veja o que foi pago e o que ficou pendente."]
    ].map(([n,t,d]) => `<article><span>${n}</span><h3>${t}</h3><p>${d}</p></article>`).join("")}</div>`)}
    ${page("bonus-page week-overview", `<div class="page-heading">${icon("layout-grid", 34)}<div><p class="eyebrow">Visão da semana</p><h2>Mapa prático dos 7 dias</h2></div></div>
      <div class="agenda-dashboard">
        <section class="week-focus"><h3>Objetivo da semana</h3><span></span><div><b>Meta de faturamento</b><span></span></div><div><b>Folga / compromisso pessoal</b><span></span></div></section>
        <section class="week-card-grid">${days.map((day) => `<article class="week-day-card"><h3>${day}</h3><label>Cliente principal<span></span></label><label>Horário<span></span></label><label>Valor<span></span></label></article>`).join("")}</section>
        <section class="weekly-stats">${["Atendimentos marcados", "Valores recebidos", "Pendências", "Retornos para chamar"].map((label) => `<article><b>${label}</b><span></span></article>`).join("")}</section>
      </div>`)}
    ${days.map((day) => page("bonus-page agenda-day", `<div class="page-heading">${icon("calendar", 34)}<div><p class="eyebrow">Agenda semanal</p><h2>${day}</h2></div></div>
      <div class="day-planner">
        <section class="day-main">${timeBlocks.map((block, index) => `<article class="appointment-card">
          <header><span>${index + 1}</span><h3>${block}</h3></header>
          <div class="appointment-fields">
            ${["Cliente", "Horário", "Endereço / bairro", "Tipo de limpeza", "Valor combinado", "Forma de pagamento"].map((field) => `<label>${field}<span></span></label>`).join("")}
          </div>
        </article>`).join("")}</section>
        <aside class="day-side">
          <div class="mini-write-box"><h3>Materiais para levar</h3><span></span><span></span><span></span></div>
          <div class="mini-write-box"><h3>Detalhes importantes</h3><span></span><span></span><span></span></div>
          <div class="mini-write-box paid"><h3>Pagamento</h3><label>Pago?</label><span></span><label>Pendente?</label><span></span></div>
        </aside>
      </div>`)).join("")}
    ${page("bonus-page payment-page", `<div class="page-heading">${icon("badge-dollar-sign", 34)}<div><p class="eyebrow">Pagamentos</p><h2>Controle da semana</h2></div></div>
      <div class="payment-board">
        <div class="payment-header">${["Cliente", "Dia", "Valor", "Recebido", "Pendente", "Observação"].map((h) => `<b>${h}</b>`).join("")}</div>
        ${Array.from({length: 10}).map(() => `<div class="payment-row">${Array.from({length: 6}).map(() => "<span></span>").join("")}</div>`).join("")}
      </div>`)}
    ${page("bonus-page next-week", `<div class="page-heading">${icon("clock", 34)}<div><p class="eyebrow">Próxima semana</p><h2>Clientes para chamar depois</h2></div></div>
      <div class="next-week-board">${["Cliente / contato", "Melhor dia", "Tipo de serviço", "Mensagem enviada?", "Observações"].map((title) => `<article><h3>${title}</h3>${Array.from({length: 8}).map(() => "<span></span>").join("")}</article>`).join("")}</div>`)}
  </div></section>`;
}

function renderArts() {
  const chunks = [];
  const templates = window.bonusContent.artTemplates;
  for (let i = 0; i < templates.length; i += 4) chunks.push(templates.slice(i, i + 4));
  return `<section id="artes" class="module-view"><div class="book bonus-book">
    ${renderBonusCover("arts", "Artes prontas para divulgar sua faxina", "Clique nos campos para trocar nome, telefone, bairro ou horários antes de salvar, printar ou imprimir.", "image")}
    ${page("bonus-page arts-page arts-intro", `
      <div class="page-heading">${icon("wand-sparkles", 34)}<div><p class="eyebrow">Artes editáveis</p><h2>Modelos com foto, contato e oferta</h2></div></div>
      <p class="lead">Clique nos textos com linha pontilhada para editar. Depois tire print, imprima ou salve em PDF.</p>
      <div class="arts-instructions">
        ${["Troque nome, telefone, bairro e preço.", "Use a área de foto para mostrar antes/depois, uniforme ou ambiente limpo.", "Imprima em A4 ou salve em PDF para mandar no WhatsApp."].map((text, index) => `<article><span>${index + 1}</span><p>${text}</p></article>`).join("")}
      </div>
    `)}
    ${chunks.map((group, groupIndex) => page("bonus-page arts-page", `
      <div class="page-heading">${icon("image", 34)}<div><p class="eyebrow">Artes editáveis</p><h2>Modelos ${groupIndex * 4 + 1} a ${groupIndex * 4 + group.length}</h2></div></div>
      <div class="art-page-grid poster-grid">${group.map((item, localIndex) => {
        const index = groupIndex * 4 + localIndex;
        const [title, subtitle, field] = Array.isArray(item) ? item : [item.title, item.subtitle, item.field];
        return `<article class="promo-art promo-poster poster-style-${index % 8} art-${index + 1}">
          <div class="promo-topline"><span contenteditable="true">NOME DA PROFISSIONAL</span><b>${icon(index % 2 ? "home" : "sparkles", 20)}</b></div>
          <label class="photo-drop">
            <input type="file" accept="image/*" data-photo-input />
            <span class="photo-preview"><b>Área para foto</b><small>antes/depois, uniforme ou ambiente limpo</small></span>
          </label>
          <div class="promo-copy-block">
            <h3 contenteditable="true">${title}</h3>
            <p contenteditable="true">${subtitle}</p>
          </div>
          <div class="service-pills"><span contenteditable="true">Faxina</span><span contenteditable="true">Banheiro</span><span contenteditable="true">Cozinha</span><span contenteditable="true">Organização</span></div>
          <strong contenteditable="true">${field}</strong>
          <div class="promo-contact"><span contenteditable="true">WhatsApp: (__) _____-____</span><span contenteditable="true">Região: ______</span></div>
        </article>`;
      }).join("")}</div>
    `)).join("")}
  </div></section>`;
}

function renderCertificate() {
  return `<section id="certificado" class="module-view"><div class="book bonus-book">
    ${renderBonusCover("certificate", "Certificado de conclusão", "Um certificado bonito para preencher, imprimir ou salvar.", "award")}
    ${page("certificate-page certificate-image-page", `
      <img class="certificate-final-image" src="assets/images/certificado-conclusao-final.png" alt="Certificado de conclusão +250 técnicas de limpeza profissional" />
    `)}
  </div></section>`;
}

function validateContent(content) {
  const moduleCount = content.modules.length;
  const itemCounts = content.modules.map((module) => module.items.length);
  const totalItems = itemCounts.reduce((sum, count) => sum + count, 0);
  const categories = [...new Set(content.modules.flatMap((module) => module.items.map((item) => item.category)))];
  const warnings = [];
  if (content.title !== "+250 técnicas de limpeza profissional") warnings.push(`Título inválido: ${content.title}`);
  if (moduleCount !== 10) warnings.push(`Quantidade de módulos inválida: ${moduleCount}`);
  if (totalItems !== 250) warnings.push(`Quantidade de técnicas inválida: ${totalItems}`);
  if (itemCounts.some((count) => count !== 25)) warnings.push(`Módulos fora de 25 técnicas: ${itemCounts.join(",")}`);
  if (categories.length !== 1 || categories[0] !== "Técnica") warnings.push(`Categorias inválidas: ${categories.join(",")}`);
  console.group("Validação do Kit Limpeza Profissional");
  console.table(content.modules.map((module) => ({ modulo: module.id, titulo: module.title, tecnicas: module.items.length })));
  console.log("Total de módulos:", moduleCount);
  console.log("Total de técnicas:", totalItems);
  console.log("Categorias usadas:", categories);
  warnings.length ? console.error("Validação encontrou problemas:", warnings) : console.log("Validação concluída: produto principal OK.");
  console.groupEnd();
  return { warnings };
}

function showView(id) {
  document.querySelectorAll(".hub-view, .module-view").forEach((view) => view.classList.remove("active-view"));
  const view = document.getElementById(id === "hub" ? "hub" : id);
  if (view) view.classList.add("active-view");
  document.body.dataset.activeModule = id;
  document.querySelector("#backButton").style.display = id === "hub" ? "none" : "inline-flex";
  document.querySelector("#printButton").style.display = id === "hub" ? "none" : "inline-flex";
  const card = moduleCards.find((item) => item.id === id);
  document.querySelector("#toolbarSubtitle").textContent = id === "hub" ? "Produto principal + 4 bônus" : (card?.title || "+250 técnicas");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setupCalculator() {
  const ids = ["hours", "hourly", "transport", "materials", "extra", "discount"];
  const update = () => {
    const values = Object.fromEntries(ids.map((id) => [id, Number(document.querySelector(`#calc-${id}`)?.value || 0)]));
    const base = values.hours * values.hourly;
    const extras = values.transport + values.materials + values.extra;
    const suggested = base + extras - values.discount;
    const rounded = Math.max(0, Math.ceil(suggested / 10) * 10);
    document.querySelector("#result-base").textContent = money(base);
    document.querySelector("#result-extra").textContent = money(extras);
    document.querySelector("#result-suggested").textContent = money(suggested);
    document.querySelector("#result-final").textContent = money(rounded);
    document.querySelector("#result-final-large").textContent = money(rounded);
    document.querySelector("#calc-summary-type").textContent = document.querySelector("#calc-type")?.value || "Faxina";
    document.querySelector("#calc-summary-client").textContent = document.querySelector("#calc-client")?.value || "Orçamento rápido";
    document.querySelector("#result-formula").textContent = `${values.hours}h x ${money(values.hourly)} + ${money(extras)} - ${money(values.discount)}`;
  };
  ids.forEach((id) => document.querySelector(`#calc-${id}`)?.addEventListener("input", update));
  document.querySelector("#calc-type")?.addEventListener("change", update);
  document.querySelector("#calc-client")?.addEventListener("input", update);
  update();
}

function setupPhotoUploads() {
  document.querySelectorAll("[data-photo-input]").forEach((input) => {
    input.addEventListener("change", () => {
      const file = input.files?.[0];
      const preview = input.closest(".photo-drop")?.querySelector(".photo-preview");
      if (!file || !preview) return;
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        preview.style.backgroundImage = `url("${reader.result}")`;
        preview.classList.add("has-photo");
        preview.innerHTML = "<small>foto adicionada</small>";
      });
      reader.readAsDataURL(file);
    });
  });
}

function setupChapterBook() {
  const book = document.querySelector("[data-book]");
  if (!book) return;

  const spreads = [...book.querySelectorAll("[data-spread]")];
  const status = document.querySelector("[data-book-status]");
  const popup = document.querySelector("[data-certificate-popup]");
  const prev = document.querySelector("[data-book-prev]");
  const next = document.querySelector("[data-book-next]");
  let index = -1;
  let isAnimating = false;

  const render = () => {
    book.classList.toggle("is-cover", index === -1);
    book.classList.toggle("is-open", index >= 0);
    spreads.forEach((spread, spreadIndex) => {
      spread.classList.toggle("active", spreadIndex === index);
      spread.classList.toggle("past", spreadIndex < index);
    });
    if (status) status.textContent = index === -1 ? "Capa" : `Capítulo ${String(index + 1).padStart(2, "0")} de ${String(spreads.length).padStart(2, "0")}`;
    if (prev) prev.disabled = index <= -1;
  };

  const showCertificate = () => {
    if (!popup) return;
    popup.classList.add("is-visible");
    popup.setAttribute("aria-hidden", "false");
  };

  const turn = (direction = 1) => {
    if (isAnimating) return;
    if (direction > 0 && index >= spreads.length - 1) {
      showCertificate();
      return;
    }

    isAnimating = true;
    book.classList.add(direction > 0 ? "turn-next" : "turn-prev");
    index = Math.max(-1, Math.min(spreads.length - 1, index + direction));
    window.setTimeout(() => {
      render();
      book.classList.remove("turn-next", "turn-prev");
      isAnimating = false;
    }, 540);
  };

  book.addEventListener("click", () => turn(1));
  next?.addEventListener("click", () => turn(1));
  prev?.addEventListener("click", () => turn(-1));
  document.querySelector("[data-close-certificate]")?.addEventListener("click", () => {
    popup?.classList.remove("is-visible");
    popup?.setAttribute("aria-hidden", "true");
  });
  popup?.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.classList.remove("is-visible");
      popup.setAttribute("aria-hidden", "true");
    }
  });
  render();
}

function setupHubScrollReveal() {
  const elements = document.querySelectorAll(".hub-hero, .access-card, .chapter-book-section");
  if (!elements.length) return;

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -60px 0px" }
  );

  elements.forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${Math.min(index * 70, 360)}ms`);
    observer.observe(element);
  });
}

function setupPremiumCover() {
  const coverGrid = document.querySelector(".cover .cover-grid");
  if (!coverGrid) return;

  coverGrid.innerHTML = `
    <div class="cover-copy">
      <p class="eyebrow">Guia visual premium</p>
      <h1><span>+250 técnicas de</span><span>limpeza profissional</span></h1>
      <p class="subtitle">Material visual, simples e pronto para consultar.</p>
      <div class="cover-badges">
        <span>250 técnicas</span><span>10 módulos</span><span>Pronto para imprimir</span>
      </div>
      <div class="cover-symbols" aria-hidden="true">
        <svg viewBox="0 0 64 64"><path d="M20 44c12-2 20-10 24-24 4 14 12 22 24 24-12 2-20 10-24 24-4-14-12-22-24-24Z" transform="scale(.72) translate(7 1)"/><circle cx="14" cy="15" r="4"/><circle cx="50" cy="18" r="3"/></svg>
        <svg viewBox="0 0 64 64"><rect x="15" y="10" width="34" height="44" rx="5"/><path d="M23 23h18M23 32h18M23 41h12"/></svg>
        <svg viewBox="0 0 64 64"><path d="M18 22h28l-4 29H22l-4-29Z"/><path d="M24 22v-5a8 8 0 0 1 16 0v5M22 32h20"/></svg>
      </div>
    </div>
  `;
}

function renderApp() {
  const content = window.cleaningContent;
  const validation = validateContent(content);
  document.querySelector("#app").innerHTML = [
    renderHub(content),
    renderMainMaterial(content),
    renderCalculator(),
    renderAgenda(),
    renderArts(),
    renderCertificate()
  ].join("");

  setupPremiumCover();
  document.querySelectorAll("[data-open]").forEach((button) => button.addEventListener("click", () => showView(button.dataset.open)));
  document.querySelector("[data-scroll-bonus]")?.addEventListener("click", () => document.querySelector("#bonusCards").scrollIntoView({ behavior: "smooth" }));
  document.querySelector("#backButton").addEventListener("click", () => showView("hub"));
  document.querySelector("#printButton").addEventListener("click", () => window.print());
  setupCalculator();
  setupPhotoUploads();
  setupChapterBook();
  setupHubScrollReveal();
  if (window.lucide) window.lucide.createIcons();
  document.documentElement.dataset.validated = validation.warnings.length ? "warning" : "ok";
  showView(location.hash?.replace("#", "") || "hub");
}

document.addEventListener("DOMContentLoaded", renderApp);
