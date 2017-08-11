const DefaultMenuCollection = [
  {
    id: 1,
    label: 'Beranda',
    link: '/',
    iconLabel: 'home',
    allowUser: [0, 1, 2, 3],
  },
  {
    id: 2,
    label: 'ART',
    link: '/art',
    iconLabel: 'face',
    allowUser: [0, 1, 2],
  },
  {
    id: 3,
    label: 'Penawaran',
    link: '/offer',
    iconLabel: 'business_center',
    allowUser: [0, 1, 3],
  },
  {
    id: 4,
    label: 'Penawaran Saya',
    link: '/offer/my_offer',
    iconLabel: 'business_center',
    allowUser: [2, 3],
  },
  {
    id: 5,
    label: 'Pemesanan',
    link: '/order',
    iconLabel: 'receipt',
    allowUser: [2, 3],
  },
]

export default DefaultMenuCollection