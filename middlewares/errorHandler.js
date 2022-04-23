module.exports = (err, _req, res, _next) => {
	return res.status(400).json({ error: `${err}` });
};
