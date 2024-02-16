// Mengambil data dari session storage
let dataCatatan = JSON.parse(sessionStorage.getItem('dataCatatan'));

// Untuk menarget div "judul-catatan" & "konten-catatan"

let divJudulCatatan = document.getElementById('judul-catatan');
let divKontenCatatan = document.getElementById('konten-catatan');

// Function untuk mengambil nilai "index" ketika meload halaman "detail-catatan"
document.addEventListener('DOMContentLoaded', function(){
    // Mengambil data dari session storage
    dataCatatan = JSON.parse(sessionStorage.getItem('dataCatatan'));

    if (!dataCatatan){
        // Menetapkan dataCatatan sebagai array kosong jika belum ada dalam sessionStorage
        dataCatatan = [];
    }

    arrayIndex = new URLSearchParams(window.location.search).get('index');

    // Membuat element H1 untuk Judul Catatan
    let elementH1Judul = document.createElement("h1");
        elementH1Judul.textContent = dataCatatan[arrayIndex][0];
    divJudulCatatan.appendChild(elementH1Judul);

    // Membuat element P untuk Konten Catatan
    let elementPKonten = document.createElement("p");
        elementPKonten.textContent = dataCatatan[arrayIndex][1];
    divKontenCatatan.appendChild(elementPKonten);

    // Menarget formEditCatatan
    let formEditCatatan = document.getElementById('formEditCatatan');

    // Menambahkan button ke form untuk ke halaman edit catatan
    let btnEditCatatan = document.createElement('button');
        btnEditCatatan.classList.add('btn', 'btn-warning', 'fw-bold');
        btnEditCatatan.setAttribute('type', 'submit');
        btnEditCatatan.textContent = 'Edit';

    // Menambahkan btnEditCatatan ke formEditCatatan
    formEditCatatan.appendChild(btnEditCatatan);

        // Menambahkan Event/Function ketika tombol "Edit" di tekan.
        btnEditCatatan.addEventListener("click", function(){
            formEditCatatan.setAttribute('action', 'edit-catatan.html?' + arrayIndex);

            let hiddenInput = document.createElement('input');
                hiddenInput.setAttribute('name', 'index');
                hiddenInput.setAttribute('type', 'hidden');
                hiddenInput.setAttribute('value', arrayIndex);

            // Menambahkan hiddenInput ke dalam formEditCatatan
                formEditCatatan.appendChild(hiddenInput);

                formEditCatatan.submit();
        });
});