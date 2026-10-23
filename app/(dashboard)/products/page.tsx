"use client"
import Link from "next/link";

export default function Products() {

  return (<>


    <h1> Products List</h1>
    <h5><Link href={'/'}>Home</Link></h5>
    <h5><Link href={'products/1'}> Products 1</Link></h5>
    <h5><Link href={'products/2'}> Products 2</Link></h5>
    <h5><Link href={'products/3'} replace> Products 3</Link></h5>
  </>);
}
