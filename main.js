let formato = document.getElementById('forma');
const usuario = document.getElementById('name');
const sobreNome = document.getElementById('last_name');
const grupo = document.getElementById('company');
const fone = document.getElementById('telefone');
const botao = document.getElementById('btn_sub');
let directory = [];

console.log(formato);
formato.addEventListener('submit', function(e){
    e.preventDefault();
    directory.push('usuario.value');
    directory.push('sobreNome.value');
    directory.push('grupo.value');
    directory.push('fone.value');

    //console.log(directory);
    let list = document.getElementById('folha');
    list.innerText= directory;
    usuario ='';
    sobreNome = '';
    grupo = '';
    fone = '';
})
