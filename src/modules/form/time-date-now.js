import dayjs from "dayjs";

const dateHeader = document.getElementById("date");
const dateForm = document.getElementById("date-form");
const time = document.getElementById("hour");

export function getTimeAndDate() {
    const formDateToday = dayjs().format("YYYY-MM-DD");
    const timeToday = dayjs().format("HH:mm");

    // Preenche os valores iniciais, caso os campos estejam vazios
    if (!dateForm.value || !time.value) {
        dateHeader.value = formDateToday;
        dateForm.value = formDateToday;
        time.value = timeToday;

        dateForm.min = formDateToday;   // Define a data mínima como sendo a atual
        
       
        updateTimeMin(formDateToday);  // Define o horário mínimo conforme a data escolhida
    }
}

function updateTimeMin(selectedDate) {
    const selectedDay = dayjs(selectedDate);
    const now = dayjs(); // Data e hora atual

    if (selectedDay.isSame(now, 'day')) {

        // Se a data for hoje, o horário mínimo será o horário atual
        time.min = now.format("HH:mm");
        time.max = "21:00";  
        time.setCustomValidity("");

    } else if (selectedDay.isAfter(now, 'day')) {

        // Se a data for no futuro, o horário mínimo será "09:00"
        time.min = "09:00";
        time.max = "21:00";  
        time.setCustomValidity(""); 
        
    } else {
        // Se a data for no passado, bloquear a seleção
        time.setCustomValidity("");  
        time.value = ""; 
        time.min = now.format("HH:mm");  
        time.max = "21:00"; 
    }
}

// Evento para atualizar o valor de time.min quando a data for alterada
dateForm.addEventListener('change', (event) => {
    updateTimeMin(event.target.value);
});

// Evento para mostrar a mensagem de erro personalizada se a entrada for inválida.
time.addEventListener("invalid", (event) => {
     if (time.validity.rangeUnderflow) {
        event.target.setCustomValidity("Não é possível agendar nesse horário, tente novamente em outro horário.");
    }
});

// Evento para mostrar a mensagem de erro personalizada se a entrada for inválida.
time.addEventListener("invalid", (event) => {
    if (time.validity.rangeOverflow) {
        event.target.setCustomValidity("Não é possível agendar nesse horário, tente novamente em outro horário.")
    }
})

// Evento para limpar a mensagem de erro quando o usuário tentar corrigir
time.addEventListener("input", (event) => {
    event.target.setCustomValidity("");
});
