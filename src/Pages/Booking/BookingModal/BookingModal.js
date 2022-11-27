import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Contexts/AuthProvider';

const BookingModal = ({ open, setOpen }) => {
    const { name, resale_price, seller_name } = open;
    const { user } = useContext(AuthContext);

    const handleBuying = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;


        const details = {
            user: name,
            email,
            phone,
            location,
            resale_price,
            seller_name
        }

        fetch('https://assignment-12-server-six.vercel.app/buyingProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(details)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setOpen(null);
                    toast.success('Successfully appointment done')
                }
                else {
                    toast.error('Sorry, there was an error');
                }
            })
        setOpen(null);
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBuying} className='grid grid-cols-1 gap-3'>

                        <input
                            type="text"
                            name='name'
                            defaultValue={user?.displayName}
                            disabled
                            placeholder="Type here"
                            className="input input-bordered w-full" />

                        <input
                            type="email"
                            name='email'
                            defaultValue={user?.email}
                            disabled
                            className="input input-bordered w-full" />

                        <input
                            type="text"
                            defaultValue={resale_price}
                            disabled
                            className="input input-bordered w-full"
                        />
                        <input
                            type="text"
                            defaultValue={seller_name}
                            disabled
                            className="input input-bordered w-full"
                        />
                        <input
                            type="text"
                            name='location'
                            placeholder="Meeting Location"
                            className="input input-bordered w-full"
                        />
                        <input
                            type="text"
                            name='phone'
                            placeholder="0179480155"
                            className="input input-bordered w-full"
                        />

                        <br />
                        <input className='w-full btn btn-accent' type="submit" value='submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;