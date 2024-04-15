import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen');

const COLORS = {
    primary: "#f52d56",
    title: "#872F4A",
    royalBlue: '#4F63AC',
    deepGreen: '#007537',
    black: 'black',
    white: 'white',
    DeepSkyBlue: '#4894FE',
    DeepSkyBule05: 'rgba(72, 148, 254, 0.7)',
    slateBlue: 'rgb(134, 150, 187)'
}

const SIZES = {
    h0: 24,
    h1: 22,
    h2: 20,
    h3: 18,
    h4: 16,
    h5: 14,
    h6: 12,

}

const W = width, H = height;

export { COLORS, SIZES, W, H }

