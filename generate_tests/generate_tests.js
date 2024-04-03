const fs = require('fs');
const yaml = require('js-yaml');

// Carrega o arquivo Swagger
const swaggerFile = fs.readFileSync('swagger.json', 'utf8');
const swagger = yaml.load(swaggerFile);

function generateFakeData(type) {
    switch (type) {
        case 'boolean':
            return Math.random() < 0.5; // Gera true ou false aleatoriamente
        // Adicione mais casos para outros tipos, como 'string', 'integer', etc.
        default:
            return null;
    }
}

// Função para gerar o código do teste Cypress
function generateTest(endpoint, method, parameters, requestBodyRef) {
    let endpointWithParams = endpoint;
    let queryString = '';
    let data = {};

    // Itera sobre os parâmetros e os adiciona ao endpoint ou à queryString
    parameters.forEach(param => {
        const fakeData = generateFakeData(param.schema.type);
        if (param.in === 'path') {
            endpointWithParams = endpointWithParams.replace(`{${param.name}}`, fakeData);
        } else if (param.in === 'query') {
            queryString += `${param.name}=${fakeData}&`;
        }
    });

    // Gera o corpo da requisição com base na referência do requestBody
    if (requestBodyRef) {
        const requestBodySchema = swagger.components.schemas[requestBodyRef];
        if (requestBodySchema && requestBodySchema.properties) {
            Object.keys(requestBodySchema.properties).forEach(prop => {
                const propType = requestBodySchema.properties[prop].type;
                data[prop] = generateFakeData(propType);
            });
        }
    }

    // Remove o último '&' da queryString
    queryString = queryString.slice(0, -1);

    return `
it('${method.toUpperCase()} ${endpointWithParams}', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "${method.toUpperCase()}",
        url: \`${url}${endpointWithParams}?${queryString}\`,
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: ${JSON.stringify(data)}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});`;
}


// Inicializa a string de saída com o código de teste
let output = '';

// Itera sobre os endpoints no Swagger
for (const [path, methods] of Object.entries(swagger.paths)) {
    for (const [method, details] of Object.entries(methods)) {
        const endpoint = path.replace('/API', '');
        const parameters = details.parameters || [];
        const requestBodyRef = details.requestBody?.content?.['application/json']?.schema?.$ref?.split('/').pop();
        output += generateTest(endpoint, method, parameters, requestBodyRef);
    }
}



// Grava o código de teste em um arquivo
fs.writeFileSync('cypress_tests.js', output);
