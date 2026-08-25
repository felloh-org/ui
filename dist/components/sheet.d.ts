import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
declare const Sheet: React.FC<SheetPrimitive.DialogProps>;
declare const SheetTrigger: React.ForwardRefExoticComponent<SheetPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const SheetClose: React.ForwardRefExoticComponent<SheetPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
declare const SheetPortal: React.FC<SheetPrimitive.DialogPortalProps>;
declare const SheetOverlay: React.ForwardRefExoticComponent<Omit<SheetPrimitive.DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SheetContent: React.ForwardRefExoticComponent<Omit<SheetPrimitive.DialogContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    side?: "top" | "right" | "bottom" | "left";
} & React.RefAttributes<HTMLDivElement>>;
declare const SheetHeader: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element;
declare const SheetFooter: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element;
declare const SheetTitle: React.ForwardRefExoticComponent<Omit<SheetPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const SheetDescription: React.ForwardRefExoticComponent<Omit<SheetPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
export { Sheet, SheetPortal, SheetOverlay, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription };
