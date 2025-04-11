import Svg, { SvgProps, Path } from 'react-native-svg'

const CloseIcon = (props: SvgProps) => (
  <Svg width={18} height={18} fill='none' {...props}>
    <Path
      fill='#5F5B5B'
      d='M17.5 1.762 15.738 0 8.75 6.987 1.763 0 0 1.762 6.987 8.75 0 15.738 1.762 17.5l6.988-6.988 6.988 6.988 1.762-1.762-6.988-6.988L17.5 1.763Z'
    />
  </Svg>
)
export default CloseIcon
