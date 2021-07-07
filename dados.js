let data = {};
let dados1 = [];

function salvarDados(){
    //SECTION-01
    data.select = document.getElementById('select').value;

    if(document.getElementById("name").value.length > 3){
        data.name = document.getElementById('name').value;
        document.getElementById('myspan').innerHTML= data.name;
    }

    if(document.getElementById("email").value.length > 3){
        data.email = document.getElementById('email').value;
    }

    if(document.getElementById("office").value.length > 3){
        data.office = document.getElementById('office').value;
    }


    const option01 = document.getElementById('ate50');
    const option02 = document.getElementById('ate300');
    const option03 = document.getElementById('ate1000');
    const option04 = document.getElementById('acima1000');

    if(option01.checked){
        const dados = option01.value;
        data.amountEmployes = dados
    }
    
    if(option02.checked){
        const dados = option02.value;
        data.amountEmployes = dados
    }

    if(option03.checked){
        const dados = option03.value;
        data.amountEmployes = dados
    }

    if(option04.checked){
        const dados = option04.value;
        data.amountEmployes = dados
    }

    //SECTION-02
    const dataLake = document.getElementById('s2option1');
    const lakeLocal = document.getElementById('lakeLocal');
    const lakeAWS = document.getElementById('lakeAWS');
    const lakeAzure = document.getElementById('lakeAzure');
    const lakeGCP = document.getElementById('lakeGCP');
    const lakeOutro = document.getElementById('lakeOutro');

    const dataWare = document.getElementById('s2option2');
    const wareLocal = document.getElementById('wareLocal');
    const wareAWS = document.getElementById('wareAWS');
    const wareAzure = document.getElementById('wareAzure');
    const wareGCP = document.getElementById('wareGCP');
    const wareOutro = document.getElementById('wareOutro');

    const governance = document.getElementById('s2option3');
    const machineLearning = document.getElementById('s2option4');
    const selfService = document.getElementById('s2option5');
    const realTimeAnalytics = document.getElementById('s2option6');
        

    if (lakeLocal.checked){
        const dados = lakeLocal.value
        dados1[0] = dados + " "
    }else{
        dados1[0] = ""
    }
    if (lakeAWS.checked){
        const dados = lakeAWS.value
        dados1[1] = dados + " "
    }else{
        dados1[1] = ""
    }
    if (lakeAzure.checked){
        const dados = lakeAzure.value
        dados1[2] = dados + " "
    }else{
        dados1[2] = ""
    }
    if (lakeGCP.checked){
        const dados = lakeGCP.value
        dados1[3] = dados + " "
    }else{
        dados1[3] = ""
    }
    if (lakeOutro.checked){
        const dados = lakeOutro.value
        dados1[4] = dados + " "
    }else{
        dados1[4] = ""
    }
    
    if (dataLake.checked){
        data.dataLake = dados1[0] + dados1[1] + dados1[2] + dados1[3] + dados1[4]
    }

    if (wareLocal.checked){
        const dados = wareLocal.value
        dados1[5] = dados + " "
    }else{
        dados1[5] = ""
    }
    if (wareAWS.checked){
        const dados = wareAWS.value
        dados1[6] = dados + " "
    }else{
        dados1[6] = ""
    }
    if (wareAzure.checked){
        const dados = wareAzure.value
        dados1[7] = dados + " "
    }else{
        dados1[7] = ""
    }
    if (wareGCP.checked){
        const dados = wareGCP.value
        dados1[8] = dados + " "
    }else{
        dados1[8] = ""
    }
    if (wareOutro.checked){
        const dados = wareOutro.value
        dados1[9] = dados + " "
    }else{
        dados1[9] = ""
    }

    if (dataWare.checked){
        data.dataWare = dados1[5] + dados1[6] + dados1[7] + dados1[8] + dados1[9]
    }
    if (governance.checked){
        const dados = governance.value
        data.governance = dados
    }
    if (machineLearning.checked){
        const dados = machineLearning.value
        data.machineLearning = dados
    }
    if (selfService.checked){
        const dados = selfService.value
        data.selfService = dados
    }
    if (realTimeAnalytics.checked){
        const dados = realTimeAnalytics.value
        data.realTimeAnalytics = dados
    }
    
    //SECTION-03
    if(document.getElementById("analytics").value.length >= 1){
        data.analytics = document.getElementById('analytics').value;
    }

    if(document.getElementById("history").value.length >= 1){
        data.history = document.getElementById('history').value;
    }

    //SECTION-04
    if(document.getElementById("message").value.length >= 1){
        data.message = document.getElementById('message').value;
    }

    document.getElementById('cabecalho').innerHTML="FINALIZADO COM SUCESSO!";

    console.log(data);
    
}

function enviarDados(){
    event.preventDefault()

    let url = "mail.php"
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(JSON.stringify(data))

    request.onload = function(){
        console.log(this.responseText)
    }
    return request.responseText;
    
}

var imprimir = document.getElementById('imprimir');
    
imprimir.addEventListener('click', function click() {
    console.log('Aqui vai os dados para imprimir');
    imprimir.removeEventListener('click', click);
});


var button = document.getElementById('sendEmail');
    
button.addEventListener('click', function click() {
    data.emailForUser = "Y"; 
    enviarDados();
    
    alert("Email enviado com sucesso");
    button.removeEventListener('click', click);
});


const dataLake = document.getElementById('s2option1');
const lakeLocal = document.getElementById('lakeLocal');
const lakeAWS = document.getElementById('lakeAWS');
const lakeAzure = document.getElementById('lakeAzure');
const lakeGCP = document.getElementById('lakeGCP');
const lakeOutro = document.getElementById('lakeOutro');

function verifyCheck() {
    if(lakeLocal.checked || lakeAWS.checked || lakeAzure.checked || lakeGCP.checked || lakeOutro.checked){
        document.getElementById('s2option1').disabled = true;
        document.getElementById('s2option1').checked = true;
    }else{
        document.getElementById('s2option1').disabled = false;
    }
}

const wareLocal = document.getElementById('wareLocal');
const wareAWS = document.getElementById('wareAWS');
const wareAzure = document.getElementById('wareAzure');
const wareGCP = document.getElementById('wareGCP');
const wareOutro = document.getElementById('wareOutro');

function verifyCheck2() {
    if(wareLocal.checked || wareAWS.checked || wareAzure.checked || wareGCP.checked || wareOutro.checked){
        document.getElementById('s2option2').disabled = true;
        document.getElementById('s2option2').checked = true;
    }else{
        document.getElementById('s2option2').disabled = false;
    }
}