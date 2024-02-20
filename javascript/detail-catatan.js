let dataCatatan;
let arrayIndex;
let divJudulCatatan = document.getElementById('judul-catatan');
let divKontenCatatan = document.getElementById('konten-catatan');
document.addEventListener('DOMContentLoaded', function(){
    dataCatatan = JSON.parse(sessionStorage.getItem('dataCatatan'));
    if (!dataCatatan){
        dataCatatan = [];
    }
    arrayIndex = new URLSearchParams(window.location.search).get('index');
    let elementH1Judul = document.createElement("h1");
        elementH1Judul.textContent = dataCatatan[arrayIndex][0];
    divJudulCatatan.appendChild(elementH1Judul);
    let elementPKonten = document.createElement("p");
        elementPKonten.style.textAlign = "justify";
        elementPKonten.textContent = dataCatatan[arrayIndex][1];
    divKontenCatatan.appendChild(elementPKonten);
    let formEditAtauDeleteCatatan = document.getElementById('formEditAtauDeleteCatatan');
    let btnEditCatatan = document.createElement('button');
        btnEditCatatan.classList.add('btn', 'btn-warning', 'fw-bold');
        btnEditCatatan.setAttribute('type', 'submit');
        btnEditCatatan.textContent = 'Edit';
    formEditAtauDeleteCatatan.appendChild(btnEditCatatan);
        btnEditCatatan.addEventListener("click", function(){
            formEditAtauDeleteCatatan.setAttribute('action', 'edit-catatan.html?' + arrayIndex);
            let hiddenInput = document.createElement('input');
                hiddenInput.setAttribute('name', 'index');
                hiddenInput.setAttribute('type', 'hidden');
                hiddenInput.setAttribute('value', arrayIndex);
                formEditAtauDeleteCatatan.appendChild(hiddenInput);
                formEditAtauDeleteCatatan.submit();
        });
    let btnDeleteCatatan = document.createElement('button');
        btnDeleteCatatan.classList.add('btn', 'btn-danger', 'fw-bold', 'm-3');
        btnDeleteCatatan.setAttribute('type', 'submit');
        btnDeleteCatatan.textContent = 'Delete';
    formEditAtauDeleteCatatan.appendChild(btnDeleteCatatan);
    btnDeleteCatatan.addEventListener('click', function(){
        let hiddenInput = document.createElement('input');
        hiddenInput.setAttribute('name', 'index');
        hiddenInput.setAttribute('type', 'hidden');
        hiddenInput.setAttribute('value', arrayIndex);
        formEditAtauDeleteCatatan.appendChild(hiddenInput);
        formEditAtauDeleteCatatan.submit();
        let konfirmasi = confirm("Apakah anda yakin ingin menghapus catatan ini?");
        if (konfirmasi){
            let data = JSON.parse(sessionStorage.getItem('dataCatatan'));
            data.splice(arrayIndex, 1);
            let updateData = JSON.stringify(data);
            sessionStorage.setItem('dataCatatan', updateData);
            alert('Catatan berhasil di Hapus!');
            formEditAtauDeleteCatatan.setAttribute('action', 'index.html');
        }
    });
});