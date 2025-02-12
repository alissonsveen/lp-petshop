import { getCombinedDateTime } from "./date-change";
import { getTimeAndDate } from "./time-date-now";
import { btnHidden } from "./btn" 
import { scheduleNew } from "../../services/schedule-new"
import { schedulesDay } from "../../schedules/load"

const form = document.querySelector("form");
const clientName = document.getElementById("name");
const petName = document.getElementById("pet");
const dateForm = document.getElementById("date-form");
const time = document.getElementById("hour");
const infos = document.getElementById("info");
const telNumber = document.getElementById("number")

// Chama a função que mostra a hora e data atual, antes de interagir com o formulário
getTimeAndDate();

form.onsubmit = async (event) => {

    // Previne o comportamento padrão de carregar a página.
    event.preventDefault();

    try {

        // Obtém o nome do cliente
        const name = clientName.value.trim(); 

        // Verificando se o campo não está vazio
        if (!name) {
            return alert("Informe o nome do cliente!");
        }

        // Obtém o nome do pet
        const pet = petName.value.trim();


        if (!pet) {
            return alert("Informe o nome do pet!");
        }

        // Obtém informações sobre o serviço
        const info = infos.value.trim();

        if (!info) {
            return alert("Por favor, Informe o serviço a ser prestado!");
        }

        // Verifica se a data e a hora estão preenchidas corretamente
        let when = getCombinedDateTime();
        console.log(when);

        if (!when) {
            // Pergunta se o usuário quer usar o horário atual
            const userConfirmed = confirm("Tem certeza que deseja selecionar o horário atual?");

            if (userConfirmed) {
                getTimeAndDate();  
                
                dateForm.dispatchEvent(new Event('change'));
                time.dispatchEvent(new Event('change'));

          
                when = getCombinedDateTime();
                console.log(when); 

                 btnHidden();
            } else {
                // O usuário não confirmou, então não podemos prosseguir sem selecionar uma data e hora.
                return alert("Por favor, selecione a data e o horário!");
            }
        }

        // gera um id. 
        const id = new Date().getTime().toString()
        console.log(id)

        // Faz o agendamento.
        await scheduleNew ({
            id,
            name,
            pet,
            info,
            when
        })

    //Recarrega os agendamentos.
       await schedulesDay()

       // chama a funcão para fechar o form
       btnHidden();


       // Limpa os inputs do formulário.
        clientName.value = ""
        petName.value = ""
        infos.value = ""
        telNumber.value = ""

    } catch (error) {
        console.error(error);
    }

};

