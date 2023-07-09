//import { SetStateAction } from 'react'

type LikesType ={
  likes:number;
  prodid?:string | undefined;
  productName:string | string[] | undefined;
  setProductInfo: ( likes: {likes:number}) => void;
}



export default function LikesSection(props:LikesType ) {
  console.log(props)

  const { likes, productName, setProductInfo } = { ...props }

  const likeProduct = async () => {
    try {
      const response = await fetch('/api/likeproduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ likes: likes, product: productName }),
      })
      const result = await response.json()

      setProductInfo({ likes: result.likes })
    } catch (err) {
      console.error('not working : ' + err)
    }
  }

  return (
    <div id="upvotes-section">
      <button
        type="submit"
        onClick={() => {
          likeProduct()
        }}
        className="upvotes-section-btn"
      >
        Add Like
      </button>
      <p className="upvotes-section-text">
        This product has {likes} likes so far !
      </p>
    </div>
  )
}
