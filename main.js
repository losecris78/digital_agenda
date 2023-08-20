let formato = document.getElementById('forma');
const botao = document.getElementById('btn_sub');
let linhas ='';
let directory = [];
let grupos = [];
let telefones = [];

console.log(formato);
formato.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaDir();
});
function adicionaLinha(){
    const usuario = document.getElementById('name');
    const sobreNome = document.getElementById('last_name');
    const grupo = document.getElementById('company');
    const fone = document.getElementById('telefone');
    

    if(directory.includes(usuario.value)){
        alert(`O contato: ${usuario.value} já foi inserido`)
    } else{
        directory.push(usuario.value);
        grupos.push(grupo.value);
        telefones.push(fone.value);
        
        let linha ='<tr>';
        linha += `<td> ${usuario.value}</td>`;
        linha += `<td> ${grupo.value} </td>`;
        linha += `<td> ${fone.value} </td>`;
        //Na linha 12 o ? significa o if true, e : significa else. Substituida a string para colocar as imágens
        //linha += `<td> ${inputNotaAtividade.value >= 7 ? 'Aprovado' : 'Reprovado'}</td>`;
        //linha += `<td> ${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';
        linhas += linha;
    }      
    usuario.value = '';
    grupo.value = '';
    fone.value = '';
    //alert(`Atividade: ${inputNomeAtividade.value}, nota: ${notaAtividade.value}`);
};
function atualizaDir(){
    const agenda = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};

