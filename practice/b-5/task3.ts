/**
 * Task 3 — Terminal calculator upgrade:
 * Extend the process.stdin calculator example to handle any number of additions.
 * Keep reading pairs of numbers until the user types "exit".
 * When they type "exit", pause stdin, log the final total, and exit cleanly.
 */

let runningTotal = 0;

process.stdout.write('--- Terminal Calculator ---\n');
process.stdout.write('Enter numbers to add (e.g., "5 10") or type "exit":\n');

process.stdin.on('data', (data) => {
    const input = data.toString().trim();

    if (input.toLowerCase() === 'exit') {
        console.log(`\nFinal Total: ${runningTotal}`);
        console.log('Exiting cleanly. Goodbye!');
        process.stdin.pause();
        process.exit(0);
    }

    const numbers = input.split(/\s+/).map(n => parseFloat(n)).filter(n => !isNaN(n));
    if (numbers.length === 0) {
        process.stdout.write('Invalid input. Please enter numbers or "exit":\n');
        return;
    }

    runningTotal += numbers.reduce((acc, curr) => acc + curr, 0);

    console.log(`Current Total: ${runningTotal}`);
    process.stdout.write('Enter more numbers or "exit":\n');
});

process.stdin.on('error', (err) => {
    console.error('Stdin error:', err.message);
});
