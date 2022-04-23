const authMiddleware = (req, res, next) => {
	const { token } = req.headers;
	if (!token || token !== '16d5as1d6P') {
		return res.status(401).send('Unauthorized');
	}
	next();
};

module.exports = authMiddleware;
