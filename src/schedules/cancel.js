import { schedulesDay } from './load'
import { scheduleCancel } from '../services/schedule-cancel'

const periods = document.querySelectorAll(".period");

periods.forEach((period) => {
    period.addEventListener("click", async (event) => {
        
        // Verifica se o clique foi no botão de cancelamento
        if (event.target.classList.contains("cancel-a")) {


            const item = event.target.closest("li");

            const { id } = item.dataset;

            if (id) {
                // Verifica se a requisição já está em andamento
                if (event.target.dataset.processing === "true") {
                    return; 
                }

                // Marca o botão como em processamento
                event.target.dataset.processing = "true";
                
                // Confirma se o usuário quer cancelar o agendamento
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?");

                if (isConfirm) {
                    try {
                        // Faz a requisição para cancelar o agendamento
                        await scheduleCancel({ id });

                        // Recarrega os agendamentos
                        schedulesDay();
                    } catch (error) {
                        console.error('Erro ao cancelar o agendamento:', error);
                    }
                }

                // Remove a marcação de processamento e reabilita o botão
                event.target.dataset.processing = "false";
            }
        }
    });
});
