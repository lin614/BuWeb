var loadImg = p => {
    return {
        top: require('./' + p + '/top.png'),
        center: require('./' + p + '/center.png'),
        hx: require('./' + p + '/hx.png'),
        info: require('./' + p + '/info.png'),
        foot: require('./' + p + '/foot.png'),
        lan: require('./' + p + '/lan.png'),
        jys: require('./' + p + '/jys.png'),
        ico: require('./' + p + '/ico.png'),
        hx: require('./' + p + '/hx.png'),
        email: require('./' + p + '/email.png'),
    }
}

export default {
    en: loadImg('en'),
    cn: loadImg('cn'),
    jp: loadImg('jp'),
    ko: loadImg('ko')
}