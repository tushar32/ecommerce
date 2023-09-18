import { Suspense } from "react"
import { Spinner } from "react-bootstrap"

const Loader = ({children}) => {

   return(
      <Suspense fallback={<Spinner animation="border" role="status"></Spinner>}>
         {children}
      </Suspense>
   )
}

export default Loader