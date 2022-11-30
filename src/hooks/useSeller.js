import { useEffect, useState } from "react"


const useSeller = email => {
    const [isSeller, setIsSeller] = useState('');
    const [sellerLoading, setSellerLoading] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:5000/users/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsSeller(data)
                setSellerLoading(false)
            })
    }, [email])
    return [isSeller, sellerLoading];
}

export default useSeller;
