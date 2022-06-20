const fs = require('fs');

const readableStream = fs.createReadStream('input.txt', {
	highWaterMark: 15,
});
const writableStream = fs.createWriteStream('output.txt');

readableStream.on('readable', () => {
	try {
		process.stdout.write(`[${readableStream.read()}]`);
	} catch (error) {
		console.log(`${error.message}`);
	}
});

readableStream.on('end', () => {
	console.log(`Done`);
});

writableStream.write('Nama saya adalah Daffa\n');
writableStream.write('Saya tinggal di Kabupaten Karimun\n');
writableStream.end('Akhir dari writable stream');
