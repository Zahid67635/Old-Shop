import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/ContextProvider';

const BookModal = ({ details, setProduct }) => {
    const { user } = useContext(AuthContext)
    const { name, reSellPrice, image } = details;
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const phone = form.phone.value;
        const itemName = form.itemName.value;

        const booking = {
            email, phone, itemName, image, reSellPrice
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('booking confirmed')
                setProduct(null)
            })

    }
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="bookModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="bookModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3'>
                        <h1 className='text-2xl text-bold'>Please fill this infos for confirmation:-</h1>
                        <input className='rounded' type="text" name='username' defaultValue={user ? user.displayName : 'No name'} disabled />
                        <input className='rounded' type="email" name='email' defaultValue={user ? user.email : 'abc@gmail.com'} disabled />
                        <input className='rounded' type="text" name='itemName' defaultValue={name} disabled />
                        <input className='rounded' type="text" name='price' defaultValue={reSellPrice} disabled />
                        <input className='rounded' type="tel" name='phone' placeholder='Give your contact number' />
                        <input className='rounded' type="text" name='meetPlace' placeholder='Your meeting location' />
                        <input className='btn btn-outline btn-primary' type="submit" value="Confirm" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookModal;