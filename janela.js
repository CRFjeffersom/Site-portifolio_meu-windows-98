function criarJanela(titulo) {

    const janela = document.createElement("div");

    janela.className = "window";

    janela.innerHTML = `
        <div class="window-title">
            <span>${titulo}</span>

            <button class="fechar">X</button>

        </div>

        <div class="window-content">

            Conteúdo

        </div>
    `;

    const botaoFechar = janela.querySelector(".fechar");

    botaoFechar.addEventListener("click", () => {
        janela.remove();
    });

    document.getElementById("desktop").appendChild(janela);

}