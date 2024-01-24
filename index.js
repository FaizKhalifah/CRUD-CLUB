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
if(login(username,password)==null){
    console.log("Username atau password salah");
    let pertanyaanRegistrasi = await input.question("Apakah kamu ingin melakukan registrasi (ya/tidak) : " );
    if(pertanyaanRegistrasi.toLowerCase()=="ya"){
        console.log("Memasuki bagian register");
    }else{
        console.log("Keluar dari program");
        input.close();
    }
}else{
    console.log("Kamu berhasil login");
}



//Fungsi menulis data
async function write(data){
    const dataLengkap = data.map(function(user){
        return JSON.stringify(user);
    }).join('\n');
    await fsPromises.writeFile(database,dataLengkap);
}


//Fungsi membaca data
async function read(){
    try{
        const data = await fsPromises.readFile(database);
        return data.split("\n").map(function(line){
            return JSON.parse(line.trim());
        });
    }catch(error){
        return [];
    }
}

//Fungsi register
function register(username, password){
    const users = read();
    users.push({username,password});
    write(users);
}

//Fungsi log in
function login(username, password) {
  const users = read();

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.username === username && user.password === password) {
      return user;
    }
  }

  return null; 
}

//Fungsi hapus data
function deleteAccount(username) {
  let users = read();
  users = users.filter(function(u) {
    return u.username !== username;
  });
  writeData(users);
}

//Fungsi viem member


