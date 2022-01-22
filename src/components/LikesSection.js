import React from "react";

function LikesSection(props) {
  const { productName, setProductInfo, likes } = { ...props };
  async function likeProduct() {
    // const response = await fetch(`/api/product/${productName}/likes`, {
    //   method: "post",
    // });
    const response = await fetch(`/api/product/${productName}/likes`, {
      method: "post",
    });
    const body = await response.json();
    setProductInfo(body);
  }

  return (
    <div id="upvotes-section">
      <button
        type="submit"
        onClick={() => {
          likeProduct();
        }}
      >
        Add Like
      </button>
      <p>
        This product has
        {likes} like
      </p>
    </div>
  );
}

export default LikesSection;
