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
let password = await input.question("Masukkan password : ");
if(read(username,password)==false){
    console.log("Nama atau akun tidak terdaftar");
    let opsi = await input.question("Ingin register(ya/tidak)?");
    if(opsi.toLowerCase()=="ya".toLowerCase()){
        let username2 = await input.question("Masukkan usernamemu : ");
        let password2 = await input.question("Masukkan password : ");
        register(username2,password2);
        console.log("Register sukses");
    }
}else{
    console.log("Anda berhasil log in");
}




//Fungsi membaca data
async function read(username, password){
    await fsPromises.readFile(database).then((data)=>{
        let kumpulanUser = data.toString();
        const arrayUser = kumpulanUser.split("\n");
        for(let i in arrayUser){
            if(arrayUser[i].toLocaleLowerCase==`${username} ${password}`.toLowerCase()){
                return true;
            }
        }
        return false;
    })
}

//Fungsi register
async function register(username, password){
    let akun = `${username} ${password}\n`;
    fsPromises.appendFile(database,akun);

}

//Fungsi log in


//Fungsi hapus data


//Fungsi view member


