describe('Teste de API BFF - Certidões', () => {const url = "http://localhost:8080/API"
it('POST /Certidoes/Certidoes', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "POST", 
        url: url+ "/Certidoes/Certidoes?", 
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
        url: url+ "/Certidoes/Certidoes/true?", 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('PUT /Certidoes/Certidoes/9572', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "PUT", 
        url: url+ "/Certidoes/Certidoes/9572?", 
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
        url: url+ "/Certidoes/TiposDeCertidao?", 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Certidoes/TiposDeCertidao/7202/true', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: url+ "/Certidoes/TiposDeCertidao/7202/true?", 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Certidoes/TiposDeCertidao/TipoCertidaoPorId/9456/true', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: url+ "/Certidoes/TiposDeCertidao/TipoCertidaoPorId/9456/true?", 
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
        url: url+ "/Certidoes/Aprovadores?", 
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
        url: url+ "/Certidoes/Aprovadores?", 
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
        url: url+ "/Certidoes/Certidoes/EditarInformacaoComplementar?SolicitacaoId=6512&InformacoesComplementares=admoneo", 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('PUT /Certidoes/Aprovadores/4008', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "PUT", 
        url: url+ "/Certidoes/Aprovadores/4008?", 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('DELETE /Certidoes/Aprovadores/8765', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "DELETE", 
        url: url+ "/Certidoes/Aprovadores/8765?", 
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
        url: url+ "/Certidoes/TipoDeArquivo?", 
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
        url: url+ "/Certidoes/TipoDeArquivo?", 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('DELETE /Certidoes/TipoDeArquivo/8390', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "DELETE", 
        url: url+ "/Certidoes/TipoDeArquivo/8390?", 
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
        url: url+ "/Solicitacoes/Solicitacao?", 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('PUT /Solicitacoes/Solicitacao/9701', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "PUT", 
        url: url+ "/Solicitacoes/Solicitacao/9701?", 
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
        url: url+ "/Solicitacoes/ConsultaSolicitacoes?statusSolicitacao=custodia&certidaoId=1192&tipoCertidaoId=8920", 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/SolicitacoesPorStatus/conscendo', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: url+ "/Solicitacoes/SolicitacoesPorStatus/conscendo?", 
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
        url: url+ "/Solicitacoes/UploadArquivosSolicitacao?solicitacaoId=8860&tipoDeArquivoId=5819", 
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
        url: url+ "/Solicitacoes/SendArqSolicitacao?solicitacaoId=1799&tipoDeArquivoId=2799&nomeArquivo=true", 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/SolicitacaoPorId/2895', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: url+ "/Solicitacoes/SolicitacaoPorId/2895?", 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/SolicitacaoPorART/repellat', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: url+ "/Solicitacoes/SolicitacaoPorART/repellat?", 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/ArtPorSolicitacao/385', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: url+ "/Solicitacoes/ArtPorSolicitacao/385?", 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/ArquivoPorSolicitacao/culpo', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: url+ "/Solicitacoes/ArquivoPorSolicitacao/culpo?", 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/ArquivosEdicaoPreviaPorSolicitacao/constans', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: url+ "/Solicitacoes/ArquivosEdicaoPreviaPorSolicitacao/constans?", 
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
        url: url+ "/Solicitacoes/SalvarPreviaPorSolicitacao?", 
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
        url: url+ "/Solicitacoes/ArquivoPorExigencia?exigenciaId=collum", 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/DownloadArquivoPorID/2785', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: url+ "/Solicitacoes/DownloadArquivoPorID/2785?", 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/DownloadBoletoPorSolicitacaoID/4205', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: url+ "/Solicitacoes/DownloadBoletoPorSolicitacaoID/4205?", 
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
        url: url+ "/Solicitacoes/BuscarARTParaSolicitacao?numeroART=vigor&numeroCreaProfissional=vestigium&tipoAcervoTecnico=6550&dataInicio=sordeo&dataFim=calamitas&pagina=1819&limite=3984", 
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
        url: url+ "/Solicitacoes/BuscarSolicitacaoPorStatus?statusSolicitacao=commemoro&numeroCreaProfissional=atrocitas&certidao=7117&tipoCertidao=9218&Protocolo=vestrum&NumeroCertidao=voro&DataEmissaoDe=aetas&DataEmissaoAte=alii&pagina=782&limite=2124&campoOrdenacaoStr=iste", 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/CertidaoPorSolicitacao/293', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: url+ "/Solicitacoes/CertidaoPorSolicitacao/293?tipoAcervoTecnico=4503&rascunho=false", 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('POST /Solicitacoes/ValidarArts/5756', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "POST", 
        url: url+ "/Solicitacoes/ValidarArts/5756?", 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/ListarExigenciasPendentes/5595', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: url+ "/Solicitacoes/ListarExigenciasPendentes/5595?", 
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
        url: url+ "/Solicitacoes/ValidarAutenticidadeCertidao?numeroCertidao=causa&codigoAutenticidade=tandem", 
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
        url: url+ "/Solicitacoes/RegistrarExigencia?solicitacaoId=9939&descricao=voluptate&tipoArquivoId=2626", 
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
        url: url+ "/Solicitacoes/RegistrarRecurso?solicitacaoId=4951", 
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
        url: url+ "/Solicitacoes/RegistrarStatus?solicitacaoId=9588&tipoOcorrenciaId=8249&descricao=cinis&tipoArquivoId=credo", 
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
        url: url+ "/Solicitacoes/ResponderExigencia?exigenciaId=109", 
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
        url: url+ "/Solicitacoes/ResponderListaExigencias?solicitacaoId=8628", 
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
        url: url+ "/Solicitacoes/ListarTiposOcorrencia?funcionarioId=4537&pId=152&descricaoSolicitacaoStatus=administratio", 
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
        url: url+ "/Solicitacoes/ListarAcoes?", 
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
        url: url+ "/Solicitacoes/BuscarTipoOcorrenciaPorId?tipoOcorrencia=8730", 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('POST /Solicitacoes/RegistrarOcorrencia/511', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "POST", 
        url: url+ "/Solicitacoes/RegistrarOcorrencia/511?", 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/HistoricoSolicitacao/3784', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: url+ "/Solicitacoes/HistoricoSolicitacao/3784?", 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /Solicitacoes/PagamentoSolicitacao/viriliter', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: url+ "/Solicitacoes/PagamentoSolicitacao/viriliter?", 
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
        url: url+ "/Solicitacoes/ListarAnaliseCertidoesAnalista?protocolo=clam&numeroCreaProfissional=ventosus&certidaoId=934&tipoCertidaoId=6479&statusId=1378&solicitante=tubineus&dataEmissaoDe=animus&dataEmissaoPara=calamitas&usuarioAnalista=maxime&pagina=3041&limite=827&campoOrdenacaoStr=tardus", 
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
        url: url+ "/Solicitacoes/ListarAnaliseCertidoesGestor?protocolo=velum&numeroCreaProfissional=ventito&certidaoId=9250&tipoCertidaoId=9097&statusId=5470&solicitante=summa&dataEmissaoDe=thesis&dataEmissaoPara=summisse&usuarioAnalista=ater&usuarioGestor=eos&unidadeId=1744&pagina=576&limite=5290&campoOrdenacaoStr=vesica", 
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
        url: url+ "/Solicitacoes/ListarAnalistas?", 
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
        url: url+ "/Solicitacoes/ListarGestores?", 
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
        url: url+ "/Solicitacoes/AtribuirSolicitacaoAnalista?", 
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
        url: url+ "/Solicitacoes/AtribuirSolicitacaoGestor?", 
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
        url: url+ "/Solicitacoes/ListarStatusSolicitacao?", 
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
        url: url+ "/Solicitacoes/ListarStatusSolicitacaoPorPermissao?pId=8849", 
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
        url: url+ "/Solicitacoes/LoginCreaApi?userId=stella&password=tamisium", 
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
        url: url+ "/Solicitacoes/GerarBoleto?", 
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
        url: url+ "/Solicitacoes/ListarMotivoAtribuicao?", 
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
        url: url+ "/Solicitacoes/ListarUnidade?", 
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
        url: url+ "/Solicitacoes/BuscarFuncioarioPorLogin?loginFuncionario=saepe", 
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
        url: url+ "/CREASP/BuscaContratantesProfissional?creasp=civitas&periodoCertificarDe=tondeo&periodoCertificarAte=sub", 
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
        url: url+ "/CREASP/ListaStatusARTS?", 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});
it('GET /CREASP/BuscaARTSContratante/depromo', () => {
    const access_token = Cypress.env("access_token");
    return cy.request({
        method: "GET", 
        url: url+ "/CREASP/BuscaARTSContratante/depromo?cpfcnpj=dolor&tipoCertidao=celo&dataInicio=ater&dataFim=aqua&pagina=7064&limite=5714", 
        headers: {'authorization':'bearer ' +  access_token, 'content-type':'application/json'},
        body: {}
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.haveOwnProperty('sucess');
    });
});});