import { promises as fsPromises } from 'fs';
import process from "process";
import readlinePromises from "readline/promises";

const input = readlinePromises.createInterface({
    input:process.stdin,
    output:process.stdout
})

const database = "database.txt";

console.log("Selamat datang di CRUD CLUB");
let username = await input.question("Masukkan usernamemu : ");



//Fungsi menulis data
async function write(data){
    const dataLengkap = data.map(function(user){
        return JSON.stringify(user);
    }).join('\n');
    fsPromises.writeFile(database,dataLengkap);
}

//Fungsi membaca data

//Fungsi register


//Fungsi log in


//Fungsi hapus data


//Fungsi viem member


