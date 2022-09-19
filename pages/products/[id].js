import { useRouter } from "next/router"


export default function ID() {
    const router=useRouter();
    console.log(router.query)
  return (
    <div>hello</div>
  )
}
