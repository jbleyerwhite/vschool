import { connect } from 'react-redux'

// This is a Component:  Where we want to DISPATCH & ACTION

const Display = props => {
    return (
        <div>
            <h1>{props.titile } { props.image } { props.description }</h1>
        </div>
    )
}

export default connect (state=>state, {}) 
(Display)




    // handleChange = e => {
    //     const value = e.target.type === "checkbox" 
    //                                 ? e.target.checked 
    //                                 : e.target.value
    //     const { name } = e.target
    //     this.setState({
    //         [name]: value,
    //     })
    // }

