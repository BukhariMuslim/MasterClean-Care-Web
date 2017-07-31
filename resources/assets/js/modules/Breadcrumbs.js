import breadcrumbConfig from 'auto-breadcrumb'

const Breadcrumbs = breadcrumbConfig({
  dynamicRoutesMap: {
    '/': 'Home',
    '/article': 'Artikel',
    '/article/:articleId': '{{articleId}}',
    '/art': 'ART',
    '/art/:artId': '{{artId}}',
    '/offer': 'Penawaran',
    '/offer/:offerId': '{{offerId}}',
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