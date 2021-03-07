import PostNav from './PostNav'
import Footer from './Footer'
import styles from "../styles/Layout.module.css";


const PostLayout = ({children}) => {
  return (
      <>
    <div className={styles.container}>
      <PostNav/>
      <main className={styles.main}>{children}</main>
    <Footer/>
    </div>
    </>
  );
};

export default PostLayout;
