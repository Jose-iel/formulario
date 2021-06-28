let data = {};

function salvarDados(){
    //SECTION-01
    data.select = document.getElementById('select').value;

    if(document.getElementById("name").value.length > 3){
        data.name = document.getElementById('name').value;
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
        data.ate50 = dados
    }
    
    if(option02.checked){
        const dados = option02.value;
        data.ate300 = dados
    }

    if(option03.checked){
        const dados = option03.value;
        data.ate1000 = dados
    }

    if(option04.checked){
        const dados = option04.value;
        data.acima1000 = dados
    }

    //SECTION-02
    const dataLake = document.getElementById('s2option1');
    const dataWhere = document.getElementById('s2option2');
    const governanca = document.getElementById('s2option3');
    const machieLearning = document.getElementById('s2option4');
    const selfService = document.getElementById('s2option5');
    const realTimeAnalytics = document.getElementById('s2option6');

    if (dataLake.checked){
        const dados = dataLake.value
        data.dataLake = dados
    }
    if (dataWhere.checked){
        const dados = dataWhere.value
        data.dataWhere = dados
    }
    if (governanca.checked){
        const dados = governanca.value
        data.governanca = dados
    }
    if (machieLearning.checked){
        const dados = machieLearning.value
        data.machieLearning = dados
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
    const nuvem = document.getElementById('s3option2');
    const aws = document.getElementById('s3option3');
    const azure = document.getElementById('s3option4');
    const gcp = document.getElementById('s3option5');
    const outros = document.getElementById('s3option6');
    const hibrido = document.getElementById('s3option7');

    if (onPremises.checked){
        const dados = onPremises.value
        data.onPremises = dados
    }
    if (nuvem.checked){
        const dados = nuvem.value
        data.nuvem = dados
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
    if (outros.checked){
        const dados = outros.value
        data.outros = dados
    }
    if (hibrido.checked){
        const dados = hibrido.value
        data.hibrido = dados
    }

    //SECTION-04
    if(document.getElementById("analytics").value.length > 3){
        data.analytics = document.getElementById('analytics').value;
    }

    if(document.getElementById("history").value.length > 3){
        data.history = document.getElementById('history').value;
    }

    //SECTION-05
    if(document.getElementById("message").value.length > 3){
        data.message = document.getElementById('message').value;
    }
    
    console.log(data);
    //let arqJSON = JSON.stringify(data);
}

function imprimir(){
    console.log('Aqui vai os dados para imprimir');
}