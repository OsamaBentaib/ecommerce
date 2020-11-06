import React, { Component } from 'react'

export class RecentProducts extends Component {
    render() {
        return (
            <div class="col-12 col-xl-8">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-header-title">
                            Best Selling Products
                        </h4>
                    </div>
                    <div class="table-responsive mb-0">
                        <table class="table table-sm table-nowrap table-hover card-table">
                            <thead>
                                <tr>
                                    <th>
                                        <a class="text-muted list-sort" data-sort="products-product">
                                            Product
                                        </a>
                                    </th>
                                    <th>
                                        <a class="text-muted list-sort" data-sort="products-stock">
                                            Status
                                        </a>
                                    </th>
                                    <th>
                                        <a class="text-muted list-sort" data-sort="products-price">
                                            Price
                                        </a>
                                    </th>
                                    <th colspan="2">
                                        <a class="text-muted list-sort" data-sort="products-sales">
                                            Total sales
                                        </a>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="list">
                                <tr>
                                    <td class="products-product">
                                        <div class="d-flex align-items-center">
                                            <div class="avatar">
                                                <img class="avatar-img rounded mr-3" src="./Dashkit___files/product-1.jpg" alt="..." />
                                            </div>
                                            <div class="ml-3">
                                                <h4 class="font-weight-normal mb-1">Sketchpad</h4>
                                                <small class="text-muted">3" x 5" Size</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="products-stock">
                                        <span class="badge badge-soft-success">Available</span>
                                    </td>
                                    <td class="products-price">
                                        $14.99
                                    </td>
                                    <td class="products-sales">
                                        $3,145.23
                                    </td>
                                    <td class="text-right">
                                        <div class="dropdown">
                                            <a class="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">
                                                <i class="fe fe-more-vertical"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <a class="dropdown-item">
                                                    Action
                                                </a>
                                                <a class="dropdown-item">
                                                    Another action
                                                </a>
                                                <a class="dropdown-item">
                                                    Something else here
                                                </a>
                                            </div>
                                        </div>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        )
    }
}

export default RecentProducts
