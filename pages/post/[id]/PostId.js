import Link from "next/link";
import Image from "next/image";
import style from "../../../styles/PostId.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { MDBIcon } from "mdbreact";
const PostId = ({ post }) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.dark}></div>
        <div className={style.wrapper}>
          <div className={style.backLink}>
            <Link href="http://localhost:3000">
              <>
                <MDBIcon className="arrow-left" icon="arrow-left" size="2x" />
                <h4>Return to article page </h4>
              </>
            </Link>
          </div>
          <div className={style.date}>
            <p className={style.product}> Product - </p>
            <p> 4 March, 2020</p>
          </div>
          <div className={style.title}>{post.title}</div>
          <Image
            src={`/pic1.jpg`}
            alt="Picture of the author"
            width={700}
            height={383.41}
            layout="intrinsic"
          />
          <div className={style.page}>
            <p>{post.body} </p>
            <p>
              "Minim in adipisicing dolore laborum et fugiat reprehenderit ea.
              Nisi sunt anim excepteur veniam ex cupidatat cillum minim. Ad
              Lorem deserunt cillum quis ea irure sunt ad anim ut anim. Mollit
              consectetur elit sint fugiat minim duis cillum. Officia eiusmod ad
              laborum voluptate cuIrure anim mollit reprehenderit amet magna. Eu
              cupidatat est aliquip sit voluptate nulla excepteur. Id ipsum
              exercitation in laborum in deserunt do aliquip eiusmod et ad sit
              qui. Laboris laboris amet est ut in deserunt cillum velit ex
              excepteur nisi quis irure magna. Dolor commodo aute irure aliqua
              Lorem reprehenderit ut. Qui do ex qui esse deserunt irure
              excepteur ea mollit proident. Esse anim et laboris veniam commodo.
              Aliquip cupidatat officia cillum ea reprehenderit quis. Sunt elit
              non sint dolor deserunt aute adipisicing veniam incididunt irure
              minim exercitation amet. Labore nostrud ex in reprehenderit qui
              reprehenderit culpa enim non. Ut eu amet exercitation esse
              excepteur cillum laborum officia
            </p>
            <div className={style.imageInPara}>
              <Image
                src={`/pic5.jpg`}
                alt="Picture of the author"
                width={700}
                height={383.41}
                layout="intrinsic"
              />
              <p>
                non magna. Irure exercitation fugiat mollit consectetur nisi.
                Irure do eiusmod anim proident nostrud eu minim anim quis.
                Labore nostrud in eu elit. Laborum labore velit quis quis minim
                sint dolore aute velit minim ullamco cillum. Occaecat occaecat
                nulla aute occaecat est exercitation non labore fugiat
                reprehenderit deserunt proident fugiat laboris. Nulla nostrud
                nulla do elit exercitation cillum do. Esse adipisicing ut nulla
                consequat
              </p>
            </div>
            <p className={style.paragraph}>
              incididunt nostrud officia ad non. Anim duis laborum non proident
              in cupidatat laboris. Reprehenderit commodo eu amet excepteur
              officia. Laborum est cupidatat consequat veniam consequat.
              Cupidatat exercitation ad sunt velit eiusmod duis excepteur
              eiusmod exercitation pariatur proident aliquip. Reprehenderit
              aliquip Lorem voluptate magna. Aliquip minim sint incididunt Lorem
              eiusmod aute ullamco proident esse sint aliquip deserunt commodo
              magna. Consequat velit sit consectetur id culpa nisi. Veniam quis
              amet commodo Lorem proident occaecat pariatur nisi excepteur dolor
              cupidatat anim nulla. Sit sint pariatur Lorem est labore quis
              voluptate minim eu irure consequat aute laboris id. Mollit
              excepteur labore voluptate amet velit in eiusmod nulla ad et
              deserunt. Adipisicing magna irure officia elit ut tempor eu do
              labore consequat. Excepteur nostrud commodo sit magna mollit. Qui
              aliquip esse nostrud reprehenderit enim minim sint veniam
              excepteur elit ea Lorem tempor. Deserunt in minim eiusmod mollit
              elit nostrud deserunt quis labore tempor aliquip ut consequat
              eiusmod. Incididunt qui magna anim laboris enim fugiat adipisicing
              quis aliquip elit sit ea. Amet sunt veniam commodo sit cillum
              laborum irure eiusmod laborum commodo.pidatat. Elit excepteur
              exercitation id laborum nisi ea quis. Sunt est magna fugiat aliqua
              velit consectetur et laborum pariaur id situpidatat qui amet magna
              qui veniam exercitation eiusmod commodo. Aliquip magna nulla ipsum
              laborum et sit ea labore Lorem do. Officia id consequat
              reprehenderit pariatur nostrud velit ipsum eaReprehenderit aliquip
              cupidatat est aute sunt commodo non. Aute quis sunt labore dolore
              nulla qui do amet. Aute nisi sint consequat reprehenderit aute
              dolore laborum aliquip eiusmod ad"
            </p>
            <Image
              src={`/video.png`}
              alt="Picture of the author"
              width={700}
              height={383.41}
              layout="intrinsic"
            />
            <hr />
          </div>
          <div className={style.profile}>
            <div className={style.nameCard}>
              <Image
                src="/placeholder.png"
                alt="Picture of the author"
                width={63}
                height={63}
                layout="intrinsic"
              />
              <div className={style.Info}>
                <div className={style.Info_1}>Mentor of Life</div>
                <div className={style.Occupation}>The Frontend Master</div>
              </div>
            </div>

            <div className={style.fontIcons}>
              <ul>
                <li>
                  <Link href="/">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className={style.youtube}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/" className="facebook">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className={style.facebook}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/" className="twitter">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className={style.twitter}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/" className="instagram social">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className={style.instagram}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default PostId;
