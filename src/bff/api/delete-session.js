export const deleteSession = async (sessionId) =>
	fetch(`http://localhost:4000/sessions/${sessionId}`, {
		method: 'DELETE',
	});
