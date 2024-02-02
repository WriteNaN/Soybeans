"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Loading from "./LoadingHome";

interface LoadingWrapperProps {
  children: ReactNode;
}

export default function LoadingWrapper({ children }: LoadingWrapperProps) {
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setLoading(false);
      } catch (error) {
        console.error("Error loading content:", error);
        setLoading(false); 
      }
    };

    loadContent();
  }, []);

  return <div>{isLoading ? <Loading /> : <div>{children}</div>}</div>;
};