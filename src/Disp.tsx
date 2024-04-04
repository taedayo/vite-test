type propsType = {
  suji1: number | null;
  suji2: number | null;
  enzan: string;
}

const Disp = (props:propsType) => {
  return (
  <div>
  <label>{props.suji1}</label>
  <label>{props.enzan}</label>
  <label>{props.suji2}</label>
  </div>
  )
}

export default Disp