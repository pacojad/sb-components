/// <reference types="react" />
import './mylabel.css';
export interface Props {
    /**
     * Label contents
     */
    label: string;
    /**
     * Label sizes
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Mayúsculas
     */
    allCaps?: boolean;
    /**
     * Label color
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Label custom color
     */
    fontColor?: string;
    /**
   * Background custom color
   */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: Props) => JSX.Element;
