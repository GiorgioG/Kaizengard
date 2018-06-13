import * as React from "react";
require('./code_card.scss');
import 'codemirror/lib/codemirror.css';
import 'code-mirror-themes/themes/fade-to-grey.css';
import 'code-mirror-themes/themes/black-pearl.css';
import {UnControlled as CodeMirror} from 'react-codemirror2'
require('codemirror/mode/clike/clike');
require('codemirror/mode/javascript/javascript');
export const CodeCardComponent = () => {
    return (
        <div className="col code-card-container">
            <div className="title-wrapper"><a className="title">This is my title</a></div>
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
                        theme: 'black-pearl',scrollbarStyle:null, readOnly:true,
                    }}
                    onChange={(editor, data, value) => {
                    }}
                    editorDidMount={editor => {
                        editor.setSize(350,275);
                    }}
                />
            </div>
        </div>
    );
};