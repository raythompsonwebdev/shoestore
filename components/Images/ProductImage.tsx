import Image from 'next/image'

const ProductImage = (props:{src:string, name:string}) => {

  const{src, name} =props
  return (
    <Image
        className="product-box-img"
        src={src}
        alt={name}
        width={175}
        height={150}
        priority={true}
      />
  )
}

export default ProductImage
