let clients = [];

// clientMockToTest = [
//     {
//         code: 1,
//         height: 1.59,
//         weight: 62
//     },
//     {
//         code: 2,
//         height: 1.79,
//         weight: 100
//     },
//     {
//         code: 3,
//         height: 1.55,
//         weight: 67,
//     }
// ]

// clients = clientMockToTest;

while(window.confirm('Deseja cadastrar um novo cliente?')) {
    let code = parseInt(window.prompt('Digite o código do cliente'));
    let height = parseFloat(window.prompt('Digite a altura do seu cliente'));
    let weight = parseFloat(window.prompt('Digite o peso do seu cliente'));

    clients.push({code, height, weight});
}

console.log(clients[0])

let greaterHeight = clients[0];
let lowerHeight = clients[0];

let greaterWeight = clients[0];
let lowerWeight = clients[0];

let totalWeight = 0;
let totalHeight = 0;


clients.forEach(client => {
    if (client.height > greaterHeight.height)
        greaterHeight = client;

    if (client.height < lowerHeight.height)
        lowerHeight = client;

    if (client.weight > greaterWeight.weight)
        greaterWeight = client;

    if (client.weight < lowerWeight.weight)
        lowerWeight = client;

    totalHeight += client.height;
    totalWeight += client.weight;
});

console.log({ clients, greaterWeight, greaterHeight, lowerWeight, lowerHeight })

console.log(`
    Média de peso dos clientes = ${(totalWeight / clients.length).toFixed(2)}kg
    Média de altura dos clientes = ${(totalHeight / clients.length).toFixed(2)}m
    

    Cliente mais pesado - Código: ${greaterWeight.code} / Peso: ${greaterWeight.weight}
    Cliente mais magro - Código: ${lowerWeight.code} / Peso: ${lowerWeight.weight}

    
    Cliente mais alto - Código: ${greaterHeight.code} / Altura: ${greaterHeight.height}
    Cliente mais baixo - Código: ${lowerHeight.code} / Altura: ${lowerHeight.height}
`);

if (window.confirm('Deseja calcular novamente?'))
    location.ureload()
else
    location.href = 'https://www.tuasaude.com/calculadora/imc/ '

