// ### Menampilkan Catatan ###
document.addEventListener("DOMContentLoaded", function() {
    let dataCatatan;

    // Pengecekkan session storage "dataCatatan"
    if (sessionStorage.getItem('dataCatatan')){
        // Mendapatkan data dari session storage saat halaman dimuat
        dataCatatan = JSON.parse(sessionStorage.getItem('dataCatatan'));
    } else {
        sessionStorage.setItem('dataCatatan', JSON.stringify({}));
    }

    // Menarget div "main-content" untuk dimanipulasi
    let mainContent = document.getElementById("main-content");

    // Pengecekkan data dari dataCatatan
    /*
     - jika dataCatatan tidak ada data, maka blok if dijalankan,
     - jika data ada blok else dijalankan
    */
    if (Object.keys(dataCatatan).length === 0) {
        let divTampilCatatan = document.createElement("h1");
            divTampilCatatan.classList.add("card", "text-center", "m-2");
            divTampilCatatan.textContent = "Catatan masih kosong";
        mainContent.appendChild(divTampilCatatan);
    } else {
        // Loop untuk menampilkan semua catatan
        for(let index = 0; index < dataCatatan.length; index++) {
            // Membuat elemen untuk menampilkan catatan dengan Class "Bootstrap"
            let divTampilCatatan = document.createElement("div");
                divTampilCatatan.classList.add("card", "text-center", "m-2");
                divTampilCatatan.style.width = "18rem";

            let cardBody = document.createElement("div");
                cardBody.classList.add("card-body");

            let cardTitle = document.createElement("h4");
                cardTitle.classList.add("fw-bold")
                cardTitle.textContent = "Judul : " + dataCatatan[index][0];

            let cardText = document.createElement("p");
                cardText.classList.add("card-text");
                cardText.textContent = dataCatatan[index][1];

            // Menambahkan elemen button "Edit"
            let btnHForm = document.createElement("button");
                btnHForm.classList.add("btn", "btn-warning", "fw-bold");
                btnHForm.setAttribute("type", "submit");
                btnHForm.textContent = "Edit";

                // Menambahkan Event/Function ketika tombol "Edit" di tekan.
                btnHForm.addEventListener("click", function(){
                    let hiddenForm = document.createElement("form");
                        hiddenForm.setAttribute("action", "edit-catatan.html?" + index);

                // Membuat hiddenInput untuk menampung nilai index
                    let hiddenInput = document.createElement("input");
                        hiddenInput.setAttribute("type", "hidden");
                        hiddenInput.setAttribute("name", "index");
                        hiddenInput.setAttribute("value", index);

                // Menambahkan hiddenInput ke dalam hiddenForm
                    hiddenForm.appendChild(hiddenInput);
                    cardBody.appendChild(hiddenForm);

                    hiddenForm.submit();
                });

            // Menambahkan elemen button "Delete"

        // Menambahkan elemen ke dalam cardBody
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(btnHForm);

            divTampilCatatan.appendChild(cardBody);

            // Menambahkan elemen catatan ke dalam elemen utama
            mainContent.appendChild(divTampilCatatan);
        }
    }
});

// Fungsi untuk menangani Error
function handleRefreshOnError() {
    window.location.reload(); // Memuat ulang halaman
}

// Menambahkan event listener untuk menangani Error
window.addEventListener('error', handleRefreshOnError);