// Simulasi Database SQL

function query(method, data) {
    switch (method) {
        case "create":
            createData(data);
            break;
        case "read":
            return readData();
        case "update":
            updateData(data);
            break;
        case "delete":
            deleteData();
            break;
        default:
            console.error("Method tidak valid.");
            break;
    }
}

// ## CREATE
function createData(data) {
    // Mendapatkan data yang ada dalam localStorage
    let existingData = localStorage.getItem('dataCatatan');
    let newData;

    // Jika data sudah ada sebelumnya, kita tambahkan data baru ke dalamnya
    if (existingData) {
        existingData = JSON.parse(existingData);
        existingData.push(data);
        newData = existingData;
    } else {
        // Jika tidak ada data sebelumnya, kita membuat array baru
        newData = [data];
    }

    // Menyimpan data baru ke dalam localStorage
    localStorage.setItem('dataCatatan', JSON.stringify(newData));
}

// ## READ
function readData() {
    // Membaca dan mengembalikan data dari localStorage
    return JSON.parse(localStorage.getItem('dataCatatan'));
}

// ## UPDATE
function updateData(data) {
    // Mendapatkan data yang ada dalam localStorage
    let existingData = localStorage.getItem('dataCatatan');

    if (existingData) {
        // Mengupdate data dalam localStorage
        localStorage.setItem('dataCatatan', JSON.stringify(data));
    } else {
        console.error("Tidak ada data untuk diperbarui.");
    }
}

// ## DELETE
function deleteData() {
    // Menghapus data dari localStorage
    localStorage.removeItem('dataCatatan');
}

sessionStorage.setItem('query', query());