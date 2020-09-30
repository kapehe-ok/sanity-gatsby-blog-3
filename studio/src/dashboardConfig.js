export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f749f3f8e4c500c3a310e10',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-3-studio-7b3fwd2a',
                  apiId: 'd67eccb6-e357-479c-b501-98a2d74f8763'
                },
                {
                  buildHookId: '5f749f3f8e4c500bba311083',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-3-web-8bss3mz7',
                  apiId: '926b3143-8221-45c0-8b04-93e9267a6713'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kapehe-ok/sanity-gatsby-blog-3',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-3-web-8bss3mz7.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
