const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const env = process.env.NODE_ENV;

for (let i = 0; i <= 10000; i++) {
	// proses looping yang akan membuat pengguna memori naik;
}

const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`hai, ${yourName}`);
console.log(`Mode Environment: ${env}`);
console.log(`Penggunaan Memory dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);

// SET NODE_ENV=development && node ./process-object/index.js;
