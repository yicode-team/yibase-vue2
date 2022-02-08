import {
    //
    toLower as _toLower,
    kebabCase as _kebabCase,
    camelCase as _camelCase,
    startCase as _startCase,
    replace as _replace
} from 'lodash-es';
export function getNames(name) {
    // 页面名称转化 HelL_o-wOrld
    let lowerCaseName = _toLower(name); // hell_o-world
    let kebabCaseName = _kebabCase(lowerCaseName); // hell-o-world
    let camelCaseName = _camelCase(kebabCaseName); // hellOWorld
    let startCaseName = _replace(_startCase(camelCaseName), /\s+/g, ''); // HellOWorld

    return {
        lowerCaseName,
        kebabCaseName,
        startCaseName,
        camelCaseName
    };
}
