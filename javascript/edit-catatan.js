let dataCatatan = JSON.parse(sessionStorage.getItem('dataCatatan'));
let arrayIndex;
arrayIndex = new URLSearchParams(window.location.search).get('index');
let inputFormEditCatatanJudul = document.getElementById('editJudul');
let inputFormEditCatatanKonten = document.getElementById('editCatatan');
document.addEventListener("DOMContentLoaded", function(){
    dataCatatan = JSON.parse(sessionStorage.getItem('dataCatatan'));
    if (!dataCatatan){
        dataCatatan = [];
    }
    inputFormEditCatatanJudul.value = dataCatatan[arrayIndex][0];
    inputFormEditCatatanKonten.value = dataCatatan[arrayIndex][1];
});
let formEditCatatan = document.getElementById("formEditCatatan");
formEditCatatan.addEventListener("submit", function(event){
    dataCatatan[arrayIndex][0] = inputFormEditCatatanJudul.value;
    dataCatatan[arrayIndex][1] = inputFormEditCatatanKonten.value;
    let updateDataCatatan = JSON.stringify(dataCatatan);
    let konfirmasi = confirm('Apakah anda yakin ingin mengubah catatan ini?');
    if (konfirmasi) {
        alert('Catatan berhasil diupdate!');
        sessionStorage.setItem('dataCatatan', updateDataCatatan);
        formEditCatatan.setAttribute('action', 'index.html');
    } else {
        event.preventDefault();
    }
});
let btnKembali = document.getElementById('kembali-ke-detail');
btnKembali.setAttribute('href', 'detail-catatan.html?index=' + arrayIndex);