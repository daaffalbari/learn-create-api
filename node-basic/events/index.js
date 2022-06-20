const { EventEmitter } = require('events');

const myEmitter = new EventEmitter();

const birthdayEventListener = (name) => {
	console.log(`Happy Birthday ${name}!`);
};

const onBirthdayEventListener = ({ name }) => {
	birthdayEventListener(name);
};

myEmitter.on('birthday', onBirthdayEventListener);
myEmitter.emit('birthday', { name: 'Daffa' });
