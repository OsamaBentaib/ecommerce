import React, { Component } from 'react'
import { connect } from 'react-redux'

import AddressItem from '../../../components/Address/AddressItem'
import NewAddress from './NewAddress'
import { fetchAddresses, addNewAddress, removeAddress } from './../../../../store/actions/address'

export class Addresses extends Component {
    state = {
        city: "",
        country: "",
        zipCode: "",
        address: "",
        comment: "",
        state: "",
        name: "",
        phone: "",
        err: null,
    }
    componentDidMount() {
        this.props.fetchAddresses();
    }
    onhandelChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onhandelSubmit = e => {
        const { city, country, zipCode, address, comment, state, name, phone } = this.state;
        if (
            city !== "" &&
            country !== "" &&
            zipCode !== "" &&
            address !== "" &&
            state !== "" &&
            name !== "" &&
            phone !== ""
        ) {
            const data = {
                city: city,
                country: country,
                zipCode: zipCode,
                address: address,
                comment: comment,
                state: state,
                name: name,
                phone: phone,
            }
            this.props.addNewAddress(data)
        } else {
            this.setState({ err: "Please Fill All The require data" });
        }

    }
    onhandelRemoveAddress = e => {
        this.props.removeAddress(e);
    }
    render() {
        const { city, country, err, zipCode, address, comment, state, name, phone } = this.state;
        const {
            loading,
            addresses,
            addAddressLoading,
            addAddressSuccess,
            onhandelSelectAddress,
            selector,
            selectedAddress,
        } = this.props;
        return (
            <div className="col-lg-8 col-xl-9 mb-5 mb-lg-0">
                <div className="row">
                    <div className="col">
                        <h3 className="mb-0">Addresses</h3>
                        <span className="eyebrow">
                            {loading ? "Loading..." : `${addresses.length} Entry`}
                        </span>
                    </div>
                </div>
                <div className="row gutter-2">
                    {
                        addresses.map((address, index) => (
                            <AddressItem
                                key={index + address._id}
                                address={address}
                                index={index + 1}
                                onhandelRemoveAddress={this.onhandelRemoveAddress}
                                onhandelSelectAddress={onhandelSelectAddress}
                                selector={selector}
                                isSelected={selectedAddress === address ? true : false}
                            />
                        ))
                    }
                </div>
                <NewAddress
                    onhandelSubmit={this.onhandelSubmit}
                    onhandelChange={this.onhandelChange}
                    city={city}
                    country={country}
                    zipCode={zipCode}
                    address={address}
                    comment={comment}
                    state={state}
                    name={name}
                    phone={phone}
                    loading={addAddressLoading}
                    success={addAddressSuccess}
                    error={err}
                />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        addresses: state.address.addresses,
        loading: state.address.loading,
        error: state.address.error,
        addAddressLoading: state.address.addAddressLoading,
        addAddressSuccess: state.address.addAddressSuccess,
    }
}
export default connect(mapStateToProps, { fetchAddresses, addNewAddress, removeAddress, })(Addresses)
