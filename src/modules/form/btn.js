export function btnShow() {
    const buttonSchedule = document.getElementById("schedule-btn");
   
    buttonSchedule.onclick = () => {

        // esconde o botão de agendamento.
        buttonSchedule.style.display = "none"

        // exibe o form.
        const form = document.querySelector("form");
        form.style.display = "flex";

        // adiciona o efeito blur.
        const blur = document.querySelector(".blur-background")
        blur.style.display = "flex";
        
        // esconde a div na versão mobile.
        const wrapperMobile = document.querySelector(".wrapper-mobile");
        wrapperMobile.style.display = "none";
    }
}

export function btnHidden() {

    // Esconde o formulário
    const form = document.querySelector("form");
    form.style.display = "none";

    // Remove o efeito blur.
    const blur = document.querySelector(".blur-background");
     blur.style.display = "none";

     // exibe o botão de agendamento apos o fechamento do form.
     const buttonSchedule = document.getElementById("schedule-btn");
     buttonSchedule.style.display = "flex";

     // exibe a div na versão mobile
     const wrapperMobile = document.querySelector(".wrapper-mobile")
     wrapperMobile.style.display = "block"
}

  // fecha o form na versão mobile. 
  const cancel = document.querySelector(".cancel-icon-mobile")
  cancel.addEventListener("click", () => {
    btnHidden()
  })
