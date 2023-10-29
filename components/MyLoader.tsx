import React from 'react'
import ContentLoader from 'react-content-loader'

const MyLoader = (props: any) => (
  <ContentLoader
    speed={2}
    width={325}
    height={442}
    viewBox="0 0 325 442"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="121" y="282" rx="0" ry="0" width="1" height="0" />
    <rect x="5" y="287" rx="9" ry="9" width="280" height="24" />
    <rect x="6" y="324" rx="10" ry="10" width="280" height="56" />
    <rect x="9" y="399" rx="0" ry="0" width="97" height="31" />
    <rect x="122" y="390" rx="29" ry="29" width="164" height="50" />
    <circle cx="141" cy="126" r="126" />
  </ContentLoader>
)

export default MyLoader
