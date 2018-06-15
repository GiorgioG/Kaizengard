import * as React from "react";
require('./code_card.scss');
import 'codemirror/lib/codemirror.css';
import 'code-mirror-themes/themes/fade-to-grey.css';
import 'code-mirror-themes/themes/black-pearl.css';
import {UnControlled as CodeMirror} from 'react-codemirror2'
require('codemirror/mode/clike/clike');
require('codemirror/mode/javascript/javascript');
export const CodeCardComponent = () => {
    function setEditorSize(editor) {
        let wrapperEl = editor.getWrapperElement().parentElement.parentElement;
        let cs = window.getComputedStyle(wrapperEl);
        let horizontalPadding = (parseInt(cs.paddingLeft) || 0) + (parseInt(cs.paddingRight) || 0);
        let verticalPadding = (parseInt(cs.paddingTop) || 0) + (parseInt(cs.paddingBottom) || 0);
        let width = wrapperEl.offsetWidth - horizontalPadding;
        let height = wrapperEl.offsetHeight - verticalPadding;
        editor.setSize(width, height);
    }

    return (
        <div className="col code-card-container">
            <div className="title-wrapper"><a className="title">Why is this so slow?</a></div>
            <div className="wrapper">

                <CodeMirror className="Bob"
                    value='static void Main(string[] args)
{
 // well shit
    int i, count, f1 = 0, f2 = 1, f3 = 0;
    Console.Write("Enter the Limit : ");
    count = int.Parse(Console.ReadLine());
    Console.WriteLine(f1);
    Console.WriteLine(f2);
    for (i = 0; i <= count; i++)
    {
        f3 = f1 + f2;
        Console.WriteLine(f3);
        f1 = f2;
        f2 = f3;
    }
    Console.ReadLine();

}'
                    options={{
                        mode: 'clike',
                        theme: 'black-pearl',scrollbarStyle:null, readOnly:'nocursor',
                    }}
                   onSelection={(editor, data) => {
                           debugger;

                           console.log('here')
                   }}
                    editorDidMount={editor => {
                        setEditorSize(editor);
                    }}
                />
            </div>
            <div className="code-card-footer">
                <img src="https://en.gravatar.com/userimage/10872392/ce64998eb216e14b84214f97887fbc81.png" className="code-card-avatar"/> <span className="username">GiorgioG</span>
            </div>
        </div>
    );
};