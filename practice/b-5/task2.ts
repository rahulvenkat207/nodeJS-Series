import { Writable } from 'node:stream';
import { appendFile } from 'node:fs';

/**
 * Task 2 — Build a custom logger stream:
 * Create a class that extends Writable. Its _write method should prepend a timestamp
 * to each chunk and append it to a logs.txt file (use fs.appendFile).
 */

class CustomLogger extends Writable {
    private logFile: string;

    constructor(logFile: string) {
        super();
        this.logFile = logFile;
    }

    _write(chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void {
        const timestamp = new Date().toISOString();
        const data = chunk.toString();
        const logEntry = `[${timestamp}] ${data}\n`;

        appendFile(this.logFile, logEntry, (err) => {
            callback(err);
        });
    }
}

// 1. Create instance
const logger = new CustomLogger('./logs.txt');

// 2. Write 5 messages
console.log('Sending messages to the custom logger...');
const messages = [
    'System started',
    'Database connected',
    'User logged in',
    'Action performed',
    'System shutting down'
];

messages.forEach((msg) => logger.write(msg));

// 3. Finish
logger.end(() => {
    console.log('✅ All messages written to logs.txt');
});

logger.on('error', (err) => {
    console.error('Logger error:', err.message);
});
