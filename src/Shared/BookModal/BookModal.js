import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/ContextProvider';

const BookModal = ({ details }) => {
    const { user } = useContext(AuthContext)
    const { name, reSellPrice } = details;
    const handleSubmit = (e) => {
        e.preventDefault()

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