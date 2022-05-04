import Link from "next/link"

const Errorpage = () => {
  return (
    <div>
    <h1>404 Error page</h1>
    <button>
        <Link href="/">
        Back to Home
        </Link>
    </button>

    </div>
  )
}

export default Errorpage