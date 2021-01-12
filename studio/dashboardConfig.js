export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5ffdf9b50d7f7c00e3933505',
                  title: 'Sanity Studio',
                  name: 'pachi-blogueirinha-studio',
                  apiId: 'a38af07d-b503-4cc3-87e3-f7fef216ec92'
                },
                {
                  buildHookId: '5ffdf9b51d9b001080faf95c',
                  title: 'Blog Website',
                  name: 'pachi-blogueirinha',
                  apiId: '71c02e0a-4866-4690-9215-2053825e5d7a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pachicodes/pachi-blogueirinha',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://pachi-blogueirinha.netlify.app', category: 'apps'}
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
