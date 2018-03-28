import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import './index.css';

const TemplateWrapper = ({ children, data, location }) => (
	<div>
		<Helmet title="Gatsby Default Starter" meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]} />
		<Header data={data} location={location} />
		<div>
			{children()}
		</div>
	</div>
);

TemplateWrapper.propTypes = {
	children: PropTypes.func,
};

export default TemplateWrapper;


export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        desc
      }
    }
		background: imageSharp(id: { regex: "/bg.jpeg/" }) {
			sizes(maxWidth: 1240) {
				...GatsbyImageSharpSizes
			}
		}
  }
`;
