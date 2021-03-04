import BodyStyles from '../styles/Profile_one.module.css';
import Image from "next/image";
const Profile_one = (product) => {

console.log(product.date);
  return (
    <>
      <div>
      <Image
            src="/images/pic2.jpg"
            alt="Picture of the author"
            width={250}
            height={250}
            />
          {product.map(item =>{
    <h3>{item.date}</h3>
  })}
      </div>
    </>
  );
};

export default Profile_one;
