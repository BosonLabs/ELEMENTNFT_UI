import React,{ useEffect,useState } from "react";
export const useScrollToTop = (initialScrollState = false) => {
const [scrollToTop, setScrollToTop] = useState(initialScrollState);

useEffect(() => {
    if (scrollToTop) {
      setScrollToTop(false);
      try {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      } catch (error) {
        window.scrollTo(0, 0);
      }
    }
  }, [scrollToTop, setScrollToTop]);

  return setScrollToTop;
};

// import { useEffect } from 'react'
// import { useLocation } from 'react-router-dom'

// const ScrollToTop = () => {
//     //const { pathname } = useLocation()
//     useEffect(() => {
//         //console.log(pathname)
//         /* settimeout make sure this run after components have rendered. This will help fixing bug for some views where scroll to top not working perfectly */
//         setTimeout(() => {
//             window.scrollTo({ top: 0, behavior: 'smooth' })
//         }, 0)
//     }, [])
//     return null
// }

// export default ScrollToTop
// import { useEffect } from "react";
// import { withRouter } from "react-router-dom";

// const ScrollToTop = ({ children, location: { pathname } }) => {
//       useEffect(() => {
//         window.scrollTo({
//           top: 0,
//           left: 0,
//           behavior: "smooth"
//         });
//       }, [pathname]);

//       return children || null;
//     };

// export default withRouter(ScrollToTop);
