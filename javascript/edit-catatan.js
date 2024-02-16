// Mengambil data dari session storage
let dataCatatan = JSON.parse(sessionStorage.getItem('dataCatatan'));

// Temporary variable, digunakan untuk menyimpan data sementara

let arrayIndex;

// mendapatkan index data catatan
arrayIndex = new URLSearchParams(window.location.search).get('index');

// Untuk menarget input dengan id "editJudul" & input dengan id "editCattan"
let inputFormEditCatatanJudul = document.getElementById('editJudul');
let inputFormEditCatatanKonten = document.getElementById('editCatatan');

// Function untuk mengambil nilai "index" ketika meload halaman "edit-catatan.html"
document.addEventListener("DOMContentLoaded", function(){
    // Mengambil data dari session storage
    dataCatatan = JSON.parse(sessionStorage.getItem('dataCatatan'));

    if (!dataCatatan){
        // Menetapkan dataCatatan sebagai array kosong jika belum ada dalam sessionStorage
        dataCatatan = [];
    }

    // Menerapkan data session storage ke dalam input "editJudul"
    inputFormEditCatatanJudul.value = dataCatatan[arrayIndex][0];

    // Menerapkan data session storage ke dalam input "editCatatan"
    inputFormEditCatatanKonten.value = dataCatatan[arrayIndex][1];
});

let formEditCatatan = document.getElementById("formEditCatatan");

formEditCatatan.addEventListener("submit", function(event){

    // Memperbarui nilai pada array sesuai dengan input yang diubah
    dataCatatan[arrayIndex][0] = inputFormEditCatatanJudul.value;
    dataCatatan[arrayIndex][1] = inputFormEditCatatanKonten.value;

    let updateDataCatatan = JSON.stringify(dataCatatan);

    let konfirmasi = confirm('Apakah anda yakin ingin mengubah catatan ini?');

    // konfirmasi pembaruan catatan
    if (konfirmasi) {
        alert('Catatan berhasil diupdate!');

        // Menyimpan kembali dataCatatan ke dalam session storage
        sessionStorage.setItem('dataCatatan', updateDataCatatan);

        // Menambahkan action kedalam formEditCatatan
        formEditCatatan.setAttribute('action', 'index.html');
    } else {
        // catatan tidak akan diperbarui
        event.preventDefault();
    }
});

// ## tombol "Kembali" ke halaman detail-catatan.html sesuai data catatan yang dipilih

let btnKembali = document.getElementById('kembali-ke-detail');
btnKembali.setAttribute('href', 'detail-catatan.html?index=' + arrayIndex);