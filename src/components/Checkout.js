// Packages
import { Link } from 'react-router-dom';
// Assets
import logo from '../logo.svg'; 
function Checkout(props){
    return(

        <div className='container mt-4'>
            <h3 className='mb-4'>All Items (4)</h3>
            <div className='row'>
                <div className='col-md-8 col-12'>
                    <div className='table-responsvie'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Price per KG</th>
                                    <th>Quantity</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <Link><img src={logo} class="img-thumbnail" width="80" alt="..."/></Link>
                                        <p><Link>Apple</Link></p>
                                    </td>
                                    <td>Rs. 500</td>
                                    <td>4 kg</td>
                                    <td>Rs. 2000</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <Link><img src={logo} class="img-thumbnail" width="80" alt="..."/></Link>
                                        <p><Link>Potato</Link></p>
                                    </td>
                                    <td>Rs. 500</td>
                                    <td>3 kg</td>
                                    <td>Rs. 1500</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        <Link><img src={logo} class="img-thumbnail" width="80" alt="..."/></Link>
                                        <p><Link>Mango</Link></p>
                                    </td>
                                    <td>Rs. 500</td>
                                    <td>1 kg</td>
                                    <td>Rs. 500</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>
                                        <Link><img src={logo} class="img-thumbnail" width="80" alt="..."/></Link>
                                        <p><Link>Carrot</Link></p>
                                    </td>
                                    <td>Rs. 500</td>
                                    <td>4 kg</td>
                                    <td>Rs. 2000</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th>Total</th>
                                    <th>Rs. 6000</th>
                                </tr>
                                <tr>
                                    <td colSpan='5' align='center'>
                                        <Link to="/categories" className='btn btn-secondary'>Continue Shopping</Link>
                                        <Link className='btn btn-success ms-1'>Proceed to Payment</Link>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                </div>
            </div>
            
        </div>

    )
}

export default Checkout;