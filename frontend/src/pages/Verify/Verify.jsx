import './verify.css'

const Verify = () => {

	const [searchParams, setSearchParams] = useSearchParams();

	const success = searchParams.get('success')
	const orderId = searchParams.get('orderId')
	const {url} = useContext(StoreContext);

  return (
	<div className='verify'>Verify</div>
  )
}

export default Verify