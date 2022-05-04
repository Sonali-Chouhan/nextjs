import Link from "next/link";
const index = () => {
  return(
    <div>

      {""}
     
            <Link href="/">
              <a>home</a>
            </Link>
            <br></br>
            <Link href="/about">
              <a>About</a>
            </Link>
            <br></br>
            <Link href="/blog">
              <a>blog</a>
            </Link>
            <br></br>
            <Link href="/product">
              <a>Product</a>
            </Link>
         
  
    </div>

  );
};

export default index;
