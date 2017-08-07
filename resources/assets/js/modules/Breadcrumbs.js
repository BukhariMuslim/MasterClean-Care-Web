import breadcrumbConfig from 'auto-breadcrumb'

const Breadcrumbs = breadcrumbConfig({
  staticRoutesMap: {
    '/': 'Beranda',
    '/art': 'ART',
    '/offer': 'Penawaran',
    '/order': 'Order',
    '/profile': 'Profile',
  },
  dynamicRoutesMap: {
    '/art/:artId': '{{artId}}',
    '/offer/:offerId': '{{offerId}}',
    '/order/:orderId': '{{orderId}}',
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