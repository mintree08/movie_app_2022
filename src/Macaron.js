import React from 'react'

// function Macaron(props) {//자식컴포넌트
//   console.log(props)
//   return (
//     <div>
//       <h1>Macaron No.{props.propsid}</h1>
//       <h2>Macaron Name : {props.propsname}</h2>
//       <img src={props.propsimage} alt={propsname} />
//     </div>
//   )
// }

// function Macaron(props) {//
//   console.log(props)
//   const {} = props;
//   const {propsname,propsid,propsimage} = props;
//   return (
//     <div>
//       <h1>Macaron No.{propsid}</h1>
//       <h2>Macaron Name : {propsname}</h2>
//       <img src={propsimage} alt={propsname} />
//     </div>
//   )
// }

function Macaron({propsname, propsid, propsimage}) {//구조분해할당2
  return (
    <div>
      <h1>Macaron No.{propsid}</h1>
      <h2>Macaron Name : {propsname}</h2>
      <img src={propsimage} alt={propsname} />
    </div>
  )
}
export default Macaron