


const genders = [
  {  
    name:"genders",
    options: [
      {id:1, value: " " , displayValue:'-- Select Gender --'},
      {id:2, value:"men" , displayValue:'Men'},
      {id:3, value:"women", displayValue:'Women'},
      {id:4, value:"girl", displayValue:'Girls'},
      {id:5, value:"boy", displayValue:'Boys'}
    ]
  }
]

const styles = [
  {
    name:"styles",
    options: [
      {id:1, value: " " , displayValue:'-- Select style -- '},
      {id:2, value:"trainers" , displayValue:'Trainers'},
      {id:3, value:"ladiesboots", displayValue:'Ladies Boots'},
      {id:4, value:"skateshoes", displayValue:'Skate Shoes'},
      {id:5, value:"boots", displayValue:'Fur Lined Boots'}
    ]
  }
]

const sizes = [
  {
    name:"sizes", 
    options: [
      {id:1, value: " " , displayValue:'-- Select Size -- '},
      {id:2, value:"four", displayValue:'Four'},
      {id:3, value:"five", displayValue:'Five'},
      {id:4, value:"six", displayValue:'Six'},
      {id:5, value:"seven", displayValue:'Seven'},
      {id:6, value:"eight", displayValue:'Eight'},
      {id:7, value: "nine" , displayValue:'Nine'}
    ]
  }
]

const colors = [
  {
    name:"colors",  
    options: [
      {id:1, value: " " , displayValue:' -- Select Color -- '},
      {id:2, value:"white" , displayValue:'White'},
      {id:3, value:"black", displayValue:'Black'},
      {id:4, value:"brown", displayValue:'Brown'},
      {id:5, value:"beige", displayValue:'Beige'}
    ]
  }
]



export default {genders, sizes, colors, styles};
