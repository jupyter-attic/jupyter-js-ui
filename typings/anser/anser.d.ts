// Type definitions for anser v.1.0.2
// Project: https://github.com/IonicaBizau/anser
// Definitions by: Steven Silvester <https://github.com/blink1073>


declare module "anser/lib" {
    export
    function escapeForHtml(txt: string): string;

    export
    function linkify(txt: string): string;

    export
    function ansiToHtml(txt: string, options?: any): string;

    export
    function ansiToText(txt: string): string;
}

