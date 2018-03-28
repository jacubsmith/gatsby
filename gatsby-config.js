module.exports = {
	siteMetadata: {
		title: 'The Great Gatsby',
		desc: 'When Spiderman ran out of films',
	},
	plugins: [
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
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				excerpt_separator: '<-- end -->',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
	],
};
