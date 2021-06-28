import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            username: "",
            data: []
        }
    }

    handleFnameChange = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }

    handleLnameChange = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    onSubmitData = (e) => {
        e.preventDefault();
        this.setState({
            firstname: '', lastname: '', username: '',
            data: [...this.state.data, {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                username: this.state.username,
            }]
        })
        document.getElementById('validationCustom01').focus();
    }

    render() {
        let displayData;
        if (this.state.data.length > 0) {
            displayData = <table class="table caption-top">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Username</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        this.state.data.map((data, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{data.firstname}</td>
                                    <td>{data.lastname}</td>
                                    <td>@{data.username}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>

            </table>
        }

        return (
            <div className='col-md-8 '>
                <form className="row g-3 needs-validation" novalidate>
                    <div className="col-md-4">
                        <label for="validationCustom01" className="form-label">First name</label>
                        <input type="text" className="form-control" id="validationCustom01" value={this.state.firstname} onChange={this.handleFnameChange} required />
                    </div>
                    <div className="col-md-4">
                        <label for="validationCustom02" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="validationCustom02" value={this.state.lastname} onChange={this.handleLnameChange} required />
                    </div>
                    <div className="col-md-4">
                        <label for="validationCustomUsername" className="form-label">Username</label>
                        <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="text" className="form-control" id="validationCustomUsername" value={this.state.username} onChange={this.handleUsernameChange} aria-describedby="inputGroupPrepend" required />
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit" onClick={this.onSubmitData}>Submit</button>
                    </div>
                </form>

                <br></br><br></br>
                {displayData}

            </div>
        )
    }
}

export default Form;