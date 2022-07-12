import './App.css'
import { useEffect } from 'react';
import { useFetching } from "./Hook/useFetch";
import PostService from "./Api/getAPI";
import {useDispatch, useSelector} from 'react-redux'
import {getApi} from './redux/Slice'

function App() {

  const dispatch = useDispatch()
  const data = useSelector((state) => state.toolkit.todos)
  const [fetchingId, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getAll();
    dispatch(getApi(response.data))
  });

  useEffect(() =>{
    fetchingId()
  }, [])

  if(isLoading){
    return <h1>isLoading</h1>
  }
  if(error){
    return <h1>Error</h1>
  }
  return (
    <>
      {data?.map((item, index) => {
        return(
          <div key={index} style={{display:'flex'}}>
            {index+1}.<strong>{item.title} <br /></strong>
          </div>
        )
      })}
    </>
  )
}

export default App
