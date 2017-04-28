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
    Polygon
} from 'react-native-svg'

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
      return (
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.display}>3,1415926535 8979323846 2643383279 5028841971 6939937510 5820974944 5923078164 0628620899 8628034825 3421170679 8214808651 3282306647 0938446095 5058223172 5359408128 4811174502 8410270193 8521105559 6446229489 5493038196 4428810975 6659334461 2847564823 3786783165 2712019091 4564856692 3460348610 4543266482 1339360726 0249141273 7245870066 0631558817 4881520920 9628292540 9171536436 7892590360 0113305305 4882046652 1384146951 9415116094 3305727036 5759591953 0921861173 8193261179 3105118548 0744623799 6274956735 1885752724 8912279381 8301194912 9833673362 4406566430 8602139494 6395224737 1907021798 6094370277 0539217176 2931767523 8467481846 7669405132 0005681271 4526356082 7785771342 7577896091 7363717872 1468440901 2249534301 4654958537 1050792279 6892589235 4201995611 2129021960 8640344181 5981362977 4771309960 5187072113 4999999837 2978049951 0597317328 1609631859 5024459455 3469083026 4252230825 3344685035 2619311881 7101000313 7838752886 5875332083 8142061717 7669147303 5982534904 2875546873 1159562863 8823537875 9375195778 1857780532 1712268066 1300192787 6611195909 2164201989</Text>
          </ScrollView>
          <View>
            <Svg
              height='322.18'
              width='279.8'
            >
              {/* Shakti внешний треугольник */}
              <Polygon
                points='0.68 80.97 139.77 321.69 279.3 80.78 0.68 80.97'
                fill='none'
                stroke='gold'
                strokeWidth='0.9'
              />
              {/* Shiva внешний треугольник */}
              <Polygon
                points='140.19 0.5 279.26 241.92 0.5 241.76 140.19 0.5'
                fill='none'
                stroke='gold'
                strokeWidth='0.9'
              />
              {/* Shakti средний треугольник */}
              <Polygon
                points='35.5 221.63 243.69 221.47 139.76 41.4 35.5 221.63'
                fill='none'
                stroke='gold'
                strokeWidth='0.9'
              />
              {/* Shiva средний треугольник */}
              <Polygon
                points='35.8 100.87 139.82 281 244.13 101.06 35.8 100.87'
                fill='none'
                stroke='gold'
                strokeWidth='0.9'
              />
              {/* Shakti малый треуголник */}
              <Polygon
                points='139.86 80.84 209.31 200.95 70.5 201.22 139.86 80.84'
                fill='none'
                stroke='gold'
                strokeWidth='0.9'
              />
             {/* Shakti внутрений треугольник */}
              <Polygon
                points='105.39 140.6 139.9 201.24 174.32 140.44 105.39 140.6'
                fill='none'
                stroke='gold'
                strokeWidth='0.9'
              />
             {/* Shiva внутрений треугольник */}
              <Polygon
                points='139.93 121.47 174.41 180.91 105.41 181.09 139.93 121.47'
                fill='none'
                stroke='gold'
                strokeWidth='0.9'
              />
               {/* Shakti 999 */}
              <Polygon
                points='0.68 80.97 139.77 321.69 279.3 80.78 0.68 80.97'
                fill='none'
                stroke='gold'
                strokeWidth='0.9'
              />
               {/* 999 */}
              <Polygon
                ref='000'
                points='131.86 155.79 140.1 170.27 148.44 155.8 131.86 155.79'
                stroke={this.state.hover ? 'rgba(10, 10, 10, 0.5)' : 'gold'}
                fill={this.state.fill001}
                strokeWidth='0'
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {this.setState({fill001: 'gold', fill002: 'black', fill003: 'black', fill004: 'black', fill005: 'black', fill006: 'black', fill007: 'black', fill008: 'black', fill009: 'black', fill000: 'black'})}}
              />
              {/* Polygon001 Shakti */}
              <Polygon
                ref='001'
                points='139.02 281.67 105.28 223.39 95.02 242.33 139.23 319.21 139.02 281.67'
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
                points='93.55 241.55 105.28 221.38 70.64 161.1 47.33 161.51 93.55 241.36'
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
                points='70.64 161.1 47.33 161.51 0.85 81.03 35.8 100.87 70.64 161.1'
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
                points='0.85 81.03 93.57 80.93 105.26 100.87 35.8 100.87 0.85 81.03'
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
                points='93.57 80.93 105.26 100.87 174.53 100.87 186.73 80.84 93.57 80.93'
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
                points='174.53 100.87 186.73 80.84 278.56 80.84 244 101.06 174.53 100.87'
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
                points='279.51 80.42 244.46 100.49 209.5 160.87 232.82 160.87 279.51 80.42'
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
                points='232.82 160.87 209.5 160.87 174.53 221.35 186.12 241.55 232.82 160.87'
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
                points='139.77 321.62 186.12 241.55 174.53 221.35 139.77 281.09 139.77 321.62'
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
                points='139.27 278 106.89 222.09 116.29 202.52 138.87 241.84 139.27 278'
                fill={this.state.fill}
              />
              {/* Polygon020  Shiakti */}
              <Polygon
                ref='020'
                points='105.28 221.38 117 201.23 93.55 160.71 70.64 161.1 105.28 221.38'
                fill={this.state.fill}
              />
              {/* Polygon030 Shakti */}
              <Polygon
                ref='030'
                points='93.55 160.71 70.64 161.1 35.8 100.87 70.7 120.95 93.55 160.71'
                fill={this.state.fill}
              />
              {/* Polygon040  Shakti */}
              <Polygon
                ref='040'
                points='35.8 100.87 70.7 120.95 116.99 121 105.26 100.87 35.8 100.87'
                fill={this.state.fill}
              />
              {/* Polygon050  Shakti */}
              <Polygon
                ref='050'
                points='105.26 100.87 116.99 121 162.8 120.95 174.53 100.87 105.26 100.87'
                fill={this.state.fill}
              />
              {/* Polygon060 Shakti */}
              <Polygon
                ref='060'
                points='162.8 120.95 209.03 121.09 244 101.06 174.53 100.87 162.8 120.95'
                fill={this.state.fill}
              />
              {/* Polygon070 Shakti */}
              <Polygon
                ref='070'
                points='244 101.06 209.03 121.09 186.12 160.87 209.5 160.87 244 101.06'
                fill={this.state.fill}
              />
              {/* Polygon080 Shakti */}
              <Polygon
                ref='080'
                points='209.5 160.87 186.12 160.87 163.1 201.21 174.53 221.35 209.5 160.87'
                fill={this.state.fill}
              />
              {/* Polygon090  Shakti */}
              <Polygon
                ref='090'
                points='163.1 201.21 174.53 221.35 139.77 280.9 139.77 241.36 163.1 201.2'
                fill={this.state.fill}
              />
              {/* Polygon100  Shakti */}
              <Polygon
                ref='100'
                points='140.1 200.89 139.77 241.36 117 201.23 128.69 181.06 140.1 200.89 139.77 241.36'
                fill={this.state.fill}
              />
              {/* Polygon200 Shikti */}
              <Polygon
                ref='200'
                points='117 201.23 128.69 181.06 117.06 160.87 93.55 160.71 117 200.78'
                fill={this.state.fill}
              />
              {/* Polygon300 Shakti */}
              <Polygon
                ref='300'
                points='117.06 160.87 93.55 160.71 70.7 120.95 105.62 140.99 117.06 160.87'
                fill={this.state.fill}
              />
              {/* Polygon400 Shakti */}
              <Polygon
                ref='400'
                points='70.7 120.95 105.62 140.99 128.69 140.85 116.99 121 70.7 120.95'
                fill={this.state.fill}
              />
              {/* Polygon500 Shakti */}
              <Polygon
                ref='500'
                points='116.99 121 128.69 140.85 151.22 140.85 162.8 120.95 116.99 121'
                fill={this.state.fill}
              />
              {/* Polygon600 Shakti */}
              <Polygon
                ref='600'
                points='151.22 140.85 162.8 120.95 209.03 121.09 174.18 141.05 151.22 140.85'
                fill={this.state.fill}
              />
              {/* Polygon700 Shakti */}
              <Polygon
                ref='700'
                points='209.03 121.09 174.18 141.05 162.8 160.87 186.12 160.87 209.03 121.09'
                fill={this.state.fill}
              />
              {/* Polygon800 Shakti*/}
              <Polygon
                ref='800'
                points='186.12 160.87 163.1 201.21 151.22 181.01 162.8 160.87 186.12 160.87'
                fill={this.state.fill}
              />
              {/* Polygon900 Shakti */}
              <Polygon
                ref='900'
                points='163.1 201.21 151.22 181.01 140.1 200.89 139.77 241.36 163.1 201.21'
                fill={this.state.fill}
              />
              {/* Polygon0 Shakti */}
              <Polygon
                ref='0'
                points='131.76 155.79 134.5 160.54 131.37 165.87 137.54 165.82 140.15 170.35 142.75 165.78 148.54 165.74 145.64 160.7 148.44 155.8 142.81 155.8 140.07 151.04 137.28 155.79 131.76 155.79'
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
