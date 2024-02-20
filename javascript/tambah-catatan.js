let formTambahCatatan = document.getElementById('formTambahCatatan');
formTambahCatatan.addEventListener("submit", function(){
    let catatanBaruJudul = document.getElementById("judulBaru").value;
    let catatanBaruKonten = document.getElementById("catatanBaru").value;
    tambahCatatan(catatanBaruJudul, catatanBaruKonten);
});
function tambahCatatan(dataJudulBaru, dataKontenBaru) {
    if (dataJudulBaru && dataKontenBaru) {
        let dataStorage = sessionStorage.getItem('dataCatatan');
        let inisiasiArray = [];
        if (dataStorage){
            dataStorage = JSON.parse(dataStorage);
            if(Object.keys(dataStorage).length == 0){
                dataStorage = [];
            }
        } else {
            dataStorage = {};
        }
        inisiasiArray.push([dataJudulBaru, dataKontenBaru]);
        let gabunganArray = [...dataStorage, ...inisiasiArray];
        let arrayToString = JSON.stringify(gabunganArray);
        sessionStorage.setItem('dataCatatan', arrayToString);
        alert('Catatan baru berhasil ditambahkan!');
        formTambahCatatan.setAttribute('action', 'index.html');
    } else {
        alert("Judul dan konten catatan harus diisi!");
    }
}
