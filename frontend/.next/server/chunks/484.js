"use strict";
exports.id = 484;
exports.ids = [484];
exports.modules = {

/***/ 3381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/correct.112feb79.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA5UlEQVR42mMAAa+1/pre6/wPAvEvr7V+vwLWhxz0Xx+sCZX0A0m+810X+B/I/u+/Lui/0UqL/+5rvd8BFWoy+KwLOAjk/LdaZf8zaH3Yf7UVev8nHZ3yM2ZT/H/nNe4HGdzWeP2K2hj7v3pP7X+GhQz/V19Y83/3jT3/bVc7/Qdq/sUAshNoxf89N/f+P3bv+P9tV7f9V1qu/d9zrS9EAdDugw6rXf+HbIj4uejM4v+mq6xBbvkJlATRBxk81vpo+q4LeAuk/8st1/gPcizQRJDkOyAN8QnQOE2QY4Gu/gX16kGYJAAQnYRUSlNZnwAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 4013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BorderLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function BorderLayout({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            tabIndex: "-1",
            className: "inline-block align-bottom h-5/6 rounded-lg w-full scrollbar-hide text-left outline-none overflow-auto transform max-w-sm mt-16 sm:max-w-md",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative h-full md:h-auto",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative bg-white mx-3 rounded-lg shadow dark:bg-gray-700",
                    children: children
                })
            })
        })
    });
};


/***/ }),

/***/ 4845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/ui/BorderLayout.js
var BorderLayout = __webpack_require__(4013);
;// CONCATENATED MODULE: ./components/ui/ModalContact.js



function ModalContact({ closeModal  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BorderLayout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "p-5",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex justify-between items-center rounded-t",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "text-xl font-medium text-gray-900 dark:text-white",
                            children: "About Me"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>{
                                closeModal();
                            },
                            type: "button",
                            className: `text-gray-400 bg-transparent dark:hover:bg-gray-600 dark:hover:text-white hover:bg-gray-200 hover:text-gray-900" rounded-lg text-sm p-1.5 ml-auto inline-flex items-center `,
                            "data-modal-toggle": "small-modal",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                className: "w-5 h-5",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                    clipRule: "evenodd"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "pt-1 space-y-3",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col justiy-center items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            type: "button",
                            className: "text-white bg-[#175bb0] hover:bg-[#043a7d] focus:ring-2 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-1xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2",
                            onClick: ()=>{
                                window.open(`https://www.linkedin.com/in/paras-gaur/`, "_blank");
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    className: "mr-2 -ml-1 w-7 h-7 text-blue-300 fill-current",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 448 512",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "px-2 py-4 text-2xl text-gray-100 border-l-2 border-gray-100 font-mono"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-xl font-mono font-bold pt-0.5",
                                    children: "@LinkedIn"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            type: "button",
                            className: "text-white bg-[#565759] hover:bg-[#2f2f30] focus:ring-2 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-1xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2",
                            onClick: ()=>{
                                window.open(`https://github.com/Parasgr7/`, "_blank");
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "mr-2 -ml-1 w-7 h-7 text-black fill-current",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "px-2 py-4 text-2xl text-gray-100 border-l-2 border-gray-100 font-mono"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-xl font-mono font-bold pt-0.5",
                                    children: "@Github"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "font-bold mt-3 text-lg",
                            children: "Paras Gaur "
                        }),
                        "Blockchain Developer",
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex w-full items-center p-6 space-x-2 rounded-b border-gray-200 dark:border-gray-600"
                        })
                    ]
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/ui/Footer.js




function Footer() {
    const { 0: contactDeveloper , 1: setContactDeveloper  } = (0,external_react_.useState)(false);
    const handleCloseModal = ()=>{
        setContactDeveloper(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "block py-4",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                            className: "mb-4 border-b-1 border-blueGray-200"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-wrap items-center md:justify-between justify-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full md:w-4/12 px-4"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-center text-center sm:block sm:p-0 mt-2",
                children: contactDeveloper && /*#__PURE__*/ jsx_runtime_.jsx(ModalContact, {
                    closeModal: handleCloseModal
                })
            })
        ]
    });
};


/***/ }),

/***/ 4266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ModalBorrow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_correct_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3381);
/* harmony import */ var _utils_todp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7254);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8962);
/* harmony import */ var _utils_helpfulScripts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5584);
/* harmony import */ var _BorderLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4013);
/* harmony import */ var react_promise_tracker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312);
/* harmony import */ var react_promise_tracker__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_promise_tracker__WEBPACK_IMPORTED_MODULE_6__);









function ModalBorrow({ token , closeModal , balance , onBorrow , borrowingError , borrowingResult , addBorrowedToken ,  }) {
    const { promiseInProgress  } = (0,react_promise_tracker__WEBPACK_IMPORTED_MODULE_6__.usePromiseTracker)();
    let actualAvailable = "0.00";
    let actualAvailableInDollars = "0";
    const userTotalAmountAvailableForBorrowInDollars = token.userTotalAmountAvailableForBorrowInDollars;
    const tokenEquivalent = userTotalAmountAvailableForBorrowInDollars / parseFloat(token.oneTokenToDollar);
    const tokenAvailableInContract = parseFloat(token.availableAmountInContract.amount);
    const tokenAvailableInContractInDollars = (0,_utils_helpfulScripts__WEBPACK_IMPORTED_MODULE_7__/* .convertToDollar */ .C)(token, tokenAvailableInContract);
    if (tokenAvailableInContract >= tokenEquivalent) {
        actualAvailable = tokenEquivalent;
        actualAvailableInDollars = (0,_utils_helpfulScripts__WEBPACK_IMPORTED_MODULE_7__/* .convertToDollar */ .C)(token, actualAvailable);
    } else {
        actualAvailable = tokenAvailableInContract;
        actualAvailableInDollars = tokenAvailableInContractInDollars;
    }
    const { 0: value , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: valueInDollars , 1: setValueInDollars  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("0");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_BorderLayout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "p-5",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-between items-center rounded-t",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "text-xl font-medium text-gray-900 dark:text-white",
                            children: (borrowingResult === null || borrowingResult === void 0 ? void 0 : borrowingResult.transactionHash) ? `Sucessful` : `Borrow ${token === null || token === void 0 ? void 0 : token.name}`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>{
                                setValue("");
                                setValueInDollars("0.00");
                                closeModal();
                            },
                            disabled: promiseInProgress,
                            type: "button",
                            className: `text-gray-400 bg-transparent ${promiseInProgress ? "text-gray-200" : "dark:hover:bg-gray-600 dark:hover:text-white hover:bg-gray-200 hover:text-gray-900"}  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center `,
                            "data-modal-toggle": "small-modal",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                className: "w-5 h-5",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                    clipRule: "evenodd"
                                })
                            })
                        })
                    ]
                })
            }),
            (borrowingResult === null || borrowingResult === void 0 ? void 0 : borrowingResult.transactionHash) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col justify-center items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: _assets_correct_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                        width: 60,
                        height: 60,
                        layout: "fixed",
                        className: "card-img-top",
                        alt: "coinimage"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "font-bold mt-4",
                        children: "All Done!"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "You borrowed ",
                            value,
                            " ",
                            token === null || token === void 0 ? void 0 : token.name
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>{
                            window.open(`https://goerli.etherscan.io/tx/${borrowingResult.transactionHash}`, "_blank");
                        },
                        className: "text-sm justify-center pr-3 mt-3 text-blue-500 ",
                        children: "view tx details on etherscan"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex w-full items-center p-6 space-x-2 rounded-b border-gray-200 dark:border-gray-600",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>{
                                setValue("");
                                setValueInDollars("0.00");
                                closeModal();
                            },
                            "data-modal-toggle": "small-modal",
                            type: "button",
                            className: "text-white w-full bg-gray-800 hover:bg-gray-900 hover:text-white rounded-md p-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-center ",
                                children: "Ok, Close."
                            })
                        })
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    " ",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "p-6 pt-1 space-y-1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-base leading-relaxed text-gray-500 dark:text-gray-400",
                                children: "Amount"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col items-center border rounded-md p-2 border-gray-300",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full flex items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                onChange: async (event)=>{
                                                    const { value  } = event.target;
                                                    if (isNaN(value)) {
                                                        return;
                                                    }
                                                    if (Number(value) >= Number(actualAvailable)) {
                                                        setValue(actualAvailable);
                                                        setValueInDollars(actualAvailableInDollars);
                                                        return;
                                                    }
                                                    let usableValue = "0.00";
                                                    if (value) {
                                                        usableValue = parseFloat(value) * (token === null || token === void 0 ? void 0 : token.oneTokenToDollar);
                                                    }
                                                    setValueInDollars(usableValue);
                                                    setValue(value);
                                                },
                                                value: value,
                                                type: "text",
                                                name: "text",
                                                id: "text",
                                                placeholder: "0.00",
                                                className: "w-80 block pl-2 p-1 font-medium sm:text-lg focus:outline-none rounded-md"
                                            }),
                                            token && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                src: token.image,
                                                width: 30,
                                                height: 30,
                                                layout: "fixed",
                                                className: "ml-2 card-img-top",
                                                alt: "coinimage"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "font-medium text-sm ml-2",
                                                children: token === null || token === void 0 ? void 0 : token.name
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full justify-between flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "pl-2 pt-0 mt-0 font-medium text-sm text-gray-400",
                                                children: [
                                                    "$",
                                                    (0,_utils_todp__WEBPACK_IMPORTED_MODULE_8__/* .todp */ .j)(valueInDollars, 4)
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "font-medium text-sm text-gray-600",
                                                        children: [
                                                            "Balance: ",
                                                            (0,_utils_todp__WEBPACK_IMPORTED_MODULE_8__/* .todp */ .j)(actualAvailable, 3)
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        onClick: ()=>{
                                                            setValue(Number(actualAvailable));
                                                            setValueInDollars((0,_utils_todp__WEBPACK_IMPORTED_MODULE_8__/* .todp */ .j)(actualAvailableInDollars, 3));
                                                        },
                                                        className: "font-medium ml-2 text-gray-6 00 text-sm",
                                                        children: "MAX"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "p-6 pt-1 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-base leading-relaxed text-gray-500 dark:text-gray-400",
                                children: "Borrow Interest Rate"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-col w-4/12 items-center bg-gray-100 border rounded-md p-1 border-gray-300",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "text-black self-start text-sm sm:text-base",
                                    children: [
                                        "Stable: ",
                                        Number(token === null || token === void 0 ? void 0 : token.borrowAPYRate).toFixed(2),
                                        "%"
                                    ]
                                })
                            }),
                            borrowingError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-red-600 text-sm mt-5 bg-red-200 border overflow-auto scrollbar-hide rounded-md p-2 border-red-200 font-medium",
                                children: borrowingError.message
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex w-full items-center p-6 space-x-2 rounded-b border-gray-200 dark:border-gray-600",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            // disabled={!!!value}
                            onClick: ()=>onBorrow(token, value),
                            "data-modal-toggle": "small-modal",
                            type: "button",
                            className: `${promiseInProgress ? "bg-gray-500 cursor-wait" : "bg-gray-800 hover:bg-gray-900 "}text-white w-full hover:text-white rounded-md p-2`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-center ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_Spinner__WEBPACK_IMPORTED_MODULE_4__/* .LoadingSpinerComponent */ .O, {
                                    buttonText: `Borrow ${token === null || token === void 0 ? void 0 : token.name}`,
                                    loadingMessage: `Borrowing ${token.name}`
                                })
                            })
                        })
                    }),
                    " "
                ]
            })
        ]
    });
};


/***/ }),

/***/ 7177:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ModalSupply)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_correct_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3381);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_providers_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(554);
/* harmony import */ var react_promise_tracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(312);
/* harmony import */ var react_promise_tracker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_promise_tracker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8962);
/* harmony import */ var _BorderLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4013);
/* harmony import */ var _utils_helpfulScripts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5584);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_providers_web3__WEBPACK_IMPORTED_MODULE_4__]);
_components_providers_web3__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function ModalSupply({ token , closeModal , onSupply , addATK , supplyError , supplyResult ,  }) {
    const { promiseInProgress  } = (0,react_promise_tracker__WEBPACK_IMPORTED_MODULE_5__.usePromiseTracker)();
    const { 0: value , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: valueInDollars , 1: setValueInDollars  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("0.00");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_BorderLayout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "p-5",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-between items-center rounded-t",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "text-xl font-medium text-gray-900 dark:text-white",
                            children: (supplyResult === null || supplyResult === void 0 ? void 0 : supplyResult.transactionHash) ? `Sucessfull` : `Supply ${token === null || token === void 0 ? void 0 : token.name}`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            placeholder: "0.00",
                            onClick: ()=>{
                                setValue("");
                                setValueInDollars("0.00");
                                closeModal();
                            },
                            disabled: promiseInProgress,
                            type: "button",
                            className: `text-gray-400 bg-transparent ${promiseInProgress ? "text-gray-200" : "dark:hover:bg-gray-600 dark:hover:text-white hover:bg-gray-200 hover:text-gray-900"}  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center `,
                            "data-modal-toggle": "small-modal",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                className: "w-5 h-5",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                    clipRule: "evenodd"
                                })
                            })
                        })
                    ]
                })
            }),
            (supplyResult === null || supplyResult === void 0 ? void 0 : supplyResult.transactionHash) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full max-w-md pt-1 space-y-3",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col justify-center items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: _assets_correct_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                            width: 60,
                            height: 60,
                            layout: "fixed",
                            className: "card-img-top",
                            alt: "coinimage"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "font-bold mt-4",
                            children: "All Done!"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "You Supplied ",
                                value,
                                " ",
                                token === null || token === void 0 ? void 0 : token.name
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>{
                                window.open(`https://goerli.etherscan.io/tx/${supplyResult.transactionHash}`, "_blank");
                            },
                            className: "text-sm justify-center pr-3 mt-3 text-blue-500 ",
                            children: "view tx details on etherscan"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex w-full items-center p-6 space-x-2 rounded-b border-gray-200 dark:border-gray-600",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>{
                                    setValue("");
                                    setValueInDollars("0.00");
                                    closeModal();
                                },
                                "data-modal-toggle": "small-modal",
                                type: "button",
                                className: "text-white w-full bg-gray-800 hover:bg-gray-900 hover:text-white rounded-md p-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex justify-center ",
                                    children: "Ok, Close."
                                })
                            })
                        })
                    ]
                })
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "p-6 w-full pt-1 space-y-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-base leading-relaxed text-gray-500 dark:text-gray-400",
                        children: "Amount"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col items-center border rounded-md p-2 border-gray-300",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full flex items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        onChange: async (event)=>{
                                            const { value  } = event.target;
                                            if (isNaN(value)) {
                                                return;
                                            }
                                            if (Number(value) >= Number(token === null || token === void 0 ? void 0 : token.walletBalance.amount)) {
                                                setValue(token === null || token === void 0 ? void 0 : token.walletBalance.amount);
                                                setValueInDollars(token === null || token === void 0 ? void 0 : token.walletBalance.inDollars);
                                                return;
                                            }
                                            let usableValue = "0.00";
                                            if (value) {
                                                usableValue = parseFloat(value) * (token === null || token === void 0 ? void 0 : token.oneTokenToDollar);
                                            }
                                            setValueInDollars(usableValue);
                                            setValue(value);
                                        },
                                        value: value,
                                        type: "text",
                                        name: "text",
                                        id: "text",
                                        placeholder: "0.00",
                                        className: "w-80 block pl-2 p-1 font-medium sm:text-lg focus:outline-none rounded-md"
                                    }),
                                    token && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        src: token.image,
                                        width: 30,
                                        height: 30,
                                        layout: "fixed",
                                        className: "ml-2 card-img-top",
                                        alt: "coinimage"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "font-medium text-sm ml-2",
                                        children: token === null || token === void 0 ? void 0 : token.name
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full justify-between flex items-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "pl-2 pt-0 mt-0 font-medium text-sm text-gray-400",
                                        children: [
                                            "$",
                                            (0,_utils_helpfulScripts__WEBPACK_IMPORTED_MODULE_8__/* .todp */ .j)(valueInDollars, 3)
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "font-medium text-sm text-gray-600",
                                                children: [
                                                    "Balance: ",
                                                    Number(token === null || token === void 0 ? void 0 : token.walletBalance.amount).toFixed(3)
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>{
                                                    setValue(Number(token === null || token === void 0 ? void 0 : token.walletBalance.amount));
                                                    setValueInDollars(Number(token === null || token === void 0 ? void 0 : token.walletBalance.inDollars).toFixed(2));
                                                },
                                                className: "font-medium ml-2 text-gray-6 00 text-sm",
                                                children: "MAX"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    supplyError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-red-600 text-sm mt-5 bg-red-200 border overflow-auto scrollbar-hide rounded-md p-2 border-red-200 font-medium",
                        children: supplyError.message
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex w-full items-center p-6 px-0 space-x-2 rounded-b border-gray-200 dark:border-gray-600",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            disabled: !!!value,
                            onClick: ()=>onSupply(token, value),
                            "data-modal-toggle": "small-modal",
                            type: "button",
                            className: `${promiseInProgress ? "bg-gray-500 cursor-wait" : "bg-gray-800 hover:bg-gray-900 "}text-white w-full hover:text-white rounded-md p-2`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-center ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_Spinner__WEBPACK_IMPORTED_MODULE_6__/* .LoadingSpinerComponent */ .O, {
                                    buttonText: `Supply ${token === null || token === void 0 ? void 0 : token.name}`,
                                    loadingMessage: `Supplying ${token === null || token === void 0 ? void 0 : token.name}`
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Navbar({ accountAddress  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
            className: "md:flex-row md:flex-nowrap md:justify-start flex items-center px-4 py-2 border bg-blue-500 border-gray-500",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-between",
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "text-white text-sm hidden lg:inline-block font-semibold",
                                    href: "#pablo",
                                    onClick: (e)=>e.preventDefault(),
                                    children: "Dashboard"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "px-4 py-1 text-white border bg-blue-800 border-blue-400 rounded-md",
                            children: [
                                accountAddress.slice(0, 7),
                                "...",
                                accountAddress.slice(accountAddress.length - 10)
                            ]
                        })
                    ]
                })
            })
        })
    });
};


/***/ }),

/***/ 8962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ LoadingSpinerComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_promise_tracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(312);
/* harmony import */ var react_promise_tracker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_promise_tracker__WEBPACK_IMPORTED_MODULE_2__);



const LoadingSpinerComponent = ({ buttonText , loadingMessage  })=>{
    const { promiseInProgress  } = (0,react_promise_tracker__WEBPACK_IMPORTED_MODULE_2__.usePromiseTracker)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "",
        children: promiseInProgress === true ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "loader"
                }),
                loadingMessage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "ml-2 text-white font-medium",
                    children: loadingMessage
                })
            ]
        }) : buttonText
    });
};


/***/ }),

/***/ 5584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ convertToDollar),
/* harmony export */   "j": () => (/* binding */ todp)
/* harmony export */ });
const todp = (amount, dp)=>{
    return Number(amount).toFixed(dp);
};
const convertToDollar = (token, value)=>{
    return parseFloat(value) * token.oneTokenToDollar;
};


/***/ }),

/***/ 7254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ todp)
/* harmony export */ });
const todp = (amount, dp)=>{
    return Number(amount).toFixed(dp);
};


/***/ }),

/***/ 1909:
/***/ ((module) => {

module.exports = JSON.parse('{"QW":{"5":{"events":{"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925":{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef":{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"}},"links":{},"address":"0xC5bd310c375fFCCf01d08869b3208C54c94B67f9","transactionHash":"0x2d2a16bef900b7aeefee9f4f41e353eeda92c4d2c7c296b26fc5da00e3d1fd7b"},"42":{"events":{"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925":{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef":{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"}},"links":{},"address":"0x804a55c485e9Ecc95464C460F4870481b0b01A66","transactionHash":"0x7c5a567bad715739cedbb8bf0ec08b59fef863d03f911ee7dfa858e830951c4f"},"5777":{"events":{"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925":{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef":{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"}},"links":{},"address":"0x9165d89342b3159BeAD3aC4cEbab74b17646b8aD","transactionHash":"0xa67b30132bc620958ef61dee3103276ee728527d35f78f300601026d4b2f5169"},"11155111":{"events":{"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925":{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef":{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"}},"links":{},"address":"0xc18ABdb1DE2d453F90f92295351B30c1D900dbbc","transactionHash":"0xb4e24ede6220bb544a06a320a2138e183f4357ea17e8d7d553cd3f6e2f36579f"}}}');

/***/ })

};
;