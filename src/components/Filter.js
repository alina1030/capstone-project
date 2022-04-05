import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import { filterPizzas } from '../actions/pizzaActions';


export default function Filter() {
    const dispatch = useDispatch()
    const[searchkey, setsearchkey] = useState('')
    const[category, setcategory] = useState('all')
  return (
    <div className='container'>
        <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
            <div className='col-md-3 w-1'>
                <input 
                onChange={(e)=>{setsearchkey(e.target.value)}}
                value={searchkey} type="text" className="form-control" placeholder="search pizzas"/>

            </div>

            <div className='col-md-3 w-1'>
                <select className='form-control mt-2' value={category} onChange={(e)=>{setcategory(e.target.value)}}>
                    <option value="all">All</option>
                    <option value="veg">Veg</option>
                    <option value="nonveg">Non-Veg</option>
                </select>
            </div>

            <div className='col-md-3 w-1'>
                <button className='btn w-100 mt-2' onClick={()=>{dispatch(filterPizzas(searchkey,category))}}>SEARCH</button>
            </div>

        </div>

    </div>
  )
}
