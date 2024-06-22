


const Buttons = ({children, version,type,isDisabled}) => {
  return (
    <>
    <button className={`btn btn-${version}`} type={type} disabled={isDisabled} >
        {children}
    </button>
    </>
  );
}

Buttons.defaultProps = {
    version : 'primary',
    type: 'button',
    isDisabled : false
}

export default Buttons;
