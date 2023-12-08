
  
  const products = [
    {title: 'Cabbage', isFruit:false, id:1},
    {title: 'Galic', isFruit:false, id:2},
    {title: 'Apple', isFruit:true,id:3},
  ];
  
  
  function ListItems(){
    return(
      products.map(product=>
        <li 
          key={product.id}
          style={{color:product.isFruit ? 'blue':'red'}}
        >
          {product.title}
        </li>
      )
    )
  }
  function listContainer(){
    return(
      <ul>
        <ListItems />
      </ul>
    )
  }
  
  
  export default  listContainer;