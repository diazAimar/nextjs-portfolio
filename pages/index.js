import Seo from '../components/shared/Seo';
import Menu from '../components/home/Menu';

export default function Home() {
  return (
    <>
      <Seo
        title="Diaz Aimar | My Portfolio"
        description="Hi! This is my portfolio, where you can find information about me and a showcase of my best projects. Im a fullstack developer seeking to specialize in frontend."
        keywords="web developer, react, nextjs, javascript, portfolio, Argentina"
      />
      <Menu />
    </>
  );
}
