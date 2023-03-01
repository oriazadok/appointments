import Button from "./Button"

const ButtonVal = ({ text , func_val, val}) => {
    const func = () => {
        func_val(val)
    }
  return (
    <div>
      <Button text={text} btn_f={func} />
    </div>
  )
}

// function MyComponent(props) {
//     if (props.myProp) {
//       // do something with the prop
//     } else {
//       console.log('myProp is not defined');
//     }
    
//     return (
//       // your component's JSX here
//     );
//   }


export default ButtonVal
