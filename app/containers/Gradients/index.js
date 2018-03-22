import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SwatchList, Swatch } from '@/components/Swatches'
import { PaletteContainer, PaletteList, PaletteItem, Palette } from '@/components/Palettes'

import { setActivePalette } from './actions'
import { getGradientsByPalette } from '@/selectors'

const Container = styled.div`
  display: flex;
  background-color: #222;
  padding: 20px;
`

class GradientController extends Component {
  render () {
    const { gradients } = this.props

    return (
      <Fragment>
        <Container>
          <SwatchList handleClick={ this.props.setActivePalette }>
            <Swatch color='#c93041' palette='Reds' />
            <Swatch color='#d56b31' palette='Oranges' />
            <Swatch color='#fed130' palette='Yellows' />
            <Swatch color='#219859' palette='Greens' />
            <Swatch color='#2bb6de' palette='Cyans' />
            <Swatch color='#1b5897' palette='Blues' />
            <Swatch color='#ed3dd7' palette='Magentas' />
            <Swatch color='#eaeaea' palette='Whites' />
            <Swatch color='#c0c0cb' palette='Grays' />
            <Swatch color='#333333' palette='Blacks' />
          </SwatchList>
        </Container>
        <PaletteContainer>
          <PaletteList>
            {gradients.map(function (gradient) {
              return (
                <PaletteItem key={ gradient.id }>
                  <Palette gradient={ gradient } />
                </PaletteItem>
              )
            })}
          </PaletteList>
        </PaletteContainer>
      </Fragment>
    )
  }
}

GradientController.propTypes = {
  gradients: PropTypes.array,
  setActivePalette: PropTypes.func
}

GradientController.defaultProps = {
  gradients: {},
  count: null,
  setActivePalette: () => {}
}

const mapStateToProps = (state, ownProps) => {
  return {
    gradients: getGradientsByPalette(state.palette, state.gradients.list)
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setActivePalette
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GradientController)
