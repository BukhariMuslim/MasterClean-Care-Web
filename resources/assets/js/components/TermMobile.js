import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import App from './App'
import ArticleContainer from '../containers/ArticleContainer'
import ArtContainer from '../containers/ArtContainer'
import OfferContainer from '../containers/OfferContainer'
import OrderContainer from '../containers/OrderContainer'
import FlatButton from 'material-ui/FlatButton'
import Breadcrumbs from '../modules/Breadcrumbs'

class TermMobile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Paper className="col s12" zDepth={1} style={{ padding: '10px', marginTop: '10px' }}>
        <h5>SYARAT DAN KETENTUAN</h5>
        <ul className="collection with-header">
          <li className="collection-header">
            <h5>Pendahuluan</h5>
            Syarat dan Ketentuan ini merupakan suatu perjanjian sah antara anda dan Master Clean-Care berlaku ke situs dan semua afiliasi pengoperasian situs internet yang berhubungan dengan syarat dan ketentuan ini. Silakan membatalkan akun anda (jika anda telah mendaftar untuk Aplikasi) dan secara permanen menghapus aplikasi dari perangkat anda jika anda tidak setuju dengan syarat dan ketentuan yang berlaku. Master Clean-Care berhak menambah, mengubah, atau menghapus bagian dari syarat dan ketentuan setiap saat. Perubahan akan berlaku tanpa pemberitahuan secara khusus. Anda disarankan untuk memeriksa persyaratan dan ketentuan penggunaan sebelum melakukan pemesanan. Dengan mengunduh, memasang, dan/atau menggunakan Aplikasi Master Clean-Care, anda setuju bahwa anda telah membaca, memahami dan menerima serta menyetujui syarat dan ketentuan ini.
            </li>
          <li className="collection-header">
            <h5>Penggunaan</h5>
            Berikut adalah ketentuan penggunaan aplikasi Master Clean &amp; Care.
            </li>
          <li className="collection-item">Master Clean-Care hanya menyediakan sebuah platform pemesanan layanan Asisten Rumah Tangga (ART). Master Clean-Care tidak mempekerjakan para ART. Master Clean-Care hanya bertindak sebagai mediator antara ART dengan member.</li>
          <li className="collection-item">Setiap persetujuan yang dilakukan antara Anda dengan ART di luar dari layanan yang disediakan sistem, tidak menjadi tanggung jawab pihak Master Clean-Care.</li>
          <li className="collection-item">ART hanya dapat dipesan untuk bekerja dari jam 08.00 WIB - 17.00 WIB. Pemesanan Layanan ART per jam hanya dapat dipesan untuk jangka waktu 2 jam kedepan.</li>
          <li className="collection-item">Master Clean-Care memberikan layanan minimal pemesanan per 2 jam.</li>
          <li className="collection-item">Pembobotan waktu minimal untuk menyapu ialah 30 menit, untuk mengepel ialah 30 menit, untuk mencuci piring 1 jam, untuk menyetrika dan melipat yaitu 1 jam dengan estimasi 15 pakaian. Untuk menyapu dan mengepel dilakukan dengan pertimbangan luas tempat tinggal maksimal 60m2. Sehingga untuk luas lebih dari 60m2, Anda harus menaikkan estimasi waktu pengerjaan lebih dari 2 jam atau menambah jumlah ART yang dipesan sehingga pelayanan lebih maksimal. Jika Anda tetap memilih 2 jam, Anda harus menginformasikan pekerjaan yang harus diprioritaskan pembersihannya kepada ART.</li>
          <li className="collection-item">Anda wajib memberikan informasi yang diminta dengan lengkap, faktual dan benar. Kerugian karena Anda yang memberikan informasi kurang lengkap bukanlah bagian dari tanggung jawab pihak Master Clean &amp; Care. Jika Anda membatalkan pemesanan yang telah disetujui dengan ART maka akan tetap dikenakan biaya pembatalan sesuai dengan total biaya pemesanan.</li>
          <li className="collection-item">Refund wallet dilakukan apabila ART tidak datang untuk bekerja.</li>
          <li className="collection-item">Anda tetap harus berhati-hati terhadap keselamatan pribadi dan properti, sama seperti ketika berinteraksi dengan orang yang baru dikenal. (diharapkan adanya pengawasan selama layanan berlangsung)</li>
          <li className="collection-item">Master Clean-Care tidak bertanggung jawab atas kerusakan, pengeluaran, kerugian, tuntutan dan/atau kontoversi (secara kolektif,"kewajiban") yang timbul atau mungkin timbul, selama penggunaan layanan.</li>
        </ul>
      </Paper>
    )
  }
}

export default withRouter(TermMobile)
