function abrirPopupCadastro() {
    // URL da página que você quer abrir
    const url = './cadastroP.html';

    // Tamanho e características da janela pop-up
    const largura = 500;  // Largura do popup
    const altura = 700;   // Altura do popup
    const esquerda = (window.innerWidth - largura) / 2;  // Centraliza na tela
    const topo = (window.innerHeight - altura) / 2;      // Centraliza na tela

    // Configurações da janela pop-up
    const config = `width=${largura},height=${altura},top=${topo},left=${esquerda},scrollbars=yes,resizable=yes`;

    // Abre a página na mesma guia como um pop-up
    window.open(url, 'popup', config);
}