class Tiger {
	constructor() {
		this.strength = Math.floor(Math.random() * 100);
	}

	growl() {
		console.log('Aku lebih sayang kamu ketimbang apapun');
	}
}

module.exports = Tiger;
