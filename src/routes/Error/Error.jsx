import ErrorImg from '../../assets/errorimg.jpg'
import Header from '../../components/Nav/Header'

const Error = () => {
    return (
        <>
            <Header />
            <img src={ErrorImg} width='98%' />
        </>
    )
}

export default Error