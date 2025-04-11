import Svg, { SvgProps, Circle } from 'react-native-svg'

const BannerCircles = (props: SvgProps) => (
  <Svg width={317} height={131} fill='none' {...props}>
    <Circle cx={289.5} cy={27.5} r={27.5} fill='#F9C2BA' />
    <Circle cx={138} cy={116} r={15} fill='#F9C2BA' />
    <Circle cx={97} cy={117} r={4} fill='#F9C2BA' />
    <Circle cx={4} cy={37} r={4} fill='#F9C2BA' />
  </Svg>
)
export default BannerCircles
