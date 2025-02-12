import dayjs from "dayjs";

const dateForm = document.getElementById("date-form");
const time = document.getElementById("hour");

let combinedDateTime;

// Função que recebe a data e a hora e as combina
export function updateDateTime(selectedDate, selectedTime) {
    combinedDateTime = dayjs(`${selectedDate} ${selectedTime}`, "YYYY-MM-DD HH:mm");
}

// exporta a função para o submit.
export function getCombinedDateTime() {
    return combinedDateTime; 
}

// Eventos para disparar a validação quando o usuário selecionar uma nova data ou hora
dateForm.addEventListener('change', () => {
    const selectedDate = dateForm.value; 
    const selectedTime = time.value; 
    updateDateTime(selectedDate, selectedTime); 
});

time.addEventListener('change', () => {
    const selectedDate = dateForm.value;
    const selectedTime = time.value;
    updateDateTime(selectedDate, selectedTime); // Chama a função para validar
});
