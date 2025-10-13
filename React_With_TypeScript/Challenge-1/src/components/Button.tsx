
const Button = (props: {lable: string; onClick: () => void; disabled: boolean;}) => {
  return (
    <div>
        <button onClick={props.onClick} disabled={props.disabled}>
            {props.lable}
        </button>
    </div>
  )
}

export default Button