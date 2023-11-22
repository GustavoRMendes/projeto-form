let nome = document.getElementById('nome');
let email = document.getElementById('email');
let enviar = document.getElementById('button');
let errorMsg = document.getElementById('msg');

enviar.addEventListener('click', function clicar(e){
    e.preventDefault();
    if (nome.value == '' || email.value == ''){
        errorMsg.innerHTML = 'Tente Novamente!';
        errorMsg.style.color = 'red';
        return;
    }
    return;
})
