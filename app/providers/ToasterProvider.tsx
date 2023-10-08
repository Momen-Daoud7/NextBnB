// I wrapp it this way beacuse it's third party component and it needs 'use client to work in nextjs
"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return <Toaster />;
};
export default ToasterProvider;
