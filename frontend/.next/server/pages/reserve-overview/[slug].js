"use strict";
(() => {
var exports = {};
exports.id = 614;
exports.ids = [614];
exports.modules = {

/***/ 9066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ReserveStatus)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_todp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7254);


function ReserveStatus({ token  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative flex flex-col min-w-0 break-words px-4 bg-white w-full mb-6 shadow-lg rounded",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "rounded-t mb-0 py-3 border-0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-wrap",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative w-full max-w-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "font-bold text-lg",
                                children: "Reserve status and Configuration"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative w-full px-4 max-w-full flex-grow flex-1 text-right"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "block w-full overflow-x-auto ",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex sm:flex-row flex-col border mb-8 pb-8 border-r-0 border-l-0 border-t-0 border-gray-300",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "font-medium text-lg w-6/12 mb-2",
                                children: "Supply Info"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex mt-3 sm:mt-0",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "font-medium text-gray-500 text-sm ",
                                                    children: "Total Supplied"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "font-medium text-lg",
                                                    children: [
                                                        "$",
                                                        (0,_utils_todp__WEBPACK_IMPORTED_MODULE_1__/* .todp */ .j)(token.totalSuppliedInContract.inDollars, 3)
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-gray-200 my-3 px-2 rounded-md",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-green-700 font-bold",
                                                children: "✔️ Can be collateral"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mt-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-large",
                                                        children: "MAX LTV: "
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "font-medium",
                                                        children: [
                                                            (0,_utils_todp__WEBPACK_IMPORTED_MODULE_1__/* .todp */ .j)(token.LTV, 2),
                                                            "%"
                                                        ]
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
                        className: "flex sm:flex-row flex-col my-2 pb-8 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "font-medium text-lg w-6/12",
                                children: "Borrow Info"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-col",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex mt-3 sm:mt-0",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "font-medium text-gray-500 text-sm ",
                                                    children: "Total Borrowed"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "font-medium text-lg",
                                                    children: [
                                                        "$",
                                                        (0,_utils_todp__WEBPACK_IMPORTED_MODULE_1__/* .todp */ .j)(token.totalBorrowedInContract.inDollars, 2)
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "ml-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "font-medium text-gray-500 text-sm",
                                                    children: [
                                                        "Interest Stable",
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "font-medium sm:text-lg",
                                                    children: [
                                                        (0,_utils_todp__WEBPACK_IMPORTED_MODULE_1__/* .todp */ .j)(token.borrowAPYRate, 2),
                                                        "%"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
{
/* <table className="items-center w-full bg-transparent border-collapse">
<thead>
  <tr>
    <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs  border-t-0 border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
      Assets
    </th>
    <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs  border-t-0 border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
      Available
    </th>
    <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs  border-t-0 border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
      APY, variable
    </th>
    <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs  border-t-0 border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
      APY, stable
    </th>
    <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs  border-t-0 border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"></th>
  </tr>
</thead>
<tbody>

</tbody>
</table> */ }

/***/ }),

/***/ 36:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TokenInfo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_todp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7254);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ModalBorrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4266);
/* harmony import */ var _ModalSupply__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7177);
/* harmony import */ var _abis_ADE_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7026);
/* harmony import */ var _abis_LARToken_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1909);
/* harmony import */ var react_promise_tracker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312);
/* harmony import */ var react_promise_tracker__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_promise_tracker__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ModalSupply__WEBPACK_IMPORTED_MODULE_3__]);
_ModalSupply__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function TokenInfo({ token , actualAvailable , web3 , contract , account , yourSupplies , yourBorrows ,  }) {
    var ref;
    const IMAGES = {
        USDT: "https://staging.aave.com/icons/tokens/usdt.svg",
        ETH: "https://staging.aave.com/icons/tokens/eth.svg",
        LAR: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqZs8PLHRLaGd4QfIvOYmCg30svx5dHp0y6A&usqp=CAU"
    };
    const { 0: selectedTokenToSupply , 1: setSelectedTokenToSupply  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: selectedTokenToBorrow , 1: setSelectedTokenToBorrow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: supplyError , 1: setSupplyError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: supplyResult , 1: setSupplyResult  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: borrowingError , 1: setBorrowingError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: borrowingResult , 1: setBorrowingResult  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const handleCloseModal = ()=>{
        setSupplyError(null);
        setSupplyResult(null);
        setBorrowingError(null);
        setBorrowingResult(null);
        setSelectedTokenToSupply(null);
        setSelectedTokenToBorrow(null);
    };
    const supplyToken = async (token, value)=>{
        let NETWORK_ID = await web3.eth.net.getId();
        if (token.tokenAddress == "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE") {
            try {
                const supplyResult = await (0,react_promise_tracker__WEBPACK_IMPORTED_MODULE_6__.trackPromise)(contract.methods.lend(token.tokenAddress, 0).send({
                    from: account.data,
                    value: web3.utils.toWei(value.toString())
                }));
                setSupplyResult(supplyResult);
            } catch (err) {
                setSupplyError(err);
            }
        } else {
            const tokenInst = new web3.eth.Contract(_abis_ADE_json__WEBPACK_IMPORTED_MODULE_4__/* .abi */ .Mt, token.tokenAddress);
            // const larToken = new web3.eth.Contract(
            //   ERC20.abi,
            //   LARToken.networks[NETWORK_ID].address
            // );
            const amount = value.toString() * 10 ** token.decimals;
            try {
                await (0,react_promise_tracker__WEBPACK_IMPORTED_MODULE_6__.trackPromise)(tokenInst.methods.approve(contract.options.address, amount).send({
                    from: account.data
                }));
                const supplyResult1 = await (0,react_promise_tracker__WEBPACK_IMPORTED_MODULE_6__.trackPromise)(contract.methods.lend(tokenInst.options.address, amount).send({
                    from: account.data
                }));
                // const larTokenBalance = await larToken.methods
                //   .balanceOf(account.data)
                //   .call();
                // await trackPromise(
                //   larToken.methods
                //     .approve(contract.options.address, toWei(larTokenBalance))
                //     .send({ from: account.data })
                // );
                setSupplyResult(supplyResult1);
            } catch (err1) {
                setSupplyError(err1);
            }
        }
    };
    const borrowToken = async (token, value)=>{
        setBorrowingError(null);
        setBorrowingResult(null);
        value = parseFloat(value).toFixed(12);
        const amount = value.toString() * 10 ** token.decimals;
        try {
            const borrowingResult = await (0,react_promise_tracker__WEBPACK_IMPORTED_MODULE_6__.trackPromise)(contract.methods.borrow(token.tokenAddress, amount).send({
                from: account.data
            }));
            setBorrowingResult(borrowingResult);
        } catch (err) {
            setBorrowingError(err);
        }
    };
    const addTokenToMetamask = async (token)=>{
        const tokenAddress = token.tokenAddress;
        const tokenSymbol = token.name;
        const tokenDecimals = token.decimals;
        const tokenImage = IMAGES[token.name];
        try {
            // wasAdded is a boolean. Like any RPC method, an error may be thrown.
            const wasAdded = await ethereum.request({
                method: "wallet_watchAsset",
                params: {
                    type: "ERC20",
                    options: {
                        address: tokenAddress,
                        symbol: tokenSymbol,
                        decimals: tokenDecimals,
                        image: tokenImage
                    }
                }
            });
            if (wasAdded) {
            // Added
            } else {
            // Not Added
            }
        } catch (error) {
            console.log(error);
        }
    };
    const addATK = async (token)=>{
        let NETWORK_ID = await web3.eth.net.getId();
        const larToken = new web3.eth.Contract(_abis_ADE_json__WEBPACK_IMPORTED_MODULE_4__/* .abi */ .Mt, _abis_LARToken_json__WEBPACK_IMPORTED_MODULE_5__/* .networks */ .QW[NETWORK_ID].address);
        const tokenAddress = larToken.options.address;
        const tokenSymbol = "LAR";
        const tokenDecimals = 18;
        const tokenImage = IMAGES["LAR"];
        try {
            // wasAdded is a boolean. Like any RPC method, an error may be thrown.
            const wasAdded = await ethereum.request({
                method: "wallet_watchAsset",
                params: {
                    type: "ERC20",
                    options: {
                        address: tokenAddress,
                        symbol: tokenSymbol,
                        decimals: tokenDecimals,
                        image: tokenImage
                    }
                }
            });
            if (wasAdded) {
            // Added
            } else {
            // Not Added
            }
        } catch (error) {
            console.log(error);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative flex flex-col min-w-0 break-words px-4 bg-white w-full mb-6 shadow-lg rounded",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "rounded-t mb-0 py-3 border-0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-wrap",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative w-full max-w-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "font-bold text-lg",
                                children: "Your Info"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative w-full px-4 max-w-full flex-grow flex-1 text-right"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "block w-full overflow-x-auto ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex sm:flex-row flex-col mb-8 pb-2 border-gray-300",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex w-full flex-col",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex w-full py-8 justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-gray-500 text-sm sm:text-base",
                                        children: "Wallet Balance"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "font-medium text-sm sm:text-base",
                                                children: [
                                                    (0,_utils_todp__WEBPACK_IMPORTED_MODULE_7__/* .todp */ .j)(token.walletBalance.amount, 2),
                                                    " ",
                                                    token.name
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "font-medium text-gray-500 text-sm",
                                                children: [
                                                    "$",
                                                    (0,_utils_todp__WEBPACK_IMPORTED_MODULE_7__/* .todp */ .j)(token.walletBalance.inDollars, 2),
                                                    " "
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex w-full justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-gray-500 text-sm sm:text-base",
                                        children: "Available to Supply"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "font-medium text-sm sm:text-base",
                                        children: [
                                            (0,_utils_todp__WEBPACK_IMPORTED_MODULE_7__/* .todp */ .j)(token.walletBalance.amount, 2),
                                            " ",
                                            token.name
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex w-full py-2 justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-gray-500 text-sm sm:text-base",
                                        children: "Available to Borrow"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "font-medium text-sm sm:text-base",
                                        children: [
                                            " ",
                                            (0,_utils_todp__WEBPACK_IMPORTED_MODULE_7__/* .todp */ .j)(actualAvailable, 2),
                                            " ",
                                            token.name
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex w-full pt-8",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>setSelectedTokenToSupply(token),
                                        className: "bg-gray-800 text-white p-2 rounded-md text-base",
                                        children: "Supply"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>setSelectedTokenToBorrow(token),
                                        className: "bg-gray-800 text-white ml-2 p-2 rounded-md text-base",
                                        children: "Borrow"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex justify-center text-center sm:block sm:p-0 mt-2",
                                children: [
                                    selectedTokenToSupply && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModalSupply__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        token: selectedTokenToSupply,
                                        supplyError: supplyError,
                                        supplyResult: supplyResult,
                                        addATK: addATK,
                                        closeModal: handleCloseModal,
                                        onSupply: supplyToken
                                    }),
                                    selectedTokenToBorrow && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModalBorrow__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        token: selectedTokenToBorrow,
                                        closeModal: handleCloseModal,
                                        balance: (ref = yourSupplies.data) === null || ref === void 0 ? void 0 : ref.yourBalance,
                                        onBorrow: borrowToken,
                                        borrowingError: borrowingError,
                                        borrowingResult: borrowingResult,
                                        addBorrowedToken: addTokenToMetamask
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1189:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Details),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3495);
/* harmony import */ var _components_ui_ReserveStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9066);
/* harmony import */ var _components_ui_TokenInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
/* harmony import */ var _components_ui_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4845);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_hooks_web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2445);
/* harmony import */ var _components_providers_web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(554);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_todp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7254);
/* harmony import */ var _utils_helpfulScripts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5584);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_TokenInfo__WEBPACK_IMPORTED_MODULE_3__, _components_hooks_web3__WEBPACK_IMPORTED_MODULE_6__, _components_providers_web3__WEBPACK_IMPORTED_MODULE_7__]);
([_components_ui_TokenInfo__WEBPACK_IMPORTED_MODULE_3__, _components_hooks_web3__WEBPACK_IMPORTED_MODULE_6__, _components_providers_web3__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function Details({ token  }) {
    const { web3 , contract  } = (0,_components_providers_web3__WEBPACK_IMPORTED_MODULE_7__/* .useWeb3 */ .$6)();
    const { account  } = (0,_components_hooks_web3__WEBPACK_IMPORTED_MODULE_6__/* .useAccount */ .mA)();
    const { yourSupplies  } = (0,_components_hooks_web3__WEBPACK_IMPORTED_MODULE_6__/* .useYourSupplies */ .$9)();
    const { yourBorrows  } = (0,_components_hooks_web3__WEBPACK_IMPORTED_MODULE_6__/* .useYourBorrows */ .d8)();
    let actualAvailable;
    let actualAvailableInDollars;
    let userTotalAmountAvailableForBorrowInDollars = token.userTotalAmountAvailableForBorrowInDollars;
    const tokenEquivalent = 0.999 * (userTotalAmountAvailableForBorrowInDollars / parseFloat(token.oneTokenToDollar));
    const tokenAvailableInContract = parseFloat(token.availableAmountInContract.amount);
    const tokenAvailableInContractInDollars = (0,_utils_helpfulScripts__WEBPACK_IMPORTED_MODULE_9__/* .convertToDollar */ .C)(token, tokenAvailableInContract);
    if (tokenAvailableInContract >= tokenEquivalent) {
        actualAvailable = tokenEquivalent;
        actualAvailableInDollars = (0,_utils_helpfulScripts__WEBPACK_IMPORTED_MODULE_9__/* .convertToDollar */ .C)(token, actualAvailable);
    } else {
        actualAvailable = tokenAvailableInContract;
        actualAvailableInDollars = tokenAvailableInContractInDollars;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative bg-gray-100 ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative bg-gray-700 md:pt-32 pb-32 pt-12",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "md:px-10 mx-auto w-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-wrap",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full px-2",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "relative flex sm:flex-row sm:mt-0 mt-6 flex-col xl:w-5/12 min-w-0 p-3 rounded mb-6 xl:mb-0 ",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                    token.image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        src: token.image,
                                                        width: 40,
                                                        height: 40,
                                                        layout: "fixed",
                                                        className: "card-img-top",
                                                        alt: "coinimage"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text-2xl sm:text-4xl text- ml-2 text-white font-bold",
                                                        children: token.name
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex pt-2 sm:ml-6 items-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: " h-9",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    className: "h-10 w-910",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    stroke: "white",
                                                                    strokeWidth: 1,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: " ml-2",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "text-sm text-white",
                                                                    children: [
                                                                        "Reserve Size:",
                                                                        " ",
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "font-bold text-xl",
                                                                            children: [
                                                                                "$",
                                                                                (0,_utils_todp__WEBPACK_IMPORTED_MODULE_10__/* .todp */ .j)(token.totalSuppliedInContract.inDollars, 2)
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex pt-2 ml-6 items-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: " h-9",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    className: "h-9 w-9",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    stroke: "white",
                                                                    strokeWidth: 2,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            d: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            d: "M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: " ml-2",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "text-sm text-white",
                                                                    children: [
                                                                        "Available Liquidity:",
                                                                        " ",
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "font-bold text-xl",
                                                                            children: [
                                                                                "$",
                                                                                (0,_utils_todp__WEBPACK_IMPORTED_MODULE_10__/* .todp */ .j)(token.availableAmountInContract.inDollars, 2)
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "px-2 md:px-10 mx-auto w-full -m-24",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-wrap mt-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full xl:w-8/12 mb-5 xl:mb-0 px-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_ReserveStatus__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        token: token
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full xl:w-4/12 px-2",
                                    children: web3 && contract && account && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_TokenInfo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        token: token,
                                        actualAvailable: actualAvailable,
                                        web3: web3,
                                        contract: contract,
                                        account: account,
                                        yourSupplies: yourSupplies,
                                        yourBorrows: yourBorrows
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                    ]
                })
            ]
        })
    });
};
async function getServerSideProps(context) {
    const query = context.query;
    const image = JSON.parse(query.image);
    const availableAmountInContract = JSON.parse(query.availableAmountInContract);
    const totalBorrowedInContract = JSON.parse(query.totalBorrowedInContract);
    const totalSuppliedInContract = JSON.parse(query.totalSuppliedInContract);
    const userTokenBorrowedAmount = JSON.parse(query.userTokenBorrowedAmount);
    const userTokenLentAmount = JSON.parse(query.userTokenLentAmount);
    const walletBalance = JSON.parse(query.walletBalance);
    const token = {
        ...query,
        image,
        availableAmountInContract,
        totalBorrowedInContract,
        totalSuppliedInContract,
        userTokenBorrowedAmount,
        userTokenLentAmount,
        walletBalance
    };
    return {
        props: {
            token
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3427:
/***/ ((module) => {

module.exports = require("@metamask/detect-provider");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 312:
/***/ ((module) => {

module.exports = require("react-promise-tracker");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8519:
/***/ ((module) => {

module.exports = require("web3");

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,61,413,484], () => (__webpack_exec__(1189)));
module.exports = __webpack_exports__;

})();