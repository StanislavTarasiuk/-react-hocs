import { useState, useEffect } from "react";

function withLoading(Component) {
    function WithLoading(props) {
        const [data, setData] = useState(null)
        const { fetchMethod, params } = props
        useEffect(() => {
            setData(null)

            fetchMethod(params)
                .then(res => setData(res))
        }, [params])
        const { fetchMethod: _, params: __, ...restProps } = props
        if (!data) {
            return <p>Loading...</p>
        }
        return <Component data={data} {...restProps} />
    }
    return WithLoading
}

export default withLoading