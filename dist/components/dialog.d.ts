import * as React from "react";
interface DialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: React.ReactNode;
}
interface DialogContentProps {
    children: React.ReactNode;
    className?: string;
}
interface DialogHeaderProps {
    children: React.ReactNode;
    className?: string;
}
interface DialogTitleProps {
    children: React.ReactNode;
    className?: string;
}
interface DialogDescriptionProps {
    children: React.ReactNode;
    className?: string;
}
interface DialogFooterProps {
    children: React.ReactNode;
    className?: string;
}
declare const Dialog: React.FC<DialogProps>;
declare const DialogContent: React.FC<DialogContentProps>;
declare const DialogHeader: React.FC<DialogHeaderProps>;
declare const DialogTitle: React.FC<DialogTitleProps>;
declare const DialogDescription: React.FC<DialogDescriptionProps>;
declare const DialogFooter: React.FC<DialogFooterProps>;
export { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter };
