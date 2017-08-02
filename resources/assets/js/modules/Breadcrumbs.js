import breadcrumbConfig from 'auto-breadcrumb'

const Breadcrumbs = breadcrumbConfig({
  staticRoutesMap: {
    '/': 'Beranda',
    '/article': 'Artikel',
    '/art': 'ART',
    '/offer': 'Penawaran',
  },
  dynamicRoutesMap: {
    '/article/:articleId': '{{articleId}}',
    '/art/:artId': '{{artId}}',
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