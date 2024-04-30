console.log('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  console.log(`Your name is: ${data.trim()}\n`);
  process.exit();
});

process.on('exit', () => {
  console.log('This important software is now closing\n');
});
