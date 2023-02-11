import { likeProduct } from "../pages/api";

export default function LikesSection(props) {
  const { likes, productName, setProductInfo } = { ...props };

  const likeProduct = () => {
    setProductInfo(likes);
  };

  return (
    <div id="upvotes-section">
      <button
        type="submit"
        onClick={() => {
          likeProduct();
        }}
        className="upvotes-section-btn"
      >
        Add Like
      </button>
      <p className="upvotes-section-text">
        This product has {likes} likes so far !
      </p>
    </div>
  );
}

export async function getServerSideProps() {
  const likes = await likeProduct(
    "http://localhost:8000/api/product/${productName}/likes"
  );

  return {
    props: {
      likes,
    },
  };
}
