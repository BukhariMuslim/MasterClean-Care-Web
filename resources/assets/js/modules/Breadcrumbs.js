import breadcrumbConfig from 'auto-breadcrumb'

const Breadcrumbs = breadcrumbConfig({
  staticRoutesMap: {
    '/': 'Beranda',
    '/art': 'ART',
    '/member': 'Member',
    '/offer': 'Penawaran',
    '/order': 'Order',
    '/profile': 'Profile',
  },
  dynamicRoutesMap: {
    '/member/:memberId': '{{memberId}}',
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