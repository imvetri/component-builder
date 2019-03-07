# Component creator usage!

> node server.js

Hit the endpoint
> http://localhost:3001/createComponent?name=input,text

It will create a component as follows

  

    import  React  from  'react';
    import  inputElement  from  'src/elements/inputElement';
    import  labelElement  from  'src/elements/labelElement';
    
    class  RegistrationComponent  extends  React.Component {
	    constructor(props) {
		    super(props);    
	    }
	    render() {
		    return (
		    <div>
			    <inputElement/>
			    <labelElement/>
		    </div>
		    )
	    }
    }
    export  default  RegistrationComponent;

    
      

