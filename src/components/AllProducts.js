import logo from '../logo.svg'; 
import SingleProduct from './SingleProduct';

function AllProducts() {

    
    return(
        
        <section className='container mt-4'>
        <h3 className='mb-4'>All Products</h3>
            <div className='row mb-4'>
                <SingleProduct title="Fruit Product 1"/>
                <SingleProduct title="Fruit Product 2"/>
                <SingleProduct title="Fruit Product 3"/>
                <SingleProduct title="Fruit Product 4"/>
                <SingleProduct title="Fruit Product 5"/>
                <SingleProduct title="Fruit Product 6"/>
                <SingleProduct title="Fruit Product 7"/>
                <SingleProduct title="Fruit Product 8"/>
                <SingleProduct title="Fruit Product 9"/>
                <SingleProduct title="Fruit Product 10"/>
                <SingleProduct title="Fruit Product 11"/>
                <SingleProduct title="Fruit Product 12"/>
    
            </div>

            {/* Pagination start*/}
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
            </nav>
            {/* Pagination end */}

        </section>
    )
}

export default AllProducts;