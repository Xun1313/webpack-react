import { useEffect } from 'react';
import { Link } from "react-router-dom";
import "@/assets/scss/pages/index.scss";
import axios from "axios";
import $ from "jquery";
//import plus from "@/js/plus.js";

const Index = () => {
  const test = <div>789</div>

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => console.log(res))
    console.log($('home'));
    //plus('dog')
  }, [])

  return (
    <div className="home">
      <div>index</div>
      <Link to="/about">about</Link>
      {test}
    </div>
  );
}

export default Index;