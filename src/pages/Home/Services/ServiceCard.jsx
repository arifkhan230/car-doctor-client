import PropTypes from 'prop-types';

const ServiceCard = ({ service }) => {
    const {title,img,price} = service;
    return (
        <div className="card bg-base-100 shadow rounded">
            <figure className="px-6 pt-6">
                <img src={img} alt="Shoes" className="rounded-xl h-56" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <div className='flex items-center '>
                    <p className='text-xl font-semibold text-[#FF3811]'>Price: ${price}</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>

            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object
};

export default ServiceCard;