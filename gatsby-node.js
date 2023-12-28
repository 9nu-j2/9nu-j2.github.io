const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: './blog',
    });

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: 'slug',
      value: `/blog${relativeFilePath}`,
    });
  }
};
