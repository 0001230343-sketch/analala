document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. LÓGICA DO FORMULÁRIO DE AGENDAMENTO
    // ==========================================
    const agendamentoForm = document.getElementById('agendamentoForm');

    if (agendamentoForm) {
        agendamentoForm.addEventListener('submit', (event) => {
            // Impede o recarregamento padrão da página ao enviar o formulário
            event.preventDefault();

            // Captura dos valores inseridos pelo usuário
            const nome = document.getElementById('nomeCliente').value.trim();
            const email = document.getElementById('emailCliente').value.trim();
            const idade = document.getElementById('idadeCliente').value;
            const corte = document.getElementById('corteCabelo').value;
            const extra = document.getElementById('servicoExtra').value;
            const dia = document.getElementById('diaSemana').value;
            const horario = document.getElementById('horarioAtendimento').value;
            const pagamento = document.getElementById('pagamentoAgendamento').value;

            // Validação simples para garantir que os campos obrigatórios foram selecionados
            if (!corte || !dia || !horario || !pagamento) {
                alert('⚠️ Por favor, preencha todos os campos obrigatórios do agendamento! 🌸');
                return;
            }

            // Exibe mensagem de confirmação personalizada
            const mensagemSucesso = `
🎉 AGENDAMENTO CONFIRMADO COM SUCESSO! 🌸✨
-------------------------------------------
👤 Nome: ${nome}
✂️ Corte: ${corte}
💄 Adicional: ${extra}
🗓️ Dia: ${dia}
🕒 Horário: ${horario}
💳 Pagamento: ${pagamento}

👑 Esperamos você no Salão Anala! 💋🎀
            `;

            alert(mensagemSucesso);

            // Reseta o formulário após a confirmação
            agendamentoForm.reset();
        });
    }

    // ==========================================
    // 2. LÓGICA DO FORMULÁRIO DE LOGIN
    // ==========================================
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('🎉 Login realizado com sucesso! Bem-vinda de volta ao Salão Anala! 🌸✨');
            window.location.href = 'index.html';
        });
    }

    // ==========================================
    // 3. LÓGICA DO CHAT DE DÚVIDAS
    // ==========================================
    const chatToggle = document.getElementById('chatToggle');
    const chatClose = document.getElementById('chatClose');
    const chatBox = document.getElementById('chatBox');
    const chatSend = document.getElementById('chatSend');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');

    const btnAgendar = document.getElementById('btnAgendar');
    const btnHorario = document.getElementById('btnHorario');
    const btnPagamento = document.getElementById('btnPagamento');

    if (chatToggle && chatBox) {
        // Abrir/Fechar Janela do Chat
        chatToggle.addEventListener('click', () => chatBox.classList.toggle('hidden'));

        if (chatClose) {
            chatClose.addEventListener('click', () => chatBox.classList.add('hidden'));
        }

        // Função para responder no chat
        function responderCliente(pergunta) {
            if (!pergunta || pergunta.trim() === '') return;

            // Mensagem do usuário
            const userMsg = document.createElement('p');
            userMsg.className = 'user-msg';
            userMsg.textContent = pergunta;
            chatMessages.appendChild(userMsg);
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // Resposta automática do bot
            setTimeout(() => {
                const botMsg = document.createElement('p');
                botMsg.className = 'bot-msg';

                const p = pergunta.toLowerCase();

                if (p.includes('agendar') || p.includes('como')) {
                    botMsg.textContent = '💖 É super fácil! Basta ir na aba "Agendar Horário", escolher seu corte, dia e horário desejado! ✨';
                } else if (p.includes('horario') || p.includes('dias') || p.includes('atendimento')) {
                    botMsg.textContent = '🗓️ Nosso atendimento é exclusivo de Segunda a Sexta-feira, das 08h às 18h com hora marcada! 🌸';
                } else if (p.includes('pagamento') || p.includes('cartao') || p.includes('pix')) {
                    botMsg.textContent = '💳 Aceitamos Pix (com 5% de desconto no salão!), Cartão de Crédito, Débito e Dinheiro! 💋';
                } else {
                    botMsg.textContent = '✨ Fique à vontade para agendar seu horário no menu principal para garantir sua vaga! 🎀';
                }

                chatMessages.appendChild(botMsg);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 400);
        }

        // Botões rápidos do chat
        if (btnAgendar) {
            btnAgendar.addEventListener('click', () => responderCliente('Como faço para agendar?'));
        }
        if (btnHorario) {
            btnHorario.addEventListener('click', () => responderCliente('Quais os dias e horários de atendimento?'));
        }
        if (btnPagamento) {
            btnPagamento.addEventListener('click', () => responderCliente('Quais as formas de pagamento?'));
        }

        // Envio digitado no chat
        if (chatSend) {
            chatSend.addEventListener('click', () => {
                responderCliente(chatInput.value);
                chatInput.value = '';
            });
        }

        if (chatInput) {
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    responderCliente(chatInput.value);
                    chatInput.value = '';
                }
            });
        }
    }
});
