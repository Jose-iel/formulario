let data = {};

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
    const dataWare = document.getElementById('s2option2');
    const governance = document.getElementById('s2option3');
    const machineLearning = document.getElementById('s2option4');
    const selfService = document.getElementById('s2option5');
    const realTimeAnalytics = document.getElementById('s2option6');

    if (dataLake.checked){
        const dados = dataLake.value
        data.dataLake = dados
    }
    if (dataWare.checked){
        const dados = dataWare.value
        data.dataWare = dados
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
    const onPremises = document.getElementById('s3option1');
    const cloud = document.getElementById('s3option2');
    const aws = document.getElementById('s3option3');
    const azure = document.getElementById('s3option4');
    const gcp = document.getElementById('s3option5');
    const others = document.getElementById('s3option6');
    const hybrid = document.getElementById('s3option7');

    if (onPremises.checked){
        const dados = onPremises.value
        data.onPremises = dados
    }
    if (cloud.checked){
        const dados = cloud.value
        data.cloud = dados
    }
    if (aws.checked){
        const dados = aws.value
        data.aws = dados
    }
    if (azure.checked){
        const dados = azure.value
        data.azure = dados
    }
    if (gcp.checked){
        const dados = gcp.value
        data.gcp = dados
    }
    if (others.checked){
        const dados = others.value
        data.others = dados
    }
    if (hybrid.checked){
        const dados = hybrid.value
        data.hybrid = dados
    }

    //SECTION-04
    if(document.getElementById("analytics").value.length >= 1){
        data.analytics = document.getElementById('analytics').value;
    }

    if(document.getElementById("history").value.length >= 1){
        data.history = document.getElementById('history').value;
    }

    //SECTION-05
    if(document.getElementById("message").value.length >= 1){
        data.message = document.getElementById('message').value;
    }

    document.getElementById('cabecalho').innerHTML="FINALIZADO COM SUCESSO";
    
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