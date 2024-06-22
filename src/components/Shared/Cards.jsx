

const Cards = ({children, reverse}) => {
  return (
    <div className={`card ${reverse  && 'reverse'} `}>
       {children}
    </div>
  );
}


Cards.defaultProps = {
    reverse : false,
}


export default Cards;
