import React, { Component } from 'react'

export class NewAddress extends Component {
    render() {
        const {
            onhandelSubmit,
            onhandelChange,
            city,
            country,
            zipCode,
            address,
            comment,
            state,
            name,
            phone,
            loading,
            success,
            error
        } = this.props;
        return (
            <div>
                <div className="row mt-4">
                    <div className="col">
                        <h3>New Address</h3>
                    </div>
                </div>
                <div className="row gutter-1">
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input onChange={onhandelChange} name="address" value={address} id="address" type="text" className="form-control" placeholder="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="comment">Comment (optionel)</label>
                            <input onChange={onhandelChange} name="comment" value={comment} id="comment" type="text" className="form-control" placeholder="" />
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input onChange={onhandelChange} name="city" value={city} id="city" type="text" className="form-control" placeholder="" />
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor="county">County</label>
                            <input onChange={onhandelChange} name="country" value={country} id="county" type="text" className="form-control" placeholder="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="state">State</label>
                            <input onChange={onhandelChange} name="state" value={state} id="state" type="text" className="form-control" placeholder="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="zip">Zip</label>
                            <input onChange={onhandelChange} name="zipCode" value={zipCode} id="zip" type="text" className="form-control" placeholder="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                onChange={onhandelChange}
                                name="name"
                                value={name}
                                id="name"
                                type="text" className="form-control" placeholder="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                onChange={onhandelChange}
                                name="phone"
                                value={phone}
                                id="phone"
                                type="text" className="form-control" placeholder="" />
                        </div>
                    </div>
                    <div className="col-12">
                        {!loading && success &&
                            <div className="alert alert-success">
                                The new shipping address has been added succesfully
                            </div>
                        }
                        {!loading && error &&
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        }
                    </div>
                    <div className="col-12">
                        <button onClick={onhandelSubmit}
                            className={`btn btn-dark ${loading && 'disabled'}`}
                            disabled={loading}
                        >
                            {loading ? "Please Wait.." : "Add"}
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewAddress
