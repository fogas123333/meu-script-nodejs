//===== IMPORTANDO MÓDULOS =====
// Linha 1:importar o módulo 'os' (Operating System)
// Este módulo nos dá acesso a informações sobre o processo Node.js atual const process = require('os');
const os = require('os')

// Linha 2: Importar o módulo 'process'
// Este módulo nos dá informações sobre o processo Node.js atual const process = require('process')

// ===== COLETANDO INFORMAÇÕES =====

// Linha 3:Descobrir qual sistema operacional está rodando
// os.plataform() retorna: 'win32' (windows), 'darwin' (Mac), 'Linux' (Linux)
const sistemaOperacional = os.platform();

// Linha 4: Converter o nome técnico para algo mais amigável
let nomeSistema;
if (sistemaOperacional === 'win32') {
    nomeSistema = 'Windows';
} else if (sistemaOperacional === 'darwin'){
    nomeSistema = 'macOs';
} else if (sistemaOperacional === 'Linux'){
    nomeSistema = "Linux"
} else {
    nomeSistema = 'Sistema Desconhecido'
}

const memoriaBytes = os.totalmem();
const memoriaGB = (memoriaBytes / (1024 *1024* 1024)).toFixed(2);

const numeroCPUS = os.cpus().lenght;

const tempoLigadoSegundos = os.uptime();
const horas = Math.floor(tempoLigadoSegundos / 3600);
const minutos = Math.floor ((tempoLigadoSegundos % 3600) / 60);

const nomeUsuario = os.userInfo().username;



console.log('💻 Sistema Operacional: ', nomeSistema);
console.log('🧠 Memória RAM total: ', memoriaGB, 'GB');
console.log('⚡ Processadores (CPUS):', numeroCPUS);
console.log('⏰ Tempo Ligado:', horas, 'horas,', minutos, 'minutos');
console.log('👤 Usuário: ', nomeUsuario);

console.log('\n ✅ Análise concluída com sucesso!');