import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Element, ElementLink } from "./pages";
import DashboardLayout from "./layout/DashboardLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="dashboard/element" replace />} />

      <Route path="dashboard/element" element={<DashboardLayout />}>
        <Route index element={<Element />} />
        <Route path=":id" element={<ElementLink />} />
      </Route>
    </>
  )
);
