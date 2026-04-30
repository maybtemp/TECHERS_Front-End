 // Breve descrição das mecânicas para zerar o jogo (derrotar o Ender Dragon) na versão 1.21
// Breve descrição de 10 mobs do Minecraft (comportamento, habitat e características)
const dataInfo = [
    "Criatura hostil verde que explode silenciosamente ao se aproximar do jogador, destruindo o ambiente. Não pega fogo durante o dia e teme gatos. Quando atingido por um raio, torna-se um Creeper Carregado, com explosão mais poderosa .",
    "Monstro hostil esquelético que ataca o jogador com arco e flecha à distância. Anda lentamente e pega fogo sob a luz do sol, a menos que esteja na água ou em áreas sombreadas .",
    "Aranha hostil que se torna neutra durante o dia (em luz forte). Pode escalar paredes, saltar longas distâncias e enxergar o jogador através de obstáculos .",
    "Versão menor e venenosa da aranha, encontrada apenas em minas abandonadas, surgindo de geradores de monstros. Seu ataque causa envenenamento ao jogador (exceto na dificuldade Fácil) .",
    "Criatura hostil do Nether que voa e dispara bolas de fogo explosivas à distância. Suas bolas podem ser rebatidas de volta contra ele. É imune ao fogo e à lava .",
    "Criatura hostil do Nether encontrada em fortalezas, feita de material incandescente. Dispara bolas de fogo em trio e é imune ao fogo. Drota Varas Incandescentes, essenciais para avançar no jogo .",
    "Criatura neutra e alta do Fim que se teletransporta. Torna-se hostil apenas se o jogador olhar diretamente para seus olhos ou atacá-lo. Tem medo de água e pode carregar blocos .",
    "Criatura hostil que habita oceanos e protege Monumentos Oceânicos. Ataca disparando um laser que se carrega para causar dano, e pode causar o efeito de Fadiga da Mineração .",
    "Criatura hostil cúbica e gelatinosa que se divide em versões menores ao ser derrotada. Encontrada em pântanos e cavernas em certas profundidades. Sua versão pequena não causa dano ao jogador .",
    "Criatura hostil do Nether semelhante a um cubo de magma saltitante. Imune ao fogo e à lava, divide-se em cubos menores quando derrotado. Encontrado em toda a dimensão do Nether ."
];

// Nome dos mobs correspondentes a cada descrição no dataInfo
const headings = [
    "Creeper",
    "Esqueleto",
    "Aranha",
    "Aranha das Cavernas",
    "Ghast",
    "Blaze",
    "Enderman",
    "Guardião",
    "Slime",
    "Cubo de Magma"
];

const imgSrc = ['VillagerFace.webp', 'zombieFace.webp', 
    'sBlazeface.webp', 'EnderdragonFace.webp']

    const imgCard = document.getElementsByClassName('img-card')
    const titulo = document.getElementsByClassName('titulo')
    const info = document.getElementsByClassName('info')

    for(let i = 0; i< 10; i++){
        imgCard[1].setAttribute("src", imgSrc[i])
        titulo[1].textContent = headings[i]
        info[i].textContent = dataInfo[i]
    }

// Nota: A versão 1.21 introduziu a Câmara de Julgamento (Trial Chambers), a Maça, o vento, o Breeze, novos minérios, blocos de cobre e tufo, novos efeitos de poção e encantamentos, mas essas adições são paralelas à jornada principal de zerar o jogo, que continua focada em derrotar o Ender Dragon [citation:1][citation:6].