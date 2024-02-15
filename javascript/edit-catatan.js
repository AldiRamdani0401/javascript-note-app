// Mengambil data dari session storage
let dataCatatan = JSON.parse(sessionStorage.getItem('dataCatatan'));

// Temporary variable, digunakan untuk menyimpan data sementara

let arrayIndex;

// let insertIndex = sessionStorage.setItem('index', arrayIndex);

// Untuk menarget input dengan id "editJudul" & input dengan id "editCattan"
let inputFormEditCatatanJudul = document.getElementById('editJudul');
let inputFormEditCatatanKonten = document.getElementById('editCatatan');

// Function untuk mengambil nilai "index" yang ketika meload halaman "edit-catatan.html"
document.addEventListener("DOMContentLoaded", function() {
    // Mengambil data dari session storage
    dataCatatan = JSON.parse(sessionStorage.getItem('dataCatatan'));

    if (!dataCatatan) {
        // Menetapkan dataCatatan sebagai array kosong jika belum ada dalam sessionStorage
        dataCatatan = [];
    }

    arrayIndex = new URLSearchParams(window.location.search).get('index');

    // Menerapkan data session storage ke dalam input "editJudul"
    inputFormEditCatatanJudul.value = dataCatatan[arrayIndex][0];

    // Menerapkan data session storage ke dalam input "editCatatan"
    inputFormEditCatatanKonten.value = dataCatatan[arrayIndex][1];
});

document.getElementById("formEditCatatan").addEventListener("submit", function(event){
    event.preventDefault();

    // Memperbarui nilai pada array sesuai dengan input yang diubah
    dataCatatan[arrayIndex][0] = inputFormEditCatatanJudul.value;
    dataCatatan[arrayIndex][1] = inputFormEditCatatanKonten.value;

    let updateDataCatatan = JSON.stringify(dataCatatan);

    // Menyimpan kembali dataCatatan ke
    sessionStorage.setItem('dataCatatan', updateDataCatatan);

    alert("Catatan dengan Judul: " + '"' + dataCatatan[arrayIndex][0] + '"' + "Berhasil di update!")
});