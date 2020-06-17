


const genders = [
  {  
    name:"genders",
    value:'',
    options: [
      {id:1, value: " " , displayValue:'-- Select Gender --'},
      {id:2, value: "men" , displayValue:'Men' },
      {id:3, value:"women", displayValue:'Women'},
      {id:4, value:"kids", displayValue:'Kids'}
    ]
  }
]

const styles = [
  {
    name:"styles",  
    value:'',
    options: [
      {id:1, value: " " , displayValue:'-- Select style -- '},
      {id:2, value: "trainers" , displayValue:'Trainers'},
      {id:3, value:"ladiesboots", displayValue:'Ladies Boots'},
      {id:4, value:"skateshoes", displayValue:'Skate Shoes'},
      {id:5, value:"boots", displayValue:'Boots'}
    ]
  }
]

const sizes = [
  {
    name:"sizes",  
    value:'',
    options: [
      {id:1, value: " " , displayValue:'-- Select Size -- '},
      {id:2, value: "one" , displayValue:'one'},
      {id:3, value:"two", displayValue:'two'},
      {id:4, value:"three", displayValue:'three'},
      {id:5, value:"four", displayValue:'four'}
    ]
  }
]

const colors = [
  {
    name:"colors",  
    value:' ',
    options: [
      {id:1, value: " " , displayValue:' -- Select Color -- '},
      {id:2, value: "Red" , displayValue:'Red'},
      {id:3, value:"Black", displayValue:'Black'},
      {id:4, value:"Brown", displayValue:'Brown'},
      {id:5, value:"Blue", displayValue:'Blue'}
    ]
  }
]



export default {genders, sizes, colors, styles};
