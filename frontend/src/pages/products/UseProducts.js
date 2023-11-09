import { useDeferredValue, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "./productSlice";


const UseProducts = ({ searchData }) => {
    const dispatch = useDispatch();
    const { list }  = useSelector((state) => state.products);
    const [numbers, setNumbers] = useState(0)

    const defferedSearchQuery =  useDeferredValue(searchData)

    useEffect(() => {
        dispatch(loadProducts(defferedSearchQuery))

        

      },[dispatch, defferedSearchQuery])

      useEffect(() => {

        (async () => {
          await getNumbers()
          console.log('fdfsfdsfd')

        })()

        function getNumbers() {
          return new Promise ((resolve, reject) => {

              setTimeout(() => {
                setNumbers(n=>n+1)
                resolve(true)
              }, 5000)

          })
      }
 
 

      },[])
    return { list, numbers }  
}

export default UseProducts

