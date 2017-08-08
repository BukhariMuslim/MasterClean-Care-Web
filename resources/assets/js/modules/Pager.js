import React from 'react'
import PropTypes from 'prop-types'
import FontIcon from 'material-ui/FontIcon'

/**
 * ## Constants
 */
const BASE_SHIFT = 0
const TITLE_SHIFT = 1

const TITLES = {
  first: 'first_page',
  prev: 'chevron_left',
  prevSet: 'more_horiz',
  nextSet: 'more_horiz',
  next: 'chevron_right',
  last: 'last_page',
}


/**
 * ## Constructor
 */
class Pager extends React.Component {
  constructor(props) {
    super(props)

    this.handleFirstPage = this.handleFirstPage.bind(this)
    this.handlePreviousPage = this.handlePreviousPage.bind(this)
    this.handleNextPage = this.handleNextPage.bind(this)
    this.handleLastPage = this.handleLastPage.bind(this)
    this.handleMorePrevPages = this.handleMorePrevPages.bind(this)
    this.handleMoreNextPages = this.handleMoreNextPages.bind(this)
    this.handlePageChanged = this.handlePageChanged.bind(this)
  }

  /* ========================= HELPERS ==============================*/
  getTitles(key) {
    return this.props.titles[key] || TITLES[key]
  }

  /**
   * Calculates "blocks" of buttons with page numbers.
   */
  calcBlocks() {
    const props = this.props
    const total = props.total
    const blockSize = props.visiblePages
    const current = props.current + TITLE_SHIFT
    const blocks = Math.ceil(total / blockSize)
    const currBlock = Math.ceil(current / blockSize) - TITLE_SHIFT

    return {
      total: blocks,
      current: currBlock,
      size: blockSize,
    }
  }

  isPrevDisabled() {
    return this.props.current <= BASE_SHIFT
  }

  isNextDisabled() {
    return this.props.current >= (this.props.total - TITLE_SHIFT)
  }

  isPrevMoreHidden() {
    const blocks = this.calcBlocks()
    return (blocks.total === TITLE_SHIFT) || (blocks.current === BASE_SHIFT)
  }

  isNextMoreHidden() {
    const blocks = this.calcBlocks()
    return (blocks.total === TITLE_SHIFT) || (blocks.current === (blocks.total - TITLE_SHIFT))
  }

  visibleRange() {
    const blocks = this.calcBlocks()
    const start = blocks.current * blocks.size
    const delta = this.props.total - start
    const end = start + ((delta > blocks.size) ? blocks.size : delta)

    return [start + TITLE_SHIFT, end + TITLE_SHIFT]
  }


  /* ========================= HANDLERS =============================*/
  handleFirstPage() {
    if (!this.isPrevDisabled()) {
      this.handlePageChanged(BASE_SHIFT)
    }
  }

  handlePreviousPage() {
    if (!this.isPrevDisabled()) {
      this.handlePageChanged(this.props.current - TITLE_SHIFT)
    }
  }

  handleNextPage() {
    if (!this.isNextDisabled()) {
      this.handlePageChanged(this.props.current + TITLE_SHIFT)
    }
  }

  handleLastPage() {
    if (!this.isNextDisabled()) {
      this.handlePageChanged(this.props.total - TITLE_SHIFT)
    }
  }

  /**
   * Chooses page, that is one before min of currently visible
   * pages.
   */
  handleMorePrevPages() {
    const blocks = this.calcBlocks()
    this.handlePageChanged((blocks.current * blocks.size) - TITLE_SHIFT)
  }

  /**
   * Chooses page, that is one after max of currently visible
   * pages.
   */
  handleMoreNextPages() {
    const blocks = this.calcBlocks()
    this.handlePageChanged((blocks.current + TITLE_SHIFT) * blocks.size)
  }

  handlePageChanged(num) {
    const handler = this.props.onPageChanged
    if (handler) handler(num)
  }


  /* ========================= RENDERS ==============================*/
  /**
   * ### renderPages()
   * Renders block of pages' buttons with numbers.
   * @param {Number[]} range - pair of [start, from], `from` - not inclusive.
   * @return {React.Element[]} - array of React nodes.
   */
  renderPages(pair) {
    return range(pair[0], pair[1]).map((num, idx) => {
      const current = num - TITLE_SHIFT
      const onClick = this.handlePageChanged.bind(this, current)
      const isActive = (this.props.current === current)

      return (
        <Page
          key={idx}
          index={idx}
          isActive={isActive}
          className="btn-numbered-page waves-effect"
          onClick={onClick}
        >{num}</Page>
      )
    })
  }


  render() {
    const titles = this.getTitles.bind(this)
    let className = "pagination"
    if (this.props.className) {
      className += " " + this.props.className
    }

    return (
      <div style={{ textAlign: 'center' }}>
        <ul className={className}>
          <Page
            className="btn-first-page waves-effect"
            key="btn-first-page"
            isDisabled={this.isPrevDisabled()}
            onClick={this.handleFirstPage}
          ><FontIcon className="material-icons" style={{ lineHeight: 1.3 }}>{titles('first')}</FontIcon></Page>

          <Page
            className="btn-prev-page waves-effect"
            key="btn-prev-page"
            isDisabled={this.isPrevDisabled()}
            onClick={this.handlePreviousPage}
          ><FontIcon className="material-icons" style={{ lineHeight: 1.3 }}>{titles('prev')}</FontIcon></Page>

          <Page
            className="btn-prev-more waves-effect"
            key="btn-prev-more"
            isHidden={this.isPrevMoreHidden()}
            onClick={this.handleMorePrevPages}
          ><FontIcon className="material-icons" style={{ lineHeight: 1.3 }}>{titles('prevSet')}</FontIcon></Page>

          {this.renderPages(this.visibleRange())}

          <Page
            className="btn-next-more waves-effect"
            key="btn-next-more"
            isHidden={this.isNextMoreHidden()}
            onClick={this.handleMoreNextPages}
          ><FontIcon className="material-icons" style={{ lineHeight: 1.3 }}>{titles('nextSet')}</FontIcon></Page>

          <Page
            className="btn-next-page waves-effect"
            key="btn-next-page"
            isDisabled={this.isNextDisabled()}
            onClick={this.handleNextPage}
          ><FontIcon className="material-icons" style={{ lineHeight: 1.3 }}>{titles('next')}</FontIcon></Page>

          <Page
            className="btn-last-page waves-effect"
            key="btn-last-page"
            isDisabled={this.isNextDisabled()}
            onClick={this.handleLastPage}
          ><FontIcon className="material-icons" style={{ lineHeight: 1.3 }}>{titles('last')}</FontIcon></Page>
        </ul>
      </div>
    )
  }
}

Pager.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  visiblePages: PropTypes.number.isRequired,
  titles: PropTypes.object,
  onPageChanged: PropTypes.func,
}

Pager.defaultProps = {
  titles: TITLES,
}


const Page = (props) => {
  if (props.isHidden) return null

  const baseCss = props.className ? `${props.className} ` : ''
  const fullCss = `${baseCss}${props.isActive ? ' active cyan' : ''}${props.isDisabled ? ' disabled' : ''}`

  return (
    <li key={props.index} className={fullCss}>
      <a onClick={props.onClick}>{props.children}</a>
    </li>
  )
}

Page.propTypes = {
  isHidden: PropTypes.bool,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
}


function range(start, end) {
  const res = []
  for (let i = start; i < end; i++) {
    res.push(i)
  }

  return res
}

export default Pager