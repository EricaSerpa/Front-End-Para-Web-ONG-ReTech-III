// app.js - inicialização da SPA ReTech

// Rotas principais
Router.add('/', () => Templates.render('/'));
Router.add('/projetos', () => Templates.render('/projetos'));

// Cadastro: delega para o módulo CadastroFeature
Router.add('/cadastro', () => CadastroFeature.init());

// Contato: delega para o módulo ContatoFeature
Router.add('/contato', () => ContatoFeature.init());

// Página de erro
Router.add('/404', () => Templates.render('/404'));

// Inicializa o roteador
Router.start();






