export default function LikesSection(props) {
  //const { likes, productName, setProductInfo } = { ...props };
  // eslint-disable-next-line func-style
  // const likeProduct = async () => {
  //   // const response = await fetch(`./productdata.json/${productName}/likes`, {
  //   //   method: "post",
  //   // });
  //   // const response = await fetch(`/api/product/${productName}/likes`, {
  //   //   method: "post",
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //     // 'Content-Type': 'application/x-www-form-urlencoded',
  //   //   },
  //   // });
  //   // const body = await response.json();
  //   // setProductInfo(body);
  // };

  return (
    <div id="upvotes-section">
      <button
        type="submit"
        // onClick={() => {
        //   likeProduct();
        // }}
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
