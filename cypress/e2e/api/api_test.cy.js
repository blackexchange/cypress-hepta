
describe('Teste de API BFF - Certidões', () => {
    const url = "http://localhost:8080/API";

    
    it('Chamada sem token retorna 401', () => {
       
        return cy.request({
            method: "GET", 
            url:`${url}/Certidoes/true`, 
            failOnStatusCode: false
           }
        ).then((response)=>{
            expect(response.status).to.equal(401);
           
        })
       
    });
    it('POST /Certidoes/Certidoes', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "POST", 
            url: `${url}/Certidoes/Certidoes`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it.only('GET /Certidoes/Certidoes/{incluirTipos}', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Certidoes/Certidoes/`+incluirTipos, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('PUT /Certidoes/Certidoes/{certidaoId}', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "PUT", 
            url: `${url}/Certidoes/Certidoes/{certidaoId}`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('POST /Certidoes/TiposDeCertidao', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "POST", 
            url: `${url}/Certidoes/TiposDeCertidao`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Certidoes/TiposDeCertidao/{certidaoId}/{incluiSecao}', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Certidoes/TiposDeCertidao/{certidaoId}/{incluiSecao}`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Certidoes/TiposDeCertidao/TipoCertidaoPorId/{TipoCertidaoId}/{incluiSecao}', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Certidoes/TiposDeCertidao/TipoCertidaoPorId/{TipoCertidaoId}/{incluiSecao}`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('POST /Certidoes/Aprovadores', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "POST", 
            url: `${url}/Certidoes/Aprovadores`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Certidoes/Aprovadores', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Certidoes/Aprovadores`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('POST /Certidoes/Certidoes/EditarInformacaoComplementar', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "POST", 
            url: `${url}/Certidoes/Certidoes/EditarInformacaoComplementar`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('PUT /Certidoes/Aprovadores/{AprovadorId}', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "PUT", 
            url: `${url}/Certidoes/Aprovadores/{AprovadorId}`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('DELETE /Certidoes/Aprovadores/{AprovadorId}', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "DELETE", 
            url: `${url}/Certidoes/Aprovadores/{AprovadorId}`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('POST /Certidoes/TipoDeArquivo', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "POST", 
            url: `${url}/Certidoes/TipoDeArquivo`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Certidoes/TipoDeArquivo', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Certidoes/TipoDeArquivo`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('DELETE /Certidoes/TipoDeArquivo/{tipoDeArquivoId}', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "DELETE", 
            url: `${url}/Certidoes/TipoDeArquivo/{tipoDeArquivoId}`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('POST /Solicitacoes/Solicitacao', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "POST", 
            url: `${url}/Solicitacoes/Solicitacao`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('PUT /Solicitacoes/Solicitacao/{SolicitacaoId}', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "PUT", 
            url: `${url}/Solicitacoes/Solicitacao/{SolicitacaoId}`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Solicitacoes/ConsultaSolicitacoes', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Solicitacoes/ConsultaSolicitacoes`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Solicitacoes/SolicitacoesPorStatus/{StatusSolicitacao}', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Solicitacoes/SolicitacoesPorStatus/{StatusSolicitacao}`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('POST /Solicitacoes/UploadArquivosSolicitacao', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "POST", 
            url: `${url}/Solicitacoes/UploadArquivosSolicitacao`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('POST /Solicitacoes/SendArqSolicitacao', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "POST", 
            url: `${url}/Solicitacoes/SendArqSolicitacao`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Solicitacoes/SolicitacaoPorId/{solicitacaoId}', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Solicitacoes/SolicitacaoPorId/{solicitacaoId}`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Solicitacoes/SolicitacaoPorART/{numeroart}', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Solicitacoes/SolicitacaoPorART/{numeroart}`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Solicitacoes/ArtPorSolicitacao/{numerosolicitacao}', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Solicitacoes/ArtPorSolicitacao/{numerosolicitacao}`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Solicitacoes/ArquivoPorSolicitacao/{solicitacao}', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Solicitacoes/ArquivoPorSolicitacao/{solicitacao}`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Solicitacoes/ArquivosEdicaoPreviaPorSolicitacao/{solicitacao}', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Solicitacoes/ArquivosEdicaoPreviaPorSolicitacao/{solicitacao}`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('POST /Solicitacoes/SalvarPreviaPorSolicitacao', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "POST", 
            url: `${url}/Solicitacoes/SalvarPreviaPorSolicitacao`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Solicitacoes/ArquivoPorExigencia', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Solicitacoes/ArquivoPorExigencia`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Solicitacoes/DownloadArquivoPorID/{arquivoId}', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Solicitacoes/DownloadArquivoPorID/{arquivoId}`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Solicitacoes/DownloadBoletoPorSolicitacaoID/{solicitacaoId}', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Solicitacoes/DownloadBoletoPorSolicitacaoID/{solicitacaoId}`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Solicitacoes/BuscarARTParaSolicitacao', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Solicitacoes/BuscarARTParaSolicitacao`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Solicitacoes/BuscarSolicitacaoPorStatus', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Solicitacoes/BuscarSolicitacaoPorStatus`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Solicitacoes/CertidaoPorSolicitacao/{solicitacao}', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Solicitacoes/CertidaoPorSolicitacao/{solicitacao}`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('POST /Solicitacoes/ValidarArts/{tipoCertidaoId}', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "POST", 
            url: `${url}/Solicitacoes/ValidarArts/{tipoCertidaoId}`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Solicitacoes/ListarExigenciasPendentes/{solicitacaoId}', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Solicitacoes/ListarExigenciasPendentes/{solicitacaoId}`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Solicitacoes/ValidarAutenticidadeCertidao', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Solicitacoes/ValidarAutenticidadeCertidao`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('POST /Solicitacoes/RegistrarExigencia', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "POST", 
            url: `${url}/Solicitacoes/RegistrarExigencia`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('POST /Solicitacoes/RegistrarRecurso', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "POST", 
            url: `${url}/Solicitacoes/RegistrarRecurso`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('POST /Solicitacoes/RegistrarStatus', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "POST", 
            url: `${url}/Solicitacoes/RegistrarStatus`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('POST /Solicitacoes/ResponderExigencia', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "POST", 
            url: `${url}/Solicitacoes/ResponderExigencia`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('POST /Solicitacoes/ResponderListaExigencias', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "POST", 
            url: `${url}/Solicitacoes/ResponderListaExigencias`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Solicitacoes/ListarTiposOcorrencia', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Solicitacoes/ListarTiposOcorrencia`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Solicitacoes/ListarAcoes', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Solicitacoes/ListarAcoes`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Solicitacoes/BuscarTipoOcorrenciaPorId', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Solicitacoes/BuscarTipoOcorrenciaPorId`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('POST /Solicitacoes/RegistrarOcorrencia/{solicitacaoId}', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "POST", 
            url: `${url}/Solicitacoes/RegistrarOcorrencia/{solicitacaoId}`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Solicitacoes/HistoricoSolicitacao/{solicitacaoId}', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Solicitacoes/HistoricoSolicitacao/{solicitacaoId}`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Solicitacoes/PagamentoSolicitacao/{protocolo}', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Solicitacoes/PagamentoSolicitacao/{protocolo}`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Solicitacoes/ListarAnaliseCertidoesAnalista', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Solicitacoes/ListarAnaliseCertidoesAnalista`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Solicitacoes/ListarAnaliseCertidoesGestor', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Solicitacoes/ListarAnaliseCertidoesGestor`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Solicitacoes/ListarAnalistas', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Solicitacoes/ListarAnalistas`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Solicitacoes/ListarGestores', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Solicitacoes/ListarGestores`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('POST /Solicitacoes/AtribuirSolicitacaoAnalista', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "POST", 
            url: `${url}/Solicitacoes/AtribuirSolicitacaoAnalista`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('POST /Solicitacoes/AtribuirSolicitacaoGestor', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "POST", 
            url: `${url}/Solicitacoes/AtribuirSolicitacaoGestor`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Solicitacoes/ListarStatusSolicitacao', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Solicitacoes/ListarStatusSolicitacao`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Solicitacoes/ListarStatusSolicitacaoPorPermissao', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Solicitacoes/ListarStatusSolicitacaoPorPermissao`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('POST /Solicitacoes/LoginCreaApi', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "POST", 
            url: `${url}/Solicitacoes/LoginCreaApi`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('POST /Solicitacoes/GerarBoleto', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "POST", 
            url: `${url}/Solicitacoes/GerarBoleto`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Solicitacoes/ListarMotivoAtribuicao', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Solicitacoes/ListarMotivoAtribuicao`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Solicitacoes/ListarUnidade', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Solicitacoes/ListarUnidade`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /Solicitacoes/BuscarFuncioarioPorLogin', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/Solicitacoes/BuscarFuncioarioPorLogin`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /CREASP/BuscaContratantesProfissional', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/CREASP/BuscaContratantesProfissional`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /CREASP/ListaStatusARTS', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/CREASP/ListaStatusARTS`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });
    it('GET /CREASP/BuscaARTSContratante/{creasp}', () => {
        const access_token = Cypress.env("access_token");
        return cy.request({
            method: "GET", 
            url: `${url}/CREASP/BuscaARTSContratante/{creasp}`, 
            headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).is.haveOwnProperty('sucess');
        });
    });

});