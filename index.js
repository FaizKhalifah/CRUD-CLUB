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
    let looping = true;
    while(looping){
        console.log("Silahkan melakukan log in terlebih dahulu : ");
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
            }else{
                console.log("Keluar dari program");
                process.exit(1);
            }
        }else if(status==true){
            console.log("Anda berhasil log in");
            const kumpulanOpsi = ["About", "List", "Keluar"];
            let status2 = true;
            while(status2){
                console.log("Pilih layanan yang kamu mau : ");
                for (let i in kumpulanOpsi){
                    console.log(`${Number(i)+1} ${kumpulanOpsi[i]}`);
                }
                let opsi = await input.question("Masukkan layanan : ");
                if(opsi.toLowerCase()==kumpulanOpsi[0].toLowerCase()){
                    console.log("CRUD Club adalah sebuah aplikasi terminal yang menghubungkan para \n pencinta program crud dengan database txt");
                }else if(opsi.toLowerCase()==kumpulanOpsi[1].toLowerCase()){
                    console.log("Berikut adalah list anggota kami : ");
                    const kumpulanUser = await view();
                    for(let i in kumpulanUser){
                        console.log(kumpulanUser[i]);
                    }
                }else if(opsi.toLowerCase()==kumpulanOpsi[2].toLowerCase()){
                    console.log("Keluar dari program");
                    break;
                }else{
                    console.log("Perintah tidak dikenal");
                }
            }
       
        }
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

//Fungsi view member
async function view(){
    const data = await fsPromises.readFile(database);
    const arrayUser = data.toString().split("\n");
    const kumpulanUser = [];
    for (let i in arrayUser){
        const username = arrayUser[i].split(" ");
        if(username[0]==undefined){
            continue;
        }else{
            kumpulanUser.push(username[0].toString());
        }
    }
    return(kumpulanUser);
}

main();