const express = require('express');
const authMiddleware = require('./middlewares/authMiddleware');
const fs = require('fs').promises;
// const app = express();

const router = express.Router();

router.get('/', async (_req, res, next) => {
	try {
		return res.status(200).json('Online! Acesse os filmes em /filmes');
	} catch (error) {
		next(error);
	}
});

router.get('/filmes', async (_req, res, next) => {
	try {
		const data = await fs.readFile('./filmes.json', 'utf-8');
		return res.status(200).json(JSON.parse(data));
	} catch (error) {
		next(error);
	}
});

router.post('/login', (req, res) => {
	const { email, password } = req.body;
	const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	const validationEmail = regexEmail.test(email);
	const minPasswordLength = 6;
	const validPassword = password.length >= minPasswordLength;
	if (!validPassword || !validationEmail) {
		return res.status(400).send('Email ou senha inválidos');
	}
	return res.status(200).json({ token: '16d5as1d6P' });
});

router.put('/filme/:id', authMiddleware, async (req, res) => {
	const movies = await fs.readFile('./filmes.json', 'utf-8');
  const data = JSON.parse(movies);
	const { nome, ano } = req.body;
	const { id } = req.params;
	// const id = +req.params.id;
	const film = data.find((filme) => filme.id === parseInt(id));
	if (!film) {
		return res.status(404).send('Filme não encontrado');
	}
	if (!nome || !ano) {
		return res.status(400).send('Precisa haver nome e ano');
	}
	const updateFilms = data.filter((filme) => filme.id !== parseInt(id));
	const completedFilms = [...updateFilms, {id: parseInt(id), nome, ano}];
	fs.writeFile('./filmes.json', JSON.stringify(completedFilms));
	return res.status(200).send('Filme alterado com sucesso');
});

router.delete('/filme/:id', authMiddleware, async (req, res) => {
	const movies = await fs.readFile('./filmes.json', 'utf-8');
  const data = JSON.parse(movies);
	const { nome, ano } = req.body;
	const { id } = req.params;
	// const id = +req.params.id;
	const film = data.find((filme) => filme.id === parseInt(id));
	if (!film) {
		return res.status(404).send('Filme não encontrado');
	}
	if (!nome || !ano) {
		return res.status(400).send('Precisa haver nome e ano');
	}
	const filteredFilms = data.filter((filme) => filme.id !== parseInt(id));
	fs.writeFile('./filmes.json', JSON.stringify(filteredFilms));
	return res.status(200).send('Filme deletado com sucesso');
});

module.exports = router;
