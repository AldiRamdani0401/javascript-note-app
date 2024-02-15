// Mengambil data dari session storage
let dataCatatan = JSON.parse(sessionStorage.getItem('dataCatatan'));

console(dataCatatan);

// Temporary variable, digunakan untuk menyimpan data sementara
let dataCatatanJudulTemp;

let dataCatatanKontenTemp;

let arrayIndex;

// Untuk menarget input dengan id "editJudul" & input dengan id "editCattan"
let inputFormEditCatatanJudul = document.getElementById('editJudul');
let inputFormEditCatatanKonten = document.getElementById('editCatatan');

// Function untuk mengambil nilai "index" yang ketika meload halaman "edit-catatan.html"
window.onload = function(){
    // Mengambil data dari URL
    arrayIndex = new URLSearchParams(window.location.search).get('index');

    // Menerapkan data session storage ke dalam input "editJudul"
        inputFormEditCatatanJudul.value = dataCatatan[arrayIndex][0];

    // Menerapkan data session storage ke dalam input "editCatatan"
        inputFormEditCatatanKonten.value = dataCatatan[arrayIndex][1];

    // Mengirimkan nilai Judul kedalam variabel Temporary
    dataCatatanJudulTemp = dataCatatan[arrayIndex][0];
    dataCatatanKontenTemp = dataCatatan[arrayIndex][1];

}


// ## Menangkap perubahan nilai pada input "editJudul"
inputFormEditCatatanJudul.addEventListener('change', function(){
    dataCatatanJudulTemp[arrayIndex][0] = inputFormEditCatatanJudul.value;

    // Menyimpan pembaruan dataCatatan untuk Judul kedalam session storage
    sessionStorage.setItem('dataCatatan', JSON.stringify(dataCatatanJudulTemp[arrayIndex][0]));
});

// ## Menangkap perubahan nilai pada input "editCatatan"
inputFormEditCatatanKonten.addEventListener('change', function(){
    dataCatatanKontenTemp[0][1] = inputFormEditCatatanKonten.value;

    // Menyimpan pembaruan dataCatatan untuk Konten kedalam session storage
    sessionStorage.setItem('dataCatatan', JSON.stringify(dataCatatanKontenTemp[arrayIndex][1]));
});