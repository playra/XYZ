/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'

import Svg, {
    Line,
    Polygon,
    Path
} from 'react-native-svg'

import {
  STROKE_COLOR,
  STROKE_WIDTH,
  DEFAULT_COLOR,
  DISABLED_COLOR,
  CHOSEN_COLOR
} from './app/costants.js'

// import Axis from './app/axis.js'

const Axis = ({startPoint=['0,0', '0,0'], endPoint=['0,0','0,0']}) => (
  <Line
    x1={startPoint[0]}
    y1={startPoint[1]}
    x2={endPoint[0]} 
    y2={endPoint[1]}
    stroke={STROKE_COLOR}
    strokeWidth={STROKE_WIDTH}
  />
)

export default class xyz extends Component {
    constructor () {
        super()
        this.state = {
            hover: true,
            fill001: 'black',
            fill002: 'black',
            fill003: 'black',
            fill004: 'black',
            fill005: 'black',
            fill006: 'black',
            fill007: 'black',
            fill008: 'black',
            fill009: 'black',
            fill000: 'black'
        }
    }

    toggle = () => {
        this.setState({hover: !this.state.hover});
    }
    render () {
      const SVG_HEIGHT = 320.49
      const SVG_WIDTH = 276.95

      return (
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.display}>3,1415926535 8979323846 2643383279 5028841971 6939937510 5820974944 5923078164 0628620899 8628034825 3421170679 8214808651 3282306647 0938446095 5058223172 5359408128 4811174502 8410270193 8521105559 6446229489 5493038196 4428810975 6659334461 2847564823 3786783165 2712019091 4564856692 3460348610 4543266482 1339360726 0249141273 7245870066 0631558817 4881520920 9628292540 9171536436 7892590360 0113305305 4882046652 1384146951 9415116094 3305727036 5759591953 0921861173 8193261179 3105118548 0744623799 6274956735 1885752724 8912279381 8301194912 9833673362 4406566430 8602139494 6395224737 1907021798 6094370277 0539217176 2931767523 8467481846 7669405132 0005681271 4526356082 7785771342 7577896091 7363717872 1468440901 2249534301 4654958537 1050792279 6892589235 4201995611 2129021960 8640344181 5981362977 4771309960 5187072113 4999999837 2978049951 0597317328 1609631859 5024459455 3469083026 4252230825 3344685035 2619311881 7101000313 7838752886 5875332083 8142061717 7669147303 5982534904 2875546873 1159562863 8823537875 9375195778 1857780532 1712268066 1300192787 6611195909 2164201989</Text>
          </ScrollView>
          <View>
            <Svg
              height={SVG_HEIGHT}
              width={SVG_WIDTH}
            >
              {/* Axis 1 */}
              <Line
                x1='138.46'
                y1='159.52'
                x2='138.49'
                y2='318.16'
                stroke={STROKE_COLOR}
                strokeWidth={STROKE_WIDTH}
              />
              {/* Axis 2 */}
              <Line
                x1='138.46'
                y1='159.65'
                x2='92.66'
                y2='238.88'
                stroke={STROKE_COLOR}
                strokeWidth={STROKE_WIDTH}
              />
              {/* Axis 3 */}
              <Line
                x1='138.46'
                y1='159.65'
                x2='3.22'
                y2='238.23'
                stroke={STROKE_COLOR}
                strokeWidth={STROKE_WIDTH}
              />
              {/* Axis 4 */}
              <Line
                x1='138.46'
                y1='159.65'
                x2='47.08'
                y2='159.65'
                stroke={STROKE_COLOR}
                strokeWidth={STROKE_WIDTH}
              />
              {/* Axis 5 */}
              <Line
                x1='138.46'
                y1='159.65'
                x2='2.02'
                y2='80.99'
                stroke={STROKE_COLOR}
                strokeWidth={STROKE_WIDTH}
              />
              {/* Axis 6 */}
              <Line
                x1='138.46'
                y1='159.65'
                x2='93.37'
                y2='81.48'
                stroke={STROKE_COLOR}
                strokeWidth={STROKE_WIDTH}
              />
              {/* Axis 7 */}
              <Line
                x1='138.46'
                y1='159.65'
                x2='138.46'
                y2='2.71'
                stroke={STROKE_COLOR}
                strokeWidth={STROKE_WIDTH}
              />
              {/* Axis 8 */}
              <Line
                x1='138.46'
                y1='159.65'
                x2='184.18'
                y2='80.81'
                stroke={STROKE_COLOR}
                strokeWidth={STROKE_WIDTH}
              />
              {/* Axis 9 */}
              <Line
                x1='138.46'
                y1='159.65'
                x2='274.78'
                y2='81.05'
                stroke={STROKE_COLOR}
                strokeWidth={STROKE_WIDTH}
              />
              {/* Axis 10 */}
              <Line
                x1='138.46'
                y1='159.65'
                x2='229.74'
                y2='159.65'
                stroke={STROKE_COLOR}
                strokeWidth={STROKE_WIDTH}
              />
              {/* Axis 11 */}
              <Line
                x1='138.46'
                y1='159.65'
                x2='274.93'
                y2='238.31'
                stroke={STROKE_COLOR}
                strokeWidth={STROKE_WIDTH}
              />
              {/* Axis 12 */}
              <Line
                x1='138.46'
                y1='159.65'
                x2='184.18'
                y2='238.77'
                stroke={STROKE_COLOR}
                strokeWidth={STROKE_WIDTH}
              />
              {/* Shakti внешний треугольник */}
              <Polygon
                points='1.75 80.82 275.15 80.82 138.45 318.49 1.75 80.82'
                fill='none'
                stroke='gold'
                strokeWidth='0.9'
              />
              {/* Shiva внешний треугольник */}
              <Polygon
                points='1.73 238.47 138.47 2 275.22 238.47 1.73 238.47'
                fill='none'
                stroke='gold'
                strokeWidth='0.9'
              />
              {/* Shakti средний треугольник */}
              <Polygon
                points='36.21 100.64 240.39 100.83 138.47 278.43 36.21 100.64'
                fill='none'
                stroke='gold'
                strokeWidth='0.9'
              />
              {/* Shiva средний треугольник */}
              <Polygon
                points='138.47 41.83 241.29 218.91 35.4 219.07 138.47 41.83'
                fill='none'
                stroke='gold'
                strokeWidth='0.9'
              />
              {/* Shakti малый треуголник */}
              <Polygon
                points='70.91 120.7 205.86 120.73 138.46 237.47 70.91 120.7'
                fill='none'
                stroke='gold'
                strokeWidth='0.9'
              />
              {/* Shiva малый треуголник */}
              <Polygon
                points='71.07 198.44 138.45 81.83 205.86 198.56 71.07 198.44'
                fill='none'
                stroke='gold'
                strokeWidth='0.9'
              />
             {/* Shakti внутрений треугольник */}
              <Polygon
                points='106.07 140.95 170.92 140.91 138.5 197.46 106.07 140.95'
                fill='none'
                stroke='gold'
                strokeWidth='0.9'
              />
             {/* Shiva внутрений треугольник */}
              <Polygon
                points='105.65 178.6 138.48 121.84 171.29 178.6 105.65 178.6'
                fill='none'
                stroke='gold'
                strokeWidth='0.9'
              />
               {/* Shakti 999 */}
              <Polygon
                points='132.09 156.23 145.21 156.24 138.61 167.7 132.09 156.23'
                fill='none'
                stroke='gold'
                strokeWidth='0.9'
              />
               {/* Shiva 999 */}
              <Polygon
                points='132.07 164.06 138.59 152.5 145.31 164.16 132.07 164.06'
                fill='none'
                stroke='gold'
                strokeWidth='0.9'
              />
              {/* Polygon001 Shakti */}
              <Polygon
                ref='001'
                points='93.75 238.88 103.92 221.39 137.48 279.64 137.48 314.5 93.75 238.88'
                stroke={this.state.hover ? 'rgba(10, 10, 10, 0.5)' : 'gold'}
                fill={this.state.fill001}
                strokeWidth='0'
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {this.setState({fill001: 'gold', fill002: 'black', fill003: 'black', fill004: 'black', fill005: 'black', fill006: 'black', fill007: 'black', fill008: 'black', fill009: 'black', fill000: 'black'})}}
              />
              {/* Polygon002 Shakti */}
              <Polygon
                ref='002'
                points='48.47 160.65 68.99 160.65 102.78 219.38 92.61 236.97 48.47 160.65'
                stroke={this.state.hover ? 'rgba(10, 10, 10, 0.5)' : 'gold'}
                fill={this.state.fill002}
                strokeWidth='0'
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {this.setState({fill001: 'gold', fill002: 'gold', fill003: 'black', fill004: 'black', fill005: 'black', fill006: 'black', fill007: 'black', fill008: 'black', fill009: 'black', fill000: 'black'})}}
              />
              {/* Polygon003 Shakti */}
              <Polygon
                ref='003'
                points='3.63 83.07 34.66 100.96 67.84 158.64 47.32 158.65 3.63 83.07'
                stroke={this.state.hover ? 'rgba(10, 10, 10, 0.5)' : 'gold'}
                fill={this.state.fill003}
                strokeWidth='0'
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {this.setState({fill001: 'gold', fill002: 'gold', fill003: 'gold', fill004: 'black', fill005: 'black', fill006: 'black', fill007: 'black', fill008: 'black', fill009: 'black', fill000: 'black'})}}
              />
              {/* Polygon004 Shakti */}
              <Polygon
                ref='004'
                points='35.62 99.14 4.66 81.35 92.13 81.33 102.43 99.2 35.62 99.14'
                stroke={this.state.hover ? 'rgba(10, 10, 10, 0.5)' : 'gold'}
                fill={this.state.fill004}
                strokeWidth='0'
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {this.setState({fill001: 'gold', fill002: 'gold', fill003: 'gold', fill004: 'gold', fill005: 'black', fill006: 'black', fill007: 'black', fill008: 'black', fill009: 'black', fill000: 'black'})}}
              />
              {/* Polygon005 Shakti */}
              <Polygon
                ref='005'
                points='104.74 99.2 94.5 81.35 182.72 81.33 172.32 99.26 104.74 99.2'
                fill={this.state.fill}
                stroke={this.state.hover ? 'rgba(10, 10, 10, 0.5)' : 'gold'}
                fill={this.state.fill005}
                strokeWidth='0'
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {this.setState({fill001: 'gold', fill002: 'gold', fill003: 'gold', fill004: 'gold', fill005: 'gold', fill006: 'black', fill007: 'black', fill008: 'black', fill009: 'black', fill000: 'black'})}}
              />
              {/* Polygon006 Shakti */}
              <Polygon
                ref='006'
                points='174.63 99.27 185.02 81.33 272.27 81.32 241.06 99.33 174.63 99.27'
                stroke={this.state.hover ? 'rgba(10, 10, 10, 0.5)' : 'gold'}
                fill={this.state.fill006}
                strokeWidth='0'
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {this.setState({fill001: 'gold', fill002: 'gold', fill003: 'gold', fill004: 'gold', fill005: 'gold', fill006: 'gold', fill007: 'black', fill008: 'black', fill009: 'black', fill000: 'black'})}}
              />
              {/* Polygon007 Shakti */}
              <Polygon
                ref='007'
                points='208.96 158.61 241.93 101.15 273.21 83.15 229.59 158.64 208.96 158.61'
                stroke={this.state.hover ? 'rgba(10, 10, 10, 0.5)' : 'gold'}
                fill={this.state.fill007}
                strokeWidth='0'
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {this.setState({fill001: 'gold', fill002: 'gold', fill003: 'gold', fill004: 'gold', fill005: 'gold', fill006: 'gold', fill007: 'gold', fill008: 'black', fill009: 'black', fill000: 'black'})}}
              />
              {/* Polygon008 Shakti */}
              <Polygon
                ref='008'
                points='174.12 219.32 207.79 160.65 228.43 160.65 184.3 236.99 174.12 219.32'
                stroke={this.state.hover ? 'rgba(10, 10, 10, 0.5)' : 'gold'}
                fill={this.state.fill008}
                strokeWidth='0'
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {this.setState({fill001: 'gold', fill002: 'gold', fill003: 'gold', fill004: 'gold', fill005: 'gold', fill006: 'gold', fill007: 'gold', fill008: 'gold', fill009: 'black', fill000: 'black'})}}
              />
              {/* Polygon009 Shakti */}
              <Polygon
                ref='009'
                points='139.49 279.67 172.93 221.39 183.15 238.99 139.49 314.53 139.49 279.67'
                stroke={this.state.hover ? 'rgba(10, 10, 10, 0.5)' : 'gold'}
                fill={this.state.fill009}
                strokeWidth='0'
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {this.setState({fill001: 'gold', fill002: 'gold', fill003: 'gold', fill004: 'gold', fill005: 'gold', fill006: 'gold', fill007: 'gold', fill008: 'gold', fill009: 'gold', fill000: 'black'})}}
              />
              {/* Polygon010 Shakti */}
              <Polygon
                ref='010'
                points='105.08 219.38 115.69 201.04 137.48 238.76 137.48 275.62 105.08 219.38'
                fill={this.state.fill}
              />
              {/* Polygon020  Shiakti */}
              <Polygon
                ref='020'
                points='71.3 160.65 92.35 160.65 114.55 199.06 103.94 217.32 71.3 160.65'
                fill={this.state.fill}
              />
              {/* Polygon030 Shakti */}
              <Polygon
                ref='030'
                points='70.14 158.65 38.11 102.95 69.31 120.94 91.2 158.65 70.14 158.65'
                fill={this.state.fill}
              />
              {/* Polygon040  Shakti */}
              <Polygon
                ref='040'
                points='38.99 101.14 103.6 101.19 113.97 119.2 70.31 119.2 38.99 101.14'
                fill={this.state.fill}
              />
              {/* Polygon050  Shakti */}
              <Polygon
                ref='050'
                points='116.29 119.2 105.91 101.2 171.15 101.25 160.75 119.22 116.29 119.2'
                fill={this.state.fill}
              />
              {/* Polygon060 Shakti */}
              <Polygon
                ref='060'
                points='163.05 119.22 173.5 101.28 237.6 101.33 206.54 119.23 163.05 119.22'
                fill={this.state.fill}
              />
              {/* Polygon070 Shakti */}
              <Polygon
                ref='070'
                points='185.7 158.65 207.42 121.04 238.49 103.13 206.65 158.65 185.7 158.65'
                fill={this.state.fill}
              />
              {/* Polygon080 Shakti */}
              <Polygon
                ref='080'
                points='162.38 199.04 184.55 160.65 205.48 160.65 172.95 217.34 162.38 199.04'
                fill={this.state.fill}
              />
              {/* Polygon090  Shakti */}
              <Polygon
                ref='090'
                points='139.37 238.9 161.23 201.04 171.79 219.36 139.48 275.63 139.37 238.9'
                fill={this.state.fill}
              />
              {/* Polygon100  Shakti */}
              <Polygon
                ref='100'
                points='116.83 199.06 127.24 181.08 137.48 198.69 137.47 234.74 116.83 199.06'
                fill={this.state.fill}
              />
              {/* Polygon200 Shikti */}
              <Polygon
                ref='200'
                points='94.47 160.65 115.5 160.65 126.08 179.07 115.67 197.08 94.47 160.65'
                fill={this.state.fill}
              />
              {/* Polygon300 Shakti */}
              <Polygon
                ref='300'
                points='93.44 158.64 72.78 122.94 104.28 141.09 114.36 158.65 93.44 158.64'
                fill={this.state.fill}
              />
              {/* Polygon400 Shakti */}
              <Polygon
                ref='400'
                points='73.79 121.2 115.14 121.22 125.46 139.14 104.91 139.16 73.79 121.2'
                fill={this.state.fill}
              />
              {/* Polygon500 Shakti */}
              <Polygon
                ref='500'
                points='117.43 121.2 159.58 121.23 149.2 139.13 127.82 139.19 117.43 121.2'
                fill={this.state.fill}
              />
              {/* Polygon600 Shakti */}
              <Polygon
                ref='600'
                points='151.54 139.11 161.93 121.2 203.04 121.26 172.1 139.11 151.54 139.11'
                fill={this.state.fill}
              />
              {/* Polygon700 Shakti */}
              <Polygon
                ref='700'
                points='162.54 158.64 172.57 141.15 203.94 123.05 183.41 158.65 162.54 158.64'
                fill={this.state.fill}
              />
              {/* Polygon800 Shakti*/}
              <Polygon
                ref='800'
                points='150.8 179.02 161.39 160.65 182.15 160.65 161.22 197.04 150.8 179.02'
                fill={this.state.fill}
              />
              {/* Polygon900 Shakti */}
              <Polygon
                ref='900'
                points='139.45 198.75 149.63 180.99 160.07 199.03 139.46 234.63 139.45 198.75'
                fill={this.state.fill}
              />
              {/* Polygon0 Shakti */}
              <Polygon
                ref='0'
                points='130.37 155.23 133.14 160.12 130.37 165.04 136.02 165.18 138.6 169.71 141.21 165.18 147.05 165.18 144.13 160.12 146.94 155.24 141.31 155.23 138.58 150.48 135.9 155.23 130.37 155.23'
                stroke={this.state.hover ? 'rgba(10, 10, 10, 0.5)' : 'gold'}
                fill={this.state.fill000}
                strokeWidth='2'
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {this.setState({fill001: 'black', fill002: 'black', fill003: 'black', fill004: 'black', fill005: 'black', fill006: 'black', fill007: 'black', fill008: 'black', fill009: 'black', fill000: 'gold'})}}
              />
            </Svg>
          </View>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000000'
    },
    header: {
      flex: 1,
      backgroundColor: 'gold'
    },
    textheader: {
      fontFamily: 'Gill Sans'
    },
    display: {
      fontSize: 15,
      textAlign: 'center',
      color: '#F5FCFF',
      margin: 10
    },
    button: {
      height: 60,
      width: 60
    }
  })

AppRegistry.registerComponent('xyz', () => xyz);
