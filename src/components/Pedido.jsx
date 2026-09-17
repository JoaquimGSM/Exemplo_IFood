import { useState } from "react"

//Array de objetos contendo o estado inicial do cardapio
const cardapio = [
    {id:1,nome:"Combo-01",preco:25.00,disponivel:true,quantidade:0},
    {id:2,nome:"Combo-02",preco:35.00,disponivel:true,quantidade:0},
    {id:3,nome:"Combo-03",preco:40.00,disponivel:false,quantidade:0},
    {id:4,nome:"Combo-04",preco:55.00,disponivel:true,quantidade:0},
]


const pedido = () => {

    // HOOK - useState-Manipula o estado da variável
    // Exemplos vai gerenciar a lista de items do cardapio
    const [items,setitems]=useState(cardapio);
    const [status,setStatus]=useState("");
    const[enviar,setEnviar]=useState(false);

    // Valor fixo adicionado ao total quando tiver items no carrinho
    const taxaEntrega = 5.00;

    // Função que altera a quantidade do pedido
    const alterarQuantidade = (id,Valor) => {
        setitems(prev=>
            // Map percorre a lista para criar um novo array sem modificar o original
            prev.map(item=>
                // Varifica se o item da iteração atual é o que deve ser alterado 
                // Spread(...) : adiciona o item a lista atual ou modifica
                // Math.max - objeto que garate que a quantidade nunca seja menor que o 
                // item: retorna o item caso o id nao corresponda
                item.id===id ? {...item,quantidade:Math.max(0,item,quandidade + valor)}:item
            )
        )
    }


  return (
    <>
      
    </>
  )
}

export default pedido
