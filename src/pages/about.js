import { useEffect } from 'react';
import { Link } from "react-router-dom";
//import plus from "@/js/plus.js";
import "@/assets/scss/pages/about.scss";
const plus = import(/* webpackChunkName: 'plus' */ '@/js/plus.js')

const About = () => {
    useEffect(() => {
        (async () => {
            //const {default: test} = await import(/* webpackChunkName: 'plus' */ '@/js/plus.js')
            //test(87)
            console.log(plus);
        })()
    }, [])

    return (
        <>
            <div className="about">about</div>
            <Link to="/">index</Link>
        </>
    );
}

export default About;