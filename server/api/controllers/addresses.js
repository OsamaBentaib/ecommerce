const mongoose = require("mongoose");
const PROXY_URL = require("../../constants");
const User = require("../models/user");
const Address = require("./../models/address");

exports.addresses_get_user_address = (req, res, next) => {
    if (!req.isAuth) {
        return res.status(401).json({
            error: "Unauthonticated!"
        });
    }
    Address.find({ user: req.userId })
        .exec()
        .then(docs => {
            res.status(200).json({
                count: docs.length,
                addresses: docs.map(doc => {
                    return {
                        _id: doc._id,
                        address: doc.address,
                        comment: doc.comment,
                        city: doc.city,
                        state: doc.state,
                        country: doc.country,
                        zipCode: doc.zipCode,
                        name: doc.name,
                        phone: doc.phone
                    };
                })
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};

exports.addresses_delete_address = (req, res, next) => {
    if (!req.isAuth) {
        return res.status(401).json({
            error: "Unauthonticated!"
        });
    }
    const addressId = req.params.addressId;
    Address.remove({ user: req.userId, _id: addressId })
        .then(res => {
            return res.status(204).json({
                message: "Address Deleted!",
            })
        })
};

exports.addresses_create_address = (req, res, next) => {
    if (!req.isAuth) {
        return res.status(401).json({
            error: "Unauthonticated!"
        });
    }
    console.log(req.body);
    const address = new Address({
        address: req.body.address,
        comment: req.body.comment,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        zipCode: req.body.zipCode,
        name: req.body.name,
        phone: req.body.phone,
        user: req.userId,
    });
    address.save()
        .then(address => {
            const response = res.status(201).json({
                message: "Address Created",
                address: address,
                request: {
                    type: "GET",
                    url: `${PROXY_URL}/address/`,
                }
            });
            return response;
        })


};