const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const result = [];

const propriedade = () => {
    rl.question('Digite as propriedades CSS de sua lista ou SAIR para encerrar:', (resp) => {
        if (resp.toUpperCase() == 'SAIR') {
            console.log('Sua lista de propriedade CSS: \n ' + result.sort().join('\n'));
            return rl.close();
        } else {
            result.push(resp);
        }
        propriedade();

    })
}

propriedade();