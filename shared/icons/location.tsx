import Svg, { SvgProps, Path } from 'react-native-svg'

const LocationIcon = (props: SvgProps) => (
  <Svg width={22} height={32} fill='none' {...props}>
    <Path
      stroke='#EA4A6A'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M11.5 14a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'
    />
    <Path
      stroke='#EA4A6A'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M11 31c6.666-7 10-13.667 10-20 0-5.523-4.477-10-10-10S1 5.477 1 11c0 6.333 3.333 13 10 20Z'
    />
  </Svg>
)
export default LocationIcon
