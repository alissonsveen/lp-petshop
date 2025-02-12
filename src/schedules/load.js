import { scheduleShow } from "./show.js";
import { scheduleFetchByDay} from "../services/schedule-fetch-By-Day.js"

// seleciona o input data do header.
const selectedDate = document.querySelector("input[type='date']")

export async function schedulesDay() {

    // recupera a data.
    const date = selectedDate.value

    // filtra pelo o dia. 
   const dailySchedules = await scheduleFetchByDay({date})

   // recarrega os agendamentos.
   scheduleShow({dailySchedules})

}

// quando a data mudar vai filtrar recarregar os agendamentos do dia selecionado.
selectedDate.addEventListener("change", async () => {
    await schedulesDay();
});
