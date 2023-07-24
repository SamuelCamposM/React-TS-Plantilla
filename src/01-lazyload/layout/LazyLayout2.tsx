import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

export const LazyLayout2 = () => {
  return (
    <div>
      <h1>LazyLayout2</h1>
      <ul>
        <li>
          <NavLink to="lazy1test">Lazy 1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2test">Lazy 2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3test">Lazy 3</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="lazy1test" element={<LazyPage1 />} />
        <Route path="lazy2test" element={<LazyPage2 />} />
        <Route path="lazy3test" element={<LazyPage3 />} />
        {/* <Route path="*" element={<div>Not found</div>} /> */}
        <Route path="*" element={<Navigate replace to="lazy1test" />} />
      </Routes>
    </div>
  );
};

export default LazyLayout2;
