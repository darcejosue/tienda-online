import { prisma } from "@/src/lib/prisma"

async function getProduct(category: string){
  const products = await prisma.product.findMany({
    where:{
      category:{
        slug:category
      }
    }
  })

  return products
}
export default async function OrderPage({params}:{params:{category:string}}) {
  const products = await getProduct(params.category)
  console.log(products)
  return (
    <div>OrderPage</div>
  )
}
