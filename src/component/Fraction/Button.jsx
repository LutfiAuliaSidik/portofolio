export const ButtonGradient = ({ text, style, icon }) =>
{
  const defaultStyle = {
    display: 'flex',
    alignItems: 'center',
    color: 'rgba(255, 255, 255, 1)',
    border: 'none',
    padding: '10px',
    fontSize: '15px',
    textTransform: 'capitalize',
    borderRadius: '5px',
    background: 'linear-gradient(90deg, rgba(13,169,228,1) 0%, rgba(11,206,212,1) 100%)'
  }
  
  const styles = {...defaultStyle, ...style}

  return (
    <>
      <button style={styles}>{ text }{ icon }</button>
    </>
  )
}