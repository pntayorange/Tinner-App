import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  return (
    <div className="mockup-container">
      <div className="iphone-16">
        <div className="dynamic-island"></div>
        <div className="iphone-screen">
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  );
}