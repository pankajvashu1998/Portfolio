import Home from "@/components/Home";
import { Toaster } from "react-hot-toast";

export default function Page() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Home />
    </div>
  );
}
