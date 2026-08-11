//mjs is ES modules
//functions do not share variables and functions
//with other files, have ot export and import when you want to use.

//System info
//Operating System
//Free Memory
//Total memory
//First import the os module
import os from 'os';
import { bytesToSize } from './FreeMemory.mjs';

//use console log to display info
console.log(`System Infromation:`);
console.log(`OS Platform: ${os.platform()}`);
console.log(`Free Memory: ${bytesToSize(os.freemem())}`);
console.log(`Total Memory: ${bytesToSize(os.totalmem())}`);
