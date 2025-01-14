/// <reference types="vite/client" />

declare namespace JSX {
    
    interface IntrinsicElements {
      'button': React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { popoverTarget?: string };
      'ul': React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> & { popover?: string };
    }
}