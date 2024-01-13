export const getSession = (hash) =>
	fetch(`http://localhost:4000/sessions?hash=${hash}`)
		.then((loadedHash) => loadedHash.json())
		.then(([loadedHash]) => loadedHash);
