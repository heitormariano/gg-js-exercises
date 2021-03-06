function verificarIdade() {
    //variáveis iniciais
    let tipoPessoa = '';
    let sexoEscolhido = '';

    let msg = window.document.getElementById('mensagem');
    let img = window.document.getElementById('foto');

    let anoAtual = new Date().getFullYear();
    let anoInformado = window.document.getElementById('idade').valueAsNumber;

    if (anoInformado.length != 0 && anoInformado <= anoAtual) {
        //calculando idade
        let idade = anoAtual - anoInformado;

        //recuperando os inputs do tipo radio
        let radios = window.document.getElementsByName('sexo');

        //recuperando o valor (value) do sexo selecionado
        for (let index = 0; index < radios.length; index++) {
            if (radios[index].checked) {
                sexoEscolhido = radios[index].value;
            }
        }

        //definição do tipo de pessoa e a imagem específica
        if (idade >= 0 && idade < 12) {
            tipoPessoa = 'Criança';
            if (sexoEscolhido === 'masculino') {
                img.src = './img/crianca-menino_editado.png';
            } else {
                img.src = './img/crianca-menina_editado.png';
            }
        } else if (idade >= 12 && idade < 18) {
            tipoPessoa = 'Adolescente';
            if (sexoEscolhido === 'masculino') {
                img.src = './img/adolescente-homem_editado.png';
            } else {
                img.src = './img/adolescente-mulher_editado.png';
            }
        } else if (idade >= 18 && idade < 60) {
            tipoPessoa = 'Adulto';
            if (sexoEscolhido === 'masculino') {
                img.src = './img/adulto-homem_editado.png';
            } else {
                img.src = './img/adulto-mulher_editado.png';
            }
        } else {
            tipoPessoa = 'Idoso';
            if (sexoEscolhido === 'masculino') {
                img.src = './img/idoso-homem_editado.png';
            } else {
                img.src = './img/idoso-mulher_editado.png';
            }
        }

        //compondo a mensagem final
        msg.innerText = `${tipoPessoa} com ${idade} ano(s) de idade`;
    } else {
        window.alert('[ERRO] Verifique o ano informado');
    }
}
