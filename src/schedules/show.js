import dayjs from "dayjs";

// Seleciona as sessões manhã, tarde e noite.
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function scheduleShow({ dailySchedules }) {
    try {

        // Limpa os períodos antes de adicionar os novos
        periodMorning.innerHTML = "";
        periodAfternoon.innerHTML = "";
        periodNight.innerHTML = "";

        dailySchedules.forEach((schedule, index) => {

            // cria a li e os items
            const item = document.createElement("li");
            const time = document.createElement("h2");
            const petName = document.createElement("span");
            const name = document.createElement("strong");
            const infos = document.createElement("span");

            // adiciona as info a cada item.
            item.setAttribute("data-id", schedule.id);
            time.textContent = dayjs(schedule.when).format("HH:mm");
            petName.textContent = schedule.pet;
            name.textContent = ` / ${schedule.name}`;
            infos.textContent = schedule.info;

            // cria o botao de remover o agendamento.
            const cancel = document.createElement("a");
            cancel.classList.add("cancel-a")
            cancel.innerText = "Remover agendamento";
            cancel.href = "#";

            // junta tudo ao li.
            petName.append(name);
            item.append(time, petName, infos, cancel);

            const hour = dayjs(schedule.when).hour();

            // Adiciona o item à lista correspondente ao horário
             if (hour <= 12) {
                periodMorning.appendChild(item);
            } else if (hour > 12 && hour <= 18) {
                periodAfternoon.appendChild(item);
            } else {
                periodNight.appendChild(item);
            }

            // Verifica se não é o último item e adiciona o divisor
            if (index < dailySchedules.length - 1) {
                const divider = document.createElement('div');
                divider.id = "divider";  

                // Adiciona o divisor após o item no período correto
                if (hour <= 12) {
                    periodMorning.appendChild(divider);
                } else if (hour > 12 && hour <= 18) {
                    periodAfternoon.appendChild(divider);
                } else {
                    periodNight.appendChild(divider);
                }
            }
        });

    } catch (error) {
        alert("Não foi possível exibir os agendamentos");
    }
}
