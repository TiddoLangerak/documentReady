export default new Promise((resolve, reject) => {
	if (document.readyState !== `loading`) {
		resolve();
	} else {
		document.addEventListener(`DOMContentLoaded`, () => {
			resolve();
		});
	}
});
