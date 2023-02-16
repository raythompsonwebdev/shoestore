// import { useEffect } from "react";

export default function LikesSection(props) {
  const { likes, productName, setProductInfo } = { ...props };

  const likeProduct = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/product/${productName}/likes`,
        //"/api/likeproduct",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify({ likes: likes }),
        }
      );
      // const result = await response.json();
      console.log(response.body);
      //setProductInfo(result);
    } catch (err) {
      console.error("not working : " + err);
    }
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
