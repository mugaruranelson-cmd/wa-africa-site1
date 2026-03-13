import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

export default function SEO({ title, description, name, type, image, url }) {
  const siteName = "WhatsAppAutomation.Africa";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const standardDescription = description || "Transform your business with expert WATI and WhatsApp Business API automation solutions tailored for East African companies.";

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={standardDescription} />
      
      {/* Open Graph metadata */}
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={standardDescription} />
      <meta property='og:type' content={type || 'website'} />
      {name && <meta property='og:site_name' content={name} />}
      {url && <meta property='og:url' content={url} />}
      {image && <meta property='og:image' content={image} />}

      {/* Twitter Cards */}
      <meta name='twitter:creator' content={name || siteName} />
      <meta name='twitter:card' content={image ? 'summary_large_image' : 'summary'} />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={standardDescription} />
      {image && <meta name='twitter:image' content={image} />}
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
};
