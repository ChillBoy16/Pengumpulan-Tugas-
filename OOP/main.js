class Kendaraan {
    constructor(model, merk, harga){
        this.model = model;
        this.merk = merk;
        this.harga = harga;
    }
    maju() {
        return `mesin ${this.model} ${this.merk} berjalan`;
    }
    
    berhenti() {
        return `mesin ${this.model} ${this.merk} berhenti`;
    }
}
 let mobil = new Kendaraan("Supra", "Toyota", 200000);
 let motor = new Kendaraan("CBR", "Honda", 300000);

 console.log(mobil.maju());
 console.log(motor.berhenti());



 class Siswa {
    constructor(nama, absen, kelas, nisn){
        this.nama = nama;
        this.absen = absen;
        this.kelas = kelas;
        this.nisn = nisn;
    }
    belajar() {
        return `Siswa bernama ${this.nama} dari kelas ${this.kelas} sedang belajar`;
    }
    
    menulis() {
        return `Siswa bernama ${this.nama} dari kelas ${this.kelas} sedang menulis`;
    }

    tidur() {
        return `Siswa bernama ${this.nama} dari kelas ${this.kelas} sedang tidur`;
    }
}



 let siswa1 = new Siswa("Billy", 17, "X PPLG 5", 120121);
 let siswa2 = new Siswa("Mike", 11, "X PPLG 5", 188412);
 let siswa3 = new Siswa("Tre", 11, "X PPLG 5", 432123); 

 console.log(siswa1.belajar());
 console.log(siswa2.menulis());
 console.log(siswa3.tidur());