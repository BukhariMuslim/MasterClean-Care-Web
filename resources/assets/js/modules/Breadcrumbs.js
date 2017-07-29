import breadcrumbConfig from 'auto-breadcrumb'

const Breadcrumbs = breadcrumbConfig({
  dynamicRoutesMap: {
    '/': 'Home',
    '/article': 'Artikel',
    '/article/:articleId': '{{articleId}}',
    '/art': 'ART',
    '/art/:artId': '{{artId}}',
  },
  containerProps: {
    className: 'col s12',
  },
  itemProps: {
    className: 'breadcrumb',
  },
  Breadcrumb: 'div',
  BreadcrumbItem: 'span',
})

export default Breadcrumbs