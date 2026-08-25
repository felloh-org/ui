import * as React from 'react';
import { Toaster as SonnerToaster } from 'sonner';
export const Toaster = SonnerToaster;
export const toast = { success: (m: string) => console.log(m), error: (m: string) => console.error(m) };
