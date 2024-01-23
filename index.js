import { promises as fsPromises } from 'fs';
import process from "process";
import readlinePromises from "readline/promises";

const input = readlinePromises.createInterface({
    input:process.stdin,
    output:process.stdout
})

let jawaban = await input.question("Masukkan input : ");
console.log(jawaban);