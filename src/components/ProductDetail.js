// Packages
import { Link } from 'react-router-dom';
// Assets
import logo from '../logo.svg';
import SingleProduct from './SingleProduct';

function ProductDetail(){
    return(
        <section className="container mt-4">
            <div className="row">
                <div className="col-4">
                    {/* Product Thumbnail carousel start */}
                    <div id="productThumbnailSlider" className="carousel carousel-dark slide carousel-fade">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className='row mb-5'>
                                    <img src={logo} class="img-thumbnail mb-5" alt="..."/>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='row mb-5'>
                                    <img src={logo} class="img-thumbnail mb-5" alt="..."/> 
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='row mb-5'>
                                    <img src={logo} class="img-thumbnail mb-5" alt="..."/> 
                                </div>
                            </div>
                        </div>
                        {/* left -right buttons */}
                        <button className="carousel-control-prev" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    {/* Product Thumbnail carousel end */}

                </div>

                {/* Product title, description, price, tags start */}
                <div className='col-8'>
                    <h3>Product Title</h3>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    <h5 className="card-title">Price: Rs. 500</h5>
                    <p className="mt-3">
                        <Link title="Add to Cart" target="_blank" className='btn btn-dark'>
                            <i class="fa-solid fa-cart-plus"></i> Demo
                        </Link>
                        <button title="Add to Cart" className='btn btn-primary ms-1'>
                            <i class="fa-solid fa-cart-plus"></i> Add to Cart
                        </button>
                        <button title="Buy Now" className='btn btn-success ms-1'>
                            <i class="fa-solid fa-bag-shopping"></i> Buy Now
                        </button>
                        <button title="Add to Wishlist" className='btn btn-danger ms-1'>
                            <i class="fa fa-heart"></i> Wishlist
                        </button>
                    </p>
                    
                    <div className='producttags mt-4'>
                        <h5>Tags</h5>
                        <p >
                            <Link to="#" className='badge bg-secondary text-white me-1'>fruits</Link>
                            <Link to="#" className='badge bg-secondary text-white me-1'>vegetables</Link>
                            <Link to="#" className='badge bg-secondary text-white me-1'>meat</Link>
                            <Link to="#" className='badge bg-secondary text-white me-1'>nuts</Link>
                            <Link to="#" className='badge bg-secondary text-white me-1'>pickles</Link>
                            <Link to="#" className='badge bg-secondary text-white me-1'>eggs</Link>
                        </p>
                    </div>


                </div>
                {/* Product title, description, price, tags End */}
            </div>


            {/* Related Products */}
            <h3 className='mt-5 mb-3'>Related Products</h3>
            <div id="relatedProductsSlider" className="carousel carousel-dark slide mt-4">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='row mb-5'>
                            <SingleProduct title="Fruit Product 1"/>
                            <SingleProduct title="Fruit Product 1"/>
                            <SingleProduct title="Fruit Product 1"/>
                            <SingleProduct title="Fruit Product 1"/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='row mb-5'>
                            <SingleProduct title="Fruit Product 1"/>
                            <SingleProduct title="Fruit Product 1"/>
                            <SingleProduct title="Fruit Product 1"/>
                            <SingleProduct title="Fruit Product 1"/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='row mb-5'>
                            <SingleProduct title="Fruit Product 1"/>
                            <SingleProduct title="Fruit Product 1"/>
                            <SingleProduct title="Fruit Product 1"/>
                            <SingleProduct title="Fruit Product 1"/>
                        </div>
                    </div>
                </div>
                {/* left -right buttons */}
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#relatedProductsSlider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#relatedProductsSlider" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>

            {/* End Related Products */}


        </section>
    );
}

export default ProductDetail;