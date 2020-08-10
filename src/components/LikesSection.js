import React from 'react';

const LikesSection = ({ likes, productName, setProductInfo }) => {
    const likeProduct = async () => {
        const response = await fetch(`/api/product/${productName}/likes`, {
            method: 'post'
        });
        const body = await response.json();
        setProductInfo(body);
    };

    return (
        <div id="upvotes-section">
            <button onClick={() => {
                likeProduct();
            }}>Add Like</button>
            <p>This product has {likes} like</p>
        </div>
    );
}

export default LikesSection;