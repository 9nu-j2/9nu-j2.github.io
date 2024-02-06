import Typography from 'typography';
import githubTheme from 'typography-theme-github';
githubTheme.baseFontSize = '18px';

githubTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  '.gatsby-resp-image-wrapper': {},
  '.gatsby-resp-image-figcaption': {
    textAlign: 'center',
    fontSize: '0.8em',
    color: '#555',
  },
}); // 이미지 캡션 스타일 추가

const typography = new Typography(githubTheme);

export default typography;
