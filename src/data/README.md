# Conteúdos da página pessoal

Cada item adicionado às listas aparece automaticamente na página inicial.
Conteúdos e softwares começam vazios, sem publicações ou aplicações fictícias.

## Resumos e conteúdos — contents.json

```json
[
  {
    "id": "identificador-unico",
    "title": "Título do seu resumo",
    "type": "Resumo",
    "date": "Novembro de 2026",
    "description": "Uma breve apresentação do material.",
    "url": "/materiais/seu-resumo.pdf"
  }
]
```

O link pode apontar para um arquivo em `public/materiais/` ou para uma página externa.

## Participações — events.json

```json
[
  {
    "id": "identificador-unico",
    "title": "Nome do evento ou congresso",
    "date": "Novembro de 2026",
    "location": "Cidade, estado",
    "participation": "Ouvinte, apresentação de pôster, palestra etc.",
    "description": "Conte o que você apresentou, acompanhou ou aprendeu.",
    "photos": [
      { "src": "/events/foto.jpg", "alt": "Descrição da foto", "caption": "Legenda opcional" }
    ],
    "posterUrl": "/events/poster.pdf",
    "posterPreview": "/events/poster-preview.webp",
    "url": "https://endereco-do-evento.example",
    "linkLabel": "Sobre o evento"
  }
]
```

`workTitle`, `location`, `photos`, `posterUrl`, `posterPreview`, `photoNote`, `mediaNote`, `url` e `linkLabel` são opcionais. Fotos e pôsteres locais ficam em
`public/events/`. Cada participação tem uma galeria com miniaturas e uma prévia do pôster em PDF,
com link para abrir o arquivo. Sem arquivos, aparecem espaços reservados. As datas são textos para permitir tanto um dia quanto um período.

Cada participação vira um slide. Com duas ou mais, surgem os pontos de navegação e a
troca automática a cada seis segundos, retornando ao início depois do último slide.
A passagem pausa durante leitura com o mouse ou teclado, com a aba em segundo plano,
ou ao usar o botão de pausa. A preferência de movimento reduzido desliga o avanço automático.


## Softwares — softwares.json

```json
[
  {
    "id": "identificador-unico",
    "name": "Nome do software",
    "description": "O que o software faz e para quem ele é útil.",
    "icon": "/softwares/icone.svg",
    "url": "https://endereco-do-software.example"
  }
]
```

Cada software aparece em um card com ícone, nome e descrição. `icon` e `url` são
opcionais: sem imagem, o card usa um ícone padrão; sem endereço, não exibe link.
Ícones locais ficam em `public/softwares/` (SVG, PNG ou WebP). O endereço pode
apontar para a página do software ou para o repositório. A grade se adapta ao celular.

`posterPreview` usa uma imagem da primeira página do PDF e evita carregar o documento inteiro no carrossel. `workTitle` registra o título do trabalho. `photoNote` explica a ausência de fotos quando necessário. Para participações futuras, `mediaNote` substitui os espaços de mídia por uma nota. Os dois trabalhos do CONIC têm registros independentes.
