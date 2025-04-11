import Svg, { SvgProps, Path } from 'react-native-svg'

const FilterIcon = (props: SvgProps) => (
  <Svg width={24} height={16} fill='none' {...props}>
    <Path
      fill='#5F5B5B'
      d='M9.5 15.5h5V13h-5v2.5ZM.75.5V3h22.5V.5H.75ZM4.5 9.25h15v-2.5h-15v2.5Z'
    />
  </Svg>
)
export default FilterIcon
