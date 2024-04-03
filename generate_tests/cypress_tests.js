describe('Teste de API BFF - Certidões', () => {const url = "http://localhost:8080/API"
it('POST /Certidoes/Certidoes', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "POST", 
        url: `{url}//Certidoes/Certidoes?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Certidoes/Certidoes/true', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Certidoes/Certidoes/true?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('PUT /Certidoes/Certidoes/5529116642115584', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "PUT", 
        url: `{url}//Certidoes/Certidoes/5529116642115584?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('POST /Certidoes/TiposDeCertidao', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "POST", 
        url: `{url}//Certidoes/TiposDeCertidao?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Certidoes/TiposDeCertidao/5580344010997760/false', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Certidoes/TiposDeCertidao/5580344010997760/false?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Certidoes/TiposDeCertidao/TipoCertidaoPorId/1135289254805504/true', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Certidoes/TiposDeCertidao/TipoCertidaoPorId/1135289254805504/true?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('POST /Certidoes/Aprovadores', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "POST", 
        url: `{url}//Certidoes/Aprovadores?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Certidoes/Aprovadores', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Certidoes/Aprovadores?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('POST /Certidoes/Certidoes/EditarInformacaoComplementar', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "POST", 
        url: `{url}//Certidoes/Certidoes/EditarInformacaoComplementar?SolicitacaoId=2746275392913408&InformacoesComplementares=tristis`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('PUT /Certidoes/Aprovadores/385616120381440', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "PUT", 
        url: `{url}//Certidoes/Aprovadores/385616120381440?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('DELETE /Certidoes/Aprovadores/2492621318520832', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "DELETE", 
        url: `{url}//Certidoes/Aprovadores/2492621318520832?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('POST /Certidoes/TipoDeArquivo', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "POST", 
        url: `{url}//Certidoes/TipoDeArquivo?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Certidoes/TipoDeArquivo', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Certidoes/TipoDeArquivo?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('DELETE /Certidoes/TipoDeArquivo/7792998309953536', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "DELETE", 
        url: `{url}//Certidoes/TipoDeArquivo/7792998309953536?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('POST /Solicitacoes/Solicitacao', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "POST", 
        url: `{url}//Solicitacoes/Solicitacao?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('PUT /Solicitacoes/Solicitacao/1424814248034304', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "PUT", 
        url: `{url}//Solicitacoes/Solicitacao/1424814248034304?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/ConsultaSolicitacoes', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Solicitacoes/ConsultaSolicitacoes?statusSolicitacao=damno&certidaoId=3599826625232896&tipoCertidaoId=4908834839592960`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/SolicitacoesPorStatus/crinis', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Solicitacoes/SolicitacoesPorStatus/crinis?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('POST /Solicitacoes/UploadArquivosSolicitacao', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "POST", 
        url: `{url}//Solicitacoes/UploadArquivosSolicitacao?solicitacaoId=2244978753404928&tipoDeArquivoId=7261875418955776`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('POST /Solicitacoes/SendArqSolicitacao', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "POST", 
        url: `{url}//Solicitacoes/SendArqSolicitacao?solicitacaoId=5001353673834496&tipoDeArquivoId=799901464133632&nomeArquivo=true`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/SolicitacaoPorId/8950171125678080', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Solicitacoes/SolicitacaoPorId/8950171125678080?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/SolicitacaoPorART/pel', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Solicitacoes/SolicitacaoPorART/pel?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/ArtPorSolicitacao/8361753339494400', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Solicitacoes/ArtPorSolicitacao/8361753339494400?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/ArquivoPorSolicitacao/arbor', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Solicitacoes/ArquivoPorSolicitacao/arbor?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/ArquivosEdicaoPreviaPorSolicitacao/soluta', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Solicitacoes/ArquivosEdicaoPreviaPorSolicitacao/soluta?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('POST /Solicitacoes/SalvarPreviaPorSolicitacao', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "POST", 
        url: `{url}//Solicitacoes/SalvarPreviaPorSolicitacao?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/ArquivoPorExigencia', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Solicitacoes/ArquivoPorExigencia?exigenciaId=vel`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/DownloadArquivoPorID/6104520981479424', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Solicitacoes/DownloadArquivoPorID/6104520981479424?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/DownloadBoletoPorSolicitacaoID/3259493177622528', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Solicitacoes/DownloadBoletoPorSolicitacaoID/3259493177622528?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/BuscarARTParaSolicitacao', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Solicitacoes/BuscarARTParaSolicitacao?numeroART=subito&numeroCreaProfissional=calamitas&tipoAcervoTecnico=3756446495801344&dataInicio=sapiente&dataFim=tui&pagina=4792736798474240&limite=5421056221249536`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/BuscarSolicitacaoPorStatus', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Solicitacoes/BuscarSolicitacaoPorStatus?statusSolicitacao=capitulus&numeroCreaProfissional=capto&certidao=3945552771284992&tipoCertidao=6628214640214016&Protocolo=illo&NumeroCertidao=victoria&DataEmissaoDe=cohibeo&DataEmissaoAte=advenio&pagina=8735830891823104&limite=6006235109261312&campoOrdenacaoStr=delinquo`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/CertidaoPorSolicitacao/2752060053258240', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Solicitacoes/CertidaoPorSolicitacao/2752060053258240?tipoAcervoTecnico=6442791013974016&rascunho=false`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('POST /Solicitacoes/ValidarArts/8694290259640320', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "POST", 
        url: `{url}//Solicitacoes/ValidarArts/8694290259640320?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/ListarExigenciasPendentes/3083863683235840', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Solicitacoes/ListarExigenciasPendentes/3083863683235840?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/ValidarAutenticidadeCertidao', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Solicitacoes/ValidarAutenticidadeCertidao?numeroCertidao=sono&codigoAutenticidade=deserunt`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('POST /Solicitacoes/RegistrarExigencia', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "POST", 
        url: `{url}//Solicitacoes/RegistrarExigencia?solicitacaoId=4588919144316928&descricao=patrocinor&tipoArquivoId=4005049713819648`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('POST /Solicitacoes/RegistrarRecurso', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "POST", 
        url: `{url}//Solicitacoes/RegistrarRecurso?solicitacaoId=970383381495808`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('POST /Solicitacoes/RegistrarStatus', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "POST", 
        url: `{url}//Solicitacoes/RegistrarStatus?solicitacaoId=7081057484537856&tipoOcorrenciaId=1389756585869312&descricao=compono&tipoArquivoId=curis`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('POST /Solicitacoes/ResponderExigencia', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "POST", 
        url: `{url}//Solicitacoes/ResponderExigencia?exigenciaId=3321512547319808`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('POST /Solicitacoes/ResponderListaExigencias', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "POST", 
        url: `{url}//Solicitacoes/ResponderListaExigencias?solicitacaoId=2561158619856896`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/ListarTiposOcorrencia', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Solicitacoes/ListarTiposOcorrencia?funcionarioId=2741974769598464&pId=6864761071337472&descricaoSolicitacaoStatus=abundans`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/ListarAcoes', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Solicitacoes/ListarAcoes?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/BuscarTipoOcorrenciaPorId', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Solicitacoes/BuscarTipoOcorrenciaPorId?tipoOcorrencia=8901157837602816`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('POST /Solicitacoes/RegistrarOcorrencia/5761960614297600', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "POST", 
        url: `{url}//Solicitacoes/RegistrarOcorrencia/5761960614297600?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/HistoricoSolicitacao/4793259901583360', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Solicitacoes/HistoricoSolicitacao/4793259901583360?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/PagamentoSolicitacao/commemoro', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Solicitacoes/PagamentoSolicitacao/commemoro?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/ListarAnaliseCertidoesAnalista', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Solicitacoes/ListarAnaliseCertidoesAnalista?protocolo=vomica&numeroCreaProfissional=quibusdam&certidaoId=4629937138958336&tipoCertidaoId=5330567270760448&statusId=4991137097973760&solicitante=suscipit&dataEmissaoDe=vesper&dataEmissaoPara=advoco&usuarioAnalista=censura&pagina=3119708410740736&limite=6429343781748736&campoOrdenacaoStr=amet`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/ListarAnaliseCertidoesGestor', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Solicitacoes/ListarAnaliseCertidoesGestor?protocolo=cuius&numeroCreaProfissional=cognomen&certidaoId=9831370981376&tipoCertidaoId=4883401257517056&statusId=5891299374792704&solicitante=coepi&dataEmissaoDe=termes&dataEmissaoPara=urbs&usuarioAnalista=chirographum&usuarioGestor=stips&unidadeId=6933018771980288&pagina=5974529492910080&limite=3998574301937664&campoOrdenacaoStr=colligo`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/ListarAnalistas', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Solicitacoes/ListarAnalistas?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/ListarGestores', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Solicitacoes/ListarGestores?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('POST /Solicitacoes/AtribuirSolicitacaoAnalista', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "POST", 
        url: `{url}//Solicitacoes/AtribuirSolicitacaoAnalista?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('POST /Solicitacoes/AtribuirSolicitacaoGestor', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "POST", 
        url: `{url}//Solicitacoes/AtribuirSolicitacaoGestor?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/ListarStatusSolicitacao', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Solicitacoes/ListarStatusSolicitacao?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/ListarStatusSolicitacaoPorPermissao', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Solicitacoes/ListarStatusSolicitacaoPorPermissao?pId=2487946991108096`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('POST /Solicitacoes/LoginCreaApi', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "POST", 
        url: `{url}//Solicitacoes/LoginCreaApi?userId=torrens&password=qui`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('POST /Solicitacoes/GerarBoleto', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "POST", 
        url: `{url}//Solicitacoes/GerarBoleto?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/ListarMotivoAtribuicao', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Solicitacoes/ListarMotivoAtribuicao?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/ListarUnidade', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Solicitacoes/ListarUnidade?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/BuscarFuncioarioPorLogin', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//Solicitacoes/BuscarFuncioarioPorLogin?loginFuncionario=minima`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /CREASP/BuscaContratantesProfissional', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//CREASP/BuscaContratantesProfissional?creasp=victoria&periodoCertificarDe=teres&periodoCertificarAte=utilis`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /CREASP/ListaStatusARTS', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//CREASP/ListaStatusARTS?`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /CREASP/BuscaARTSContratante/tutis', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: `{url}//CREASP/BuscaARTSContratante/tutis?cpfcnpj=rerum&tipoCertidao=thorax&dataInicio=arbustum&dataFim=tenuis&pagina=8041273881526272&limite=4872301281542144`, 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});});