import * as React from "react";
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Make the card interactive/clickable with focus states */
    interactive?: boolean;
    /** Use article element for semantic content cards */
    asArticle?: boolean;
}
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    /** Heading level for accessibility (default h3) */
    as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
declare const CardTitle: React.ForwardRefExoticComponent<CardTitleProps & React.RefAttributes<HTMLHeadingElement>>;
declare const CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
