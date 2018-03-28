import React from 'react';
import PostListing from '../components/Posts/PostListing';

const IndexPage = ({ data }) => (
	<div>
		<h2>Posts</h2>
		{data.allContentfulBlogPost.edges.map(({ node }) =>
			<PostListing key={node.id} post={node} />,
		)}
	</div>
);

export default IndexPage;

export const query = graphql`
	query SiteMeta {
	allContentfulBlogPost {
		edges {
			node {
				title
				body {
					childMarkdownRemark {
							html
							excerpt
					}
				}
			slug
			id
			}
		}
	}
	}
`;

