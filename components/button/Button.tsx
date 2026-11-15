"use client";

import Link from "next/link"

import type { ButtonHTMLAttributes, MouseEvent } from "react";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  
};

// export function Button({
//   children,
//   className,
//   onClick,
//   onShareError,
//   shareData,
//   variant = "primary",
//   ...props
// }: ButtonProps) {
//   async function handleClick(event: MouseEvent<HTMLButtonElement>) {
//     onClick?.(event);

//     if (event.defaultPrevented || !shareData) return;

//     const data = {
//       ...shareData,
//       url: shareData.url ?? window.location.href,
//     };

//     try {
//       if (typeof navigator.share === "function") {
//         await navigator.share(data);
//       } else {
//         const shareText = [data.title, data.text, data.url]
//           .filter(Boolean)
//           .join("\n");
//         await navigator.clipboard.writeText(shareText);
//       }
//     } catch (error) {
//       if (error instanceof DOMException && error.name === "AbortError") return;
//       onShareError?.(error);
//     }
//   }

//   return (
//     <button
//       {...props}
//       className={`${styles.button} ${styles[variant]} ${className ?? ""}`.trim()}
//       onClick={handleClick}
//     >
//       {children}
//     </button>
//   );
// }

export function Button({href, children}: {href: string, children: React.ReactNode}) {
    
    if(href){
        return(
            <Link href={href}>
                {children}
            </Link>
        )

    }
    
    return(
        <button type="button">
            
        </button>
    )
}