const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  process.stdout.write('.');

  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.stdout.write(`Thanks for using me, ciao! \n`);
    process.exit();
  } 

  // The user can press b and it should beep right away
  if (key === 'b') {
    process.stdout.write('\x07');
  }

  // The user can input any number from 1 to 9 and it should immediately output "setting timer for x seconds...", and beep after that number of seconds has passed

  if (key === '1' || key === '2' || key === '3' || key === '4' || key === '5' || key === '6' || key === '7' || key === '8' || key === '9') {
    process.stdout.write(`setting timer for ${key} seconds...`);
    setTimeout(() => {
    process.stdout.write('\x07');
    }, key * 1000);
  }

});

console.log('after callback');


// const args = process.argv.slice(2);

// // edge 1 if no args
// if (args.length === 0) {
//   return;
// }

// for (second of args) {
//   // edge 3 type check, if number
//   if (isNaN(Number(second))) {
//     continue;
//   }
//   // edge 2 if negative numbers
//   if (second < 0) {
//     continue;
//   }
//   setTimeout(() => {
//     process.stdout.write('\x07');
//   }, second * 1000);
// }


// The user can press b and it should beep right away
// The user can input any number from 1 to 9 and it should
// immediately output "setting timer for x seconds...", and
// beep after that number of seconds has passed
// The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating