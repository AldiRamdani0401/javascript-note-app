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

            let nomorCatatan = index + 1;
            let cardTitle = document.createElement("h6");
                cardTitle.classList.add("fw-bold")
                cardTitle.textContent = "Catatan ke : " + nomorCatatan;

            let cardText = document.createElement("p");
                cardText.classList.add("card-text");
                cardText.textContent = dataCatatan[index][0];

            // Menambahkan elemen button "Detail"
            let btnHForm = document.createElement("button");
                btnHForm.classList.add("btn", "btn-primary", "fw-bold");
                btnHForm.setAttribute("type", "submit");
                btnHForm.textContent = "Detail";

                // Menambahkan Event/Function ketika tombol "Detail" di tekan.
                btnHForm.addEventListener("click", function(){
                    let hiddenForm = document.createElement("form");
                        hiddenForm.setAttribute("action", "detail-catatan.html?" + index);

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