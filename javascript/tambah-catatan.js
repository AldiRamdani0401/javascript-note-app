// Menarget element form, dan ketika tombol "submit", ditekan akan menjalankan function(event)
document.getElementById("formCatatan").addEventListener("submit", function(event) {
    // Untuk mencegah pengiriman formulir
    event.preventDefault();

    // Untuk menangkap kiriman data (nilai) form dari "judulBaru" & "catatanBaru"
    let catatanBaruJudul = document.getElementById("judulBaru").value;
    let catatanBaruKonten = document.getElementById("catatanBaru").value;

    // data yang dikirimkan form akan dikirimkan ke function "tambahCatatan" untuk dikelola
    tambahCatatan(catatanBaruJudul, catatanBaruKonten);
});

function tambahCatatan(dataJudulBaru, dataKontenBaru) {
    // Jika dataJudulBaru & dataKontenBaru ada, maka blok "if" dijalankan.
    if (dataJudulBaru && dataKontenBaru) {
        // Untuk mengambil data dari Session dengan key 'dataCatatan'
        let dataStorage = sessionStorage.getItem('dataCatatan');

        // Untuk menyimpan data dari hasil pengecekkan pada dataStorage
        let dataTemp;

        /*
         Pengecekan data pada dataStorage,
         jika dataStorage ada isi data, maka "if" yang dijalankan.
         jika dataStorage belum ada data, maka "else" yang dijalankan.
        */
        if (dataStorage){
            // dataStorage akan diubah menjadi objek, sebelum dimasukkan kedalam dataTemp
            dataTemp = JSON.parse(dataStorage);
        } else {
            // dataTemp akan diisi oleh Array kosong
            dataTemp = [];
        }

        // Menambahkan catatan baru ke dalam data catatan lama (dataTemp)
        dataTemp.push([dataJudulBaru, dataKontenBaru]);

        // Sebelum disimpan kedalam sessionStorage, data akan diubah kedalam bentuk String dengan "stringify"
        sessionStorage.setItem('dataCatatan', JSON.stringify(dataTemp));
        alert("Catatan Baru, berhasil ditambahkan");
    } else {
        // Blok "else" akan dijalankan jika dataJudulBaru & dataKontenBaru kosong
        alert("Judul dan konten catatan harus diisi!");
    }
}
