declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare module '*.jpg' {
    const src: string;
    export default src;
}

declare module '*.jpeg' {
    const src: string;
    export default src;
}

declare module '*.png' {
    const src: string;
    export default src;
}
declare module '*.webp' {
    const src: string;
    export default src;
}

declare module '*.woff' {
    const content: string;
    export default content;
}
declare module '*.woff2' {
    const content: string;
    export default content;
}
declare module '*.eot' {
    const content: string;
    export default content;
}
declare module '*.ttf' {
    const content: string;
    export default content;
}