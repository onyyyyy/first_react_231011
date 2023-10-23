const sites = [
    {
        id: 0,
        siteName: "네이버",
        url: "https://www.naver.com/"
    },
    {
        id: 1,
        siteName: "다음",
        url: "https://www.daum.net/"
    },
    {
        id: 2,
        siteName: "구글",
        url: "https://www.google.com/"
    },
];

export const SiteEx = () => {
    return (
        <div>
            <h2>즐겨찾기</h2>
            {sites.map((page) => (
                <h3 key={page.id}>
                    <a href={page.url} target="_blank">
                        {page.siteName}
                    </a>
                </h3>
            
            ))}

        </div>
    );
};

// const site = [
//     {
//         id: 0,
//         name: "네이버",
//         url: "https://www.naver.com/"
//     },
//     {
//         id: 1,
//         name: "다음",
//         url: "https://www.daum.net/"
//     },
//     {
//         id: 2,
//         name: "구글",
//         url: "https://www.google.com/"
//     },
// ]

// export const SiteEx = () => {
//     return <div>
//         {site.map((page) => (
//             <div key = {page.id}>
//                 <h2>즐겨찾기</h2>
//                 <h3>사이트 이름 : {page.name}</h3>
//                 <h3><a>사이트 이동 : {page.url}</a></h3>
//             </div>
//         ))}
        
//     </div>
// }