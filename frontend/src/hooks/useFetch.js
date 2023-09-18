import { useEffect, useState } from 'react'
import axios from "axios";
import { useDispatch } from "react-redux";
import { loadProducts } from '../store/productStore/productAction';



const useFetch = ({ url, depencenies }) => {
    const dispatch = useDispatch();

   const [data, setData] = useState(initialData)
    

   useEffect(() => {
      dispatch(loadProducts())
    },[dispatch, depencenies && depencenies.length && depencenies.join(',')])
   
     return {data}
}

export default useFetch


