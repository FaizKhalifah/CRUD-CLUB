import { promises as fsPromises } from 'fs';
import process from "process";
import readlinePromises from "readline/promises";

const input = readlinePromises.createInterface({
    input:process.stdin,
    output:process.stdout
})

const database = "database.txt";

async function main(){
    console.log("Selamat datang di CRUD CLUB");
    let username = await input.question("Masukkan usernamemu : ");
    let password = await input.question("Masukkan password : ");
    let status = await read(username,password);
    if(status==false){
        console.log("Nama atau akun tidak terdaftar");
        let opsi = await input.question("Ingin register(ya/tidak)?");
        if(opsi.toLowerCase()=="ya".toLowerCase()){
            let username2 = await input.question("Masukkan usernamemu : ");
            let password2 = await input.question("Masukkan password : ");
            register(username2,password2);
            console.log("Register sukses");
        }
    }else if(status==true){
        console.log("Anda berhasil log in");
    }
}





//Fungsi membaca data
async function read(username, password) {
    try {
        const data = await fsPromises.readFile('database.txt', 'utf-8');
        const kumpulanUser = data.toString();
        const arrayUser = kumpulanUser.split("\n");

        for (let i = 0; i < arrayUser.length; i++) {
            const usernameLengkap = arrayUser[i].split(" ");
            if (usernameLengkap[0] === username && usernameLengkap[1] === password) {
                return true;
            }
        }

        return false;
    } catch (error) {
        console.error('Error reading file:', error);
        return false;
    }
}

//Fungsi register
async function register(username, password){
    let akun = `${username} ${password}\n`;
    fsPromises.appendFile(database,akun);

}

//Fungsi log in


//Fungsi hapus data


//Fungsi view member


main();