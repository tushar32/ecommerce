import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "./productSlice";


const UseProducts = ({ searchData }) => {
    const dispatch = useDispatch();
    const { list }  = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(loadProducts(searchData))
      },[dispatch, searchData])

    return { list }  
}

export default UseProducts

