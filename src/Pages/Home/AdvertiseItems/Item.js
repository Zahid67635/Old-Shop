import BookModal from '../../../Shared/BookModal/BookModal';

const Item = ({ details, product, setProduct }) => {
    const { name, price, image, reSellPrice, time, age, location } = details
    return (
        <div className='mx-auto'>
            <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl">
                <figure className='w-full'><img className='w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex'>
                        <h2 className="text-2xl font-bold">{name}</h2>
                        <p className='text-end font-bold'>Location: {location}</p>
                    </div>
                    <h3 className='text-lg font-bold mt-4'>{age} used</h3>
                    <div className="card-actions justify-between">
                        <div>
                            <p className='text-xl'>Price: <del>{price}</del> {reSellPrice} </p>
                            <p className='text-blue-700 font-bold'>Posted {time}</p>
                        </div>
                        <label htmlFor="bookModal" className="btn btn-primary" onClick={() => setProduct(details)}>Book Now</label>

                    </div>
                    <BookModal details={product}></BookModal>
                </div>
            </div>
        </div>
    );
};

export default Item;