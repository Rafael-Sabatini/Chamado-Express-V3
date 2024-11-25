document.addEventListener("DOMContentLoaded", () => {

    const problemCheckbox = document.getElementById("problemCheckbox");
    const doubtCheckbox = document.getElementById("doubtCheckbox");
    const contactCheckbox = document.getElementById("contactCheckbox");
    const humorSelection = document.getElementById("humorSelection")
    const upsellSituationYes = document.getElementById("upsellSituationYes");
    const upsellSituationNo = document.getElementById("upsellSituationNo");
    const errorPrintYes = document.getElementById("errorPrintYes");
    const errorPrintNo = document.getElementById("errorPrintNo");

    const docNumber = document.getElementById("docNumber");
    const errorMessage = document.getElementById("errorMessage");
    const problemCause = document.getElementById("problemCause");
    const resolution = document.getElementById("resolution");
    const clientFeedback = document.getElementById("clientFeedback");
    const upsellDescription = document.getElementById("upsellDescription");

    const problemLabel = document.getElementById('problemLabel');
    const resolutionLabel = document.getElementById('resolutionLabel');

    
    // Array para armazenar os textos formatados
    let textsToCopy = [];

    resolution.setAttribute("data-placeholder", "Descreva a resolução do problema");

    problemCheckbox.addEventListener('change', function () {
        if (this.checked) {
            doubtCheckbox.checked = false;
            contactCheckbox.checked = false;

            docNumber.disabled = false;
            errorMessage.disabled = false;
            problemCause.disabled = false;

            resolution.setAttribute("data-placeholder", "Descreva a resolução do problema");
            problemCause.placeholder = "Descreva o que ocasionou o erro ou situação"
        }
    });

    doubtCheckbox.addEventListener('change', function () {
        if (this.checked) {
            problemCheckbox.checked = false;
            contactCheckbox.checked = false;

            docNumber.disabled = true;
            errorMessage.disabled = true;

            problemLabel.innerHTML = "Dúvida do cliente"
            resolutionLabel.innerHTML = "Explicação"

            resolution.setAttribute("data-placeholder", "Descreva sua explicação para o cliente");
            problemCause.placeholder = "Descreva a dúvida do cliente"
        }
        else{
            document.getElementById('docNumber').disabled = false;
            errorMessage.disabled = false;

            
            problemLabel.innerHTML = "Causa do Problema"
            resolutionLabel.innerHTML = "Resolução"

            resolution.setAttribute("data-placeholder", "Descreva a resolução do problema");
            problemCause.placeholder = "Descreva o que ocasionou o erro ou situação"
        }
    });

    contactCheckbox.addEventListener('change', function () {
        if (this.checked) {
            doubtCheckbox.checked = false;
            problemCheckbox.checked = false;

            docNumber.disabled = true;
            errorMessage.disabled = true;
            problemCause.disabled = true;

            resolutionLabel.innerHTML = "Relato do Contato"
            resolution.setAttribute("data-placeholder", "Descreva o relato do contato com o cliente");
        }
        else{
            docNumber.disabled = false;
            errorMessage.disabled = false;
            problemCause.disabled = false;

            resolutionLabel.innerHTML = "Resolução"
            resolution.setAttribute("data-placeholder", "Descreva a resolução do problema");
        }
    });

    errorPrintYes.addEventListener('change', function () {
        if (this.checked) errorPrintNo.checked = false;
    })

    errorPrintNo.addEventListener('change', function () {
        if (this.checked) errorPrintYes.checked = false;
    })

    function addText(label, value) {
        if (value) {
            textsToCopy.push(`${label}: ${value}\n\n`).toString();
        }
    }

    document.getElementById('copyBtn').addEventListener('click', function (event) {
        event.preventDefault();

        if(contactCheckbox.checked) {
            if (!resolution.innerText) {
                createNotif("Informe a resolução do suporte", "error")
                return;
            }
            else if (humorSelection.value === 'Selecione') {
                createNotif("Selecione o humor do cliente", "error")
                return;
            }
            else if (!upsellSituationNo.checked && !upsellSituationYes.checked) {
                createNotif("Seleciona a situação do upsell", "error")
                return;
            }
            else if (upsellSituationYes.checked && upsellDescription.value === "") {
                createNotif("Descreva a situação do upsell", "error")
                return;
            }
            else if (upsellSituationNo.checked && upsellDescription.value === "") {
                createNotif("Descreva a situação do upsell", "error")
                return;
            }

            addText('TIPO DE CHAMADO', 'Contato Ativo');
            addText('RESOLUÇÃO', resolution.innerText);
            addText('FEEDBACK DO CLIENTE', clientFeedback.value);
            addText('HUMOR DO CLIENTE', humorSelection.value);
            addText('UPSELL', document.querySelector('#upsellSituationYes').checked ? 'Sim' : (document.querySelector('#upsellSituationNo').checked ? 'Não' : ''));
            addText('DESCRIÇÃO UPSELL', upsellDescription.innerText);

            resolution.innerText = "";
            clientFeedback.value = "";
            humorSelection.value = "Selecione";
            upsellDescription.innerText = "";
    
            let finalText = textsToCopy.join('');
            navigator.clipboard.writeText(finalText);
            createNotif("Texto Copiado!", "success");
    
            contactCheckbox.checked = false;
            upsellSituationYes.checked = false;
            upsellSituationNo.checked = false;
            errorPrintYes.checked = false;
            errorPrintNo.checked = false

            docNumber.disabled = false;
            errorMessage.disabled = false;
            problemCause.disabled = false;

            resolution.setAttribute("data-placeholder", "Descreva a resolução do problema");
        }
        else if(doubtCheckbox.checked) {

            if (!resolution.innerText) {
                createNotif("Informe a resolução do suporte", "error")
                return;
            }
            else if(problemCause.value == ""){
                createNotif("Descreva a causa do problema", "error")
                return;
            }
            else if (humorSelection.value === 'Selecione') {
                createNotif("Selecione o humor do cliente", "error")
                return;
            }
            else if (!upsellSituationNo.checked && !upsellSituationYes.checked) {
                createNotif("Seleciona a situação do upsell", "error")
                return;
            }
            else if (upsellSituationYes.checked && upsellDescription.value === "") {
                createNotif("Descreva a situação do upsell", "error")
                return;
            }
            else if (upsellSituationNo.checked && upsellDescription.value === "") {
                createNotif("Descreva a situação do upsell", "error")
                return;
            }

            addText('TIPO DE CHAMADO', 'Dúvida');
            addText('CAUSA DO PROBLEMA', problemCause.value);
            addText('RESOLUÇÃO', resolution.innerText);
            addText('FEEDBACK DO CLIENTE', clientFeedback.value);
            addText('HUMOR DO CLIENTE', humorSelection.value);
            addText('UPSELL', document.querySelector('#upsellSituationYes').checked ? 'Sim' : (document.querySelector('#upsellSituationNo').checked ? 'Não' : ''));
            addText('DESCRIÇÃO UPSELL', upsellDescription.innerText);
            addText('MENSAGENS OU PRINT DE ERROS', document.querySelector('#errorPrintYes').checked ? 'Sim' : (document.querySelector('#errorPrintNo').checked ? 'Não' : ''));

            let finalText = textsToCopy.join('');
            navigator.clipboard.writeText(finalText);
            createNotif("Texto Copiado!", "success");

            problemCause.value = '';
            resolution.innerText = '';
            clientFeedback.value = '';
            upsellDescription.innerText = '';

            humorSelection.value = 'Selecione';

            doubtCheckbox.checked = false;
            upsellSituationYes.checked = false;
            upsellSituationNo.checked = false;
            errorPrintYes.checked = false;
            errorPrintNo.checked = false;

            docNumber.disabled = false;
            errorMessage.disabled = false;

            resolution.setAttribute("data-placeholder", "Descreva a resolução do problema");
            problemCause.placeholder = "Descreva o que ocasionou o erro ou situação"
        }
        else{

        if (!problemCheckbox.checked && !doubtCheckbox.checked) {
            createNotif("Selecione um tipo de chamado", "error");
            return;
        }
        else if (!problemCause.value) {
            createNotif("Descreva a causa do problema", "error")
            return;
        }
        else if (!resolution.innerText) {
            createNotif("Informe a resolução do suporte", "error")
            return;
        }
        else if (humorSelection.value === 'Selecione') {
            createNotif("Selecione o humor do cliente", "error")
            return;
        }
        else if (!upsellSituationNo.checked && !upsellSituationYes.checked) {
            createNotif("Seleciona a situação do upsell", "error")
            return;
        }
        else if (upsellSituationYes.checked && upsellDescription.value === "") {
            createNotif("Descreva a situação do upsell", "error")
            return;
        }
        else if (upsellSituationNo.checked && upsellDescription.value === "") {
            createNotif("Descreva a situação do upsell", "error")
            return;
        }
        else {

            // Capturar os valores e adicionar ao array
            addText('TIPO DE CHAMADO', 'Problema');
            addText('NÚMERO DO DOCUMENTO', docNumber.value);
            addText('MENSAGEM DE ERRO', errorMessage.value);
            addText('CAUSA DO PROBLEMA', problemCause.value);
            addText('RESOLUÇÃO', resolution.innerText);
            addText('FEEDBACK DO CLIENTE', clientFeedback.value);
            addText('HUMOR DO CLIENTE', humorSelection.value);
            addText('UPSELL', document.querySelector('#upsellSituationYes').checked ? 'Sim' : (document.querySelector('#upsellSituationNo').checked ? 'Não' : ''));
            addText('DESCRIÇÃO UPSELL', upsellDescription.innerText);
            addText('MENSAGENS OU PRINT DE ERROS', document.querySelector('#errorPrintYes').checked ? 'Sim' : (document.querySelector('#errorPrintNo').checked ? 'Não' : ''));

            // Unir todos os textos em uma string com quebras de linha
            let finalText = textsToCopy.join('');
            navigator.clipboard.writeText(finalText);
            createNotif("Texto Copiado!", "success");

            docNumber.value = '';
            errorMessage.value = '';
            problemCause.value = '';
            resolution.innerText = '';
            clientFeedback.value = '';
            upsellDescription.innerText = '';

            humorSelection.value = 'Selecione';

            problemCheckbox.checked = false;
            upsellSituationYes.checked = false;
            upsellSituationNo.checked = false;
            errorPrintYes.checked = false;
            errorPrintNo.checked = false;

            resolution.setAttribute("data-placeholder", "Descreva a resolução do problema");
            problemCause.placeholder = "Descreva o que ocasionou o erro ou situação"
        }
    }
    })

    function createNotif(message, type) {
        let notifSpan = document.getElementById("notifSpan");
        const notifsBox = document.getElementById("notifsBox");

        if (!notifSpan) {
            notifSpan = document.createElement("span");
            notifSpan.id = "notifSpan";
            notifSpan.innerHTML = message;
            notifsBox.classList.add("slideIn");
            notifSpan.classList.add(type);
            notifsBox.appendChild(notifSpan);
        }

        setTimeout(() => {
            notifsBox.classList.replace("slideIn", "slideOut");
        }, 2700)

        setTimeout(() => {
            notifsBox.classList.remove("slideOut");
            notifSpan.classList.remove(type);
            if (notifSpan.parentNode) notifsBox.removeChild(notifSpan);
        }, 3000)
    }
})

