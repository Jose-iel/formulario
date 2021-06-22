
const data = {
    name: '',
    email: '',
    office: '',
    workers: '',
    business: '',
    s2option1: '',
    s2option2: '',
    s2option3: '',
    s2option4: '',
    s2option5: '',
    s2option6: '',
    s3option1: '',
    s3option2: '',
    s3option3: '',
    s3option4: '',
    s3option5: '',
    s3option6: '',
    s3option7: '',
    analytics: '',
    history: '',
    message: '',
}

function salvarDados(){
    //SECTION-01
    data.name = document.getElementById('name').value;
    data.email = document.getElementById('email').value;
    data.office = document.getElementById('office').value;
    data.workers = document.getElementById('workers').value;
    data.business = document.getElementById('business').value;

    //SECTION-02
    const s2option1 = document.getElementById('s2option1');
    const s2option2 = document.getElementById('s2option2');
    const s2option3 = document.getElementById('s2option3');
    const s2option4 = document.getElementById('s2option4');
    const s2option5 = document.getElementById('s2option5');
    const s2option6 = document.getElementById('s2option6');

    if (s2option1.checked){
        const dados = s2option1.value
        data.s2option1 = dados
    }
    if (s2option2.checked){
        const dados = s2option2.value
        data.s2option2 = dados
    }
    if (s2option3.checked){
        const dados = s2option3.value
        data.s2option3 = dados
    }
    if (s2option4.checked){
        const dados = s2option4.value
        data.s2option4 = dados
    }
    if (s2option5.checked){
        const dados = s2option5.value
        data.s2option5 = dados
    }
    if (s2option6.checked){
        const dados = s2option6.value
        data.s2option6 = dados
    }
    
    //SECTION-03
    const s3option1 = document.getElementById('s3option1');
    const s3option2 = document.getElementById('s3option2');
    const s3option3 = document.getElementById('s3option3');
    const s3option4 = document.getElementById('s3option4');
    const s3option5 = document.getElementById('s3option5');
    const s3option6 = document.getElementById('s3option6');
    const s3option7 = document.getElementById('s3option7');

    if (s3option1.checked){
        const dados = s3option1.value
        data.s3option1 = dados
    }
    if (s3option2.checked){
        const dados = s3option2.value
        data.s3option2 = dados
    }
    if (s3option3.checked){
        const dados = s3option3.value
        data.s3option3 = dados
    }
    if (s3option4.checked){
        const dados = s3option4.value
        data.s3option4 = dados
    }
    if (s3option5.checked){
        const dados = s3option5.value
        data.s3option5 = dados
    }
    if (s3option6.checked){
        const dados = s3option6.value
        data.s3option6 = dados
    }
    if (s3option7.checked){
        const dados = s3option7.value
        data.s3option7 = dados
    }

    //SECTION-04
    data.analytics = document.getElementById('analytics').value;
    data.history = document.getElementById('history').value;

    //SECTION-05
    data.message = document.getElementById('message').value;

    console.log(data);
}