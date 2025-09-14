import MainRouter from "./router/MainRouter";
import './declaration.d.ts';
import { Toaster } from "react-hot-toast";

export default function App() {

  return (
    <>
      <Toaster />
      <MainRouter />
    </>
  )
}
