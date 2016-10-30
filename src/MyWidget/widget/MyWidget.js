define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",
    "dijit/_TemplatedMixin",
    "mxui/dom",
    "dojo/dom",
    "dojo/dom-prop",
    "dojo/dom-geometry",
    "dojo/dom-class",
    "dojo/dom-style",
    "dojo/dom-construct",
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/text",
    "dojo/html",
    "dojo/_base/event",

    //my dependencies
    "MyWidget/widget/lib/react",
    "MyWidget/widget/lib/react-dom",
    "dojo/text!MyWidget/widget/dist/src/MyWidget/all.js",

    "dojo/text!MyWidget/widget/template/MyWidget.html"
], function (declare, _WidgetBase, _TemplatedMixin, dom, dojoDom, dojoProp, dojoGeometry, dojoClass, dojoStyle, dojoConstruct, dojoArray, dojoLang, dojoText, dojoHtml, dojoEvent, React, ReactDOM, TestString,  widgetTemplate) {
    "use strict";

    return declare("MyWidget.widget.MyWidget", [ _WidgetBase, _TemplatedMixin ], {

        templateString: widgetTemplate,


        widgetBase: null,

        // Internal variables.
        _handles: null,
        _contextObj: null,

        constructor: function () {
            this._handles = [];
        },

        postCreate: function () {
          // console.log(React)

            // require(["MyWidget/widget/lib/react","MyWidget/widget/dist/src/MyWidget/all"])
            console.log()
            eval(TestString)
            ReactDOM.render(
              React.createElement(Test, null),
              document.querySelector('[data-dojo-attach-point="widgetBase"]')
            )
            logger.debug(this.id + ".postCreate");

        },

        update: function (obj, callback) {
            logger.debug(this.id + ".update");

            this._contextObj = obj;
            this._updateRendering(callback);
        },

        resize: function (box) {
          logger.debug(this.id + ".resize");
        },

        uninitialize: function () {
          logger.debug(this.id + ".uninitialize");
        },

        _updateRendering: function (callback) {
            logger.debug(this.id + "._updateRendering");

            // if (this._contextObj !== null) {
            //     dojoStyle.set(this.domNode, "display", "block");
            // } else {
            //     dojoStyle.set(this.domNode, "display", "none");
            // }

            mendix.lang.nullExec(callback);
        }
    });
});

require(["MyWidget/widget/MyWidget"]);
