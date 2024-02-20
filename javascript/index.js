document.addEventListener("DOMContentLoaded", function() {
    let dataCatatan;
    if (sessionStorage.getItem('dataCatatan')){
        dataCatatan = JSON.parse(sessionStorage.getItem('dataCatatan'));
    } else {
        sessionStorage.setItem('dataCatatan', JSON.stringify({}));
    }
    let mainContent = document.getElementById("main-content");
    if (Object.keys(dataCatatan).length === 0) {
        let divTampilCatatan = document.createElement("h1");
            divTampilCatatan.classList.add("card", "text-center", "m-2");
            divTampilCatatan.textContent = "Catatan masih kosong";
        mainContent.appendChild(divTampilCatatan);
    } else {
        for(let index = 0; index < dataCatatan.length; index++) {
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
            let btnHForm = document.createElement("button");
                btnHForm.classList.add("btn", "btn-primary", "fw-bold");
                btnHForm.textContent = "Detail";
                btnHForm.addEventListener("click", function(){
                    let hiddenForm = document.createElement("form");
                        hiddenForm.setAttribute("action", "detail-catatan.html?" + index);
                    let hiddenInput = document.createElement("input");
                        hiddenInput.setAttribute("type", "hidden");
                        hiddenInput.setAttribute("name", "index");
                        hiddenInput.setAttribute("value", index);
                    hiddenForm.appendChild(hiddenInput);
                    cardBody.appendChild(hiddenForm);
                    hiddenForm.submit();
                });
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(btnHForm);
            divTampilCatatan.appendChild(cardBody);
            mainContent.appendChild(divTampilCatatan);
        }
    }
});

function handleRefreshOnError() {
    window.location.reload();
}
window.addEventListener('error', handleRefreshOnError);

navigator.serial.getPorts().then((ports) => {
    // Initialize the list of available ports with `ports` on page load.
  });