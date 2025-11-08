import { useNavigate } from "react-router-dom"
import { useUserStore } from "../store/store"
import { useEffect } from "react"

const Logout = () => {
    const { clearJWT } = useUserStore()
    const navigate = useNavigate()
    useEffect(() => {
        clearJWT()
        navigate("/")
    }, [])
    return (
        <></>
    )
}
export default Logout