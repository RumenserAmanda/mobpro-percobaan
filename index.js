/*
Masing-masing kelompok pelajari konsep destructuring dan buat contoh:
- Destructuring (Array & Object)
- Destructuring dengan menggunakan default value (Array & Object)
- Destructuring dengan menggunakan rest paramater (Array & Object)
*/

// DESTRUCTURING - ARRAY

let array = ["Carlodino" ,"Gilby", "Christian", "Amanda", "Ryan"];

// sebelum ES6

let Var1 = array[0];
let Var2 = array[1];
let Var3 = array[2];
let Var4 = array[3];
let Var5 = array[4];
console.log(`Sebelum ES6: ${Var1}, ${Var2}, ${Var3}, ${Var4}, ${Var5}`);

// di ES6

let [var1, var2, var3, var4, var5] = array;
console.log(`Destructuring - array (semua item): ${var1}, ${var2}, ${var3}, ${var4}, ${var5}`);

let [varr1, , varr2, , varr3] =  array;
console.log(`Destructuring - array (sebagian item): ${varr1}, ${varr2}, ${varr3} \n\n\n`);



// DESTRUCTURING - OBJECT

let object1 = {
    NIM: 123443211234,
    noRegis: "S12345678",
    fakultas: "Ilmu Komputer",
    umur: 20,
    mahasiswaAktif: true,
    mataKuliah: ["Kalkulus", "Computer Programming", "Mobile Programming"]
}

// sebelum ES6
let varNIM = object1.NIM;
let varNoRegis = object1.noRegis;
let varMK = object1.mataKuliah;
console.log(varNIM);
console.log(varNoRegis);
console.log(varMK);

// di ES6 (mengambil semua properti)
let { NIM1, noRegis: newNoRegis, fakultas: newFakultas1, umur, mahasiswaAktif1, mataKuliah1 } = object1;
console.log(NIM1);
console.log(newNoRegis);
console.log(newFakultas1 + "\n\n\n");

// di ES6 (mengambil sebagian properti)
let { NIM2, fakultas: newFakultas2, mahasiswaAktif2, mataKuliah2 } = object1;
console.log(NIM2);
console.log(newFakultas2 + "\n\n\n");



// DESTRUCTURING DEFAULT VALUE - ARRAY

let DDVAArray = ["alpha", , "charlie"];
[DDVAv1="default 1", DDVAv2="default 2", DDVAv3="default 3"] = DDVAArray;
console.log(DDVAv1);
console.log(DDVAv2);
console.log(DDVAv3 + "\n\n\n");



// DESTRUCTURING DEFAULT VALUE - OBJECT

let object2 = {
    NIM: 123443211234,
    noRegis: undefined,
    fakultas: undefined,
    umur: 20,
    mahasiswaAktif: true,
    mataKuliah: ["Kalkulus", "Computer Programming", "Mobile Programming"]
}
// Second Commit
let { NIM: DDVONIM, noRegis: DDVONoRegis="noRegisDefaultValue", fakultas: DDVOFakultas="fakultasDefaultValue", umur: DDVOUmur, mahasiswaAktif: DDVOMahasiswaAktif, mataKuliah: DDVOMataKuliah } = object2;
console.log(DDVONIM);
console.log(DDVONoRegis);
console.log(DDVOFakultas);
console.log(DDVOUmur + "\n\n\n");


// DESTRUCTURING REST PARAMETER - ARRAY
let DRPAArray = ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf"];
[DRPAv1, DRPAv2, ...DRPAv3] = DRPAArray;
console.log(DRPAv1);
console.log(DRPAv2);
console.log(DRPAv3 + "\n\n\n");


// DESTRUCTURING REST PARAMETER - OBJECT
let object3 = {
    NIM: 123443211234,
    noRegis: "S12345678",
    fakultas: "Ilmu Komputer",
    umur: 20,
    mahasiswaAktif: true,
    mataKuliah: ["Kalkulus", "Computer Programming", "Mobile Programming"]
};

let { NIM: DRPONIM, noRegis: DRPONoRegis, ...DRPORest } = object3;
console.log(DRPONIM);
console.log(DRPONoRegis);
console.log(DRPORest);

// Mengambil properti yang tersimpan di dalam Object DRPORest
console.log(DRPORest.umur);
console.log(DRPORest.mahasiswaAktif);
console.log(DRPORest.mataKuliah);
