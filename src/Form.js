import { Component } from "react";

class Form extends Component {
    state = {
        // contacts: [
        //     { name: "Misha" , tel: "+38096",  id: 1},
        //     { name: "Yarema", tel: "+38098",  id: 2}
        // ],
        name: '',
        tel: '',

    }
    handleChange = (event) => {
        const { name, value} = event.target;
        this.setState({
            [name]: value
        });
    }
    // handleSabmit = (event) => {
    //     event.prevent.default()
    //     console.log(this.state);

    // }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state); 
         this.props.onCreate(this.state);
         this.setState({ 
            name: '',
            number: ''
         });
        }
    

    render() {

        return (
            <form className="login-form" onSubmit={this.handleSubmit}>
                 <h1 className="form-title">PHONEBOOK</h1>
                <div className="form-control">
                    <label className="form-label">Name</label>
                    <input className="form-input"
                    value={this.state.name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-control">
                    <label className="form-label">Namber</label>
                    <input
                        className="form-input"
                        value={this.state.number}
                        type="tel"
                        name="number"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        onChange={this.handleChange}
                    />
                </div>
    
                <button className='submit-button' >Add contact</button>
            </form>
        )

    }
    
}

export default Form;