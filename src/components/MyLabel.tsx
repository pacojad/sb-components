import './mylabel.css'

export interface Props {
  /**
   * Label contents
   */
  label: string;
  /**
   * Label sizes
   */
  size: 'normal'|'h1'|'h2'|'h3';
  /**
   * Mayúsculas
   */
  allCaps?: boolean;
  /**
   * Label color
   */
  color?: 'primary'|'secondary'|'tertiary';
  /**
   * Label custom color
   */
  fontColor?: string;
}


export const MyLabel = ( {
  label = 'No label',
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor
}: Props ) => {
  return (
    <span className={ `label ${size} text-${color}`} style={{ color: fontColor }}>
      { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
