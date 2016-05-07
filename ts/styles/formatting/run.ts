import {XmlComponent, Attributes} from "../../docx/xml-components";

export class Bold extends XmlComponent {
    
    constructor() {
        super("w:b");
        this.root.push(new Attributes({
            val: true
        }));
    }
}

export class Italics extends XmlComponent {

    constructor() {
        super("w:i");
        this.root.push(new Attributes({
            val: true
        }));
    }
}

// needs work. add more types of underline
export class Underline extends XmlComponent {

    constructor() {
        super("w:u");
        this.root.push(new Attributes({
            val: true
        }));
    }
}

export class Caps extends XmlComponent {

    constructor() {
        super("w:caps");
        this.root.push(new Attributes({
            val: true
        }));
    }
}

export class Color extends XmlComponent {

    constructor(color: string) {
        super("w:color");
        this.root.push(new Attributes({
            val: color
        }));
    }
}

export class DoubleStrike extends XmlComponent {

    constructor() {
        super("w:dstrike");
        this.root.push(new Attributes({
            val: true
        }));
    }
}

export class Emboss extends XmlComponent {

    constructor() {
        super("w:emboss");
        this.root.push(new Attributes({
            val: true
        }));
    }
}

export class Imprint extends XmlComponent {

    constructor() {
        super("w:imprint");
        this.root.push(new Attributes({
            val: true
        }));
    }
}

export class Shadow extends XmlComponent {

    constructor() {
        super("w:shadow");
        this.root.push(new Attributes({
            val: true
        }));
    }
}

export class SmallCaps extends XmlComponent {

    constructor() {
        super("w:smallCaps");
        this.root.push(new Attributes({
            val: true
        }));
    }
}

export class Strike extends XmlComponent {

    constructor() {
        super("w:strike");
        this.root.push(new Attributes({
            val: true
        }));
    }
}

export class Size extends XmlComponent {

    constructor(size: number) {
        super("w:sz");
        this.root.push(new Attributes({
            val: size
        }));
    }
}

// needs work
export class VerticalAlign extends XmlComponent {

    constructor() {
        super("w:vertAlign");
        this.root.push(new Attributes({
            val: "superscript"
        }));
    }
}