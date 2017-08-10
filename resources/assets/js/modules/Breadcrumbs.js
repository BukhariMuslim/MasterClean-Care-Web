import breadcrumbConfig from 'auto-breadcrumb'

const Breadcrumbs = breadcrumbConfig({
  staticRoutesMap: {
    '/': 'Beranda',
    '/art': 'ART',
    '/member': 'Member',
    '/offer': 'Penawaran',
    '/offer/my_offer': 'Penawaran Saya',
    '/order': 'Pemesanan',
    '/profile': 'Profile',
  },
  dynamicRoutesMap: {
    '/member/:memberId': '{{memberId}}',
    '/art/:artId': '{{artId}}',
    '/offer/my_offer/:offerId': '{{offerId}}',
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