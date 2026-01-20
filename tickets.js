document.addEventListener("DOMContentLoaded", () => {

    const card = document.getElementById("boletos-card");
    const texto = document.getElementById("boletos-texto");

    if (!card || !texto) return;

    //const path = window.location.pathname.replace("/", "");

    const params = new URLSearchParams(window.location.search);
    const path = params.get("ruta");


    // Página principal → ocultar
    if (path === "" || path === "index.html") {
        card.style.display = "none";
        return;
    }

    const invitados = {
        "un-boleto": 1,
        "dos-boletos": 2,
        "tres-boletos": 3,
        "cuatro-boletos": 4,
        "cinco-boletos": 5,
        "seis-boletos": 6,
        "siete-boletos": 7

    };

    const boletos = invitados[path];

    if (boletos) {
        card.style.display = "block";
        texto.innerHTML = `
        Invitación válida para <strong>${boletos}</strong>
        ${boletos === 1 ? "persona" : "personas"}
        `;

        
    } else {
        card.style.display = "none";
    }
});
