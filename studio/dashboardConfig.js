export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f5a26c4af236a1f4d357848',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-od8r4r5g',
                  apiId: '8d80006d-4a83-45f1-a07d-e062f4fafab4'
                },
                {
                  buildHookId: '5f5a26c468744d1b233c36b4',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-6u9rnx6f',
                  apiId: '5c837582-6170-4509-9f53-957877936c61'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/radekznfa/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-6u9rnx6f.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
