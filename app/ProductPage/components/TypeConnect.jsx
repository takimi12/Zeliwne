import Image from "next/image";
import Product1 from "../../../public/static/ProductPage/TypeConnect/type-connect1.png";
import Product2 from "../../../public/static/ProductPage/TypeConnect/type-connect2.png";
import Product3 from "../../../public/static/ProductPage/TypeConnect/type-connect3.png";


const TypeConnect = () => {
    return (
      <>
        <div>

              <div>
                <Image src={Product1} alt="product1"/>
                <Image src={Product2} alt="product2"/>
                <Image src={Product3} alt="product3"/>
              </div>
            </div>
      </>
    );
  };
  
  export default TypeConnect;
  