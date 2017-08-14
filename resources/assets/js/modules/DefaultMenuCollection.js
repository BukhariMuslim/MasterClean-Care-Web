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
    iconLabel: 'work',
    allowUser: [0, 1, 3],
  },
  {
    id: 4,
    label: 'Penawaran Saya',
    link: '/my_offer',
    iconLabel: 'business_center',
    allowUser: [2, 3],
  },
  {
    id: 5,
    label: 'Pemesanan Saya',
    link: '/order',
    iconLabel: 'event_note',
    allowUser: [2, 3],
  },
  {
    id: 6,
    label: 'Riwayat Pemesanan',
    link: '/order_history',
    iconLabel: 'query_builder',
    allowUser: [2, 3],
  },
]

export default DefaultMenuCollection