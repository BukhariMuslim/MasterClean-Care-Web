import breadcrumbConfig from 'auto-breadcrumb'

const Breadcrumbs = breadcrumbConfig({
  staticRoutesMap: {
    '/': 'Beranda',
    '/art': 'ART',
    '/member': 'Member',
    '/offer': 'Penawaran',
    '/my_offer': 'Penawaran Saya',
    '/order': 'Pemesanan Saya',
    '/order_history': 'Riwayat Pemesanan',
    '/profile': 'Profil',
    '/term': 'Syarat & Ketentuan',
    '/term_mobile': 'Syarat & Ketentuan',
  },
  dynamicRoutesMap: {
    '/member/:memberId': '{{memberId}}',
    '/art/:artId': '{{artId}}',
    '/my_offer/:offerId': '{{offerId}}',
    '/offer/:offerId': '{{offerId}}',
    '/order_history/:orderId': '{{orderId}}',
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