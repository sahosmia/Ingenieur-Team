import { Route, Routes } from "react-router-dom";
import { frontRoute } from "../data/routeList.tsx";



export default function route() {
  return (
    <Routes>
      {/* frontend Route  */ }
        {frontRoute.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
            ))}
     
    </Routes>
  );
}
