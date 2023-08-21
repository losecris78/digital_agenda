let formato = document.getElementById('forma');
const botao = document.getElementById('btn_sub');
let linhas ='';
let directory = [];
let grupos = [];
let telefones = [];

//set the year
let date  = new Date();
let year= date.getFullYear();
document.getElementById('Year').innerHTML= year; 


console.log(formato);
formato.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaDir();
});
function adicionaLinha(){
    const usuario = document.getElementById('name');
    const fone = document.getElementById('telefone');
    const grupo = document.getElementById('company');
    

    if(directory.includes(usuario.value)){
        alert(`O contato: ${usuario.value} já foi inserido`)
    } else{
        directory.push(usuario.value);
        grupos.push(grupo.value);
        telefones.push(fone.value);
        
        let linha ='<tr>';
        linha += `<td> ${usuario.value}</td>`;
        linha += `<td> ${fone.value} </td>`;
        linha += `<td> ${grupo.value} </td>`;
        linha += '</tr>';
        linhas += linha;
    }      
    usuario.value = '';
    grupo.value = '';
    fone.value = '';
  
};
function atualizaDir(){
    const agenda = document.querySelector('tbody');
    agenda.innerHTML = linhas;
};


