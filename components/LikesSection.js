// import likeProduct from "../pages/api/likeProduct";
import { useEffect } from "react";
export default function LikesSection(props) {
  const { likes, productName, setProductInfo } = { ...props };

  console.log(likes, productName, setProductInfo);

  const likeProduct = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/product/${productName}/likes`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          mode: "no-cors",
          body: JSON.stringify({ likes: 0 }),
        }
      );
      const body = await response.json();
      setProductInfo(body);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    likeProduct();
  }, []);

  return (
    <div id="upvotes-section">
      <button
        type="submit"
        onClick={likeProduct}
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

// export async function getServerSideProps({ params }) {
//   console.log(params);
//   const likesdata = await likeProduct(
//     `http://localhost:8000/api/product/${params}/likes`
//   );

//   return {
//     props: {
//       likesdata,
//       params,
//     },
//   };
// }
