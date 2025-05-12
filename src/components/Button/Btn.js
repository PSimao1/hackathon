import Button from 'react-bootstrap/Button';

function Btn({ icon, variant = "primary", size, children, style={ backgroundColor: '#6C5DD3' } }) {
  return (
    <Button variant={variant} size={size} style={style}>
      {icon && <span style={{ marginRight: 8 }}>{icon}</span>}
      {children}
    </Button>
  );
}

export default Btn;
