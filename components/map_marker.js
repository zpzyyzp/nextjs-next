import React from 'react';
import { makeStyles } from '@material-ui/styles'
import { PlaceOutlined } from '@material-ui/icons'
import { blue, indigo, red } from '@material-ui/core/colors'
import Tooltip from '@material-ui/core/Tooltip';

const styledBy = (property, mapping) => props => mapping[props[property]]

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    transform: 'translate(-50%, -100%)'
  },
  marker: {
    color: styledBy('color', {
      red: red[500],
      redLight: red[600],
      blue: blue[500],
      blueLight: blue[600],
      indigo: indigo[500],
    }),
  }
}))

function ColoredPlace (props) {
  const { color, ...other } = props
  const classes = useStyles(props)
  return <PlaceOutlined className={classes.marker} {...other} />
}

export default function MapMarker ({text = 'test', color}) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ColoredPlace color={color} />
    </div>
  )
}