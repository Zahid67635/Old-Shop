import { useEffect, useState } from "react"


const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState('');
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        fetch(`https://old-shop-server.vercel.app/users/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data)
                setAdminLoading(false)
            })
    }, [email])
    return [isAdmin, adminLoading];
}

export default useAdmin;
