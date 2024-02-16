// Menarget element form, dan ketika tombol "submit", ditekan akan menjalankan function(event)

let formTambahCatatan = document.getElementById('formTambahCatatan');

formTambahCatatan.addEventListener("submit", function(event){

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
        let inisiasiArray = [];

        /*
         Pengecekan data pada dataStorage,
         jika dataStorage ada isi data, maka "if" yang dijalankan.
         jika dataStorage belum ada data, maka "else" yang dijalankan.
        */
        if (dataStorage){
            // isi dari dataStorage akan diubah menjadi objek
            dataStorage = JSON.parse(dataStorage);
            if(Object.keys(dataStorage).length == 0){
                dataStorage = [];
            } else {
                dataStorage = Object.keys(dataStorage).map(key => dataStorage[key]);
            }
        } else {
            // dataStroge akan diisi oleh Object kosong
            dataStorage = {};
        }

        // Menambahkan catatan baru ke dalam inisiasiArray
        inisiasiArray.push([dataJudulBaru, dataKontenBaru]);
        // Penggabungan Array
        let gabunganArray = [...dataStorage, ...inisiasiArray];
        // Mengubah data Array menjadi String
        let arrayToString = JSON.stringify(gabunganArray);

        // Memasukkan data arrayToString kedalam session storage
        sessionStorage.setItem('dataCatatan', arrayToString);

        // Ketika data berhasil ditambahkan, maka akan diarahkan ke halaman "index.html" dengan mengirim response "tambah-success";

        alert('Catatan baru berhasil ditambahkan!');

        // Menambahkan action kedalam formTambahCatatan
        formTambahCatatan.setAttribute('action', 'index.html');
    } else {
        // Kesalahan pada function "tambahCatatan"
        alert("Judul dan konten catatan harus diisi!");
    }
}
