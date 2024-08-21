import Layout from '../../app/layout'; // Make sure to use the correct layout path
import ProjectHeader from '../../components/projects/abajora/ProjectHeader';
import SpotLight from '../../components/projects/abajora/SpotLight';
import CraftSection from '../../components/projects/abajora/CraftSection';
import StorySection from '../../components/projects/abajora/StorySection';
import ToolsSection from '../../components/projects/abajora/ToolsSection';
import ShareButtons from '../../components/projects/abajora/ShareButtons';
import Footer from '../../components/footer';

export default function AbajoraPage() {
  const shareProps = {
    title: 'Abajora Project',
    url: 'https://your-website-url.com/projects/abajora',
    imageUrl: 'https://your-website-url.com/path-to-your-image.jpg',
  };

  return (
    <Layout>
      <div className="bg-custom-dark text-white min-h-screen">
        <ProjectHeader />
        <SpotLight />
        <StorySection />
        <CraftSection />
        <ToolsSection />
        <ShareButtons {...shareProps} />
        <Footer />
      </div>
    </Layout>
  );
}
