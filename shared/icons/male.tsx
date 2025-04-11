import { View } from 'react-native'
import Svg, { SvgProps, Path } from 'react-native-svg'

const MaleIcon = (props: SvgProps) => (
  <View style={{ borderRadius: 100, padding: 6, backgroundColor: '#E6F0FF' }}>
    <Svg width={25} height={25} fill='none' {...props}>
      <Path
        fill='#8EB1E6'
        d='M20.873 0h-4.48l-4.128 4.127h5.69l-4.177 4.176a9.025 9.025 0 1 0 2.919 2.919l4.176-4.176v5.689L25 8.607V0h-4.127ZM9.025 21.045a5.07 5.07 0 1 1 0-10.139 5.07 5.07 0 0 1 0 10.139Z'
      />
    </Svg>
  </View>
)
export default MaleIcon
