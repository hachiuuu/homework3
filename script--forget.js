"use strict";
(self.webpackChunkmcdonaldsapps = self.webpackChunkmcdonaldsapps || []).push([[364], {
    8093: (e,a,n)=>{
        n.d(a, {
            Q: ()=>r
        });
        var o = n(512)
            , s = n(1688)
            , t = n(5893);
        function r(e) {
            const {className: a="", id: n, children: r} = e;
            return (0,
                t.jsxs)("h1", {
                className: (0,
                    o.W)("HeadingMcdonalds-root", a),
                children: [(0,
                    t.jsx)(s.$, {
                    id: n
                }), r]
            })
        }
    }
    ,
    1681: (e,a,n)=>{
        n.r(a),
            n.d(a, {
                default: ()=>f
            });
        var o = n(7294)
            , s = n(7536)
            , t = n(1493)
            , r = n(7345)
            , l = n(6335)
            , c = n(6666)
            , i = n(1688)
            , d = n(4333)
            , u = n(4763)
            , m = n(8093)
            , p = n(5893);
        const h = {
            required: !0,
            minLength: 5,
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: ""
            }
        };
        function f() {
            const [e,a] = (0,
                    o.useState)(!1)
                , {control: n, watch: f, handleSubmit: g} = (0,
                    s.cI)({
                    mode: "onBlur",
                    defaultValues: {
                        email: ""
                    }
                })
                , x = f("email", "")
                , j = async({email: e})=>{
                    (0,
                        t.e)(!0),
                        (await (0,
                            l.jh)({
                            emailAddress: e
                        })).ok ? a(!0) : (0,
                            r.u)("NOT_FOUND"),
                        (0,
                            t.e)(!1)
                }
            ;
            return (0,
                p.jsxs)("div", {
                className: "Forgot-wrapper",
                children: [(0,
                    p.jsx)(m.Q, {
                    id: "gmal_account_forgot_password_title"
                }), (0,
                    p.jsx)("p", {
                    className: "Forgot-description",
                    children: (0,
                        p.jsx)(i.$, {
                        id: "gmal_account_forgot_password_info"
                    })
                }), (0,
                    p.jsxs)("form", {
                    className: "LogIn-form",
                    onSubmit: e=>{
                        g(j)(e)
                    }
                    ,
                    children: [(0,
                        p.jsx)(s.Qr, {
                        control: n,
                        rules: h,
                        name: "email",
                        render: ({fieldState: {error: e}, field: {onChange: a, onBlur: n, value: o}})=>(0,
                            p.jsx)(d.I, {
                            type: "email",
                            value: o,
                            autoComplete: "new-password",
                            label: (0,
                                p.jsx)(i.$, {
                                id: "gmal_account_login_hint_email"
                            }),
                            error: e && (0,
                                p.jsx)(i.$, {
                                id: "gmal_account_forgot_incorrect_email"
                            }),
                            onChange: a,
                            onBlur: n,
                            onClear: ()=>a("")
                        })
                    }), (0,
                        p.jsx)(u.z, {
                        className: "Forgot-item",
                        variant: "primary",
                        type: "submit",
                        children: (0,
                            p.jsx)(i.$, {
                            id: "gmal_account_forgot_button_reset_password_title"
                        })
                    })]
                }), (0,
                    p.jsx)(c.F, {
                    shown: e,
                    onHide: (0,
                        o.useCallback)((()=>a(!1)), []),
                    children: (0,
                        p.jsx)(i.$, {
                        id: "gmal_android_account_forgot_info_text_email_sent",
                        children: e=>(0,
                            p.jsx)(p.Fragment, {
                            children: e.map((e=>"string" == typeof e ? e.replace("%s", x) : null))
                        })
                    })
                })]
            })
        }
    }
    ,
    4763: (e,a,n)=>{
        n.d(a, {
            z: ()=>r
        });
        var o = n(7294)
            , s = n(512)
            , t = n(5893);
        const r = (0,
            o.forwardRef)(((e,a)=>{
                const {className: n="", type: o="button", variant: r, children: l, ...c} = e;
                return (0,
                    t.jsx)("div", {
                    className: (0,
                        s.W)(n),
                    children: (0,
                        t.jsx)("button", {
                        ...c,
                        className: (0,
                            s.W)("action btn", "primary" === r && "btn-primary", "secondary" === r && "btn-secondary", "danger" === r && "btn-danger"),
                        ref: a,
                        type: o,
                        children: l
                    })
                })
            }
        ))
    }
    ,
    4333: (e,a,n)=>{
        n.d(a, {
            I: ()=>l
        });
        var o = n(7294)
            , s = n(512)
            , t = n(390);
        var r = n(5893);
        const l = (0,
            o.forwardRef)(((e,a)=>{
                const {className: n, disabled: l, required: c, type: i, name: d, label: u, placeholder: m, error: p, value: h, onClear: f, onBlur: g, onChange: x, ...j} = e
                    , _ = (0,
                    o.useId)()
                    , [b,N] = (0,
                    o.useState)(i)
                    , w = "password" === b;
                return (0,
                    r.jsxs)(r.Fragment, {
                    children: [(0,
                        r.jsxs)("div", {
                        className: "container--qeFM_Y5N",
                        children: [(0,
                            r.jsx)("input", {
                            ...j,
                            className: (0,
                                s.W)("input field", p && "field-error", "field--gDfA_6lD", "date" === i && "fieldDate--EE4SQ_R8", "date" === i && Boolean(h) && "fieldDateValue--GXH1GVJN", n),
                            ref: a,
                            type: b,
                            name: d,
                            required: c,
                            id: _,
                            value: h,
                            onChange: x,
                            onBlur: g,
                            disabled: l,
                            placeholder: m
                        }), (0,
                            r.jsx)("label", {
                            className: (0,
                                s.W)("label--MVLuKh4B", Boolean(h) && "labelActive--ezPYucyW"),
                            htmlFor: _,
                            children: u
                        }), "function" == typeof f && h && !l && "password" !== i && (0,
                            r.jsx)("button", {
                            className: (0,
                                s.W)("action", "clear--bbamCBx_"),
                            type: "button",
                            onClick: e=>{
                                e.preventDefault(),
                                    e.stopPropagation(),
                                    f()
                            }
                            ,
                            children: (0,
                                r.jsx)(t.J, {
                                className: "clearIcon--LHYcHxY8",
                                name: "close"
                            })
                        }), "password" === i && h && (0,
                            r.jsx)("button", {
                            className: (0,
                                s.W)("action", "toggle--_X4uWkkL"),
                            type: "button",
                            onClick: e=>{
                                e.preventDefault(),
                                    e.stopPropagation(),
                                    N(w ? "text" : "password")
                            }
                            ,
                            children: (0,
                                r.jsx)(t.J, {
                                className: "toggleIcon--glAyMFDw",
                                name: w ? "eye" : "eyeHide"
                            })
                        })]
                    }), p && (0,
                        r.jsxs)("div", {
                        className: "error--j34hOzfU",
                        children: [(0,
                            r.jsx)(t.J, {
                            className: "errorIcon--JNVNHIuc",
                            mask: !1,
                            name: "error"
                        }), p]
                    })]
                })
            }
        ))
    }
    ,
    6666: (e,a,n)=>{
        n.d(a, {
            F: ()=>u
        });
        var o = n(7294)
            , s = n(3935)
            , t = n(512)
            , r = n(390);
        const l = {
            root: "root--MZYESnO5",
            rootDisabled: "rootDisabled--ffckjf4g",
            content: "content--UokRcJvw",
            contentHidden: "contentHidden--ne5OEpIS",
            contentShown: "contentShown--vg7ejfVl",
            message: "message--H9EKXYVE",
            close: "close--KGtNaXn3",
            closeIcon: "closeIcon--GoOoRNaJ"
        };
        var c = n(5893);
        const i = 6e3
            , d = window.document.getElementById("toasts");
        function u(e) {
            const {shown: a, onHide: n, children: u} = e
                , m = (0,
                o.useId)()
                , p = (0,
                o.useRef)(-1);
            return (0,
                o.useEffect)((()=>(a && (p.current = window.setTimeout((()=>{
                        n()
                    }
                ), i)),
                    ()=>{
                        window.clearTimeout(p.current)
                    }
            )), [a, n]),
                d ? (0,
                    s.createPortal)((0,
                    c.jsx)("div", {
                    className: (0,
                        t.W)(l.root, !a && l.rootDisabled),
                    children: (0,
                        c.jsxs)("div", {
                        className: (0,
                            t.W)(l.content, a ? l.contentShown : l.contentHidden),
                        "aria-describedby": m,
                        "aria-hidden": !a,
                        children: [(0,
                            c.jsx)("span", {
                            className: l.message,
                            id: m,
                            children: u
                        }), (0,
                            c.jsx)("button", {
                            className: l.close,
                            type: "button",
                            "aria-label": "Close",
                            tabIndex: a ? 0 : -1,
                            onClick: a ? ()=>n() : void 0,
                            children: (0,
                                c.jsx)(r.J, {
                                className: l.closeIcon,
                                name: "cross"
                            })
                        })]
                    })
                }), d) : null
        }
    }
    ,
    7345: (e,a,n)=>{
        n.d(a, {
            _: ()=>s,
            u: ()=>t
        });
        var o = n(634);
        function s() {
            (0,
                o.iJ)((e=>({
                ...e,
                error: null
            })))
        }
        function t(e) {
            (0,
                o.iJ)((a=>({
                ...a,
                error: e
            })))
        }
    }
}]);
