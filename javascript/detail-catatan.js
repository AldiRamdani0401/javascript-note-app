// Mengambil data dari session storage
let dataCatatan = JSON.parse(sessionStorage.getItem('dataCatatan'));

let arrayIndex;

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
        elementPKonten.style.textAlign = "justify";
        elementPKonten.textContent = dataCatatan[arrayIndex][1];
    divKontenCatatan.appendChild(elementPKonten);

    // Menarget formEditCatatan
    let formEditAtauDeleteCatatan = document.getElementById('formEditAtauDeleteCatatan');

    // Menambahkan button ke form untuk ke halaman edit catatan
    let btnEditCatatan = document.createElement('button');
        btnEditCatatan.classList.add('btn', 'btn-warning', 'fw-bold');
        btnEditCatatan.setAttribute('type', 'submit');
        btnEditCatatan.textContent = 'Edit';

    // Menambahkan btnEditCatatan ke formEditAtauDeleteCatatan
    formEditAtauDeleteCatatan.appendChild(btnEditCatatan);

        // Menambahkan Event/Function ketika tombol "Edit" di tekan.
        btnEditCatatan.addEventListener("click", function(){
            formEditAtauDeleteCatatan.setAttribute('action', 'edit-catatan.html?' + arrayIndex);

            let hiddenInput = document.createElement('input');
                hiddenInput.setAttribute('name', 'index');
                hiddenInput.setAttribute('type', 'hidden');
                hiddenInput.setAttribute('value', arrayIndex);

            // Menambahkan hiddenInput ke dalam formEditAtauDeleteCatatan
                formEditAtauDeleteCatatan.appendChild(hiddenInput);

                formEditAtauDeleteCatatan.submit();
        });

    // Menambahkan button "Delete"
    let btnDeleteCatatan = document.createElement('button');
        btnDeleteCatatan.classList.add('btn', 'btn-danger', 'fw-bold', 'm-3');
        btnDeleteCatatan.setAttribute('type', 'submit');
        btnDeleteCatatan.textContent = 'Delete';

    // Menambahkan btnDeleteCatatan ke dalam formDeleteCatatan
    formEditAtauDeleteCatatan.appendChild(btnDeleteCatatan);

    // Menambahkan Event/Function ketika tombol "Delete" ditekan, maka Catatan tersebut akan dihapus.

    btnDeleteCatatan.addEventListener('click', function(){

        let hiddenInput = document.createElement('input');
        hiddenInput.setAttribute('name', 'index');
        hiddenInput.setAttribute('type', 'hidden');
        hiddenInput.setAttribute('value', arrayIndex);

        // Memasukkan elemen input ke dalam formulir
        formEditAtauDeleteCatatan.appendChild(hiddenInput);

        formEditAtauDeleteCatatan.submit();
        let konfirmasi = confirm("Apakah anda yakin ingin menghapus catatan ini?");

        if (konfirmasi){
            let data = JSON.parse(sessionStorage.getItem('dataCatatan'));
            data.splice(arrayIndex, 1);
            let updateData = JSON.stringify(data);
            sessionStorage.setItem('dataCatatan', updateData);

            alert('Catatan berhasil di Hapus!');

            // Menambahkan action ke dalam formEditAtauDeleteCatatan
            formEditAtauDeleteCatatan.setAttribute('action', 'index.html');
        }
    });
});