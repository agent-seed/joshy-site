"use client";
import Script from "next/script";
export const Analytics = () => {
	return (
        <div>
		    <Script src="https://www.googletagmanager.com/gtag/js?id=G-47B9VV80MF" />
			<Script id="google-analytics">
				{`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
		
				gtag('config', 'G-47B9VV80MF);
				`}
			</Script>
        </div>    
	);
};
