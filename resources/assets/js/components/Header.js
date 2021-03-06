import React, { Component } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import { Link } from 'react-router-dom'
import NumberFormat from 'react-number-format'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card >
        <CardMedia
          style={{ maxHeight: "140px", overflow: "hidden" }}
          overlayContentStyle={{
            background: "none"
          }}
          overlay={
            <div>
              <Link to="/profile">
                <Avatar src={this.props.avatarImg} style={{ margin: "8px", verticalAlign: "middle", objectFit: 'cover'  }} />
                <div style={{ padding: "8px", background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%)" }}>
                  <span style={{
                    fontSize: "1.15em",
                    color: "#fff",
                    padding: "5px",
                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                  >
                    {this.props.username} <small>({this.props.role ? this.props.role.name : ''})</small><br/>
                    {
                      this.props.wallet ?
                      <small>
                        <NumberFormat value={this.props.wallet.amt} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} />
                      </small>
                      :
                      ''
                    }
                  </span>
                </div>
              </Link>
            </div>
          }
        >
          <img src={this.props.bgImg} />
        </CardMedia>
      </Card>
    )
  }
}

export default Header