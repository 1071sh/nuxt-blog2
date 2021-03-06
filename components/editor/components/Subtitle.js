import { Node } from "tiptap";

export default class Subtitle extends Node {
    get name() {
        return "subtitle";
    }

    get schema() {
        return {
            content: "inline*",
            parseDOM: [
                {
                    tag: "h2",
                },
            ],
            toDOM: () => ["h2", { class: "subtitle" }, 0],
        };
    }
}
