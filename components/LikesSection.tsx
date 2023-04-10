//import { useEffect } from "react";

/**
 * @param {any} props
 */
export default function LikesSection(props: any) {
  const { likes, setProductInfo }: any = { ...props };

  const likeProduct = async () => {
    try {
      const response = await fetch("/api/likeproduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ likes: likes }),
      });
      //const result = await response.json();

      //setProductInfo({ likes: result.likes });
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
