console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
  process.exit();
});

if (!process.stdin.isTTY) {
  process.on('exit', () => {
    console.log('This important software is now closing');
  });
}
