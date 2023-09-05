import Image from 'next/image'

const ProductImage = (props: { src: string; alt: string; cname: string }) => {
  const { src, alt, cname } = props
  return (
    <Image
      className={cname}
      src={src}
      alt={alt}
      width={175}
      height={150}
      priority={true}
    />
  )
}

export default ProductImage
