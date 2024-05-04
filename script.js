

$('#telefone').mask('(00) 00000-0000',{
placeholder: '(__) _____-____'
})
$('#cpf').mask('000.000.000-00',{
    placeholder: '___.___.___-__'
})
$('#cep').mask('0000-000',{
    placeholder: '____-___'
})

$('form').validate({
    rules:{
     nome:{
         required:true
     },
     email:{
         required:true,
         email: true
     },
     telefone:{
         required:true
     },
     cpf:{
         required:true
     },
     endereço:{
        required:true,
        
    },
    cidade:{
        required:true
    },
    bairro:{
        required:true
    },
    cep:{
        required:true
    },
     
    },
    submitHandler: function(form){
        console.log(form)
    },
    invalidHandler: function(evento, validador){
        let camposIncorretos = validador.numberOfInvalids();
        console.log(camposIncorretos)
        if(camposIncorretos){
            alert(`Existem ${camposIncorretos} campos incorretos ` )
        }
    
    }
    

 })
 $('form').on('submit', function(e){
    e.preventDefault();
    $('#nome').val('')
    $('#telefone').val('')
    $('#email').val('')
    $('#cpf').val('')
    $('#endereço').val('')
    $('#cidade').val('')
    $('#bairro').val('')
    $('#cep').val('')

 })