import MainLayout from "../layouts/MainLayout";
import { useEffect, useDispatch } from "react";
import { fetchDataScorer } from "../store/reducers/ScorerReducer";

function Topscorer() {
 // const listtop = useSelector(state => state.top.data)
 const dispatch = useDispatch()
  useEffect (() => {
    dispatch(fetchDataScorer())
  }, [dispatch]
  )

 return (
    <MainLayout>
      <h2>buteur </h2> 
    </MainLayout> 
  );
}

export default Topscorer;
