import Head from 'next/head';
import { useRouter } from 'next/router';

interface Props {
  pageTitle: string;
  pageDescription: string;
  pagePath?: string;
  pageImg?: string;
  pageImgWidth?: number;
  pageImgHeight?: number;
}

const Seo = ({
  pageTitle,
  pageDescription,
  pagePath,
  pageImg,
  pageImgWidth,
  pageImgHeight
}: Props) => {
  const router = useRouter();
  
  const defaultTitle = '<타이틀>';
  const defaultDescription = '<사이트 설명>';
  const defaultPath = router.asPath;

  const title = pageTitle || defaultTitle;
  const description = pageDescription || defaultDescription;
  const url = pagePath || defaultPath;
  const imgUrl = pageImg || '/og-img.png';
  const imgWidth = pageImgWidth || 1280;
  const imgHeight = pageImgHeight || 640;

  return (
    <Head>
      <title>{defaultTitle}</title>
      <meta name="viewport" content="initial-scale=1, minimum-scale=1, maximum-scale=1, width=device-width, target-densitydpi=medium-dpi" />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={String(imgWidth)} />
      <meta property="og:image:height" content={String(imgHeight)} />
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default Seo;
