import Svg, { SvgProps, Path } from 'react-native-svg'

const SearchIcon = (props: SvgProps) => {
  return (
    <Svg width={24} height={25} fill='none' {...props}>
      <Path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M11 19.66c4.418 0 8-3.664 8-8.183 0-4.518-3.582-8.182-8-8.182S3 6.96 3 11.477c0 4.519 3.582 8.182 8 8.182ZM21 21.704l-4.35-4.448'
      />
    </Svg>
  )
}

export default SearchIcon
