import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import FontIcon from 'material-ui/FontIcon'
import FlatButton from 'material-ui/FlatButton'
import DefaultMenuCollection from '../modules/DefaultMenuCollection'

class FooterComponent extends Component {
  currentYear() {
    const year = (new Date()).getFullYear()
    if (year > 2017) {
      return '-' + year
    }
    return ''
  }

  menuList(collection) {
    return collection.map((obj, idx) => {
      return (
        <li className="grey-text text-lighten-3" to="#!" key={obj.id} >
           <FlatButton
            label={obj.label}
            secondary={true}
            containerElement={<Link to={obj.link} />}
            icon={<FontIcon className="material-icons">{obj.iconLabel}</FontIcon>}
          />
        </li>
      )
    })
  }

  render() {
    return (
      <footer className="page-footer cyan">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Master Clean &amp; Care</h5>
              <p className="grey-text text-lighten-4">Master Clean &amp; Care adalah Online Clean and Care Service yang menawarkan jasa pekerja rumah tangga, babysitter, nanny, dan perawat lansia.</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                { this.menuList(DefaultMenuCollection) }
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2017{this.currentYear()} Master Clean &amp; Care, All rights reserved.
          <Link className="grey-text text-lighten-4 right" to="#!" >Syarat &amp; Kententuan</Link>
          </div>
        </div>
      </footer>
    )
  }
}

export default FooterComponent
