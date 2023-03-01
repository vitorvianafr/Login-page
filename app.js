const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Configuração de middleware para lidar com solicitações JSON e URL codificadas
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota que irá receber os dados do formulário
app.post('/processar-formulario', (req, res) => {
  const login = req.body.login; // Obtém o valor do campo 'nome' do formulário
  const password = req.body.password; // Obtém o valor do campo 'email' do formulário


  if (login === 'vitor' && password === 'vitor') {
    // Redireciona para a página de sucesso
    res.sendFile(__dirname + '/logado.html');
  } else {
    // Redireciona para a página de erro
    res.sendFile(__dirname + '/erro.html');
  }
});

// Rota para a página de sucesso
app.get('/sucesso', (req, res) => {
  res.send('Formulário processado com sucesso!');
});

// Rota para a página de erro
app.get('/erro', (req, res) => {
  res.send('Ocorreu um erro ao processar o formulário.');
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});