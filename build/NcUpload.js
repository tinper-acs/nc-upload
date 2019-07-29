'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _beeUpload = require('bee-upload');

var _beeUpload2 = _interopRequireDefault(_beeUpload);

var _beeButton = require('bee-button');

var _beeButton2 = _interopRequireDefault(_beeButton);

var _beeIcon = require('bee-icon');

var _beeIcon2 = _interopRequireDefault(_beeIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var noop = function noop() {};
var propTypes = {
    clsfix: _propTypes2["default"].string,
    placeholder: _propTypes2["default"].string,
    files: _propTypes2["default"].array,
    onChange: _propTypes2["default"].func,
    onRemove: _propTypes2["default"].func
};
var defaultProps = {
    clsfix: 'nc-upload',
    placeholder: '上传附件',
    files: [],
    onChange: noop,
    onRemove: noop
};

var NcUpload = function (_Component) {
    _inherits(NcUpload, _Component);

    function NcUpload() {
        var _temp, _this, _ret;

        _classCallCheck(this, NcUpload);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.del = function (item) {
            _this.props.onRemove(item);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    NcUpload.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            clsfix = _props.clsfix,
            className = _props.className,
            placeholder = _props.placeholder,
            files = _props.files,
            onRemove = _props.onRemove,
            other = _objectWithoutProperties(_props, ['clsfix', 'className', 'placeholder', 'files', 'onRemove']);

        var clsses = clsfix;
        if (className) clsses += ' ' + className;
        return _react2["default"].createElement(
            'div',
            { className: clsses },
            _react2["default"].createElement(
                _beeUpload2["default"],
                _extends({}, other, { showUploadList: false }),
                _react2["default"].createElement(
                    _beeButton2["default"],
                    { bordered: true, className: clsfix + '-button' },
                    placeholder,
                    _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-cloud-o-up' })
                )
            ),
            _react2["default"].createElement(
                'div',
                { className: clsfix + '-files' },
                files.map(function (item, index) {
                    var fileType = '';
                    if (item.fileName.indexOf('docx') != -1 || item.fileName.indexOf('doc') != -1) fileType = 'word';
                    if (item.fileName.indexOf('xlsx') != -1 || item.fileName.indexOf('xls') != -1) fileType = 'excel';
                    if (item.fileName.indexOf('pdf') != -1) fileType = 'pdf';
                    return _react2["default"].createElement(
                        'div',
                        { className: clsfix + '-file', key: index },
                        _react2["default"].createElement(
                            'div',
                            { className: clsfix + '-file-flex' },
                            _react2["default"].createElement('div', { className: clsfix + '-file-img ' + fileType }),
                            _react2["default"].createElement(
                                'div',
                                { className: clsfix + '-file-ctn' },
                                _react2["default"].createElement(
                                    'span',
                                    { className: clsfix + '-file-name', title: item.fileName },
                                    item.fileName
                                ),
                                _react2["default"].createElement(
                                    'span',
                                    { className: clsfix + '-file-size' },
                                    item.fileSize
                                )
                            ),
                            _react2["default"].createElement(
                                'div',
                                { className: clsfix + '-file-del', onClick: function onClick() {
                                        _this2.del(item);
                                    } },
                                '\u5220\u9664'
                            )
                        )
                    );
                })
            )
        );
    };

    return NcUpload;
}(_react.Component);

;

NcUpload.propTypes = propTypes;
NcUpload.defaultProps = defaultProps;
exports["default"] = NcUpload;
module.exports = exports['default'];