
import Button from '../components/Button'
import { FaRegHandPointer, FaCartPlus, FaShopify } from "react-icons/fa"
function ButtonPage(){

    const handleClick = () => {
        console.log('click');
    }

    return (
    <div className='flex gap-20 ml-5 pt-5 justify-center'>
        <div>
            <Button success rounded outline onClick={handleClick}>
                Click me!
                <FaRegHandPointer className='btn-svg pl-1'></FaRegHandPointer>
            </Button>
        </div>
        <div>
            <Button danger outline>
                Shop Now
                <FaShopify className='btn-svg pl-1'></FaShopify>
                </Button>
        </div>
        <div>
            <Button warning>Add to cart <FaCartPlus className='btn-svg pl-1'></FaCartPlus></Button>
        </div>
        <div>
            <Button secondary outline>Modal</Button>
        </div>
        <div>
            <Button primary rounded>Open</Button>
        </div>
    </div>
    )

}
export default ButtonPage;