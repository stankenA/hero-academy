import ContentLoader from "react-content-loader";

const HeroLoader = () => (
  <ContentLoader
    rtl
    speed={2}
    width={305}
    height={529}
    viewBox="0 0 305 529"
    backgroundColor="#01232b"
    foregroundColor="#02323d"
  >
    <rect x="2" y="0" rx="26" ry="26" width="279" height="300" />
    <rect x="0" y="320" rx="7" ry="7" width="279" height="31" />
    <rect x="0" y="371" rx="9" ry="9" width="279" height="85" />
    <rect x="-1" y="475" rx="10" ry="10" width="104" height="42" />
    <rect x="133" y="475" rx="11" ry="11" width="145" height="42" />
  </ContentLoader>
)

export default HeroLoader;
