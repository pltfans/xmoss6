

///////////

function __trim_right(_in_str, _in_cch){
    var _hf_i_end = undefined;
    for (var i = (_in_str.length-1); i > 0; i--){
        if(_in_cch != _in_str[i]){
            break;
        }
        _hf_i_end = i;
    }

    //
    var _hf_str = _in_str;
    if(_hf_i_end != undefined){
        _hf_str = _hf_str.slice(0, _hf_i_end);
    }

    //
    return _hf_str;
}


////////

function __get_url_param(_in_url, _in_name){
    var _findex = _in_url.indexOf('?');
    if(_findex >= 0){
        var _urlpath = _in_url.slice(_findex + 1);
        var _params = _urlpath.split('&');
        for (var i = 0; i < _params.length; i++){
            var _s_par = _params[i].split('=');
            if(_s_par.length > 1){
                if(_in_name == _s_par[0]){
                    return _s_par[1];
                }
            }
        }
    }

    //
    return null;
}


/////////////////

function __del_url_param(_in_url, _in_name){
    var _hf_url = _in_url;
    var _findex = _in_url.indexOf('?');
    if(_findex >= 0){
        _hf_url = _in_url.slice(0, _findex + 1);
        var _urlpath = _in_url.slice(_findex + 1);
        var _params = _urlpath.split('&');
        for (var i = 0; i < _params.length; i++){
            var _s_par = _params[i].split('=');
            if(_in_name != _s_par[0]){
                _hf_url += ('&' + _s_par[0] + '=');
                if(_s_par.length > 1){
                    _hf_url += _s_par[1];
                }
            }
        }

        //
        _hf_url = _hf_url.replace('?&', '?');
        _hf_url = __trim_right(_hf_url, '?');
    }

    //
    return _hf_url;
}


/////////////////////

function __set_url_param(_in_url, _in_name, _in_value){
    var _hf_url = __del_url_param(_in_url, _in_name);
    if(String(_in_value)){
        const _XX = (_hf_url.indexOf('?') > 0 ? '&' : '?');
        _hf_url += (_XX + _in_name + '=' + _in_value);
    }

    //
    return _hf_url;
}


//////////////////

function __yx_write_catalog_sub(_in_labels, _in_curr_url){
    var _html_li = '<li>{1}</li>';
    var _html_li_span = '<span>{1}???</span>'.replace('{1}', _in_labels[1]);
    var _html_li_ul = '<ul class=\"search-tag\">{1}</ul>';
    var _html_li_ul_li = '';
    const _hf_iLabel = 2;
    for (var i = _hf_iLabel; i < _in_labels.length; i++){
        var _li = '<li {3}><a href=\"{1}\">{2}{4}</a></li>\r\n';

        //
        _li_href = __set_url_param(_in_curr_url, _in_labels[0], (i > _hf_iLabel ? _in_labels[i] : ''));
        _li_href = __del_url_param(_li_href, 'pageindex');
        _li_href = __del_url_param(_li_href, 'pagesize');
        _li = _li.replace('{1}', _li_href);
        _li = _li.replace('{2}', _in_labels[i]);

        //
        const _src_pval = _in_labels[i];
        var _new_pval = __get_url_param(_in_curr_url, _in_labels[0]);
        _new_pval = (_new_pval ? decodeURI(_new_pval) : _new_pval);
        if(!_new_pval){_new_pval = _in_labels[2]; }
        if(_src_pval == _new_pval){
            _li = _li.replace('{3}', 'class=on');
        }
        else {
            _li = _li.replace('{3}', '');
        }


        //
        // ???????????? -----------
        if('year' == _in_labels[0] && (2000 == _in_labels[i])){
            _li = _li.replace('{4}', '??????');
        }
        else if('season' == _in_labels[0] && (i > _hf_iLabel)){
            _li = _li.replace('{4}', '???');
        }
        else {
            _li = _li.replace('{4}', '');
        }

        //
        _html_li_ul_li += _li;
    }


    //
    _html_li_ul = _html_li_ul.replace('{1}', _html_li_ul_li);
    _html_li = _html_li.replace('{1}', _html_li_span + _html_li_ul);

    //
    document.write(_html_li);
}

//////////

(function __yx_write_catalog_table(){
    const _curr_url = window.location.href;

    //
    var _labels = false;

    _labels = ["region", "??????", "??????", "??????", "??????", "??????"];
    __yx_write_catalog_sub(_labels, _curr_url);

    _labels = ["genre", "??????", "??????", "TV", "?????????", "OVA"];
    __yx_write_catalog_sub(_labels, _curr_url);

    _labels = ["letter", "?????????", "??????", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    __yx_write_catalog_sub(_labels, _curr_url);

    _labels = ["year", "??????", "??????", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000"];
    __yx_write_catalog_sub(_labels, _curr_url);

    _labels = ["season", "??????", "??????", "1", "4", "7", "10"];
    __yx_write_catalog_sub(_labels, _curr_url);

    _labels = ["status", "??????", "??????", "??????", "??????", "?????????"];
    __yx_write_catalog_sub(_labels, _curr_url);

    _labels = ["label", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "?????????", "?????????", "?????????", "?????????", "?????????", "?????????"];
    __yx_write_catalog_sub(_labels, _curr_url);

    _labels = ["resource", "??????", "??????", "BDRIP", "AGE-RIP"];
    __yx_write_catalog_sub(_labels, _curr_url);

    _labels = ["order", "??????", "????????????", "??????", "?????????"];
    __yx_write_catalog_sub(_labels, _curr_url);

    //

})();


