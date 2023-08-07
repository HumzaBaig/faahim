"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("6d6bc10a-2674-4cb7-9dec-fe701e37f86c");
  }, []);

  return null;
};
