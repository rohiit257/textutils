import Alert from 'react-bootstrap/Alert';

function Alerts(props) {
  return (

    props.alert &&

    <Alert variant={props.alert.variant}>
      <p>
        {props.alert.msg}
      </p>
      
      
    </Alert>
    
    
   
  );
}

export default Alerts;