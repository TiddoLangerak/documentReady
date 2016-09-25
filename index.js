export default new Promise((resolve, reject) => {
	document.addEventListener(`DOMContentLoaded`, () => {
		resolve();
	});
});
