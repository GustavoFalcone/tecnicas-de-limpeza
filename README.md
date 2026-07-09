# +250 técnicas de limpeza profissional

Entregável digital em HTML/CSS/JS com **10 módulos**, **250 técnicas práticas** para limpeza residencial e comercial leve e **4 bônus** dentro de uma página inicial de módulos.

## Como rodar localmente

Na pasta do projeto, use:

```bash
npm run dev
```

Depois abra:

```text
http://127.0.0.1:8097
```

Também é possível abrir `index.html` diretamente no navegador.

## Experiência inicial

Ao abrir o link, a primeira tela mostra uma vitrine com:

- produto principal: `+250 técnicas de limpeza profissional`;
- bônus 01: calculadora para saber quanto cobrar pela faxina;
- bônus 02: agenda da semana para anotar clientes;
- bônus 03: artes prontas para divulgar faxina;
- bônus 04: certificado de conclusão.

Cada card abre um módulo separado. Dentro de cada módulo existe botão para voltar e botão para imprimir/salvar em PDF.

## Como imprimir ou salvar em PDF

1. Abra o módulo desejado.
2. Clique em **Imprimir / Salvar em PDF** no topo da tela.
3. Escolha a impressora ou a opção **Salvar como PDF**.
4. Use papel **A4** e mantenha as cores de fundo ativadas quando o navegador oferecer essa opção.

Na impressão, a navegação é escondida e apenas o módulo ativo fica visível.

## Estrutura

```text
kit-limpeza-profissional/
  index.html
  styles.css
  script.js
  server.js
  package.json
  data/
    conteudo.js
    bonus.js
  assets/
    images/
      cover-premium.png
      module-01-preparacao.png
      module-02-ordem.png
      module-03-banheiros.png
      module-04-cozinha.png
      module-05-quartos-salas.png
      module-06-pisos-vidros.png
      module-07-pos-obra.png
      module-08-comercial-temporada.png
      module-09-acabamento.png
      module-10-seguranca.png
```

## Onde editar as técnicas

Edite `data/conteudo.js`.

Cada módulo deve manter 25 técnicas. Cada técnica tem:

- número;
- categoria `Técnica`;
- título;
- explicação simples;
- quando usar;
- como aplicar;
- cuidado importante.

## Onde trocar as imagens

As imagens raster usadas no material ficam em `assets/images/`.

- Capa: `assets/images/cover-premium.png`
- Aberturas e cards dos módulos: `assets/images/module-01-preparacao.png` até `assets/images/module-10-seguranca.png`

O CSS usa molduras com proporção fixa e `object-fit: contain` nos pontos principais para evitar imagem cortada ou deformada no PDF.

## Como validar as 250 técnicas

Abra o material no navegador e veja o console. O arquivo `script.js` valida:

- título correto;
- 10 módulos;
- 250 técnicas;
- 25 técnicas por módulo;
- somente a categoria `Técnica`;
- ausência de termos antigos da oferta.

## Bônus

Os bônus ficam separados das 250 técnicas e são renderizados por `script.js` usando dados de `data/bonus.js`.

- A calculadora possui campos interativos e resultado automático.
- A agenda possui páginas imprimíveis para os 7 dias da semana.
- As artes possuem textos editáveis com `contenteditable`.
- O certificado possui campos editáveis para nome, data e assinatura.
