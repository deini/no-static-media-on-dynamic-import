import dynamic from 'next/dynamic';

// Logo component imports an SVG file, which is not included when using dynamic with ssr: false
const Logo = dynamic(() => import('../Logo'), {
  ssr: false,
  loading: () => <div>Loading....</div>,
});

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return <Logo />;
}
