import { promises as fsPromises } from 'fs';
import process from "process";
import readlinePromises from "readline/promises";

const database = "database.txt";
fsPromises.appendFile(database,"Faiz 13424\n");
fsPromises.appendFile(database,"Faiz 13424\n");
fsPromises.appendFile(database,"Faiz 13424\n");
fsPromises.appendFile(database,"Faiz 13424\n");
fsPromises.appendFile(database,"Faiz 13424\n");
fsPromises.appendFile(database,"Faiz 13424\n");
fsPromises.readFile(database).then((data)=>{
    let kumpulanUser = data.toString();
    const arrayUser = kumpulanUser.split("\n");
    const kumpulanNama = [];
    const kumpulanPasword = [];
    for(let i in arrayUser){
        const tampungan = arrayUser[i].split(" ");
        kumpulanNama.push(tampungan[0]);
        kumpulanPasword.push(tampungan[1]);
    }

    for(let i in kumpulanNama){
        console.log(kumpulanNama[i]);
    }

    for(let i in kumpulanPasword){
        console.log(kumpulanPasword[i]);
    }
})

