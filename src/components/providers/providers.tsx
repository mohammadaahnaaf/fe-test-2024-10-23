import React from "react";
import { UserAgentProvider } from "./userAgentProvider";

export const Providers: React.FC<{
  children: React.ReactNode;
  initialUserAgent?: string
}> = ({ children, initialUserAgent }) => {
  return (
    <UserAgentProvider initialUserAgent={initialUserAgent}>{children}</UserAgentProvider>
  );
};
