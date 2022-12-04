import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`https://old-shop-server.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('oldShopToken', data.accessToken);
                        setToken(data.accessToken);
                    }
                })
                .catch(er => console.log(er))

        }
    }, [email]);
    return [token];
}

export default useToken;