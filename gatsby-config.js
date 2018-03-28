module.exports = {
	siteMetadata: {
		title: 'The Great Gatsby',
		desc: 'When Spiderman ran out of films',
	},
	plugins: [
		{
			resolve: 'gatsby-source-contentful',
			options: {
				spaceId: 'xb49wz8s9f03',
				accessToken: '59758c100e8fe2793adfa78cefc0fc10ecc26704c7e3bca5e3ce39de2e05b701',
			},
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/posts`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'img',
				path: `${__dirname}/src/images`,
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-transformer-remark',
	],
};
