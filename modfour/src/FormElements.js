import React from "react";

class FormElements extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:" "
        }
        // this.handleOnChange=this.handleOnChange.bind(this)
    }

    // handleOnChange(e){
    //     console.log(e)
    //     this.setState({name:e.target.value})

    // }
    onSubmitHandler=(e)=>{
        e.preventDefault()
        this.setState({name:e.target[0].value})
    }

    render(){
        return(
            <>
            <h1>Register Yourself</h1>
            <p>My Name is {this.state.name}</p>
            <form onSubmit={this.onSubmitHandler}>
            <input type='text' name="name" />
            <input type='submit'/>

            </form>
            </>
        )
    }
}

export default FormElements