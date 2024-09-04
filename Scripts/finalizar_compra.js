let divFinalizado = document.querySelector('.container_pedido_finalizado')
divFinalizado.style.display = 'none';
document.querySelector('.finalizar').addEventListener("click", function(event){
    divFinalizado.style.display = 'block';
})