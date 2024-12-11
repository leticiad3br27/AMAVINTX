import express from 'express'
const app= express()

const port = 9090;

// Middleware para parsear JSON
app.use(express.json());

// Simulando um banco de dados em memória
let users = [];

// Middleware para validar ID
function validateId(req, res, next) {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
        return res.status(400).json({ message: 'ID inválido' });
    }
    req.id = id;
    next();
}

// GET - Listar todos os usuários
app.get('/users', (req, res) => {
    res.status(200).json(users);
});

// GET - Obter um único usuário por ID
app.get('/users/:id', validateId, (req, res) => {
    const user = users.find(u => u.id === req.id);
    if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json(user);
});

// POST - Criar um novo usuário
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ message: 'Nome e e-mail são obrigatórios' });
    }

    const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        name,
        email
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT - Editar um usuário por ID
app.put('/users/:id', validateId, (req, res) => {
    const { name, email } = req.body;

    const user = users.find(u => u.id === req.id);
    if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    if (name) user.name = name;
    if (email) user.email = email;

    res.status(200).json(user);
});

// DELETE - Remover um usuário por ID
app.delete('/users/:id', validateId, (req, res) => {
    const userIndex = users.findIndex(u => u.id === req.id);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    users.splice(userIndex, 1);
    res.status(204).send(); // 204 - No Content
});

// Handler para rotas não definidas
app.use((req, res) => {
    res.status(404).json({ message: 'Endpoint não encontrado' });
});

// Middleware global para tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Ocorreu um erro no servidor' });
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
