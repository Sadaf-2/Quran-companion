import React from "react";


class ErrorBoundary extends React.Component {


  constructor(props){

    super(props);


    this.state = {
      hasError:false
    };

  }





  static getDerivedStateFromError(error){

    return {
      hasError:true
    };

  }





  componentDidCatch(error, errorInfo){

    console.error(
      "Application Error:",
      error,
      errorInfo
    );

  }





  render(){


    if(this.state.hasError){


      return (

        <div
          style={{
            minHeight:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            background:"var(--bg)",
            color:"var(--text)",
          }}
        >

          <h1>
            😔 Something went wrong
          </h1>


          <p>
            Please refresh the page.
          </p>


          <button
            onClick={()=>
              window.location.reload()
            }

            style={{
              marginTop:"20px",
              padding:"12px 25px",
              border:"none",
              borderRadius:"10px",
              background:"var(--primary)",
              color:"white",
              cursor:"pointer",
            }}

          >

            Reload

          </button>


        </div>

      );

    }





    return this.props.children;


  }


}


export default ErrorBoundary;