'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RandomWord = function (_React$Component) {
    _inherits(RandomWord, _React$Component);

    function RandomWord(props) {
        _classCallCheck(this, RandomWord);

        var _this = _possibleConstructorReturn(this, (RandomWord.__proto__ || Object.getPrototypeOf(RandomWord)).call(this, props));

        _this.animate = function () {
            var nextRound = _this.state.round + 1;
            if (nextRound >= _this.props.rounds) {
                return;
            }
            _this.setState({
                round: nextRound
            });
            window.setTimeout(_this.animate, _this.props.speed);
        };

        _this.state = {
            round: 0,
            letters: _this.props.word.split('').map(function (char, i) {
                return _this.randomSequenceFor(_this.props.word[i]);
            })
        };
        return _this;
    }

    _createClass(RandomWord, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.animation = window.setTimeout(this.animate, this.props.speed);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.clearTimeout(this.animation);
        }
    }, {
        key: 'randomSequenceFor',
        value: function randomSequenceFor(letter) {
            var _this2 = this;

            var min = Math.floor(this.props.rounds / 3);
            var max = this.props.rounds;
            var rounds = Math.floor(Math.random() * this.props.rounds);
            var length = Math.min(Math.max(rounds, min), max);

            return Array.from({ length: length }).map(function () {
                var randomLetter = _this2.randomLetter();
                while (randomLetter === letter) {
                    randomLetter = _this2.randomLetter();
                }
                return randomLetter;
            }).concat(letter);
        }
    }, {
        key: 'randomLetter',
        value: function randomLetter() {
            var position = Math.floor(Math.random() * this.props.letters.length);
            return this.props.letters[position];
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'span',
                null,
                this.state.letters.map(function (letters) {
                    var index = Math.min(_this3.state.round, letters.length - 1);
                    return letters[index];
                })
            );
        }
    }]);

    return RandomWord;
}(_react2.default.Component);

exports.default = RandomWord;


RandomWord.propTypes = {
    speed: _react2.default.PropTypes.number,
    rounds: _react2.default.PropTypes.number,
    letters: _react2.default.PropTypes.string,
    word: _react2.default.PropTypes.string
};

RandomWord.defaultProps = {
    speed: 150,
    rounds: 20,
    letters: 'abcdef0123456789'
};
