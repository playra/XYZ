/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
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


const STROKE_COLOR = 'cyan'
const STROKE_WIDTH = .1

const POLY_1 = ({stroke = STROKE_COLOR, fill = 'none', strokeWidth = STROKE_WIDTH, points = '0.0'}) => (
    <Polygon
        points={points}
        fill={fill}
        stroke={STROKE_COLOR}
        strokeWidth={strokeWidth}
    />
)

const DEFAULT_FILL = 'black'
const CHOSEN_FILL = 'gold'
const DISABLED_FILL = DISABLED_FILL

export default class xyz extends Component {
    constructor() {
        super()
        this.state = {
            hover: true,
            fill001: DEFAULT_FILL,
            fill002: DEFAULT_FILL,
            fill003: DEFAULT_FILL,
            fill004: DEFAULT_FILL,
            fill005: DEFAULT_FILL,
            fill006: DEFAULT_FILL,
            fill007: DEFAULT_FILL,
            fill008: DEFAULT_FILL,
            fill009: DEFAULT_FILL,
            fill000: DEFAULT_FILL
        }
    }

    toggle = () => {
        this.setState({hover: !this.state.hover});
    }

    render() {

        const SVG_HEIGHT = 251.14736709749
        const SVG_WIDTH = 290

        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.display}>3,1415926535 8979323846 2643383279 5028841971 6939937510 5820974944
                        5923078164 0628620899 8628034825 3421170679 8214808651 3282306647 0938446095 5058223172
                        5359408128 4811174502 8410270193 8521105559 6446229489 5493038196 4428810975 6659334461
                        2847564823 3786783165 2712019091 4564856692 3460348610 4543266482 1339360726 0249141273
                        7245870066 0631558817 4881520920 9628292540 9171536436 7892590360 0113305305 4882046652
                        1384146951 9415116094 3305727036 5759591953 0921861173 8193261179 3105118548 0744623799
                        6274956735 1885752724 8912279381 8301194912 9833673362 4406566430 8602139494 6395224737
                        1907021798 6094370277 0539217176 2931767523 8467481846 7669405132 0005681271 4526356082
                        7785771342 7577896091 7363717872 1468440901 2249534301 4654958537 1050792279 6892589235
                        4201995611 2129021960 8640344181 5981362977 4771309960 5187072113 4999999837 2978049951
                        0597317328 1609631859 5024459455 3469083026 4252230825 3344685035 2619311881 7101000313
                        7838752886 5875332083 8142061717 7669147303 5982534904 2875546873 1159562863 8823537875
                        9375195778 1857780532 1712268066 1300192787 6611195909 2164201989</Text>
                </ScrollView>
                <View>
                    <Svg
                        height={SVG_HEIGHT}
                        width={SVG_WIDTH}
                    >
                        {/* Земля */}
                        <POLY_1 points='0,0 290,0 145,251.14736709749'/>
                        {/* Луна */}
                        <POLY_1 points='41.156,24.126 145,203.094 247.899,24.126'/>
                        {/* Солнце */}
                        <POLY_1 points='80.45,46.691 145,157.629 208.332,46.691'/>
                        {/* 999 */}
                        <POLY_1 points='120.037,69.052 169.485,69.052 145,112.254'/>
                        

                        {/* Polus1 */}
                        <Line
                            x1='145'
                            y1='112.254'
                            x2='145'
                            y2='251.14736709749'
                            stroke={STROKE_COLOR}
                            strokeWidth='0.1'
                        />
                        {/* Polus2 */}
                        <Line
                            x1='96,269'
                            y1='167,184'
                            x2='136,491'
                            y2='97,66'
                            stroke={STROKE_COLOR}
                            strokeWidth='0.1'
                        />
                        {/* Polus3 */}
                        <Line
                            x1='47,78'
                            y1='83,145'
                            x2='128,077'
                            y2='83,145'
                            stroke={STROKE_COLOR}
                            strokeWidth='0.1'
                        />
                        {/* Polus4 */}
                        <Line
                            x1='0'
                            y1='0'
                            x2='120.037'
                            y2='69.052'
                            stroke={STROKE_COLOR}
                            strokeWidth='0.1'
                        />
                        {/* Polus5 */}
                        <Line
                            x1='96,66'
                            y1='0'
                            x2='136,425'
                            y2='69,048'
                            stroke={STROKE_COLOR}
                            strokeWidth='0.1'
                        />
                        {/* Polus6 */}
                        <Line
                            x1='192,745'
                            y1='0'
                            x2='153,103'
                            y2='69,048'
                            stroke={STROKE_COLOR}
                            strokeWidth='0.1'
                        />
                        {/* Polus7 */}
                        <Line
                            x1='290'
                            y1='0'
                            x2='169.485'
                            y2='69.052'
                            stroke={STROKE_COLOR}
                            strokeWidth='0.1'
                        />
                        {/* Polus8 */}
                        <Line
                            x1='241,601'
                            y1='83,145'
                            x2='161,464'
                            y2='83,145'
                            stroke={STROKE_COLOR}
                            strokeWidth='0.1'
                        />
                        {/* Polus9 */}
                        <Line
                            x1='153,231'
                            y1='97,544'
                            x2='193,9'
                            y2='167,184'
                            stroke={STROKE_COLOR}
                            strokeWidth='0.1'
                        />
                        {/* Polygon001 */}
                        <Polygon
                            ref='001'
                            points='98.263,166.687 110.259,145.525 143.576,203.555 143.576,246.029'
                            stroke={this.state.hover ? DISABLED_FILL : CHOSEN_FILL}
                            fill={this.state.fill001}
                            strokeWidth='2'
                            delayPressIn={0}
                            onPressIn={this.toggle}
                            onPressOut={this.toggle}
                            onPress={() => {
                                this.setState({
                                    fill001: CHOSEN_FILL,
                                    fill002: DEFAULT_FILL,
                                    fill003: DEFAULT_FILL,
                                    fill004: DEFAULT_FILL,
                                    fill005: DEFAULT_FILL,
                                    fill006: DEFAULT_FILL,
                                    fill007: DEFAULT_FILL,
                                    fill008: DEFAULT_FILL,
                                    fill009: DEFAULT_FILL,
                                    fill000: DEFAULT_FILL
                                })
                            }}
                        />
                        {/* Polygon002 */}
                        <Polygon
                            ref='002'
                            points='50.353,84.595 74.916,84.595 108.758,143.311 96.437,164.365'
                            stroke={this.state.hover ? DISABLED_FILL : CHOSEN_FILL}
                            fill={this.state.fill002}
                            strokeWidth='2'
                            delayPressIn={0}
                            onPressIn={this.toggle}
                            onPressOut={this.toggle}
                            onPress={() => {
                                this.setState({
                                    fill001: CHOSEN_FILL,
                                    fill002: CHOSEN_FILL,
                                    fill003: DEFAULT_FILL,
                                    fill004: DEFAULT_FILL,
                                    fill005: DEFAULT_FILL,
                                    fill006: DEFAULT_FILL,
                                    fill007: DEFAULT_FILL,
                                    fill008: DEFAULT_FILL,
                                    fill009: DEFAULT_FILL,
                                    fill000: DEFAULT_FILL
                                })
                            }}
                        />
                        {/* Polygon003 */}
                        <Polygon
                            ref='003'
                            points='4.617,4.683 40.044,24.54 73.256,81.979 49.307,81.979'
                            stroke={this.state.hover ? DISABLED_FILL : CHOSEN_FILL}
                            fill={this.state.fill003}
                            strokeWidth='2'
                            delayPressIn={0}
                            onPressIn={this.toggle}
                            onPressOut={this.toggle}
                            onPress={() => {
                                this.setState({
                                    fill001: CHOSEN_FILL,
                                    fill002: CHOSEN_FILL,
                                    fill003: CHOSEN_FILL,
                                    fill004: DEFAULT_FILL,
                                    fill005: DEFAULT_FILL,
                                    fill006: DEFAULT_FILL,
                                    fill007: DEFAULT_FILL,
                                    fill008: DEFAULT_FILL,
                                    fill009: DEFAULT_FILL,
                                    fill000: DEFAULT_FILL
                                })
                            }}
                        />
                        {/* Polygon004 */}
                        <Polygon
                            ref='004'
                            points='5.87,1.979  95.976,1.979 108.287,23.296 42.077,23.296'
                            stroke={this.state.hover ? DISABLED_FILL : CHOSEN_FILL}
                            fill={this.state.fill004}
                            strokeWidth='2'
                            delayPressIn={0}
                            onPressIn={this.toggle}
                            onPressOut={this.toggle}
                            onPress={() => {
                                this.setState({
                                    fill001: CHOSEN_FILL,
                                    fill002: CHOSEN_FILL,
                                    fill003: CHOSEN_FILL,
                                    fill004: CHOSEN_FILL,
                                    fill005: DEFAULT_FILL,
                                    fill006: DEFAULT_FILL,
                                    fill007: DEFAULT_FILL,
                                    fill008: DEFAULT_FILL,
                                    fill009: DEFAULT_FILL,
                                    fill000: DEFAULT_FILL
                                })
                            }}
                        />
                        {/* Polygon005 */}
                        <Polygon
                            ref='005'
                            points='98.622,1.979  190.289,1.979 177.887,23.296 111.122,23.296'
                            fill={this.state.fill}
                            stroke={this.state.hover ? DISABLED_FILL : CHOSEN_FILL}
                            fill={this.state.fill005}
                            strokeWidth='2'
                            delayPressIn={0}
                            onPressIn={this.toggle}
                            onPressOut={this.toggle}
                            onPress={() => {
                                this.setState({
                                    fill001: CHOSEN_FILL,
                                    fill002: CHOSEN_FILL,
                                    fill003: CHOSEN_FILL,
                                    fill004: CHOSEN_FILL,
                                    fill005: CHOSEN_FILL,
                                    fill006: DEFAULT_FILL,
                                    fill007: DEFAULT_FILL,
                                    fill008: DEFAULT_FILL,
                                    fill009: DEFAULT_FILL,
                                    fill000: DEFAULT_FILL
                                })
                            }}
                        />
                        {/* Polygon006 */}
                        <Polygon
                            ref='006'
                            points='193.086,1.979  284.748,1.979 246.991,23.296 180.673,23.296'
                            stroke={this.state.hover ? DISABLED_FILL : CHOSEN_FILL}
                            fill={this.state.fill006}
                            strokeWidth='2'
                            delayPressIn={0}
                            onPressIn={this.toggle}
                            onPressOut={this.toggle}
                            onPress={() => {
                                this.setState({
                                    fill001: CHOSEN_FILL,
                                    fill002: CHOSEN_FILL,
                                    fill003: CHOSEN_FILL,
                                    fill004: CHOSEN_FILL,
                                    fill005: CHOSEN_FILL,
                                    fill006: CHOSEN_FILL,
                                    fill007: DEFAULT_FILL,
                                    fill008: DEFAULT_FILL,
                                    fill009: DEFAULT_FILL,
                                    fill000: DEFAULT_FILL
                                })
                            }}
                        />
                        {/* Polygon007 */}
                        <Polygon
                            ref='007'
                            points='249.29,24.813  285.84,3.952 240.727,82.051 215.901,82.051'
                            stroke={this.state.hover ? DISABLED_FILL : CHOSEN_FILL}
                            fill={this.state.fill007}
                            strokeWidth='2'
                            delayPressIn={0}
                            onPressIn={this.toggle}
                            onPressOut={this.toggle}
                            onPress={() => {
                                this.setState({
                                    fill001: CHOSEN_FILL,
                                    fill002: CHOSEN_FILL,
                                    fill003: CHOSEN_FILL,
                                    fill004: CHOSEN_FILL,
                                    fill005: CHOSEN_FILL,
                                    fill006: CHOSEN_FILL,
                                    fill007: CHOSEN_FILL,
                                    fill008: DEFAULT_FILL,
                                    fill009: DEFAULT_FILL,
                                    fill000: DEFAULT_FILL
                                })
                            }}
                        />
                        {/* Polygon008 */}
                        <Polygon
                            ref='008'
                            points='214.809,84.522  238.888,84.522 192.683,164.92 180.328,143.657'
                            stroke={this.state.hover ? DISABLED_FILL : CHOSEN_FILL}
                            fill={this.state.fill008}
                            strokeWidth='2'
                            delayPressIn={0}
                            onPressIn={this.toggle}
                            onPressOut={this.toggle}
                            onPress={() => {
                                this.setState({
                                    fill001: CHOSEN_FILL,
                                    fill002: CHOSEN_FILL,
                                    fill003: CHOSEN_FILL,
                                    fill004: CHOSEN_FILL,
                                    fill005: CHOSEN_FILL,
                                    fill006: CHOSEN_FILL,
                                    fill007: CHOSEN_FILL,
                                    fill008: CHOSEN_FILL,
                                    fill009: DEFAULT_FILL,
                                    fill000: DEFAULT_FILL
                                })
                            }}
                        />
                        {/* Polygon009 */}
                        <Polygon
                            ref='009'
                            points='145.732,203.424  179.063,146.128 191.189,167.219 145.962,245.893'
                            stroke={this.state.hover ? DISABLED_FILL : CHOSEN_FILL}
                            fill={this.state.fill009}
                            strokeWidth='2'
                            delayPressIn={0}
                            onPressIn={this.toggle}
                            onPressOut={this.toggle}
                            onPress={() => {
                                this.setState({
                                    fill001: CHOSEN_FILL,
                                    fill002: CHOSEN_FILL,
                                    fill003: CHOSEN_FILL,
                                    fill004: CHOSEN_FILL,
                                    fill005: CHOSEN_FILL,
                                    fill006: CHOSEN_FILL,
                                    fill007: CHOSEN_FILL,
                                    fill008: CHOSEN_FILL,
                                    fill009: CHOSEN_FILL,
                                    fill000: DEFAULT_FILL
                                })
                            }}
                        />
                        {/* Polygon010 */}
                        <Polygon
                            ref='010'
                            points='111.62,143.495  123.293,123.115 143.576,158.229 143.576,198.797'
                            fill={this.state.fill}
                        />
                        {/* Polygon020 */}
                        <Polygon
                            ref='020'
                            points='77.632,84.595  101.129,84.595 121.864,120.534 110.162,140.895'
                            fill={this.state.fill}
                        />
                        {/* Polygon030 */}
                        <Polygon
                            ref='020'
                            points='44.149,26.805  79.411,47.172 100,81.979 76,81.979'
                            fill={this.state.fill}
                        />
                        {/* Polygon040 */}
                        <Polygon
                            ref='040'
                            points='45.705,25.563  109.707,25.563 121.386,45.705 81.554,45.705'
                            fill={this.state.fill}
                        />
                        {/* Polygon050 */}
                        <Polygon
                            ref='050'
                            points='112.472,25.563  176.564,25.563 165,45.705 124.038,45.705'
                            fill={this.state.fill}
                        />
                        {/* Polygon060 */}
                        <Polygon
                            ref='060'
                            points='179.216,25.563  242.969,25.563 208.271,45.705 167.706,45.705'
                            fill={this.state.fill}
                        />
                        {/* Polygon070 */}
                        <Polygon
                            ref='070'
                            points='209.528,47.603  245.147,27.129 213.436,82.113 189.542,82.112'
                            fill={this.state.fill}
                        />
                        {/* Polygon080 */}
                        <Polygon
                            ref='080'
                            points='188.232,84.522  211.886,84.522 179.135,141.511 167.276,120.744'
                            fill={this.state.fill}
                        />
                        {/* Polygon090 */}
                        <Polygon
                            ref='090'
                            points='145.732,158.229  165.833,123.316 177.691,143.896 145.732,198.797'
                            fill={this.state.fill}
                        />
                        {/* Polygon100 */}
                        <Polygon
                            ref='100'
                            points='124.738,120.556  136.47,99.663 143.56,112.211 143.686,152.93'
                            fill={this.state.fill}
                        />
                        {/* Polygon200 */}
                        <Polygon
                            ref='200'
                            points='103.845,84.595  127.059,84.595 135.027,97.655 123.232,117.983'
                            fill={this.state.fill}
                        />
                        {/* Polygon300 */}
                        <Polygon
                            ref='300'
                            points='83.454,49.453  118.526,69.515  125.992,81.979 102.276,81.979'
                            fill={this.state.fill}
                        />
                        {/* Polygon400 */}
                        <Polygon
                            ref='400'
                            points='86,47.969  122.50,47.969  134.212,67.916 120.22,67.916'
                            fill={this.state.fill}
                        />
                        {/* Polygon500 */}
                        <Polygon
                            ref='500'
                            points='125,47.969  164,47.969  152.281,67.916 137.035,67.916'
                            fill={this.state.fill}
                        />
                        {/* Polygon600 */}
                        <Polygon
                            ref='600'
                            points='166.461,47.969  203.729,47.969  169.221,67.916 154.854,67.916'
                            fill={this.state.fill}
                        />
                        {/* Polygon700 */}
                        <Polygon
                            ref='700'
                            points='170.79,69.798  205.486,49.783  186.914,82.112 163.512,82.112'
                            fill={this.state.fill}
                        />
                        {/* Polygon800 */}
                        <Polygon
                            ref='800'
                            points='162.257,84.522  185.346,84.522  166.084,118.172 154.414,97.781'
                            fill={this.state.fill}
                        />
                        {/* Polygon900 */}
                        <Polygon
                            ref='900'
                            points='145.732,112.211  153.097,100.353  164.767,120.556 145.732,152.993'
                            fill={this.state.fill}
                        />
                        {/* Polygon0 */}
                        <Polygon
                            ref='0'
                            points='122.04,69.969  168,69.969  144.988,108.743'
                            stroke={this.state.hover ? DISABLED_FILL : CHOSEN_FILL}
                            fill={this.state.fill000}
                            strokeWidth='2'
                            delayPressIn={0}
                            onPressIn={this.toggle}
                            onPressOut={this.toggle}
                            onPress={() => {
                                this.setState({
                                    fill001: DEFAULT_FILL,
                                    fill002: DEFAULT_FILL,
                                    fill003: DEFAULT_FILL,
                                    fill004: DEFAULT_FILL,
                                    fill005: DEFAULT_FILL,
                                    fill006: DEFAULT_FILL,
                                    fill007: DEFAULT_FILL,
                                    fill008: DEFAULT_FILL,
                                    fill009: DEFAULT_FILL,
                                    fill000: CHOSEN_FILL
                                })
                            }}
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
        backgroundColor: CHOSEN_FILL
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
